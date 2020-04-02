function Caregar(){
    document.getElementById('caregando').style.display="block";
    setTimeout(acao, 500);
}
function acao(){
    document.getElementById('caregando').style.display="none";
    document.getElementById('paragrafo').innerHTML="Carregado com sucesso";
}


