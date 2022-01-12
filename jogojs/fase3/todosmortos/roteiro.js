// O array que armazena o roteiro tem a seguinte estrutura:
// [index da pergunta, pergunta, opção 1, index do próximo passo se escolhida a opção 1, opção 2, index do próximo passo se escolhida a opção 2]
var roteiro = [
    [0, "Mário acorda em um lugar escuro. Depois de recobrar a consciência, percebeu que caiu num buraco estranho na noite passada, ao caminhar a esmo na escuridão. \n \n Ele vê que a caverna tem uma abertura em cima de uma pilha de rochas, enquanto ouve barulhos estranhos às suas costas.", "Investiga o barulho", 1, "Escala as rochas pra sair da caverna", 4],
    // final:
    [1, "Mário investiga a origem do barulho, quando vê um troll. \n \n Ele é devorado."],
    [2, "Mário tenta escalar as rochas. Chega quase até o final, mas seu corpo dolorido não consegue se laçar pra fora.", "Grita por socorro", 3, "Desiste e vai ver a fonte do barulho", 1], 
    // final:
    [3, "Ninguém chega ao seu socorro. \n \n Você cai e morre na queda."]
]

// Exportando o array
export{roteiro};