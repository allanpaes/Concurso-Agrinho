let agua = 0;
let hectares = 0;
let produtores = 0;

const contador = setInterval(() => {

    if (agua < 50000)
        agua += 500;

    if (hectares < 1500)
        hectares += 15;

    if (produtores < 300)
        produtores += 3;

    document.getElementById("agua").innerText = agua;
    document.getElementById("hectares").innerText = hectares;
    document.getElementById("produtores").innerText = produtores;

    if (
        agua >= 50000 &&
        hectares >= 1500 &&
        produtores >= 300
    ) {
        clearInterval(contador);
    }

}, 20);

document
.getElementById("saibaMais")
.addEventListener("click", () => {

    document
    .getElementById("sobre")
    .scrollIntoView({
        behavior: "smooth"
    });

});

function respostaCorreta() {

    document.getElementById("resultado")
    .innerHTML =
    "✅ Correto! A rotação de culturas ajuda a preservar o solo.";

}

function respostaErrada() {

    document.getElementById("resultado")
    .innerHTML =
    "❌ Incorreto. O desmatamento prejudica o meio ambiente.";

}
