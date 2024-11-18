import { formValid } from "./form.js"
import { printColor } from "./functions.js"

const nickname = document.querySelector(".nickname")
const password = document.querySelector(".password")
const containerLogin = document.querySelector(".container-login")
const containerGeneral = document.querySelector(".container-general")


const login = document.querySelector(".button")

login.addEventListener("click", ()=>{
    formValid(nickname, password, containerLogin, containerGeneral)
})

const buttons = document.querySelectorAll(".js")
const print = document.querySelector(".print")

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const pText = button.querySelector("p").textContent
        const newDiv = document.createElement("div")
        const currentLineContainer = document.createElement("div")

        printColor(pText, newDiv, currentLineContainer, print)
        print.appendChild(newDiv);
    })
});

