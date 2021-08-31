"use strict"
const lampada = document.getElementById('image-lampada')
const buttonPiscar = document.getElementById('button-piscar')

// functions
function lampadaInteira(){
    return lampada.src.includes("ligada")
}
function ligarLampada() {
    if (lampadaInteira()){
        lampada.src = "img/ligada.jpg"
    }
}
function desligarLampada() {
    if (lampadaInteira()){
        lampada.src = "img/desligada.jpg"
    }
}
function piscarLampada() {
    var intervaloLigar = setInterval(ligarLampada, 2000)
    var intervaloDesligar = setInterval(desligarLampada, 999)
    buttonPiscar.textContent = 'Parar'
    buttonPiscar.id = 'button-parar'
    document.getElementById('button-parar').addEventListener("click", pararPiscarLampada)
}
function pararPiscarLampada() {
    clearInterval(intervaloLigar)
    clearInterval(intervaloDesligar)
    desligarLampada()
    buttonPiscar.textContent = 'Piscar'
}
function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
}

// events
document.getElementById('button-ligar').addEventListener("click", ligarLampada)
document.getElementById('button-desligar').addEventListener("click", desligarLampada)
document.getElementById('button-piscar').addEventListener("click", piscarLampada)
document.getElementById('button-parar').addEventListener("click", pararPiscarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
lampada.addEventListener("mouseover", ligarLampada) // mouseover -> enquanto o mouse em cima.
lampada.addEventListener("mouseout", desligarLampada) // mouseout -> no momento que o mouse sair da área do elemento. 