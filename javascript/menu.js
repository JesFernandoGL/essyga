const btnMenu = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const lin1 = document.querySelector('.lin1');
const lin2 = document.querySelector('.lin2');
const lin3 = document.querySelector('.lin3');


btnMenu.addEventListener('click', moverMenu);


function moverMenu(){
    if(nav.classList.contains('mostrar')){
        nav.classList.remove('mostrar');
        lin1.classList.remove('close1');
        lin2.classList.remove('close2');
        lin3.classList.remove('close3');
    }else{
        nav.classList.add('mostrar');
        lin1.classList.add('close1');
        lin2.classList.add('close2');
        lin3.classList.add('close3');
    }

}

console.log("menuwork")
