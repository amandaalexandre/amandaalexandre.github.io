// O array que armazena o roteiro tem a seguinte estrutura:
// [index da pergunta, pergunta, opção 1, index do próximo passo se escolhida a opção 1, opção 2, index do próximo passo se escolhida a opção 2]
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

// Exportando o array
export{roteiro};