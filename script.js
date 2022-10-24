let clicks = 0;
let gifs = ["bobrossparrot.gif","metalparrot.gif","tripletsparrot.gif","unicornparrot.gif","revertitparrot.gif","fiestaparrot.gif","explodyparrot.gif"];
let contador = 0;
cartasSelecionadas = [];
array = [];


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
    <li class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./front 2.png" alt="">
        </div>
        <div class="back-face face">
            <img src="${cartasSelecionadas[i]}" alt="">
        </div>
    </li>`
    }
    mesa.innerHTML=baralho;
} 

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(carta){
    carta.classList.add("virada");
    array.push(carta);
    contador++;
    if(contador==2){
        if(array[0].innerHTML !== array[1].innerHTML){
        setTimeout(desvirar,2000,array[0],array[1]);
        }
        contador=0;
        array=[];
    }

    if(document.querySelectorAll(".virada").length == numero){
        setTimeout(gameOver,1000);

    }
}

function gameOver(){
    alert("fim de jogo");
    const mensagem =prompt("jogar novamente?");
    if(mensagem == "sim"){
        window.location.reload();
    }    
}



function desvirar(var1,var2){
    var1.classList.remove("virada");
    var2.classList.remove("virada");
}
