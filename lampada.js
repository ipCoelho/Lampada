"use strict"
const lampada = document.getElementById('image-lampada')

// functions
function ligarLampada() {
    lampada.src = "img/ligada.jpg"
}
function desligarLampada() {
    lampada.src = "img/desligada.jpg"
}
function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
}
// events
document.getElementById('button-ligar').addEventListener("click", ligarLampada)
document.getElementById('button-desligar').addEventListener("click", desligarLampada)
lampada.addEventListener("click", quebrarLampada)