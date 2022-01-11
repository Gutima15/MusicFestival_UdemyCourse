document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        imagen.dataset.imagenId =i;
        imagen.onclick = mostrarImagen;
        
        const lista = document.createElement('LI');
        lista.append(imagen);
        galeria.appendChild(lista);
    }
    
}

function mostrarImagen(event) {
    const id = parseInt(event.target.dataset.imagenId);
    //Generar imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');   

    overlay.onclick = function() {
        overlay.remove();
        document.querySelector('body').classList.remove('fijar-body');
    }
    //boton para cerra la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);

    //Cerrar la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        document.querySelector('body').classList.remove('fijar-body');
    }

    //Mostrar en HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}