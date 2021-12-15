var aux = ' ';
document.onkeydown=function(letter){
    if (letter.key == 'Backspace'){
        aux = ' ';
    }else {
        aux = aux + letter.key;
    }
    document.getElementById('letra').innerHTML = aux;

}