let clicks = 0;
let gifs = ["bobrossparrot.gif","metalparrot.gif","tripletsparrot.gif","unicornparrot.gif","revertitparrot.gif","fiestaparrot.gif","explodyparrot.gif"];
let contador = 0;
cartasSelecionadas = [];
let numero = prompt("com quantas cartas deseja jogar?");
while(numero < 4 || numero > 14 || numero % 2 !== 0){
    numero = prompt("Digite um valor válido");
}

iniciar();

function iniciar() {
    for (let i = 0; i < numero/2; i++) {
      cartasSelecionadas.push(gifs[i]);
      cartasSelecionadas.push(gifs[i]);
    }
    insereCartas();
  }

function insereCartas(){
    cartasSelecionadas.sort(comparador);
    const mesa = document.querySelector(".container");
    let baralho = ``;
    for (let i = 0; i < cartasSelecionadas.length; i++) {
      baralho += `
    <div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./front 2.png" alt="">
        </div>
        <div class="back-face face">
            <img src="${cartasSelecionadas[i]}" alt="">
        </div>
    </div>`
    }
    mesa.innerHTML=baralho;
} 

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(carta){
    carta.classList.toggle("virada");
    contador++;

    if(contador==2){
        setTimeout(desvirar,2000);
        contador=0;

    }
}

function desvirar(){
    const cartas = document.querySelectorAll(".virada");
    for(let i=0;i<cartas.length;i++){
        cartas[i].classList.remove("virada");
    }
}