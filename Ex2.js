document.onkeydown=function(letter){
    document.getElementById('letra').innerHTML=letter.key;
}

document.onkeyup=function(){
    document.getElementById('letra').innerHTML=' ';
}