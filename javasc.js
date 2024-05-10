// Espera a que se cargue el contenido del DOM antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el carrusel y sus elementos internos
    const carousel = document.querySelector('.carousel');
    const innerCarousel = carousel.querySelector('.carousel-inner');
    const images = innerCarousel.querySelectorAll('img');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let index = 0; // Variable para mantener el índice actual de la imagen mostrada

    // Función para mover el carrusel
    function moveCarousel(offset) {
        // Calcula el nuevo índice de la imagen
        index = (index + offset + images.length) % images.length;
        // Mueve el carrusel horizontalmente para mostrar la nueva imagen
        innerCarousel.style.transform = `translateX(-${index * (100 / images.length)}%)`;
    }

    // Evento de clic para el botón de retroceso
    prevButton.addEventListener('click', function() {
        moveCarousel(-1); // Retrocede una imagen
    });

    // Evento de clic para el botón de avance
    nextButton.addEventListener('click', function() {
        moveCarousel(1); // Avanza una imagen
    });

    // Configura un intervalo para cambiar automáticamente las imágenes del carrusel
    setInterval(() => {
        moveCarousel(1); // Avanza una imagen cada 1.5 segundos
    }, 1500);
});
