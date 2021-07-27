const imagenes = document.querySelectorAll('.img-galeria a');
const imgPrincipal = document.querySelector('.modal-imagen #imagen');
const modal = document.querySelector('.proyecto-galeria-modal');
const body = document.querySelector('#body-proyecto');
const indiceTexto = document.querySelector('#modal-numero-indice');
let imagenActual;

const btnAnterior = document.querySelector('#modal-boton-anterior');
const btnSiguiente = document.querySelector('#modal-boton-siguiente');


const imagenesArray = [];

imagenes.forEach(img => {
    const src = img.getAttribute('href');
    imagenesArray.push(src);    
});

function abrirModal(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    const indiceImagen = parseInt(this.dataset.id);
    imgPrincipal.setAttribute('src', href);
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
    imagenActual = indiceImagen
    indiceTexto.textContent = indiceImagen + 1;
}

function cerrarModal(e){
    const element = e.target.id;
    if(element == 'modal'){
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
}

function imagenAnterior(){
    imagenActual--;
    console.log(imagenActual);
}

function imagenSiguiente(){
    imagenActual++;
    console.log(imagenActual);
}


imagenes.forEach(img => {
    img.addEventListener('click', abrirModal);    
});


btnAnterior.addEventListener('click', imagenAnterior);

btnSiguiente.addEventListener('click', imagenSiguiente);

modal.addEventListener('click', cerrarModal);