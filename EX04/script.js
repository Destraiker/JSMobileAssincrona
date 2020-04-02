var numero=0;
let timerId;
function Imprimir(inicio,fim){
    timerId =setInterval(()=> valor(parseInt(inicio),fim),1000);
}
function valor(inicio, fim){
    inicio=parseInt(inicio)+parseInt(numero);
    if(inicio<=fim){
        document.getElementById('numeros').innerHTML+=" - "+inicio;
        numero=parseInt(numero)+parseInt(1);
    }else{
        clearInterval(timerId);
    }
}