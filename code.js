import { formValid } from "./form.js"
import { printColor, keydown } from "./functions.js"

const nickname = document.querySelector(".nickname")
const password = document.querySelector(".password")
const containerLogin = document.querySelector(".container-login")
const containerGeneral = document.querySelector(".container-general")


const login = document.querySelector(".button")

const verification = (containerLogin, newDiv, print)=>{
    if (containerLogin.classList.contains("cl-active")) {
        keydown(newDiv, print)
    }
}

login.addEventListener("click", ()=>{
    formValid(nickname, password, containerLogin, containerGeneral)
    verification(containerLogin, newDiv, print)
})

document.addEventListener("keydown", (e)=>{
    const isHidden = getComputedStyle(containerGeneral).display === "none"
    if (isHidden) {
        if (e.key === "Enter") {
            e.preventDefault()
            formValid(nickname, password, containerLogin, containerGeneral)
        }
        verification(containerLogin, newDiv, print)
    }
})


const buttons = document.querySelectorAll(".js")
const print = document.querySelector(".print")
let newDiv = document.createElement("div")

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const pText = button.querySelector("p").textContent
        newDiv = document.createElement("div")
        const currentLineContainer = document.createElement("div")

        printColor(pText, newDiv, currentLineContainer, print)
        print.appendChild(newDiv);
    })
});