"use strict"
const lampada = document.getElementById('image-lampada')
const buttonPiscar = document.getElementById('button-piscar')
let idInterval 

// functions
function lampadaInteira() {
    return lampada.src.includes("ligada")
}

function ligarLampada() {
    if (lampadaInteira()){
        lampada.src = "img/ligada.jpg"
    }
}

function desligarLampada() {
    if (lampadaInteira()) {
        lampada.src = "img/desligada.jpg"
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
}

function lampadaDesligada() {
    return lampada.src.includes('desligada')
}

function pararPiscar() {
    clearInterval(idInterval)
}

function trocarImagem() {
    if (lampadaDesligada()) {
        ligarLampada()
    } else {
        desligarLampada()
    }
}

function piscarLampada() {
    const piscar = document.getElementById('button-piscar')
    if (piscar.textContent == 'Piscar') {
        idInterval = setInterval(trocarImagem, 1000)
        piscar.textContent = 'Parar'
    } else {
        pararPiscar()
        piscar.textContent = 'Piscar'
    }

}


// events
document.getElementById('button-ligar').addEventListener("click", ligarLampada)
document.getElementById('button-desligar').addEventListener("click", desligarLampada)
document.getElementById('button-piscar').addEventListener("click", piscarLampada)
// document.getElementById('button-parar').addEventListener("click", pararPiscarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
lampada.addEventListener("mouseover", ligarLampada) // mouseover -> enquanto o mouse em cima.
lampada.addEventListener("mouseout", desligarLampada) // mouseout -> no momento que o mouse sair da área do elemento. 