$(document).ready (function () {
    let botao = document.querySelector("#enviar");

    // Com Ajax:
    let requisicao = new XMLHttpRequest();
    requisicao.open("GET", "https://pokeapi.co/docs/v2/pokemon");
    requisicao.send();

    $(botao).click(function() {
        let nome = document.querySelector(".input-texto").value.toLowerCase();

        // Usa o template literal para construir a URL a ser requisitada
        let url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

        // Testa se a requisição foi um sucesso ou não
        if (requisicao.status == 200) {
            console.log("requisição ok")
            mostraFigura(data)
        } else {
            console.log("requisição não ok")
        }
    })

    function mostraFigura(objPokemon) {
        const imagemEmAcao = `
        <img src="${objPokemon.sprites.front_default}">
        `;

        const circulo = document.querySelector(".circulo")

        circulo.innerHTML = imagemEmAcao;
    }
})

// requisicao.onload = function() {
//     if(requisicao.status == 200) {
//     response = requisicao.response;
//     responseObj = JSON.parse(response);
//     console.log(responseObj[0].name.first);
//     }
//     }
