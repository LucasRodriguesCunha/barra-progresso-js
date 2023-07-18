const barraDeProgresso = document.querySelector(".progresso");
const botaoDeVoltar = document.querySelector(".voltar");
const botaoDeAvancar = document.querySelector(".avançar");

let progresso = 0;

function atualizarBarraDeProgresso() {
    barraDeProgresso.style.width = progresso + "%";
}

function proximoPasso() {
    progresso += 10;
    if (progresso > 100) progresso = 100;
    atualizarBarraDeProgresso();
}

function voltarPasso() {
    progresso -= 10;
    if (progresso < 0) progresso = 0;
    atualizarBarraDeProgresso();
}


botaoDeAvancar.addEventListener("click", proximoPasso);
botaoDeVoltar.addEventListener("click", voltarPasso);