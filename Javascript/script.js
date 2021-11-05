const quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número Pare entre 4 e 14"));
while(quantidadeCartas%2 !==0 ){
    quantidadeCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número Pare entre 4 e 14"));
}

function cartaClicada (opcao){
    opcao.classList.toggle('cartaClicada')
}