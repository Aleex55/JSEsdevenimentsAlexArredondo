var aux = "";
document.onkeydown=function(letter){
    if (letter.key == 'Backspace'){
        aux = "";
    }else {
        aux = aux + letter.key;
    }
    document.getElementById('letra').innerHTML = aux;
    if (aux == "esketit"){
        window.open("https://www.youtube.com/watch?v=iSIcWKEVQIw&t=0s");
    }

}