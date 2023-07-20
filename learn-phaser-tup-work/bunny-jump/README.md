# How To Create Random Events

## First
create new scene (RandomEvent.js)

random event triggered at random time (time dependend)

at Game.js (under create())
        const randomEventDelay = Phaser.Math.Between(300000,600000)
        this.time.addEvent({
            delay: randomEventDelay,
            loop: true,
            callback: () => {
                this.scene.start("random-event", {carrotNumber: this.carrotsCollected})
            }
        })
This calls random event scene between 5-10 min delay

We need to pass carrotsCollected data form Game.js to RandomEvent.js because during random events carrot number will be important. {carrotNumber: this.carrotsCollected} this part added to obtain this.
https://stackoverflow.com/questions/53356039/how-do-i-pass-data-from-scene-to-scene-in-phaser-3


## Second

Button added for return to game scene to rondom event scene (under create())

        this.add.image(240, 450, "green-button")
            .setScale(0.3)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.scene.start("game")
            })

https://www.youtube.com/watch?v=xOW7Er9n1jY

## Third

Healt bar

https://blog.ourcade.co/posts/2020/animated-health-bar-phaser-3/

