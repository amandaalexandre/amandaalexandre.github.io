// Pega o div do botão e do texto como variável
var botao = document.getElementById("botao");
var texto = document.getElementById("texto");

import {roteiro} from '../fase1/roteiro.js';
console.log(roteiro[0][1]);

function mostraTexto (a) {
    texto.innerText = roteiro[a][1];
}

// Pega a escolha quando clica no botão e dá o valor pra variável 'escolha'
function clicaBotao(b) {
    var opção1 = roteiro[b][2];
    var opção2 = roteiro[b][4];

    botao.addEventListener('click', function() {
        var escolha = prompt(`Opções: \n \n 1 - ${opção1} \n \n 2 - ${opção2}`);
        console.log("O passo atual é " + b);
        avancJogo(escolha);
    });
}

function avancJogo (escolha) {
    if (escolha == 1) {
        index = roteiro[index][3];
        console.log("O passo atual agora é: " + index);
        window.location.href = "alice"+index+".html";
    } else if (escolha == 2) {
        index = roteiro[index][5];
        console.log("O passo atual agora é: " + index);
        window.location.href = "alice"+index+".html";
    } else {
        alert("Escolha 1 ou 2.");
    }
}

var index = 0;
mostraTexto(index);
clicaBotao(index);



