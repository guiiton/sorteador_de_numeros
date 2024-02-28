function sortear(){
    let quantidade =    parseInt(document.getElementById('quantidade').value);
    let de =            parseInt(document.getElementById('de').value);
    let ate =           parseInt(document.getElementById('ate').value);

while(!quantidade || !de || !ate) {
    alert('Por favor, preencha todos os valores corretamente para efetuar o sorteio.');
    return;
}

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número"');
        return;
    }

if( ((ate - de) - quantidade) < 0) {
    alert('Intervalo é menor que o número selecionado, por favor altere.')
    return;
}
    let sorteados = [];
    let numero;


    for (let i = 0; i < quantidade ; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
}

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
}

function obterNumeroAleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoSortear() {
    let botaoSortear = document.getElementById('btn-sortear');

    if( botaoSortear.classList.contains('container__botao')) {
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    } else {
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    }
}

function alterarStatusBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if( botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
   } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');


    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
}
