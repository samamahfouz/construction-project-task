const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.card');

  
const cardWidth = cards[0].offsetWidth + 20;

let currentIndex = 0;

function updateSlider() {
  const maxIndex = Math.ceil(cards.length - sliderContainer.parentElement.offsetWidth / cardWidth);
  sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex >= maxIndex;
  }

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
 }
});

nextButton.addEventListener('click', () => {
  const maxIndex = Math.ceil(cards.length - sliderContainer.parentElement.offsetWidth / cardWidth);
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

updateSlider();

window.addEventListener('resize', updateSlider);


const navIcon = document.querySelector('.nav-icon');
const navMenu = document.querySelector('.nav');
  
navIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const imageSlider = document.querySelector('.image-slider');
const sliderImages = document.querySelectorAll('.image-slider img');
let index = 0; 
const visibleImagesCount = 6; 
const totalImagesCount = sliderImages.length; 


function autoSlide() {
    index++;
    if (index > totalImagesCount - visibleImagesCount) {
        index = 0; 
    }
    updateSliderPosition();
}


function updateSliderPosition() {
    const imageWidth = sliderImages[0].clientWidth; 
    imageSlider.style.transform = `translateX(-${index * imageWidth}px)`;
}

setInterval(autoSlide, 3000); 
