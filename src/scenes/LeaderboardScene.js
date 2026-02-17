import Phaser from 'phaser';

const MOCK_DATA = [
    { name: 'Don Kron', cash: 15000, verified: true },
    { name: 'Consigliere Slice', cash: 12000, verified: true },
    { name: 'Wheezy', cash: 4200, verified: false },
    { name: 'Lefty', cash: 3100, verified: true }
];

export class LeaderboardScene extends Phaser.Scene {
    constructor() { super({ key: 'LeaderboardScene' }); }

    create() {
        const { width: w, height: h } = this.cameras.main;
        
        // 1. BG GRADIENT
        this.add.graphics()
            .fillGradientStyle(0x5142f5, 0x5142f5, 0x00d2ff, 0x00d2ff, 1)
            .fillRect(0, 0, w, h);
        
        // 2. TITLE
        this.add.text(w/2, 80, 'HALL OF FAME', {
            fontFamily: 'Bangers', fontSize: '72px', color: '#ffffff',
            stroke: '#5142f5', strokeThickness: 12,
            shadow: { offsetX: 0, offsetY: 6, color: '#000', fill: true }
        }).setOrigin(0.5);

        // 3. THE BOARD
        const boardW = 380, boardH = 500;
        const container = this.add.graphics();
        container.fillStyle(0xffffff, 1).fillRoundedRect(w/2 - boardW/2, 160, boardW, boardH, 30);
        container.lineStyle(6, 0x5142f5, 1).strokeRoundedRect(w/2 - boardW/2, 160, boardW, boardH, 30);

        // Header
        const headerStyle = { fontFamily: 'Orbitron', fontSize: '14px', color: '#5142f5', fontWeight: '900' };
        this.add.text(w/2 - 140, 190, 'PIZZAIOLO', headerStyle);
        this.add.text(w/2 + 140, 190, 'CASH', headerStyle).setOrigin(1, 0);

        // List
        MOCK_DATA.forEach((d, i) => {
            const yy = 250 + (i * 80);
            
            // Row Shadow
            const row = this.add.graphics().fillStyle(0x5142f5, 0.05).fillRoundedRect(w/2 - 170, yy - 35, 340, 70, 20);
            
            // Player Name
            this.add.text(w/2 - 150, yy, `${i+1}. ${d.name}`, { 
                fontFamily: 'Bangers', fontSize: '28px', color: '#333' 
            }).setOrigin(0, 0.5);
            
            // Score
            this.add.text(w/2 + 150, yy, `$${d.cash.toLocaleString()}`, { 
                fontFamily: 'Bangers', fontSize: '32px', color: '#2ecc71' 
            }).setOrigin(1, 0.5);

            // ZK Badge
            if (d.verified) {
                const badge = this.add.text(w/2 - 150, yy + 22, 'ZK VERIFIED ✅', { 
                    fontFamily: 'Orbitron', fontSize: '10px', color: '#2ecc71', fontWeight: 'bold' 
                }).setOrigin(0, 0.5);
            }
        });

        // 4. BACK BUTTON
        this.createBrawlButton(w/2, h - 60, 'RETURN', 0xff4757, () => this.scene.start('MenuScene'), 200, 55);

        this.cameras.main.fadeIn(500);
    }

    createBrawlButton(x, y, txt, col, cb, bw, bh) {
        const c = this.add.container(x, y);
        const bg = this.add.graphics().fillStyle(col, 1).fillRoundedRect(-bw/2, -bh/2, bw, bh, 20).lineStyle(4, 0xffffff).strokeRoundedRect(-bw/2, -bh/2, bw, bh, 20);
        const t = this.add.text(0, 0, txt, { fontFamily: 'Bangers', fontSize: '28px', color: '#fff' }).setOrigin(0.5).setStroke('#000', 4);
        c.add([bg, t]);
        const hit = this.add.rectangle(0, 0, bw, bh, 0x000, 0).setInteractive({ useHandCursor: true }).on('pointerdown', () => {
            this.tweens.add({ targets: c, scale: 0.9, duration: 100, yoyo: true, onComplete: cb });
        });
        c.add(hit);
        return c;
    }
}
