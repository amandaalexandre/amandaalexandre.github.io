const links = ["link1.html", "link2.html", "link3.html", "link4.html"]

var corpoDoTexto = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]

var foto = document.querySelector(".foto-menor");
var descricao = document.querySelector(".foto-descricao")

function mudaLink(i) {
    foto.innerHTML = `<img src="img/${i}.jpg">`;
    descricao.innerHTML = `<h3>Link ${i+1}</h3>
    <br>
    <br>
    ${corpoDoTexto[i]}
    <br><br>
    <a href="${links[i]}" class="link-botao-cinza">Mais</a>`;

}

mudaLink(0);