// Pega o div do botão e do texto como variável
var botao = document.getElementById("botao");
var texto = document.getElementById("texto");
var index = 1;

import {roteiro} from './roteiro.js';
console.log(roteiro[index][1]);

function mostraTexto (a) {
    texto.innerText = roteiro[a][1];
}
mostraTexto(index);

texto.innerText = roteiro[index][1];

function clicaBotao() {
    botao.addEventListener('click', function() {
        window.location.href="../../finais/finaltodosmortos.html";
    });
}

clicaBotao();