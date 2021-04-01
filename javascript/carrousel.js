const contCarr = document.getElementById("carrousel");
let btnCarr = document.getElementsByClassName("btn-carrousel");
const textCarr = document.getElementsByClassName("text-carrousel");
const textActive = document.getElementsByClassName("active");
let indice = 1;

contCarr.style.backgroundImage = `url("/img/essyga${indice}.jpg")`;

let carInterval = setInterval(cambiarImg,5000);

for(let i = 0; i < btnCarr.length; i++){
    btnCarr[i].addEventListener('click', function(){
        indice = i;           
        cambiarImg();
        resetInterval();
/*         showText(); */
    })

}

/* function showText(){
    for(let i = 0; i < textCarr.length; i++){
        textCarr[i].classList.add("active");
    }

} */



function resetInterval(){
    clearInterval(carInterval);
    carInterval = setInterval(cambiarImg,5000);
    
}


function cambiarImg(){
    indice++;
    if(indice > 3){
        indice = 1
    }    
    contCarr.style.backgroundImage = `url("/img/essyga${indice}.jpg")`
    for(let i = 0; i < textActive.length; i++){
        textActive[i].classList.remove("active");
    }
    textCarr[indice-1].classList.add("active");
}



console.log("work")
console.log(textCarr)

