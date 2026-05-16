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

console.log("aaaaaaaaaaaaaa")
function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"
    deleteBtn.className = "btn-delete"

    deleteBtn.addEventListener("click", (deleteBtn) => {
        const item_ul = deleteBtn.target.parentElement;
        const item = ul
        console.log(item)
        const eliminar = jugadores2.indexOf()
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
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let audio = new Audio('./sonido.mp3');

play.addEventListener('click', () => {
    audio.play();
})
pause.addEventListener ('click', () =>{
    audio.pause();
  })
/* PARTE PATOS */