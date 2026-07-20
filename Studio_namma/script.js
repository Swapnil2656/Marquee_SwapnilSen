let menudiv = document.querySelector(".menu")
let click = document.querySelector("#menuClick")
let flag = 0

click.addEventListener("click", () => {
    if (!flag) {
        menudiv.style.top = "0%"
        menudiv.style.transition = "linear 0.5s"
        menudiv.style.rotate = "10deg"
        flag = 1
    }
    else {
        menudiv.style.top = "-100%"
        menudiv.style.transition = "linear 0.5s"
        flag = 0
    }
})
let card = document.querySelector(".cardfollower")
document.addEventListener("mousemove", (e) => {
        card.style.top = e.clientY + "px"
        card.style.left = e.clientX + "px"
        card.style.transition = "linear 0.3s"
    })

let dot = document.querySelector(".cursor-dot")
let creative = document.querySelector(".creative-studio")
document.addEventListener("mousemove", (e) => {
    dot.style.top = e.clientY + "px"
    dot.style.left = e.clientX + "px"
    dot.style.transition = "linear 0.3s"
})    

