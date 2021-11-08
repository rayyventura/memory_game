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

let quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número Par entre 4 e 14"));
while(quantidadeCartas%2 !==0 || quantidadeCartas<4 || quantidadeCartas>14){
    quantidadeCartas = parseInt(prompt("Você não digitou um número Válido! Escolha um número PAR entre 4 e 14"));
}
let metadeQtdCartas = (quantidadeCartas/2);



for (let i = 0; i < metadeQtdCartas; i++){
    primeiraColuna.innerHTML += ` 
                <div class="card1 display-none card ${images[i]}"  onclick="cartaClicada(this)"  >
                    <div class="front-face face"><img src="assets/cover.jpg" alt="card verde com um papagaio no centro"></div>
                    <div class="back-face face"><img src="${images[i]}"  alt="crazy parrot"></div>
                </div>`
}
for(let i = metadeQtdCartas-1; i >=0 ; i--){
    segundaColuna.innerHTML +=`
            <div class="card2 display-none card ${images[i]}"  " onclick="cartaClicada(this)">
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
let primeiraCarta, segundaCarta;

contador=0;
function cartaClicada (opcao){
    opcao.classList.add('carta-clicada');
    if(primeiraCarta==null){
        primeiraCarta = opcao;
        return false;
    }
     segundaCarta=opcao;
     setTimeout(cartaMatch,1000);
     contador++;
     setTimeout(jogoFinalizado,500);
    }
    
function cartaMatch(){
    const match=primeiraCarta.classList.item(3)===segundaCarta.classList.item(3);
    if(!match){
        primeiraCarta.classList.remove("carta-clicada");
        segundaCarta.classList.remove("carta-clicada");
    }
    primeiraCarta=null;
    segundaCarta=null;
    
}
let jogarNovamente=''
function jogoFinalizado(){
    const cartasClicadas1 = primeiraColuna.querySelectorAll(".carta-clicada").length;
    const cartasClicadas2 = segundaColuna.querySelectorAll(".carta-clicada").length;
    if(cartasClicadas1+cartasClicadas2===quantidadeCartas){
        const mensagemDeVitoria = `Você ganhou com ${contador*2} jogadas em ${tempo} segundos!`;
        alert(mensagemDeVitoria);
        clearInterval(id);
        jogarNovamente=prompt('Quer Jogar novamente? Então digite "sim"').toLowerCase();

    }
    if(jogarNovamente==='sim'){
        window.location.reload();
    }else if(cartasClicadas1+cartasClicadas2===quantidadeCartas){
        const fundoEsmaecido=document.querySelector(".fundo-esmaecido");
        fundoEsmaecido.classList.add('display');
    }
}
const cronometro = document.querySelector('.cronometro');
let tempo=0;
function cronometrar(){
    tempo++;
    cronometro.innerHTML=tempo;
}
const id=setInterval(cronometrar,1000);
