import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
    constructor() { super({ key: 'BootScene' }); }

    preload() {
        const { width: w, height: h } = this.cameras.main;
        this.add.graphics().fillStyle(0xffffff, 1).fillRect(0, 0, w, h);
        const box = this.add.graphics().fillStyle(0xeeeeee, 1).fillRoundedRect(w/2-140, h/2-25, 280, 50, 25).lineStyle(6, 0x5142f5).strokeRoundedRect(w/2-140, h/2-25, 280, 40, 20);
        const bar = this.add.graphics();
        this.load.on('progress', (v) => { 
            bar.clear().fillStyle(0xffcc00, 1).fillRoundedRect(w/2-135, h/2-15, 270 * v, 30, 15); 
        });
        this.load.on('complete', () => { box.destroy(); bar.destroy(); });

        this.generateRooftopTextures();
    }

    generateRooftopTextures() {
        const g = this.make.graphics({ x: 0, y: 0, add: false });

        // 1. FLOOR (Cyber Deck)
        g.clear().fillStyle(0x1a1a2e).fillRect(0, 0, 40, 40);
        g.lineStyle(2, 0x2e2e4e).strokeRect(0, 0, 40, 40);
        g.generateTexture('tile_floor', 40, 40);

        // 2. WALL (Neon Barrier)
        g.clear().fillStyle(0x5142f5).fillRect(0, 0, 40, 40);
        g.lineStyle(4, 0xffffff).strokeRect(2, 2, 36, 36);
        g.generateTexture('tile_wall', 40, 40);

        // 3. MASTER OVEN (The Core)
        g.clear().lineStyle(6, 0xffcc00).fillStyle(0x333).fillRoundedRect(5, 5, 110, 110, 30).strokeRoundedRect(5, 5, 110, 110, 30);
        g.fillStyle(0xff5722).fillCircle(60, 60, 35);
        g.generateTexture('oven_master', 120, 120);

        // 4. HELIPORT (Giant Glow Pad)
        g.clear().lineStyle(8, 0x2ecc71).fillStyle(0x1a1a2e).fillCircle(60, 60, 55).strokeCircle(60, 60, 55);
        g.fillStyle(0x2ecc71).fillRect(40, 58, 40, 4).fillRect(58, 40, 4, 40); // H
        g.generateTexture('heliport', 120, 120);

        // 5. BRAWLERS
        const drawBrawler = (key, color) => {
            g.clear().lineStyle(4, 0x000, 1).fillStyle(0xffffff).fillCircle(32, 38, 24).strokeCircle(32, 38, 24);
            g.fillStyle(color).fillRoundedRect(24, 40, 16, 18, 4).strokeRoundedRect(24, 40, 16, 18, 4);
            g.fillStyle(0xffdbac).fillCircle(32, 25, 18).strokeCircle(32, 25, 18);
            g.fillStyle(0xffffff).fillCircle(24, 23, 6).fillCircle(40, 23, 6);
            g.fillStyle(0x000).fillCircle(26, 25, 2).fillCircle(42, 25, 2);
            g.generateTexture(key, 64, 64);
        };
        drawBrawler('player', 0x00d2ff);
        drawBrawler('opponent', 0xff4757);

        // 6. INGREDIENTS
        const ings = [0xfff9db, 0xff4d4d, 0xffd93d, 0x00ffff];
        ings.forEach((c, i) => {
            g.clear().lineStyle(3, 0x000).fillStyle(c).fillCircle(16, 16, 12).strokeCircle(16, 16, 12).generateTexture('ing'+(i+1), 32, 32);
        });

        // 7. PIZZA ITEM
        g.clear().fillStyle(0xffcc00).fillCircle(16, 16, 14).lineStyle(2, 0xffffff).strokeCircle(16, 16, 14).generateTexture('pizza_item', 32, 32);
        g.clear().fillStyle(0x000, 0.2).fillEllipse(32, 32, 28, 10).generateTexture('shadow', 64, 64);

        g.destroy();
    }

    create() { this.scene.start('MenuScene'); }
}
