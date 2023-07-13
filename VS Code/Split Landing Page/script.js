const left = document.querySelector(".psContainer")
const right = document.querySelector(".xboxContainer")
const cont = document.querySelector(".container")


left.addEventListener("mouseenter", () => {
    cont.classList.add("hoverPs")
})
left.addEventListener("mouseleave", () => {
    cont.classList.remove("hoverPs")
})

right.addEventListener("mouseenter", () => {
    cont.classList.add("hoverXbox")
})
right.addEventListener("mouseleave", () => {
    cont.classList.remove("hoverXbox")
})