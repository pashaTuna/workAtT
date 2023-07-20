import Phaser from "../lib/phaser.js"

import carrotsCollected from "./Game.js"

carrotsCollected

export default class RandomEvent extends Phaser.Scene {
    constructor() {
        super("random-event")
    }

    init(data) {
        this.carrotsCollected = data.carrotNumber;
    }

    preload() {
        this.load.image("deadBunny", "assets/Players/bunny1_hurt.png")

        this.load.image("green-button", "assets/Buttons/bunny1_stand.png")

    }

    create() {
        const width = this.scale.width
        const height = this.scale.height

        this.add.image(240, 170, "deadBunny")
            .setScale(0.7)

        this.add.text(width * 0.5, height * 0.5, `Carrots: ${this.carrotsCollected}`, {
            fontSize: 48
        })
            .setOrigin(0.5)

        this.add.image(240, 450, "green-button")
            .setScale(0.3)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.scene.start("game")
            })
    }
}