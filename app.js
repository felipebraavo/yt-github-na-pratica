document.addEventListener('DOMContentLoaded', function(evento){
    criaElemento();
});

function criaElemento(){
  var container = document.querySelector(".container");

  var playcode = document.createElement('div');
    playcode.setAttribute('class' , 'js-div');
    playcode.innerHTML='playcode';

  container.appendChild(playcode);
}
