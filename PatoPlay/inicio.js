/*ajuste*/
/*botones*/
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
    location.reload();
})
/*sonido*/
let play = document.getElementById ('play');
let pause = document.getElementById ('pause');
let audio = new Audio ('./audio.mp3');

play.addEventListener ('click', () =>{
  audio.play();
})
/*tuerca*/
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