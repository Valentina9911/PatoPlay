let boton = document.getElementById("cerrar")
let tuerca = document.getElementById("tuerca")


tuerca.addEventListener("click", () => {
    let elemento = document.getElementById("window-notice")
    elemento.className = "window-notice"
})

boton.addEventListener("click", () => {
    let elemento = document.getElementById("window-notice")
    elemento.className = "window-notice-hide"
})
/*Lista*/


let jugadores2 = []
const addBtn = document.getElementById("submit")
console.log(addBtn)
const ul = document.querySelector("ul")

const empty = document.querySelector(".empty")
const input = document.querySelector("input")

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value
    jugadores2.push(text)
    window.sessionStorage.setItem("items", JSON.stringify(jugadores2));
    console.log(jugadores2)
    if (text !== "") {
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.textContent = text

        li.appendChild(p)
        li.appendChild(addDeleteBtn())
        ul.appendChild(li)


        input.value = "";
        empty.style.display = "none";
    }
})

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X"
    deleteBtn.className = "btn-delete"
    console.log("aaaaaaaaaaa")

    deleteBtn.addEventListener("click", (deleteBtn) => {
        
        
        const item_ul = deleteBtn.target.parentElement;
        console.log(item_ul)
        let inner1 = item_ul.innerText
        console.log(inner1)
        let justName = inner1.replace("X","")
        
        let justNameNoSpace = justName.replace(/(\r\n|\r|\n)/g,"")
        console.log(justNameNoSpace)
        const item = ul

        const eliminar = jugadores2.indexOf(justNameNoSpace)
        console.log(eliminar)
        jugadores2.splice(eliminar, 1)
        console.log(jugadores2)
        window.sessionStorage.setItem("items", JSON.stringify(jugadores2));
        ul.removeChild(item_ul)
        const items = document.querySelectorAll("li")
        if (items.length == 0) {
            empty.style.display = "block";
        }
    })
    return deleteBtn
}
/*botones*/
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
    location.reload();
})
/*sonido*/
let play = document.getElementById ('play');
let pause = document.getElementById ('pause');
let audio = new Audio ('./sonido.mp3');

play.addEventListener ('click', () =>{
  audio.play();
})
pause.addEventListener ('click', () =>{
  audio.pause();
})
/* PARTE PATOS */
