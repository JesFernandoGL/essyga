const imagenes = document.querySelectorAll('.img-galeria a');
const imgPrincipal = document.querySelector('.modal-imagen #imagen');
const modal = document.querySelector('.proyecto-galeria-modal');
const body = document.querySelector('#body-proyecto');
const txtindice = document.querySelector('#modal-numero-indice');
const txttotal = document.querySelector('#modal-numero-total');

let imagenid;

const btnAnterior = document.querySelector('#modal-boton-anterior');
const btnSiguiente = document.querySelector('#modal-boton-siguiente');


const imagenesArray = [];


//Array de la fuente de galeria de imagenes
imagenes.forEach(img => {
    const src = img.getAttribute('href');
    imagenesArray.push(src);    
});

function abrirModal(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    const indiceImagen = parseInt(this.dataset.id);
    imagenid = indiceImagen;    
    
    body.classList.add('no-scroll');
    modal.classList.add('activo');
    getTotalTexto();
    
    cambiarImagen();
    cambiarIndiceTexto();
}

function cerrarModal(e){
    const element = e.target.id;
    if(element === 'modal'){
        modal.classList.remove('activo');
        body.classList.remove('no-scroll');
    }
}

function cambiarImagen(){
    if(imagenid > imagenesArray.length - 1){
        imagenid = 0
    }
    if(imagenid < 0){
        imagenid = imagenesArray.length - 1
    }
    imgPrincipal.src = imagenesArray[imagenid];    
}

function cambiarIndiceTexto(){
    txtindice.textContent = imagenid + 1;
}

function getTotalTexto(){
    txttotal.textContent = imagenesArray.length;
}

function imagenAnterior(){
    imagenid--;
    cambiarImagen();
    cambiarIndiceTexto();
}

function imagenSiguiente(){
    imagenid++;
    cambiarImagen();
    cambiarIndiceTexto();
}

//Eventos del modal

imagenes.forEach(img => {
    img.addEventListener('click', abrirModal);    
});


btnAnterior.addEventListener('click', imagenAnterior);

btnSiguiente.addEventListener('click', imagenSiguiente);


modal.addEventListener('click', cerrarModal);