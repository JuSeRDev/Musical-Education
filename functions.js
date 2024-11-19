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


const addNote = (noteClass, noteContent, print, newDiv)=>{
    newDiv = document.createElement("div")
    newDiv.classList.add(noteClass)
    newDiv.innerHTML = noteContent
    print.appendChild(newDiv)
}

const keydown = (newDiv, print)=>{
    document.addEventListener("keydown", (e)=>{
        switch (e.key) {
            case " ":
                keydownFunc(e, newDiv, "space", print)
                break;
            case "Backspace":
                removeLastNote(print)
                break
            case "Enter":
                keydownFunc(e, newDiv, "line-container", print)
                break
            case "c":
                addNote("do", "DO/C", print, newDiv)
                break
            case "C":
                addNote("doS", "DO#/C#", print, newDiv)
                break
            case "d":
                addNote("re", "RE/D", print, newDiv)
                break
            case "D":
                addNote("reS", "RE#/D#", print, newDiv)
                break
            case "e":
                addNote("mi", "MI/E", print, newDiv)
                break
            case "f":
                addNote("fa", "FA/F", print, newDiv)
                break
            case "F":
                addNote("faS", "FA#/F#", print, newDiv)
                break
            case "g":
                addNote("sol", "SOL/G", print, newDiv)
                break
            case "G":
                addNote("solS", "SOL#/G#", print, newDiv)
                break
            case "a":
                addNote("la", "LA/A", print, newDiv)
                break
            case "A":
                addNote("laS", "LA#/A#", print, newDiv)
                break
            case "b":
                addNote("si", "SI/B", print, newDiv)
                break
            default:
                break;
        }
    })
}




export {printColor, keydown}