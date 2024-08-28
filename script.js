// script.js
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let index = 0;

    function showImage(index) {
        const imageWidth = images[0].clientWidth; //Largura da imagem
        carouselImages.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    nextButton.addEventListener('click', function() {
        index = (index + 1) % images.length; //Passa para próxima imagem
        showImage(index);
    });

    prevButton.addEventListener('click', function() {
        index = (index - 1 + images.length) % images.length; //Volta para a imagem anterior
        showImage(index);
    });

    // Inicializa a posição do carrossel
    showImage(index);
});
