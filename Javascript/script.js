const images = [
    'assets/metalparrot.gif',
    'assets/explodyparrot.gif',
    'assets/bobrossparrot.gif',
    'assets/revertitparrot.gif',
    'assets/fiestaparrot.gif',
    'assets/tripletsparrot.gif',
    'assets/unicornparrot.gif'
]
images.sort(comparador);
function comparador(){
    return Math.random() - 0.5;
}
const primeiraColuna = document.querySelector('.primeira-coluna');
const segundaColuna = document.querySelector('.segunda-coluna');
for (let i = 0; i < images.length; i++){

primeiraColuna.innerHTML += ` 
            <div class="card1 display-none card" onclick="cartaClicada(this)" >
                <div class="front-face face"><img src="assets/cover.jpg" alt="card verde com um papagaio no centro"></div>
                <div class="back-face face"><img src="${images[i]}"  alt="crazy parrot"></div>
            </div>`
segundaColuna.innerHTML +=`
            <div class="card2 display-none card" onclick="cartaClicada(this)" >
                <div class="front-face face"><img src="assets/cover.jpg" alt="card verde com um papagaio no centro"></div>
                <div class="back-face face"><img src="${images[i]}"  alt="crazy parrot"></div>
            </div>`
}



let quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número Pare entre 4 e 14"));
while(quantidadeCartas%2 !==0 || quantidadeCartas<4 ){
    quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número Pare entre 4 e 14"));
}
let metadeQtdCartas = (quantidadeCartas/2);
const cartas1 =  document.querySelectorAll(".card1");
const cartas2 =  document.querySelectorAll(".card2");


const arrayCartas1 =  [].slice.call(cartas1);
const arrayCartas2 =  [].slice.call(cartas2);

arrayCartas1.sort(comparador);
 function comparador() { 
 	return Math.random() - 0.5; 
 }
 arrayCartas2.sort(comparador);
 function comparador() { 
 	return Math.random() - 0.5; 
 }

for(let i=0; i<metadeQtdCartas;i++){
    cartas1[i].classList.add("display");
    cartas2[i].classList.add("display");
}



function cartaClicada (opcao){
    opcao.classList.toggle('cartaClicada');
}