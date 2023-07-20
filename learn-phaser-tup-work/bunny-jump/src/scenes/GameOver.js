import Phaser from "../lib/phaser.js"

export default class GameOver extends Phaser.Scene {
    constructor() {
        super("game-over")
    }

    preload() {
        this.load.image("deadBunny", "assets/Players/bunny1_hurt.png")

        this.load.audio("lose", "assets/Audio/jingles_NES00.ogg")
    }

    create() {
        const width = this.scale.width
        const height = this.scale.height

        this.add.text(width * 0.5, height * 0.5, "Game Over", {
            fontSize: 48
        })
        .setOrigin(0.5)
       
        this.add.text(width * 0.5, height * 0.58, "Press 'Space' to Restart", {
            fontSize: 30
        })
        .setOrigin(0.5)

        this.add.image(240, 170, "deadBunny")
            .setScale(0.7)

        this.sound.play("lose")

        this.input.keyboard.once("keydown-SPACE", () => {
            this.scene.start("game")
        })
    }
}