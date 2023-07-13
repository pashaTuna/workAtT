const sounds = ["guitar", "drum", "piano","bass", "buzzer", "slot"]

sounds.forEach(sound => {

    const btn = document.createElement("button")
    btn.classList.add("btn")


    btn.innerText = sound
    btn.addEventListener("click", () => {
        stopSound()

        document.getElementById(sound).play()
    })

    document.querySelector(".board").appendChild(btn)
})


function stopSound() {
    sounds.forEach(sound => {
        const playingSound = document.getElementById(sound)
        playingSound.pause()
        playingSound.currentTime = 0;

    })
} 