// Pega o div do botão e do texto como variável
var botao = document.getElementById("botao");
var texto = document.getElementById("texto");

// O array que armazena o roteiro tem a seguinte estrutura:
// [index da pergunta, pergunta, opção 1, index do próximo passo se escolhida a opção 1, opção 2, index do próximo passo se escolhida a opção 2]
var roteiro = [
    [0, "Mário acorda em um lugar escuro. Depois de recobrar a consciência, percebeu que caiu num buraco estranho na noite passada, ao caminhar a esmo na escuridão. \n \n Ele vê que a caverna tem uma abertura em cima de uma pilha de rochas, enquanto ouve barulhos estranhos às suas costas.", "Investiga o barulho", 1, "Escala as rochas pra sair da caverna", 4],
    // final:
    [1, "Mário investiga a origem do barulho, quando vê um troll. \n \n Ele é devorado."],
    [2, "Mário tenta escalar as rochas. Chega quase até o final, mas seu corpo dolorido não consegue se laçar pra fora.", "Grita por socorro", 3, "Desiste e vai ver a fonte do barulho", 1], 
    // final:
    [3, "Alice e Sérgio chegam ao seu socorro! \n \n Juntos, ele têm força o suficiente para te salvar!"]
]

function clicaBotao(b) {
    var opção1 = roteiro[b][2];
    var opção2 = roteiro[b][4];
    console.log("Opções: " + opção1 + " / " + opção2);

    botao.addEventListener('click', function() {
        var escolha = prompt("Opções: \n \n 1 - " + opção1 + " \n \n 2 - " + opção2);
        console.log("Depois que clica o botão: O passo atual é " + b);
        avancJogo(escolha, b);
    });
};

function avancJogo (escolha, c) {
    if (escolha == 1) {
        c = roteiro[c][3];
        console.log("O passo atual agora é: " + c);
        window.location.href = "mario"+c+".html";
    } else if (escolha == 2) {
        c = roteiro[c][5];
        console.log("O passo atual agora é: " + c);
        window.location.href = "mario"+c+".html";
    } else {
        alert("Escolha 1 ou 2.");
    }
    // console.log("Depois de avançar o jogo: O passo atual é " + c);
    // jogar(c);
}




