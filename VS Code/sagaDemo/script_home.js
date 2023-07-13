const openBtn = document.getElementById("open")
const closeBtn = document.getElementById("close")
const circle = document.querySelector(".circle")

const nav = document.querySelector("nav")
const ul = document.querySelector("ul")
const allLi = document.querySelectorAll("li")


openBtn.addEventListener("click", () => {
    nav.classList.add("showNav")
    ul.classList.add("showUl")
    circle.classList.add("rotate")

})
closeBtn.addEventListener("click", () => {
    nav.classList.remove("showNav")
    ul.classList.remove("showUl")
    circle.classList.remove("rotate")

})