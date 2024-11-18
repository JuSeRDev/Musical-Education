const printColor = (param, newDiv, currentLineContainer, print)=>{
    switch (param) {
        case "DO/C":
            newDiv.classList.add("do");
            newDiv.innerHTML = param;
            break;
        case "DO#/C#":
            newDiv.classList.add("doS");
            newDiv.innerHTML = param;
            break;
        case "RE/D":
            newDiv.classList.add("re");
            newDiv.innerHTML = param;
            break;
        case "RE#/D#":
            newDiv.classList.add("reS");
            newDiv.innerHTML = param;
            break;
        case "MI/E":
            newDiv.classList.add("mi");
            newDiv.innerHTML = param;
            break;
        case "FA/F":
            newDiv.classList.add("fa");
            newDiv.innerHTML = param;
            break;
        case "FA#/F#":
            newDiv.classList.add("faS");
            newDiv.innerHTML = param;
            break;
        case "SOL/G":
            newDiv.classList.add("sol");
            newDiv.innerHTML = param;
            break;
        case "SOL#/G#":
            newDiv.classList.add("solS");
            newDiv.innerHTML = param;
            break;
        case "LA/A":
            newDiv.classList.add("la");
            newDiv.innerHTML = param;
            break;
        case "LA#/A#":
            newDiv.classList.add("laS");
            newDiv.innerHTML = param;
            break;
        case "SI/B":
            newDiv.classList.add("si");
            newDiv.innerHTML = param;
            break;
        case "Space":
            newDiv.classList.add("space")
            break
        case "Enter":
            currentLineContainer.classList.add("line-container");
            print.appendChild(currentLineContainer)
            break
        case "Back":
            removeLastNote(print)
            break
        case "Clear":
            clearAllNotes(print)
        default:
            console.log("Nota no válida");
            return; 
    }
}

// Elimina el último div creado cada vez que se llama
const removeLastNote = (print) => {
    // Buscar el último elemento que no sea una línea contenedora
    const allNotes = Array.from(print.querySelectorAll('.do, .doS, .re, .reS, .mi, .fa, .faS, .sol, .solS, .la, .laS, .si, .space'));
    
    if (allNotes.length > 0) {
        const lastNote = allNotes[allNotes.length - 1]; // El último div (nota)
        lastNote.remove(); // Elimina el último div
    }
};

// Elimina todos los divs creados
const clearAllNotes = (print) => {
    print.innerHTML = "";
};

const keydownFunc = (e, newDiv, classes, print)=>{
    e.preventDefault()
    newDiv = document.createElement("div")
    newDiv.classList.add(classes)
    print.appendChild(newDiv);
}

const spacebar = (newDiv, print)=>{
    document.addEventListener("keydown", (e)=>{
        if (e.key === " ") {
            keydownFunc(e, newDiv, "space", print)
        } else if (e.key === "Enter"){
            keydownFunc(e, newDiv, "line-container", print)
        }else if (e.key === "Backspace"){
            removeLastNote(print)
        }
    })
}


export {printColor, spacebar}