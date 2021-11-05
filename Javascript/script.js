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