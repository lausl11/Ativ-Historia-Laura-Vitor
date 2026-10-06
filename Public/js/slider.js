const slider = document.querySelector('.slider');
const btnPrev = document.querySelector('.slider-button-prev');
const btnNext = document.querySelector('.slider-button-next');

let angulo = 0;
let slideAtual = 0;

const cores = [
    "#d1b292", // Início do Primeiro Reinado
    "#ff7a7a", // Slide 2
    "#854c9f", // Constituição de 1824
    "#329995", // Economia e Sociedade
    "#558be8", // Confederação do Equador
    "#6a996c", // Legado do Primeiro Reinado
    "#e6d685", // Noite das Garrafadas
    "#a0b2ff", // Crise do Primeiro Reinado
    "#60150e"  // Guerra da Cisplatina
];

function atualizarFundo() {
    document.body.style.background =
        `linear-gradient(to bottom, #1c1201 55%, ${cores[slideAtual]})`;
}

btnNext.addEventListener('click', () => {

    angulo -= 40;
    slideAtual++;

    if (slideAtual >= cores.length) {
        slideAtual = 0;
    }

    slider.style.transform =
        `perspective(1000px) rotateY(${angulo}deg)`;

    atualizarFundo();
});

btnPrev.addEventListener('click', () => {

    angulo += 40;
    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = cores.length - 1;
    }

    slider.style.transform =
        `perspective(1000px) rotateY(${angulo}deg)`;

    atualizarFundo();
});

atualizarFundo();