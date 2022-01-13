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

// Exportando o array
export{roteiro};