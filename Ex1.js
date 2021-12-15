document.bgColor = 'green';

var button = document.getElementById('boton');

button.addEventListener('mousedown', down);
button.addEventListener('mouseup', up);

function down (){
    document.bgColor = 'blue';
}

function up (){
    document.bgColor = 'orange';
}