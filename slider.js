const slider = document.querySelector('.slider-inner');
const items = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.slider-dots');

let currentIndex = 0;
const totalItems = items.length;

// Create dots
for (let i = 0; i < totalItems; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
  dot.addEventListener('click', () => goToSlide(i));
}

const dots = document.querySelectorAll('.dot');
dots[currentIndex].classList.add('active');

function goToSlide(index) {
  if (index < 0 || index >= totalItems) return;
  currentIndex = index;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  goToSlide((currentIndex - 1 + totalItems) % totalItems);
});

nextBtn.addEventListener('click', () => {
  goToSlide((currentIndex + 1) % totalItems);
});

// Optional: Auto-play the slider
setInterval(() => {
  goToSlide((currentIndex + 1) % totalItems);
}, 5000);