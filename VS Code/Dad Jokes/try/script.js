const btn = document.getElementById("jokeBtn")
const jokePara = document.getElementById("joke")


btn.addEventListener("click", () => {
    getDadJoke();
    jokePara.innerText = jokeScr;
})










const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    jokeScr = res.data.joke
}

