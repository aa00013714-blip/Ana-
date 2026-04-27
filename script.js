let slides = document.querySelectorAll('.slide');
let index = 0;

function mostrarSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(mostrarSlide, 3000);
