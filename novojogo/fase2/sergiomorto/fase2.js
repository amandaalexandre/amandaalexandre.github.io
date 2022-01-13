// Pega o div do botão e do texto como variável
var botao = document.getElementById("botao");
var texto = document.getElementById("texto");

var roteiro = [
    [0, "Depois de passar a noite vagando pela floresta, com frio e medo, Alice vê uma cabana em uma clareira. \n \n  Algo a diz para não entrar. No entanto, ela precisa de um lugar pra descansar.", "Entra na casa", 1, "Observa de longe", 4],
    [1, "Ao entrar na cabana, Alice vê o corpo de Sérgio.", "Dorme na cabana", 3, "Sai da cabana", 2],
    // final:
    [2, "Alice foge da cabana assustada. Nunca tinha visto um corpo tão dilacerado quanto o deu seu amigo Sérgio. \n \n Após caminhar por alguns minutos, Alice conseguiu se acalmar. \n \n Mas ela ouve sons de um animal se aproximando. \n \n Minutos depois, era Alice que estava sendo devorada."], 
    // final:
    [3, "Alice dorme na cabana. Ela descansa e segue viagem no dia seguinte."],
    [4, "Alice observa de longe a cabana. Lá, viu criaturas aterrorizantes saindo da cabana", "Espera todos saírem e entra na cabana", 1, "Segue viagem", 5],
    // final
    [5, "Alice segue viagem, mas está muito cansada. \n \n Por isso, uma das criaturas a veem. \n \n Ela não conseguiu fugir."]
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
        window.location.href = "alice"+c+".html";
    } else if (escolha == 2) {
        c = roteiro[c][5];
        console.log("O passo atual agora é: " + c);
        window.location.href = "alice"+c+".html";
    } else {
        alert("Escolha 1 ou 2.");
    }
    // console.log("Depois de avançar o jogo: O passo atual é " + c);
    // jogar(c);
}




