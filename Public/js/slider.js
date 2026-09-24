const slides = document.querySelectorAll('.carroussel-slide');

const btnPrev = document.querySelector('.slider-button-prev');

const btnNext = document.querySelector('.slider-button-next');

let slideAtual = 0;

function mostrarSlide() {

    slides.forEach(slide => {

        slide.style.display = 'none';

    });

}

function mostrarSlide() {

    slides.forEach(slide => {

        slide.style.display = 'none';

    });

    slides[slideAtual].style.display = 'block';

}

mostrarSlide();