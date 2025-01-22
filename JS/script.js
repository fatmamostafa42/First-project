let currentSlide = 1;
function moveSlide(direction) {
    const slider = document.querySelector('.testimonial-slider');
    const totalSlides = document.querySelectorAll('.testimonial-card').length;
    const slideWidth = document.querySelector('.testimonial-card').clientWidth;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * (slideWidth + 20) - (slideWidth / 2)}px)`;
    updateActiveCard();
}

function updateActiveCard() {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => card.classList.remove('active'));
    cards[currentSlide].classList.add('active');
}

updateActiveCard();