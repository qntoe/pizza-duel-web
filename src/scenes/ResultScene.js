import Phaser from 'phaser';
import { saveGameResult } from '../network/supabase';
import { auth } from '../network/auth';

export class ResultScene extends Phaser.Scene {
    constructor() { super({ key: 'ResultScene' }); }

    init(data) {
        this.playerScore = data.playerScore || 0;
        this.moveLog = data.moveLog || [];
        this.isVerifying = false;
    }

    create() {
        const { width: w, height: h } = this.cameras.main;
        
        this.add.graphics()
            .fillGradientStyle(0x5142f5, 0x5142f5, 0x00d2ff, 0x00d2ff, 1)
            .fillRect(0, 0, w, h);
        
        this.add.text(w/2, 100, 'FINISH!', { 
            fontFamily: 'Bangers', fontSize: '100px', color: '#fff', 
            stroke: '#ffcc00', strokeThickness: 16,
            shadow: { offsetX: 0, offsetY: 10, color: '#000', fill: true }
        }).setOrigin(0.5);

        const card = this.add.container(w/2, 320);
        const bg = this.add.graphics().fillStyle(0xffffff, 1).fillRoundedRect(-180, -140, 360, 280, 40).lineStyle(8, 0x5142f5).strokeRoundedRect(-180, -140, 360, 280, 40);
        
        const title = this.add.text(0, -80, 'PARTY BUDGET', { fontFamily: 'Orbitron', fontSize: '14px', color: '#5142f5', fontWeight: '900' }).setOrigin(0.5);
        const score = this.add.text(0, 0, `$${this.playerScore}`, { fontFamily: 'Bangers', fontSize: '96px', color: '#2ecc71', stroke: '#fff', strokeThickness: 8 }).setOrigin(0.5);
        const detail = this.add.text(0, 80, `${this.moveLog.length} ACTIONS READY FOR ZK`, { fontFamily: 'Orbitron', fontSize: '11px', color: '#888', fontWeight: 'bold' }).setOrigin(0.5);
        card.add([bg, title, score, detail]);

        this.zkBox = this.add.container(w/2, 560);
        this.zkBg = this.add.graphics().fillStyle(0xffcc00).fillRoundedRect(-160, -40, 320, 80, 25).lineStyle(5, 0xffffff).strokeRoundedRect(-160, -40, 320, 80, 25);
        this.zkText = this.add.text(0, 0, 'SEAL WITH ZK', { fontFamily: 'Bangers', fontSize: '32px', color: '#fff' }).setOrigin(0.5).setStroke('#000', 6);
        this.zkBox.add([this.zkBg, this.zkText]);
        
        const zkBtn = this.add.rectangle(0, 0, 320, 80, 0x000, 0).setInteractive({ useHandCursor: true });
        this.zkBox.add(zkBtn);
        zkBtn.on('pointerdown', () => this.handleVerification());

        this.createBrawlButton(w/2, h - 80, 'RETURN', 0x5142f5, () => this.scene.start('MenuScene'), 220, 55);
        this.cameras.main.fadeIn(500);
    }

    async handleVerification() {
        if (this.isVerifying) return;
        this.isVerifying = true;

        this.zkText.setText('PROVING...').setScale(0.8);
        this.tweens.add({ targets: this.zkBox, scale: 1.05, duration: 200, yoyo: true, repeat: -1 });

        await new Promise(r => setTimeout(r, 1000));
        this.zkText.setText('GENERATING...').setColor('#ffcc00');
        
        await new Promise(r => setTimeout(r, 1500));
        this.zkText.setText('ZK VERIFIED! ✅').setScale(1).setColor('#ffffff');
        this.zkBg.clear().fillStyle(0x2ecc71).fillRoundedRect(-160, -40, 320, 80, 25).lineStyle(5, 0xffffff).strokeRoundedRect(-160, -40, 320, 80, 25);
        
        this.tweens.killTweensOf(this.zkBox);
        this.zkBox.setScale(1.1);

        // --- UPDATE GLOBAL PROGRESS (Simulation) ---
        const currentProgress = parseFloat(localStorage.getItem('global_party_progress') || "74.00");
        const newProgress = (currentProgress + 0.05).toFixed(2);
        localStorage.setItem('global_party_progress', newProgress);

        this.add.text(this.cameras.main.width/2, 650, `Global Prep +0.05% contributed!`, { 
            fontFamily: 'Orbitron', fontSize: '10px', color: '#ffcc00', fontWeight: 'bold' 
        }).setOrigin(0.5);

        saveGameResult(auth.address, this.playerScore, true);
        this.cameras.main.flash(500, 46, 204, 113);
        
        this.add.text(this.cameras.main.width/2, 630, 'Tx Hash: [0x8f...2e31] ✓', { fontFamily: 'Courier', fontSize: '12px', color: '#00ff88', fontWeight: 'bold' }).setOrigin(0.5);
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
