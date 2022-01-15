// Pega o div do botão e do texto como variável
var botao = document.getElementById("botao");
var texto = document.getElementById("texto");

const roteiro = [
    [0, "Depois de se perder dos seus amigos, Sérgio caminha muito na floresta. Ele está com frio, fome e sede. Está desesperado por abrigo. Ele encontra uma cabana abandonada no meio dela.", "Entra na cabana", 1, "Observa a cabana de fora", 2],
    [1, "Depois de entrar, Sérgio vê que a cabana tem retratos de pessoas com véus sobre suas cabeças. Ele se sente pertubadoramente observado.", "Dorme na casa", 3, "Sai da cabana", 2],
    [2, "Ao circundar a cabana, ele ouve barulho suspeitos. Parece que tem um grupo de criaturas não-identificadas seguindo-o.", "Volta para a casa", 4, "Esconde-se", 5],
    [3, "Sérgio decide dormir na cabana. Ele demora pra se acalmar, mas está cansado o suficiente para dormir após caminhar perdido na floresta. \n \n Ao acordar, Sérgio vê que os retratos eram, na verdade, janelas.", "Sai da cabana imediatamente.", 7, "Permanece se escondendo na cabana", 8],
    [4, "Sérgio decide voltar para a cabana. Ele ouve sons suspeitos do lado de fora. A porta parece ceder à menor demonstração de força. Não tem certeza de que está protegido do que está lá fora.", "Sai da cabana", 5, "Fica na cabana", 8],
    [5, "Ele esconde-se por trás de árvores. Ele vê de longe figuras que se movem de forma esquisita, coberta pro véus brancos. Elas pareciam estar procurando por ele. \n \n Paralisado de medo, ele mal consegue se mexer.", "Procura esconderijo em outro lugar", 7, "Prende a respiração pra não ser achado", 6],
    [6, "Paralisado com tanto medo, ele fica no mesmo lugar. \n \n No entanto, ele pisa em um graveto próximo, fazendo um barulho. As figuras estão atentas o suficiente para ouvir tudo. \n \n Sérgio é encontrado pelas criaturas."],
    [7, "Sérgio continua se movendo, sempre à procura do esconderijo mais próximo. \n \n Depois de um tempo, consegue se afastar das figuras. Parece que por ora, ele escapou."],
    [8, "Depois de se encolher em um canto da cabana, Sérgio ouve a porta sendo arrombada. \n \n As figuras estavam na sua frente."]
];

function mostraTexto (a) {
        texto.innerText = roteiro[a][1];
        console.log("Texto mudado para "+ roteiro[a][1]);
};

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
        window.location.href = "sergio"+c+".html";
    } else if (escolha == 2) {
        c = roteiro[c][5];
        console.log("O passo atual agora é: " + c);
        window.location.href = "sergio"+c+".html";
    } else {
        alert("Escolha 1 ou 2.");
    }
    console.log("Depois de avançar o jogo: O passo atual é " + c);
    jogar(c);
}

// Exibe o texto incial quando carrega a página:
document.addEventListener("load", mostraTexto(0));

function jogar(index) {
    mostraTexto(index);
    clicaBotao(index);
}










