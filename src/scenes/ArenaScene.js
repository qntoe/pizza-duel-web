import Phaser from 'phaser';

// Map constants
const TILE = 40;
const MAP_W = 20;
const MAP_H = 15;
const GAME_DURATION = 120; // seconds

// Ingredient types
const INGREDIENTS = {
    DOUGH:     { id: 1, key: 'dough',     emoji: '🫓', color: '#f5deb3', spawnWeight: 5 },
    TOMATO:    { id: 2, key: 'tomato',    emoji: '🍅', color: '#ff4757', spawnWeight: 5 },
    CHEESE:    { id: 3, key: 'cheese',    emoji: '🧀', color: '#ffd700', spawnWeight: 3 },
    PEPPERONI: { id: 4, key: 'pepperoni', emoji: '🍖', color: '#c0392b', spawnWeight: 2 },
    MUSHROOM:  { id: 5, key: 'mushroom',  emoji: '🍄', color: '#8b7355', spawnWeight: 1 },
};

// Pizza recipes
const RECIPES = [
    { name: 'Margherita', needs: [1, 2, 3],       points: 100, emoji: '🍅' },
    { name: 'Pepperoni',  needs: [1, 2, 3, 4],    points: 200, emoji: '🍕' },
    { name: 'Suprema',    needs: [1, 2, 3, 4, 5], points: 350, emoji: '🍱' },
];

export class ArenaScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ArenaScene' });
    }

    init(data) {
        this.gameMode = data.mode || 'bot';
    }

    create() {
        // Audio context for SFX
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        // Game state
        this.score = 0;
        this.inventory = []; // Array of ingredient IDs
        this.craftedPizzas = []; // Array of pizza names
        this.pizzasDelivered = 0;
        this.timeLeft = GAME_DURATION;
        this.isGameOver = false;
        this.moveLog = []; // For ZK commitment
        this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        // Build map
        this.buildMap();

        // Spawn ingredients
        this.ingredientSprites = this.physics.add.group();
        this.spawnIngredients(12);

        // Spawn delivery points
        this.deliverySprites = this.physics.add.staticGroup();
        this.spawnDeliveryPoints();

        // Create player
        this.player = this.physics.add.sprite(10 * TILE + TILE / 2, 13 * TILE + TILE / 2, 'player');
        this.player.setDepth(10);
        this.player.setCollideWorldBounds(true);
        this.physics.world.setBounds(0, 0, MAP_W * TILE, MAP_H * TILE);

        // Create bot opponent (visual only in fog)
        this.bot = this.physics.add.sprite(10 * TILE + TILE / 2, 1 * TILE + TILE / 2, 'opponent');
        this.bot.setDepth(10);
        this.bot.setCollideWorldBounds(true);
        this.bot.setAlpha(0.4); // Fog — barely visible
        this.botInventory = [];
        this.botScore = 0;
        this.botPizzasDelivered = 0;
        this.botTarget = null;
        this.botState = 'collect'; // collect | craft | deliver

        // Overlap detection
        this.physics.add.overlap(this.player, this.ingredientSprites, this.onPlayerTouchIngredient, null, this);

        // Fog of war
        this.createFogOfWar();

        // Create HUD
        this.createHUD();

        // Create controls
        if (this.isMobile) {
            this.createMobileControls();
        }
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys('W,A,S,D');
        this.spaceKey = this.input.keyboard.addKey('SPACE');
        this.eKey = this.input.keyboard.addKey('E');

        // Keyboard actions
        this.spaceKey.on('down', () => this.tryCollectOrCraft());
        this.eKey.on('down', () => this.tryDeliver());

        // Timer
        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.onTimerTick,
            callbackScope: this,
            loop: true,
        });

        // Ingredient respawn
        this.time.addEvent({
            delay: 5000,
            callback: () => {
                if (this.ingredientSprites.countActive() < 8) {
                    this.spawnIngredients(3);
                }
            },
            callbackScope: this,
            loop: true,
        });

        // Flour zones (sabotage)
        this.flourZones = [];

        // Bot AI loop
        this.time.addEvent({
            delay: 300,
            callback: this.updateBot,
            callbackScope: this,
            loop: true,
        });

        // Bot sabotage — throws flour every 20-30 seconds
        this.time.addEvent({
            delay: Phaser.Math.Between(15000, 25000),
            callback: () => {
                if (this.isGameOver) return;
                this.spawnFlourZone(this.bot.x, this.bot.y);
            },
            callbackScope: this,
            loop: true,
        });
    }

    buildMap() {
        // Simple arena with walls around border
        this.mapData = [];
        for (let y = 0; y < MAP_H; y++) {
            this.mapData[y] = [];
            for (let x = 0; x < MAP_W; x++) {
                const isWall = x === 0 || x === MAP_W - 1 || y === 0 || y === MAP_H - 1;
                // Add some internal walls for cover
                const isInternalWall =
                    (x === 5 && y >= 3 && y <= 5) ||
                    (x === 14 && y >= 3 && y <= 5) ||
                    (x === 5 && y >= 9 && y <= 11) ||
                    (x === 14 && y >= 9 && y <= 11) ||
                    (x >= 8 && x <= 11 && y === 7);

                this.mapData[y][x] = isWall || isInternalWall ? 1 : 0;

                const tileKey = (isWall || isInternalWall) ? 'tile_wall' : 'tile_floor';
                this.add.image(x * TILE + TILE / 2, y * TILE + TILE / 2, tileKey);
            }
        }
    }

    spawnIngredients(count) {
        const types = Object.values(INGREDIENTS);
        for (let i = 0; i < count; i++) {
            // Weighted random selection
            const weighted = [];
            types.forEach(t => {
                for (let w = 0; w < t.spawnWeight; w++) weighted.push(t);
            });
            const type = weighted[Phaser.Math.Between(0, weighted.length - 1)];

            let x, y;
            let attempts = 0;
            do {
                x = Phaser.Math.Between(2, MAP_W - 3);
                y = Phaser.Math.Between(2, MAP_H - 3);
                attempts++;
            } while (this.mapData[y][x] !== 0 && attempts < 50);

            if (attempts >= 50) continue;

            const sprite = this.ingredientSprites.create(
                x * TILE + TILE / 2,
                y * TILE + TILE / 2,
                type.key
            );
            sprite.setData('type', type);
            sprite.setDepth(5);

            // Floating animation
            this.tweens.add({
                targets: sprite,
                y: sprite.y - 4,
                duration: 1000 + Math.random() * 500,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
            });

            // Emoji label
            const label = this.add.text(sprite.x, sprite.y - 16, type.emoji, {
                fontSize: '14px',
            }).setOrigin(0.5).setDepth(6);
            sprite.setData('label', label);
        }
    }

    spawnDeliveryPoints() {
        const positions = [
            { x: 3, y: 3 },
            { x: 16, y: 3 },
            { x: 3, y: 11 },
            { x: 16, y: 11 },
        ];

        positions.forEach(pos => {
            const sprite = this.deliverySprites.create(
                pos.x * TILE + TILE / 2,
                pos.y * TILE + TILE / 2,
                'delivery'
            );
            sprite.setDepth(3);

            // Delivery label
            this.add.text(sprite.x, sprite.y - 22, '📦', {
                fontSize: '18px',
            }).setOrigin(0.5).setDepth(4);

            // Pulsing effect
            this.tweens.add({
                targets: sprite,
                alpha: 0.4,
                duration: 1200,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
            });
        });
    }

    createFogOfWar() {
        // Fog layer — covers the map, reveals around player
        this.fogTiles = [];
        this.fogContainer = this.add.container(0, 0).setDepth(20);

        for (let y = 0; y < MAP_H; y++) {
            this.fogTiles[y] = [];
            for (let x = 0; x < MAP_W; x++) {
                const fog = this.add.image(x * TILE + TILE / 2, y * TILE + TILE / 2, 'fog');
                this.fogContainer.add(fog);
                this.fogTiles[y][x] = fog;
            }
        }
    }

    updateFog() {
        const px = Math.floor(this.player.x / TILE);
        const py = Math.floor(this.player.y / TILE);
        const viewRadius = 4;

        for (let y = 0; y < MAP_H; y++) {
            for (let x = 0; x < MAP_W; x++) {
                const dist = Math.abs(x - px) + Math.abs(y - py);
                if (dist <= viewRadius) {
                    this.fogTiles[y][x].setAlpha(0);
                } else if (dist <= viewRadius + 2) {
                    this.fogTiles[y][x].setAlpha(0.5);
                } else {
                    this.fogTiles[y][x].setAlpha(0.85);
                }
            }
        }
    }

    createHUD() {
        const style = { fontFamily: 'Orbitron', fontSize: '14px', color: '#ffffff' };
        const smallStyle = { fontFamily: 'Orbitron', fontSize: '11px', color: '#aaaaaa' };

        // Top-left: Score
        this.add.text(10, 8, '💰', { fontSize: '16px' }).setDepth(100).setScrollFactor(0);
        this.scoreText = this.add.text(30, 10, '0', {
            ...style, color: '#2ecc71'
        }).setDepth(100).setScrollFactor(0);

        // Top-center: Timer
        this.timerText = this.add.text(400, 10, GAME_DURATION + 's', {
            ...style, fontSize: '20px', fontFamily: 'Bangers', color: '#ffffff'
        }).setOrigin(0.5, 0).setDepth(100).setScrollFactor(0);

        // Top-right: Pizzas delivered
        this.deliveryText = this.add.text(790, 10, '🍕 0', {
            ...style, color: '#ffcc00'
        }).setOrigin(1, 0).setDepth(100).setScrollFactor(0);

        // Bot score (top-right, below deliveries)
        this.add.text(790, 30, '🤖', { fontSize: '12px' })
            .setOrigin(1, 0).setDepth(100).setScrollFactor(0);
        this.botScoreText = this.add.text(770, 32, '0', {
            ...style, fontSize: '11px', color: '#ff6666'
        }).setOrigin(1, 0).setDepth(100).setScrollFactor(0);

        // Bottom: Inventory
        this.inventoryBg = this.add.graphics().setDepth(99).setScrollFactor(0);
        this.inventoryBg.fillStyle(0x000000, 0.7);
        this.inventoryBg.fillRoundedRect(200, 560, 400, 35, 10);

        this.inventoryText = this.add.text(400, 577, 'Inventory: empty', {
            ...smallStyle, fontSize: '12px',
        }).setOrigin(0.5).setDepth(100).setScrollFactor(0);

        // Craft hint
        this.craftHint = this.add.text(400, 545, '', {
            ...smallStyle, fontSize: '10px', color: '#ff00ff',
        }).setOrigin(0.5).setDepth(100).setScrollFactor(0);
    }

    createMobileControls() {
        // Virtual joystick (left side)
        this.joystickBase = this.add.image(100, 500, 'joystick_base')
            .setDepth(200).setScrollFactor(0).setAlpha(0.6);
        this.joystickThumb = this.add.image(100, 500, 'joystick_thumb')
            .setDepth(201).setScrollFactor(0).setAlpha(0.8);

        this.joystickActive = false;
        this.joystickVec = { x: 0, y: 0 };

        this.input.on('pointerdown', (pointer) => {
            if (pointer.x < 250 && pointer.y > 350) {
                this.joystickActive = true;
                this.joystickBase.setPosition(pointer.x, pointer.y);
                this.joystickThumb.setPosition(pointer.x, pointer.y);
            }
        });

        this.input.on('pointermove', (pointer) => {
            if (this.joystickActive && pointer.x < 300) {
                const dx = pointer.x - this.joystickBase.x;
                const dy = pointer.y - this.joystickBase.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 50;

                if (dist <= maxDist) {
                    this.joystickThumb.setPosition(pointer.x, pointer.y);
                } else {
                    this.joystickThumb.setPosition(
                        this.joystickBase.x + (dx / dist) * maxDist,
                        this.joystickBase.y + (dy / dist) * maxDist
                    );
                }

                this.joystickVec = {
                    x: (this.joystickThumb.x - this.joystickBase.x) / maxDist,
                    y: (this.joystickThumb.y - this.joystickBase.y) / maxDist,
                };
            }
        });

        this.input.on('pointerup', (pointer) => {
            if (pointer.x < 300) {
                this.joystickActive = false;
                this.joystickThumb.setPosition(this.joystickBase.x, this.joystickBase.y);
                this.joystickVec = { x: 0, y: 0 };
            }
        });

        // Action button (right side) - Collect/Craft
        const actionBtn = this.add.image(650, 500, 'btn_action')
            .setDepth(200).setScrollFactor(0).setInteractive().setAlpha(0.7);
        this.add.text(650, 500, '✋', { fontSize: '24px' })
            .setOrigin(0.5).setDepth(201).setScrollFactor(0);
        actionBtn.on('pointerdown', () => this.tryCollectOrCraft());

        // Deliver button
        const deliverBtn = this.add.image(730, 500, 'btn_sabotage')
            .setDepth(200).setScrollFactor(0).setInteractive().setAlpha(0.7);
        this.add.text(730, 500, '📦', { fontSize: '24px' })
            .setOrigin(0.5).setDepth(201).setScrollFactor(0);
        deliverBtn.on('pointerdown', () => this.tryDeliver());
    }

    onPlayerTouchIngredient(player, ingredient) {
        // Just highlight — collection requires action
        ingredient.setTint(0xffffff);
    }

    tryCollectOrCraft() {
        if (this.isGameOver) return;

        // Try to collect nearby ingredient
        const px = this.player.x;
        const py = this.player.y;
        let collected = false;

        this.ingredientSprites.children.entries.forEach(sprite => {
            if (!sprite.active) return;
            const dist = Phaser.Math.Distance.Between(px, py, sprite.x, sprite.y);
            if (dist < TILE * 1.2 && !collected) {
                const type = sprite.getData('type');
                if (this.inventory.length < 6) {
                    this.inventory.push(type.id);
                    sprite.getData('label')?.destroy();
                    sprite.destroy();
                    collected = true;
                    this.logMove(Math.floor(px / TILE), Math.floor(py / TILE), 1);
                    this.showFloatingText(px, py - 20, type.emoji, '#ffffff');
                    this.playSfx(600, 'sine', 0.15);
                }
            }
        });

        if (collected) {
            this.updateHUD();
            return;
        }

        // If nothing to collect, try to craft
        this.tryCraft();
    }

    tryCraft() {
        // Try recipes from most valuable to least
        for (let i = RECIPES.length - 1; i >= 0; i--) {
            const recipe = RECIPES[i];
            const tempInv = [...this.inventory];
            let canCraft = true;

            for (const needed of recipe.needs) {
                const idx = tempInv.indexOf(needed);
                if (idx === -1) { canCraft = false; break; }
                tempInv.splice(idx, 1);
            }

            if (canCraft) {
                // Remove used ingredients
                for (const needed of recipe.needs) {
                    const idx = this.inventory.indexOf(needed);
                    this.inventory.splice(idx, 1);
                }
                this.craftedPizzas.push(recipe);
                this.logMove(
                    Math.floor(this.player.x / TILE),
                    Math.floor(this.player.y / TILE), 2
                );
                this.showFloatingText(
                    this.player.x, this.player.y - 30,
                    `${recipe.emoji} ${recipe.name}!`, '#ffcc00'
                );
                this.playSfx(880, 'sine', 0.2);
                this.cameras.main.shake(80, 0.003);
                this.updateHUD();
                return;
            }
        }
    }

    tryDeliver() {
        if (this.isGameOver || this.craftedPizzas.length === 0) return;

        const px = this.player.x;
        const py = this.player.y;

        this.deliverySprites.children.entries.forEach(dp => {
            const dist = Phaser.Math.Distance.Between(px, py, dp.x, dp.y);
            if (dist < TILE * 1.5 && this.craftedPizzas.length > 0) {
                const pizza = this.craftedPizzas.shift();
                this.score += pizza.points;
                this.pizzasDelivered++;
                this.logMove(Math.floor(px / TILE), Math.floor(py / TILE), 3);
                this.showFloatingText(
                    dp.x, dp.y - 30,
                    `+${pizza.points} 💰`, '#2ecc71'
                );
                this.playSfx(1200, 'sine', 0.3);
                this.cameras.main.shake(120, 0.005);
                this.updateHUD();
            }
        });
    }

    updateBot() {
        if (this.isGameOver) return;

        const speed = 120;

        // Simple bot AI — collect ingredients, craft, deliver
        if (this.botState === 'collect') {
            // Find nearest ingredient
            let nearest = null;
            let nearestDist = Infinity;

            this.ingredientSprites.children.entries.forEach(sprite => {
                if (!sprite.active) return;
                const dist = Phaser.Math.Distance.Between(
                    this.bot.x, this.bot.y, sprite.x, sprite.y
                );
                if (dist < nearestDist) {
                    nearestDist = dist;
                    nearest = sprite;
                }
            });

            if (nearest && nearestDist > TILE) {
                // Move toward ingredient
                this.physics.moveToObject(this.bot, nearest, speed);
            } else if (nearest && nearestDist <= TILE) {
                // Collect it
                const type = nearest.getData('type');
                this.botInventory.push(type.id);
                nearest.getData('label')?.destroy();
                nearest.destroy();
                this.bot.body.setVelocity(0, 0);

                // Check if bot can craft
                if (this.botCanCraft()) {
                    this.botState = 'craft';
                } else if (this.botInventory.length >= 5) {
                    this.botState = 'craft';
                }
            } else {
                // No ingredients, wait
                this.bot.body.setVelocity(0, 0);
            }
        } else if (this.botState === 'craft') {
            // Try to craft best pizza
            for (let i = RECIPES.length - 1; i >= 0; i--) {
                const recipe = RECIPES[i];
                const tempInv = [...this.botInventory];
                let canCraft = true;

                for (const needed of recipe.needs) {
                    const idx = tempInv.indexOf(needed);
                    if (idx === -1) { canCraft = false; break; }
                    tempInv.splice(idx, 1);
                }

                if (canCraft) {
                    for (const needed of recipe.needs) {
                        const idx = this.botInventory.indexOf(needed);
                        this.botInventory.splice(idx, 1);
                    }
                    this.botScore += recipe.points;
                    this.botPizzasDelivered++;
                    this.botState = 'deliver';
                    return;
                }
            }

            // Can't craft, go collect more
            this.botState = 'collect';
        } else if (this.botState === 'deliver') {
            // Move to nearest delivery point
            let nearestDP = null;
            let nearestDist = Infinity;

            this.deliverySprites.children.entries.forEach(dp => {
                const dist = Phaser.Math.Distance.Between(
                    this.bot.x, this.bot.y, dp.x, dp.y
                );
                if (dist < nearestDist) {
                    nearestDist = dist;
                    nearestDP = dp;
                }
            });

            if (nearestDP && nearestDist > TILE) {
                this.physics.moveToObject(this.bot, nearestDP, speed);
            } else {
                this.bot.body.setVelocity(0, 0);
                this.botState = 'collect';
            }
        }
    }

    botCanCraft() {
        for (const recipe of RECIPES) {
            const tempInv = [...this.botInventory];
            let canCraft = true;
            for (const needed of recipe.needs) {
                const idx = tempInv.indexOf(needed);
                if (idx === -1) { canCraft = false; break; }
                tempInv.splice(idx, 1);
            }
            if (canCraft) return true;
        }
        return false;
    }

    showFloatingText(x, y, text, color) {
        const t = this.add.text(x, y, text, {
            fontFamily: 'Bangers',
            fontSize: '18px',
            color: color,
            stroke: '#000000',
            strokeThickness: 3,
        }).setOrigin(0.5).setDepth(150);

        this.tweens.add({
            targets: t,
            y: y - 40,
            alpha: 0,
            duration: 1200,
            onComplete: () => t.destroy(),
        });
    }

    playSfx(freq, type, dur, vol = 0.08) {
        try {
            if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
            const osc = this.audioCtx.createOscillator();
            const g = this.audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
            g.gain.setValueAtTime(vol, this.audioCtx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + dur);
            osc.connect(g);
            g.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + dur);
        } catch (e) { /* silent fail */ }
    }

    logMove(x, y, action) {
        this.moveLog.push({ x, y, action, t: Date.now() });
    }

    spawnFlourZone(x, y) {
        this.playSfx(150, 'sawtooth', 0.3);

        // Visual flour cloud
        const flour = this.add.graphics();
        flour.fillStyle(0xffffff, 0.15);
        flour.fillCircle(0, 0, TILE * 1.5);
        flour.setPosition(x, y);
        flour.setDepth(8);
        flour.active = true;
        this.flourZones.push(flour);

        // Flour emoji
        const label = this.add.text(x, y - 10, '💨', {
            fontSize: '20px',
        }).setOrigin(0.5).setDepth(9).setAlpha(0.6);

        // Fade out after 8 seconds
        this.tweens.add({
            targets: [flour, label],
            alpha: 0,
            duration: 2000,
            delay: 6000,
            onComplete: () => {
                flour.active = false;
                flour.destroy();
                label.destroy();
                const idx = this.flourZones.indexOf(flour);
                if (idx > -1) this.flourZones.splice(idx, 1);
            },
        });
    }

    updateHUD() {
        this.scoreText.setText(this.score.toString());
        this.deliveryText.setText(`🍕 ${this.pizzasDelivered}`);
        this.botScoreText.setText(this.botScore.toString());

        // Inventory display
        if (this.inventory.length === 0 && this.craftedPizzas.length === 0) {
            this.inventoryText.setText('Inventory: empty');
        } else {
            const invEmojis = this.inventory.map(id => {
                const type = Object.values(INGREDIENTS).find(t => t.id === id);
                return type?.emoji || '?';
            }).join(' ');
            const pizzaEmojis = this.craftedPizzas.map(p => p.emoji).join(' ');
            this.inventoryText.setText(
                `Bag: ${invEmojis}${pizzaEmojis ? '  |  Ready: ' + pizzaEmojis : ''}`
            );
        }

        // Craft hint
        let hint = '';
        if (this.craftedPizzas.length > 0) {
            hint = '📦 Press E / tap Deliver near 📦 to score!';
        } else {
            for (const recipe of RECIPES) {
                const tempInv = [...this.inventory];
                let canCraft = true;
                for (const needed of recipe.needs) {
                    const idx = tempInv.indexOf(needed);
                    if (idx === -1) { canCraft = false; break; }
                    tempInv.splice(idx, 1);
                }
                if (canCraft) {
                    hint = `✨ Press SPACE to craft ${recipe.name}!`;
                    break;
                }
            }
        }
        this.craftHint.setText(hint);
    }

    onTimerTick() {
        this.timeLeft--;
        this.timerText.setText(this.timeLeft + 's');

        if (this.timeLeft <= 10) {
            this.timerText.setColor('#ff4444');
        }

        if (this.timeLeft <= 0) {
            this.endGame();
        }
    }

    endGame() {
        this.isGameOver = true;
        this.timerEvent.remove();
        this.player.body.setVelocity(0, 0);
        this.bot.body.setVelocity(0, 0);

        // Transition to results
        this.cameras.main.fade(800, 0, 0, 0, false, (_cam, progress) => {
            if (progress >= 1) {
                this.scene.start('ResultScene', {
                    playerScore: this.score,
                    playerDeliveries: this.pizzasDelivered,
                    botScore: this.botScore,
                    botDeliveries: this.botPizzasDelivered,
                    moveLog: this.moveLog,
                });
            }
        });
    }

    update() {
        if (this.isGameOver) return;

        const speed = 160;
        let vx = 0;
        let vy = 0;

        // Keyboard input
        if (this.cursors.left.isDown || this.wasd.A.isDown) vx = -speed;
        else if (this.cursors.right.isDown || this.wasd.D.isDown) vx = speed;
        if (this.cursors.up.isDown || this.wasd.W.isDown) vy = -speed;
        else if (this.cursors.down.isDown || this.wasd.S.isDown) vy = speed;

        // Mobile joystick input
        if (this.isMobile && this.joystickActive) {
            vx = this.joystickVec.x * speed;
            vy = this.joystickVec.y * speed;
        }

        // Wall collision — check target tile before moving
        const nextX = this.player.x + (vx > 0 ? 16 : vx < 0 ? -16 : 0);
        const nextY = this.player.y + (vy > 0 ? 16 : vy < 0 ? -16 : 0);
        const nextTileX = Math.floor(nextX / TILE);
        const nextTileY = Math.floor(nextY / TILE);

        if (nextTileX >= 0 && nextTileX < MAP_W && nextTileY >= 0 && nextTileY < MAP_H) {
            // Block horizontal movement into wall
            if (this.mapData[Math.floor(this.player.y / TILE)]?.[nextTileX] === 1) {
                vx = 0;
            }
            // Block vertical movement into wall
            if (this.mapData[nextTileY]?.[Math.floor(this.player.x / TILE)] === 1) {
                vy = 0;
            }
        }

        this.player.body.setVelocity(vx, vy);

        // Update fog
        this.updateFog();

        // Sabotage: flour slow zones — check if player is in one
        if (this.flourZones) {
            this.flourZones.forEach(zone => {
                if (zone.active) {
                    const dist = Phaser.Math.Distance.Between(
                        this.player.x, this.player.y, zone.x, zone.y
                    );
                    if (dist < TILE * 1.5) {
                        this.player.body.setVelocity(vx * 0.4, vy * 0.4);
                    }
                }
            });
        }
    }
}
