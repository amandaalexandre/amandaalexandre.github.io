var botao = document.querySelector("#enviar");

$(document).ready (function () {
    $(botao).click(function() {
        let nome = document.querySelector(".input-texto").value.toLowerCase();

        // Usa o template literal para construir a URL a ser requisitada
        let url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

        // Usando o fetch para conseguir a informação
        fetch(url)

        // Transforma a promise em um JSON
        .then( (data) => data.json() )

        // Chama uma função que mostra a figura tendo o JSON como parâmetro
        .then( (pokemon) => mostraFigura(pokemon) );
    })

    function mostraFigura(objPokemon) {
        const imagemEmAcao = `
        <img src="${objPokemon.sprites.front_default}">
        `;

        const circulo = document.querySelector(".circulo")

        circulo.innerHTML = imagemEmAcao;
    }
})


