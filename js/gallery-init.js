// Код для gallery-init.js
document.addEventListener('DOMContentLoaded', function() {
    new SimpleLightbox('#gallery-container a', {
      nav: true,          // Увімкнути навігаційні кнопки
      close: true,        // Увімкнути кнопку закриття
      spinner: false,     // Вимкнути спіннер
      captions: true,     // Показати підписи
      animationSlide: false, // Вимкнути анімацію переходу між слайдами
      animationSpeed: 300, // Швидкість анімації закриття/відкриття
      closeOnSwipe: false, // Вимкнути закриття свайпом
      showCounter: false,  // Показати лічильник зображень (1/14)
      scrollZoomFactor:false,
      loop:false,
    });
  });