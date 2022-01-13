// O array que armazena o roteiro tem a seguinte estrutura:
// [index da pergunta, pergunta, opção 1, index do próximo passo se escolhida a opção 1, opção 2, index do próximo passo se escolhida a opção 2]
var roteiro = [
    [0, "Depois de passar a noite vagando pela floresta, com frio e medo, Alice vê uma cabana em uma clareira. \n \n  Algo a diz para não entrar. No entanto, ela precisa de um lugar pra descansar.", "Entra na casa", 1, "Observa de longe", 4],
    [1, "A cabana está vazia.", "Dorme na cabana", 3, "Sai da cabana", 2],
    [2, "Alice sai da cabana. Ela continua caminhando na floresta. Os monstros a viram. Ela precisa fugir. \n \n Mas aí tem uma surpresa: ela vê Sérgio que tropeçou no chão e está para ser alcançado pelos monstros.", "Fugir!", 4, "Salvar Sérgio!", 5], 
    // final:
    [3, "Alice dorme na cabana. Ela descansa e segue viagem no dia seguinte."],
    [4, "Alice escapa, mas Sérgio não sobreviveu."],
    [5, "Alice salva Sérgio. Juntos, os dois conseguem fugir."]
]

// Exportando o array
export{roteiro};