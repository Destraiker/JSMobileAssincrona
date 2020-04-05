var numero = 0;
let timerId;
function ImprimirInterval(inicio, fim) {
    numero = 0;
    timerId = setInterval(() => valor(parseInt(inicio), fim), 1000);
}
function valor(inicio, fim) {
    inicio = parseInt(inicio) + parseInt(numero);
    if (inicio <= fim) {
        document.getElementById('numeros').innerHTML += " - " + inicio;
        numero = parseInt(numero) + parseInt(1);
    } else {
        clearInterval(timerId);
    }
}

function ImprimirTimeOut(inicio, fim) {
    var tempo = 0;
    for(var i=inicio;i<=fim;i++){
        inicio=parseInt(i);
        setTimeout(valor2, tempo,inicio);
        tempo = parseInt(tempo) + parseInt(1000);
        console.log(inicio, fim);
    }
}

function valor2(inicio) {
    document.getElementById('numeros').innerHTML += " - " + inicio;
    numero = parseInt(numero) + parseInt(1);
}