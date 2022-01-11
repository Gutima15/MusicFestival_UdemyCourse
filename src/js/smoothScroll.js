document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    headerNavFija();
});

function scrollNav() {
    const enlaces= document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            const section = document.querySelector(event.target.attributes.href.value);
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function headerNavFija() {
    const barra = document.querySelector('.header');
    //Registrar el intersectionObserver
    const observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
    });
    //Este es el elemento a observar... va a revisar si mi objeto está o no visible en la pantalla
    observer.observe(document.querySelector('.sobre-festival'));
}