const servicios = document.getElementsByClassName('cont-servicio');
const textServ = document.getElementsByClassName('text-servicio');
const textActivo = document.getElementsByClassName('mostrartexto');

for(let i = 0; i < servicios.length; i++){
    servicios[i].addEventListener('click', function(){
        
        if(textServ[i].classList.contains('mostrartexto')){
            textServ[i].classList.remove('mostrartexto');
            
        }else{
        for(let i = 0; i < textActivo.length; i++){
            textActivo[i].classList.remove('mostrartexto');
        }
        textServ[i].classList.add('mostrartexto');  }
        
    });
}



console.log("servicioWork");