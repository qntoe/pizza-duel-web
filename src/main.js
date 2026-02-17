import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { ArenaScene } from './scenes/ArenaScene.js';
import { ResultScene } from './scenes/ResultScene.js';
import { PrepScene } from './scenes/PrepScene.js';
import { LeaderboardScene } from './scenes/LeaderboardScene.js';

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 450,
    height: 800,
    backgroundColor: '#ffffff',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 450,
        height: 800,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    scene: [BootScene, MenuScene, ArenaScene, ResultScene, LeaderboardScene],
    input: {
        activePointers: 3,
    },
};

const game = new Phaser.Game(config);

// Force portrait for our 9:16 layout
if (isMobile) {
    screen.orientation?.lock?.('portrait').catch(() => {});
}

export { game, isMobile };
