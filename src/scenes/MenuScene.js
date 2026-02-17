import Phaser from 'phaser';
import { auth } from '../network/auth';

const BRAWLERS = [
    { id: 'TURBO', name: 'PEPPER-DASH', power: 'TRIPLE BURST', desc: 'Fastest runner. Dash cooldown is halved.', color: 0x00d2ff, emoji: '⚡' },
    { id: 'TANK', name: 'BIG MOZZA', power: 'STUN WAVE', desc: 'Hard to push. Power creates a shockwave.', color: 0xff4757, emoji: '🛡️' },
    { id: 'SNATCHER', name: 'BASIL-HOOK', power: 'PIZZA STEAL', desc: 'Long range. Can steal items from distance.', color: 0xffcc00, emoji: '💰' }
];

export class MenuScene extends Phaser.Scene {
    constructor() { super({ key: 'MenuScene' }); }

    create() {
        const { width: w, height: h } = this.cameras.main;
        
        // Background
        this.add.graphics().fillGradientStyle(0x0f0c29, 0x0f0c29, 0x302b63, 0x24243e, 1).fillRect(0, 0, w, h);
        
        this.logo = this.add.text(w/2, 120, 'PIZZA\nBRAWL', {
            fontFamily: 'Bangers', fontSize: '90px', color: '#ffffff', align: 'center', stroke: '#5142f5', strokeThickness: 16,
            shadow: { offsetX: 0, offsetY: 8, color: '#000', fill: true, stroke: true }
        }).setOrigin(0.5).setDepth(20);

        // Character Preview
        this.selectedId = 'TURBO';
        this.charContainer = this.add.container(w/2, 320);
        this.charSprite = this.add.sprite(0, 0, 'player').setScale(3.5);
        this.charContainer.add([this.add.image(0, 45, 'shadow').setAlpha(0.3).setScale(1.3), this.charSprite]);
        
        // Selection UI
        this.add.text(w/2, 450, 'SELECT YOUR BRAWLER', { fontFamily: 'Orbitron', fontSize: '14px', fontWeight: 'bold' }).setOrigin(0.5);
        
        this.brawlerButtons = [];
        BRAWLERS.forEach((b, i) => {
            const x = w/2 + (i-1)*120;
            const btn = this.createBrawlerSelect(x, 520, b);
            this.brawlerButtons.push(btn);
        });

        this.powerDesc = this.add.text(w/2, 600, BRAWLERS[0].desc, { fontFamily: 'Orbitron', fontSize: '12px', color: '#aaa', align: 'center', wordWrap: { width: 300 } }).setOrigin(0.5);

        // Play Button
        this.startBtn = this.createJuiceButton(w/2, 720, 'BRAWL!', 0xffcc00, () => this.handleStart());
        
        this.loginBtn = this.createJuiceButton(w/2, 50, 'LOGIN', 0x5142f5, () => this.handleConnect(), 0xffffff, 140, 40);

        this.checkExistingLogin();
    }

    createBrawlerSelect(x, y, data) {
        const c = this.add.container(x, y);
        const bg = this.add.circle(0, 0, 45, 0xffffff, 0.1).setStrokeStyle(4, 0xffffff);
        const icon = this.add.text(0, 0, data.emoji, { fontSize: '36px' }).setOrigin(0.5);
        c.add([bg, icon]);
        
        const zone = this.add.circle(0, 0, 45, 0x000, 0).setInteractive({ useHandCursor: true });
        c.add(zone);

        zone.on('pointerdown', () => {
            this.selectedId = data.id;
            this.powerDesc.setText(data.desc);
            this.charSprite.setTint(data.color);
            this.brawlerButtons.forEach(b => b.bg.setStrokeStyle(4, 0xffffff).setFillStyle(0xffffff, 0.1));
            bg.setStrokeStyle(6, 0xffcc00).setFillStyle(0xffcc00, 0.3);
            this.tweens.add({ targets: c, scale: 1.1, duration: 100, yoyo: true });
        });

        if (data.id === 'TURBO') bg.setStrokeStyle(6, 0xffcc00).setFillStyle(0xffcc00, 0.3);
        return { container: c, bg };
    }

    createJuiceButton(x, y, txt, col, cb, textCol=0xffffff, bw=280, bh=70) {
        const c = this.add.container(x, y);
        const bg = this.add.graphics().fillStyle(col, 1).fillRoundedRect(-bw/2, -bh/2, bw, bh, 20).lineStyle(5, 0xffffff).strokeRoundedRect(-bw/2, -bh/2, bw, bh, 20);
        const t = this.add.text(0, 0, txt, { fontFamily: 'Bangers', fontSize: bh > 50 ? '36px' : '20px', color: Phaser.Display.Color.IntegerToColor(textCol).rgba }).setOrigin(0.5);
        if(textCol === 0xffffff) t.setStroke('#000', 4);
        c.add([this.add.graphics().fillStyle(0x000, 0.2).fillRoundedRect(-bw/2, -bh/2+8, bw, bh, 20), bg, t]);
        c.setInteractive(new Phaser.Geom.Rectangle(-bw/2, -bh/2, bw, bh), Phaser.Geom.Rectangle.Contains).on('pointerdown', () => {
            this.tweens.add({ targets: c, scale: 0.9, duration: 100, yoyo: true, onComplete: cb });
        });
        return { container: c, text: t };
    }

    async handleConnect() { const w = await auth.login(); if (w) this.loginBtn.text.setText(w.short); }
    async checkExistingLogin() { const u = await auth.checkSession(); if (u) this.loginBtn.text.setText(u.short); }
    handleStart() { if (!auth.address) this.handleConnect(); else this.scene.start('ArenaScene', { class: this.selectedId }); }
}
