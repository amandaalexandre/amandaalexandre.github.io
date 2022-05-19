let singleDrop;
let numDrops = 100;

for (let i = 0; i<numDrops; i++) {
    singleDrop = document.createElement("div");
    singleDrop.className = "chuva";
    // Gera um posicionamento à esquerda aleatório para as gotas
    // Generates a random left positioning for each drop
    singleDrop.style.left = Math.floor(Math.random()*window.innerWidth) + "px";
    singleDrop.style.animationDuration = 0.2 + Math.random()*0.3 + "s";
    singleDrop.style.animationDelay = Math.random()*5+"s";

    document.body.appendChild(singleDrop);

}