
const slider = document.querySelector('.slider');
const btnPrev = document.querySelector('.slider-button-prev');
const btnNext = document.querySelector('.slider-button-next');

const cores = [
    "#d1b292",
    "#4c774b",
    "#7c7373",
    "#c14b2b",
    "#558be8",
    "#6ef3ff",
    "#c4b777"
];

const totalSlides = 7;

let slideAtual = Number(localStorage.getItem('slideAtual')) || 0;
slideAtual = ((slideAtual % totalSlides) + totalSlides) % totalSlides;

let angulo = Number(localStorage.getItem('anguloSlider'));

if (!Number.isFinite(angulo)) {
    angulo = -slideAtual * (360 / totalSlides);
}

function atualizarFundo() {
    document.body.style.background =
        `linear-gradient(to bottom, #1c1201 55%, ${cores[slideAtual]})`;
}

function atualizarSlider() {
    slider.style.transform =
        `perspective(1000px) rotateY(${angulo}deg)`;

    atualizarFundo();

    localStorage.setItem('slideAtual', slideAtual);
    localStorage.setItem('anguloSlider', angulo);
}

btnNext.addEventListener('click', () => {
    slideAtual = (slideAtual + 1) % totalSlides;
    angulo -= 360 / totalSlides;
    atualizarSlider();
});

btnPrev.addEventListener('click', () => {
    slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
    angulo += 360 / totalSlides;
    atualizarSlider();
});

atualizarSlider();
