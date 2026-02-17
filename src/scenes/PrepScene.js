import Phaser from 'phaser';

const BUFFS = [
    { id: 1, name: 'TURBO', desc: '+30% SPEED', color: 0x00d2ff },
    { id: 2, name: 'TANK', desc: 'STUN RESIST', color: 0xff4757 },
    { id: 3, name: 'GOLD', desc: '+$50 PER BOX', color: 0xffcc00 }
];

export class PrepScene extends Phaser.Scene {
    constructor() { super({ key: 'PrepScene' }); }

    create() {
        const { width: w, height: h } = this.cameras.main;
        
        // Vibrant Sky BG
        this.add.graphics().fillGradientStyle(0x5142f5, 0x5142f5, 0x00d2ff, 0x00d2ff, 1).fillRect(0, 0, w, h);
        
        this.add.text(w/2, 60, 'STRATEGY', { 
            fontFamily: 'Bangers', fontSize: '64px', color: '#fff', stroke: '#5142f5', strokeThickness: 12 
        }).setOrigin(0.5);

        this.selectedBuff = null;
        this.traps = [];
        this.buffBtns = [];

        // 1. Buff Selection (Vertical Stack for 9:16)
        BUFFS.forEach((buff, i) => {
            const card = this.createBrawlerCard(w/2, 180 + i*130, buff);
            this.buffBtns.push({ id: buff.id, ...card });
        });

        // 2. Secret Traps
        const mapY = 600;
        this.add.text(w/2, 540, 'HIDE 3 TRAPS (TAP MAP)', { 
            fontFamily: 'Orbitron', fontSize: '14px', color: '#fff', fontWeight: 'bold'
        }).setOrigin(0.5);

        const mapBg = this.add.graphics()
            .fillStyle(0xffffff, 0.2)
            .fillRoundedRect(w/2 - 160, mapY - 50, 320, 100, 15)
            .lineStyle(4, 0xffffff)
            .strokeRoundedRect(w/2 - 160, mapY - 50, 320, 100, 15);
        
        this.trapCount = this.add.text(w/2, 670, 'TRAPS: 0/3', { fontFamily: 'Bangers', fontSize: '24px', color: '#fff' }).setOrigin(0.5);

        const zone = this.add.zone(w/2, mapY, 320, 100).setInteractive();
        zone.on('pointerdown', (p) => {
            if (this.traps.length < 3) {
                this.traps.push({x: Math.floor(p.x/40), y: Math.floor(p.y/40)});
                const bomb = this.add.text(p.x, p.y, '💣', { fontSize: '20px' }).setOrigin(0.5);
                this.tweens.add({ targets: bomb, scale: 1.4, duration: 150, yoyo: true });
                this.trapCount.setText(`TRAPS: ${this.traps.length}/3`);
                if (this.traps.length === 3) {
                    this.trapCount.setColor('#ffcc00');
                    this.checkReady();
                }
            }
        });

        // 3. Play Button
        this.startBtn = this.add.container(w/2, h - 60);
        this.startBg = this.add.graphics().fillStyle(0x333333, 0.5).fillRoundedRect(-120, -30, 240, 60, 20);
        this.startTxt = this.add.text(0, 0, 'LTSGO!', { fontFamily: 'Bangers', fontSize: '32px', color: '#888' }).setOrigin(0.5);
        this.startBtn.add([this.startBg, this.startTxt]);

        this.cameras.main.fadeIn(500);
    }

    createBrawlerCard(x, y, buff) {
        const c = this.add.container(x, y);
        const bg = this.add.graphics().fillStyle(0xffffff).fillRoundedRect(-140, -50, 280, 100, 20).lineStyle(4, 0x5142f5).strokeRoundedRect(-140, -50, 280, 100, 20);
        const title = this.add.text(-120, -25, buff.name, { fontFamily: 'Bangers', fontSize: '32px', color: '#5142f5' }).setOrigin(0, 0.5);
        const desc = this.add.text(-120, 15, buff.desc, { fontFamily: 'Orbitron', fontSize: '12px', color: '#333', fontWeight: 'bold' }).setOrigin(0, 0.5);
        
        c.add([bg, title, desc]);
        const hit = this.add.zone(0, 0, 280, 100).setInteractive({ useHandCursor: true });
        c.add(hit);

        hit.on('pointerdown', () => {
            this.selectedBuff = buff.id;
            this.buffBtns.forEach(b => {
                b.bg.clear().fillStyle(0xffffff).fillRoundedRect(-140, -50, 280, 100, 20);
                if (b.id === buff.id) {
                    b.bg.lineStyle(6, 0xffcc00).strokeRoundedRect(-140, -50, 280, 100, 20);
                    b.title.setColor('#ffcc00');
                    b.container.setScale(1.05);
                } else {
                    b.bg.lineStyle(4, 0x5142f5).strokeRoundedRect(-140, -50, 280, 100, 20);
                    b.title.setColor(0x5142f5);
                    b.container.setScale(1);
                }
            });
            this.checkReady();
        });
        return { container: c, bg, title };
    }

    checkReady() {
        if (this.selectedBuff && this.traps.length === 3) {
            this.startBg.clear().fillStyle(0xffcc00).fillRoundedRect(-120, -30, 240, 60, 20).lineStyle(4, 0xffffff).strokeRoundedRect(-120, -30, 240, 60, 20);
            this.startTxt.setColor('#fff').setStroke('#000', 4);
            const hit = this.add.zone(0, 0, 240, 60).setInteractive();
            this.startBtn.add(hit);
            hit.on('pointerdown', () => this.scene.start('ArenaScene', { buff: this.selectedBuff, traps: this.traps }));
        }
    }
}
