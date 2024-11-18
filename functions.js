const printColor = (param, newDiv, currentLineContainer, print)=>{
    switch (param) {
        case "DO":
            newDiv.classList.add("do");
            newDiv.innerHTML = param;
            break;
        case "DO#":
            newDiv.classList.add("doS");
            newDiv.innerHTML = param;
            break;
        case "RE":
            newDiv.classList.add("re");
            newDiv.innerHTML = param;
            break;
        case "RE#":
            newDiv.classList.add("reS");
            newDiv.innerHTML = param;
            break;
        case "MI":
            newDiv.classList.add("mi");
            newDiv.innerHTML = param;
            break;
        case "FA":
            newDiv.classList.add("fa");
            newDiv.innerHTML = param;
            break;
        case "FA#":
            newDiv.classList.add("faS");
            newDiv.innerHTML = param;
            break;
        case "SOL":
            newDiv.classList.add("sol");
            newDiv.innerHTML = param;
            break;
        case "SOL#":
            newDiv.classList.add("solS");
            newDiv.innerHTML = param;
            break;
        case "LA":
            newDiv.classList.add("la");
            newDiv.innerHTML = param;
            break;
        case "LA#":
            newDiv.classList.add("laS");
            newDiv.innerHTML = param;
            break;
        case "SI":
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
    } else {
        console.log("No hay notas para eliminar.");
    }
};



// Elimina todos los divs creados
const clearAllNotes = (print) => {
    print.innerHTML = "";
};


export {printColor}