import Phaser from 'phaser';

const TILE = 40, MAP_W = 11, MAP_H = 20, GAME_DURATION = 120;

export class ArenaScene extends Phaser.Scene {
    constructor() { super({ key: 'ArenaScene' }); }

    create() {
        const { width: gw, height: gh } = this.cameras.main;
        
        // --- 0. STATE ---
        this.score = 0;
        this.stack = []; // Physical boxes on back
        this.moneyOnCounter = 0;
        this.timeLeft = GAME_DURATION;
        this.isGameOver = false;

        // --- 1. THE SHOP LAYOUT (9:16) ---
        this.buildShop();

        // --- 2. THE CHEF ---
        this.player = this.physics.add.sprite(gw/2, gh - 100, 'player').setScale(0.7).setCircle(24).setDrag(2500).setMaxVelocity(350).setCollideWorldBounds(true).setDepth(100);
        this.physics.add.collider(this.player, this.structures);

        // --- 3. THE CUSTOMERS ---
        this.customers = this.add.group();
        this.spawnCustomer();
        this.time.addEvent({ delay: 5000, callback: this.spawnCustomer, callbackScope: this, loop: true });

        // --- 4. HUD & CONTROLS ---
        this.createArcadeHUD();
        this.setupControls();

        // --- 5. LOGIC LOOPS ---
        this.time.addEvent({ delay: 1000, callback: this.tick, callbackScope: this, loop: true });
        this.time.addEvent({ delay: 2000, callback: this.producePizza, callbackScope: this, loop: true });

        this.cameras.main.fadeIn(500);
    }

    buildShop() {
        this.structures = this.physics.add.staticGroup();
        // Floor
        for(let x=0; x<12; x++) { for(let y=0; y<20; y++) { this.add.image(x*TILE, y*TILE, 'tile_floor').setAlpha(0.3).setDepth(0); } }

        // The Counter (Where delivery happens)
        this.counter = this.physics.add.staticImage(225, 300, 'tile_wall').setScale(4, 1).setDepth(50);
        this.add.text(225, 270, 'ORDER HERE 🛎️', { fontFamily: 'Bangers', fontSize: '16px', color: '#fff' }).setOrigin(0.5);

        // The Oven (Production)
        this.oven = this.physics.add.staticImage(380, 500, 'oven_master').setDepth(50);
        this.add.text(380, 450, 'PRODUCTION 🔥', { fontFamily: 'Bangers', fontSize: '14px', color: '#ffcc00' }).setOrigin(0.5);
        
        // Ready Pizza pile on the table
        this.pizzaStorage = this.add.group();
    }

    producePizza() {
        if (this.pizzaStorage.getLength() < 10) {
            const x = 380, y = 550 - (this.pizzaStorage.getLength() * 5);
            const p = this.add.image(x, y, 'pizza_item').setScale(0.6).setDepth(60);
            this.pizzaStorage.add(p);
        }
    }

    setupControls() {
        this.keys = this.input.keyboard.addKeys('W,A,S,D');
        this.input.on('pointerdown', (p) => { this.joyX = p.x; this.joyY = p.y; this.isTouching = true; });
        this.input.on('pointermove', (p) => { if (this.isTouching) { this.dx = p.x - this.joyX; this.dy = p.y - this.joyY; } });
        this.input.on('pointerup', () => { this.isTouching = false; this.dx = 0; this.dy = 0; });
    }

    createArcadeHUD() {
        this.scoreText = this.add.text(20, 20, '$0', { fontFamily: 'Bangers', fontSize: '48px', color: '#2ecc71', stroke:'#fff', strokeThickness:6 }).setScrollFactor(0).setDepth(1000);
        this.timerText = this.add.text(430, 20, '120', { fontFamily: 'Bangers', fontSize: '32px', color: '#333' }).setOrigin(1, 0).setScrollFactor(0).setDepth(1000);
    }

    spawnCustomer() {
        const c = this.add.container(225, -50);
        const body = this.add.sprite(0, 0, 'opponent').setScale(0.6);
        const bubble = this.add.text(0, -40, '🍕?', { fontFamily: 'Bangers', fontSize: '20px', backgroundColor: '#fff', color: '#000', padding: 5 }).setOrigin(0.5);
        c.add([body, bubble]);
        c.setData('hasOrder', true);
        
        this.tweens.add({
            targets: c,
            y: 240, // Distance to counter
            duration: 2000,
            ease: 'Power2'
        });
        this.customers.add(c);
    }

    update() {
        if (this.isGameOver) return;

        // 1. Movement
        let vx=0, vy=0, f=2200;
        if (this.keys.A.isDown) vx=-f; else if (this.keys.D.isDown) vx=f;
        if (this.keys.W.isDown) vy=-f; else if (this.keys.S.isDown) vy=f;
        if (this.isTouching) { vx=this.dx*18; vy=this.dy*18; }
        this.player.setAcceleration(vx, vy);

        // 2. Physical Stacking (The magic)
        const nearOven = Phaser.Math.Distance.Between(this.player.x, this.player.y, 380, 550) < 60;
        if (nearOven && this.pizzaStorage.getLength() > 0 && this.stack.length < 10) {
            const p = this.pizzaStorage.getChildren()[this.pizzaStorage.getLength()-1];
            p.destroy();
            this.addBoxToBack();
        }

        // 3. Delivery Logic
        const nearCounter = Phaser.Math.Distance.Between(this.player.x, this.player.y, 225, 300) < 80;
        if (nearCounter && this.stack.length > 0) {
            this.deliverBox();
        }

        // 4. Update Stack Positions (Bouncy follow)
        this.stack.forEach((box, i) => {
            const targetX = this.player.x;
            const targetY = this.player.y - 20 - (i * 8);
            box.x = Phaser.Math.Linear(box.x, targetX, 0.2);
            box.y = Phaser.Math.Linear(box.y, targetY, 0.2);
            box.setDepth(this.player.depth + i + 1);
        });
    }

    addBoxToBack() {
        const box = this.add.image(this.player.x, this.player.y, 'pizza_item').setScale(0.5);
        this.stack.push(box);
        this.playSfx(600, 'sine', 0.05);
    }

    deliverBox() {
        const box = this.stack.pop();
        if (box) {
            this.tweens.add({
                targets: box,
                x: 225, y: 250, alpha: 0,
                duration: 300,
                onComplete: () => {
                    box.destroy();
                    this.score += 100;
                    this.scoreText.setText(`$${this.score}`);
                    this.showPop(225, 250, "+$100 💵", "#2ecc71");
                }
            });
        }
    }

    tick() { this.timeLeft--; this.timerText.setText(this.timeLeft); if (this.timeLeft <= 0) this.scene.start('ResultScene', { playerScore: this.score }); }
    
    showPop(x, y, txt, col) {
        const t = this.add.text(x, y, txt, { fontFamily: 'Bangers', fontSize: '24px', color: col, stroke:'#000', strokeThickness:4 }).setOrigin(0.5).setDepth(2000);
        this.tweens.add({ targets: t, y: '-=60', alpha: 0, duration: 800, onComplete: () => t.destroy() });
    }

    playSfx(f, type, d) {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const o = audioCtx.createOscillator(), g = audioCtx.createGain();
            o.type = type; o.frequency.setValueAtTime(f, audioCtx.currentTime);
            g.gain.setValueAtTime(0.1, audioCtx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + d);
            o.connect(g); g.connect(audioCtx.destination);
            o.start(); o.stop(audioCtx.currentTime + d);
        } catch(e) {}
    }
}
