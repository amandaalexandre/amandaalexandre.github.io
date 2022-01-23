var botao = document.getElementById('botaoEnviar');
var code = document.getElementById('code');
var decode = document.getElementById('decode');

// Inicia o botão com o valor de Codificar
botao.innerText = "Codificar!";

// Função que muda o conteúdo do botão
function mudaBotao () {
    if (decode.checked) {
        botao.innerText = "Decodificar!";
    } else if (code.checked) {
        botao.innerText = "Codificar!";
    }
}

// Mostrando o incremente se "César for selecionado"
var cesar = document.getElementById('cesar');
var inc = document.getElementById('incremento');

cesar.addEventListener('change', mostraInc());

function mostraInc() {
    // Troca o display da div que contém o incremento:
    if (cesar.checked) {
        inc.style.display = "block";
    } else {
        inc.style.display = "none";
    }
}

    
