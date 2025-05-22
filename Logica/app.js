let numeroSecreto = gerarNumero(); 

function exibirTexto(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Numero Secreto');
exibirTexto('p', 'entre 1 e 10');

function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    console.log(numeroSecreto)
}

