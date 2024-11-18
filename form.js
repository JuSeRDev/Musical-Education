const user = "laurraca"
const pass = "laurraca parlanchina 12"

const formValid = (nickname, password, add, active)=>{
    if (nickname.value === user && password.value === pass) {
        add.classList.toggle("cl-active")
        active.style.display = "flex"
    }
    else {
        alert("error de usuario o contraseña")
    }
}

export {formValid}