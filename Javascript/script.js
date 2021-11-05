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
    return Math.random() -0.5;
}
const primeiraColuna = document.querySelector('.primeira-coluna');
const segundaColuna = document.querySelector('.segunda-coluna');
let quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número Pare entre 4 e 14"));
while(quantidadeCartas%2 !==0 || quantidadeCartas<4 ){
    quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número Pare entre 4 e 14"));
}
let metadeQtdCartas = (quantidadeCartas/2);

for (let i = 0; i < metadeQtdCartas; i++){
    primeiraColuna.innerHTML += ` 
                <div class="card1 display-none card" onclick="cartaClicada(this)" >
                    <div class="front-face face"><img src="assets/cover.jpg" alt="card verde com um papagaio no centro"></div>
                    <div class="back-face face"><img src="${images[i]}"  alt="crazy parrot"></div>
                </div>`
}
for(let i = metadeQtdCartas-1; i >=0 ; i--){
    segundaColuna.innerHTML +=`
            <div class="card2 display-none card" onclick="cartaClicada(this)" >
                <div class="front-face face"><img src="assets/cover.jpg" alt="card verde com um papagaio no centro"></div>
                <div class="back-face face"><img src="${images[i]}"  alt="crazy parrot"></div>
            </div>`
}





const cartas1 =  document.querySelectorAll(".card1");
const cartas2 =  document.querySelectorAll(".card2");



for(let i=0; i<metadeQtdCartas;i++){
    cartas1[i].classList.add("display");
}
for(let i = metadeQtdCartas-1; i >=0 ; i--){
    cartas2[i].classList.add("display");
}


function cartaClicada (opcao){
    opcao.classList.toggle('cartaClicada');
}