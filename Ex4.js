var contador = 0

document.getElementById('count').innerHTML = contador;

var button = document.getElementById('boton');

button.addEventListener('click', sumcount);

function sumcount (){
    contador++
    document.getElementById('count').innerHTML = contador;
}

document.onkeydown=function(letter){
    if (letter.key == 'Backspace'){
        contador = 0
        document.getElementById('count').innerHTML = contador;
    }
}