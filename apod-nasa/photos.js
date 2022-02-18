$(function() {

    $("button").click(function() {
        // $.get("https://api.nasa.gov/planetary/apod?api_key=6917575c-845c-41f2-a0cd-fd3d81b98144", mostraFoto())
        // Tentando com .ajax
        $.ajax({url: "https://api.nasa.gov/planetary/apod?api_key=6917575c-845c-41f2-a0cd-fd3d81b98144",
        success: mostraFoto,
        error: fotoDefault
    })
    })
    
    function mostraFoto() {
        console.log("mostra foto")
    }

    function fotoDefault() {
        console.log("deu erro")
    }

})