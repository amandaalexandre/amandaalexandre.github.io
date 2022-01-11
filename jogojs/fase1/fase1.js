// Inicia uma variável com o texto inicial para exibi-lo antes das escolhas começarem;
var faseintro = "Depois de se perder dos seus amigos, Sérgio caminha muito na floresta. Ele está com frio, fome e sede. Está desesperado por abrigo. Ele encontra uma cabana abandonada no meio dela.";
document.getElementById("texto").innerHTML = faseintro;

// Declara variável universal sobre o estado da personagem Sérgio;
// Ao final da fase, ele estará vivo ou morto.
var sergio;
var passoAtual = 0;

// Iniciando o jogo ao primeiro clique!
// Esta função armazena a escolha do usuário na variável global "escolha";
function jogar (passoAtual) {
    var escolha = prompt(`Opções: \n \n 1 - ${roteiro[passoAtual][2]} \n \n 2 - ${roteiro[passoAtual][4]}`);
    avancJogo(escolha, passoAtual);
}

// Função que avança o jogo de acordo com a escolha do usuário;
// Enquanto estiver no meio do jogo, continua avançando, trocando a pergunta e as opções
function avancJogo (escolha, passoAtual) {
    while (passoAtual <=5 ) {
   
        if (escolha == 1) {
            let próxPasso = roteiro[passoAtual][3];
            mudaTexto(próxPasso);
            mudaOpções(próxPasso);
            passoAtual = próxPasso;

        } else if (escolha == 2) {
            let próxPasso = roteiro[passoAtual][5];
            mudaTexto(próxPasso);
            mudaOpções(próxPasso);
            passoAtual = próxPasso;

        } else {
            alert("Digite uma opção válida.");    }
    }

    if (passoAtual==7) {
                // Dá o final bom para Sérgio
                sergio = "vivo";
                // Exibe o texto final
                document.getElementById("texto").innerHTML = roteiro[passo][1];
                // Botão vai para fase2
                document.getElementById("botao").href = "..\fase2\index.html";
                
            } else if (passoAtual==8 || passoAtual==6) {
                // Dá o final ruim para Sérgio
                sergio = "morto";
                // Exibe o texto final
                document.getElementById("texto").innerHTML = roteiro[passo][1];
                // Botão vai para fase2
                document.getElementById("botao").href = "..\fase2\index.html";
            }


}
    

// Função que muda o texto da pergunta
function mudaTexto (próxPasso) {
    document.getElementById("texto").innerHTML = roteiro[próxPasso][1];
}

// Função que muda as opções
// Quando clica no botão, exibe as opções do passo seguinte
function mudaOpções (próxPasso) {
    document.getElementById("botao").addEventListener('click', function() {
        escolha = prompt(`Opções: \n \n 1 - ${roteiro[próxPasso][2]} \n \n 2 - ${roteiro[próxPasso][4]}`);
    });
}







//     // Checa se ainda está no meio do jogo, para avançar pra próxima fase.
//     if (passo <= 5) {

//         // Exibe o texto da próxima pergunta
//         document.getElementById("texto").innerHTML = roteiro[passo][1];

//         // Botão vai pro próximo passo (não tenho ctz da ordem correta)
//         document.getElementById("botao").addEventListener('click', function() {
//             escolha = prompt(`Opções: \n \n 1 - ${roteiro[passo][2]} \n \n 2 - ${roteiro[passo][4]}`);
//             jogar(escolha);
//         });


//         // Nesta parte do condicional, checamos se já chegamos ao final da fase, e toma as providências necessárias
//     } else if (passo==7) {
//         // Dá o final bom para Sérgio
//         sergio = "vivo";
//         // Exibe o texto final
//         document.getElementById("texto").innerHTML = roteiro[passo][1];
//         // Botão vai para fase2
//         document.getElementById("botao").href = "..\fase2\index.html";
        
//     } else if (passo==8 || passo==6) {
//         // Dá o final ruim para Sérgio
//         sergio = "morto";
//         // Exibe o texto final
//         document.getElementById("texto").innerHTML = roteiro[passo][1];
//         // Botão vai para fase2
//         document.getElementById("botao").href = "..\fase2\index.html";
//     }

    
// }


// O array que armazena o roteiro tem a seguinte estrutura:
// [index da pergunta, pergunta, opção 1, index do próximo passo se escolhida a opção 1, opção 2, index do próximo passo se escolhida a opção 2]
var roteiro = [
    [0, "Depois de se perder dos seus amigos, Sérgio caminha muito na floresta. Ele está com frio, fome e sede. Está desesperado por abrigo. Ele encontra uma cabana abandonada no meio dela.", "Entra na cabana", 1, "Observa a cabana de fora", 2],
    [1, "Depois de entrar, Sérgio vê que a cabana tem retratos de pessoas com véus sobre suas cabeças. Ele se sente pertubadoramente observado.", "Dorme na casa", 3, "Sai da cabana", 2],
    [2, "Ao circundar a cabana, ele ouve barulho suspeitos. Parece que tem um grupo de criaturas não-identificadas seguindo-o.", "Volta para a casa", 4, "Esconde-se", 5],
    [3, "Sérgio decide dormir na cabana. Ele demora pra se acalmar, mas está cansado o suficiente para dormir após caminhar perdido na floresta. \n \n Ao acordar, Sérgio vê que os retratos eram, na verdade, janelas.", "Sai da cabana imediatamente.", 7, "Permanece se escondendo na cabana", 8],
    [4, "Sérgio decide voltar para a cabana. Ele ouve sons suspeitos do lado de fora. A porta parece ceder à menor demonstração de força. Não tem certeza de que está protegido do que está lá fora.", "Sai da cabana", 5, "Fica na cabana", 8],
    [5, "Ele esconde-se por trás de árvores. Ele vê de longe figuras que se movem de forma esquisita, coberta pro véus brancos. Elas pareciam estar procurando por ele. \n \n Paralisado de medo, ele mal consegue se mexer.", "Procura esconderijo em outro lugar", 7, "Prende a respiração pra não ser achado", 6],
    [6, "Paralisado com tanto medo, ele fica no mesmo lugar. \n \n No entanto, ele pisa em um graveto próximo, fazendo um barulho. As figuras estão atentas o suficiente para ouvir tudo. \n \n Sérgio é encontrado pelas criaturas."],
    [7, "Sérgio continua se movendo, sempre à procura do esconderijo mais próximo. \n \n Depois de um tempo, consegue se afastar das figuras. Parece que por ora, ele escapou."],
    [8, "Depois de se encolher em um canto da cabana, Sérgio ouve a porta sendo arrombada. \n \n As figuras estavam na sua frente."]
]
