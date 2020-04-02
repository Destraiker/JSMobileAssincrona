var numero=0;
let timerId;
function ImprimirInterval(inicio,fim){
    numero=0;
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

function ImprimirTimeOut(){
    numero=0;
    var tempo=0;
    var resp=true;
    while(resp==true){
        resp=setTimeout(valor2(inicio, fim), 1000);
        //tempo=parseInt(tempo)+parseInt(1000);
        console.log(inicio,numero,resp);
    }
}
function valor2(inicio, fim){
    inicio=parseInt(inicio)+parseInt(numero);
    if(inicio<=fim){
        document.getElementById('numeros').innerHTML+=" - "+inicio;
        numero=parseInt(numero)+parseInt(1);
        return true;
    }else{
        clearInterval(timerId);
        return false;
    }
}