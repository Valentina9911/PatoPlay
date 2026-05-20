const btn = document.getElementById("submit")
let startGame = document.getElementById("start")
let jugadores = JSON.parse(sessionStorage.getItem("items"));

let ganador;

var delayInMilliseconds = 10000;
var delayInMilliseconds2 = 14000;
var delayInMilliseconds3 = 15000;


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function quienGana() {
    ganador = randomIntFromInterval(1, jugadores.length)
    console.log("El ganador es" + ganador)
    document.getElementById(ganador).className = 'ganador'
}

function removePato() {
    let deletePato = document.querySelector('p')
    let deletePato2 = deletePato.innerHTML
    let index = jugadores.indexOf(deletePato2)
    console.log("jugadores antes del splice" + jugadores)
    jugadores.splice(index, 1)

    console.log("Saque al jugador " + deletePato2 + index + "Los jugadores que quedan: " + jugadores)
}
/*lista*/
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

/*xx*/
startGame.addEventListener("click", () => {
    console.log("Se oprimio el boton start")
    if (jugadores.length == 0) {
        alert("Se acabaron los jugadores")
    }
    else {

        console.log("Los jugadores esta ronda son: " + jugadores)
        const element2 = document.getElementById("pato1")
        let dataHTML1 = ""
        let dataHTML2 = "";
        element2.innerHTML = dataHTML1
        for (let index = 0; index < jugadores.length; index++) {
            let newStyle = (index * 30 - 90)

            dataHTML2 += `
        <div id="${index + 1}" class="patoF">
            <div class="pato" id="llegueAlFinal" style="top: ${newStyle}px;">
                <div class="imgPato">
                    <img src="./Imagenes Js1/Picture1.png" alt="">
                </div>
                <div class="namePato">
                    <p>${jugadores[index]}</p>
                </div>
            </div>
        </div>
        `;

            element2.innerHTML = dataHTML2
        }
        for (let index = 0; index < jugadores.length; index++) {
            let cambio = document.querySelector(".pato")
            cambio.className = `child_containerMovement${randomIntFromInterval(1, 5)}`;
        }
        quienGana()

        setTimeout(function () {
            const loosers = document.getElementsByClassName("patoF")
            const length = loosers.length

            for (let index = 0; index < length; index++) {
                loosers[0].className = "child_containerOut"
            }
        }, delayInMilliseconds);

        setTimeout(function hide() {
            const loosers2 = document.getElementsByClassName("child_containerOut")
            const length2 = loosers2.length

            for (let index = 0; index < length2; index++) {
                loosers2[0].remove()
            }
        }, delayInMilliseconds2);

        setTimeout(function moveWinner() {
            const winner = document.getElementsByClassName("ganador")
            const stopMoving = document.getElementById("llegueAlFinal")
            stopMoving.className = ""
            winner[0].className = "movePodium"
            removePato()

        }, delayInMilliseconds3);
    }

});

/* window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
}); */