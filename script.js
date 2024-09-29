let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
function showImage(index) {
    const carouselImages = document.querySelector('.carousel-images');
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-index * imageWidth}px)`;
}
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}
setInterval(nextImage, 2000);
let currentSlideIndex = 0;
const slides = document.querySelectorAll('#sliderTrack img');
const dots = document.querySelectorAll('#customDots .slider-dot');
const totalSlides = slides.length;

function showSlide(index) {
    const sliderTrack = document.getElementById('sliderTrack');
    const slideWidth = slides[0].clientWidth;
    sliderTrack.style.transform = `translateX(${-index * slideWidth}px)`;
    updateDots(index);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('slider-active'));
    dots[index].classList.add('slider-active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}

function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}
setInterval(nextSlide, 2000);
showSlide(0);