document.addEventListener('DOMContentLoaded', function() {
let blocks = document.querySelectorAll('.wrapper1, .wrapper2, .wrapper3');

function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach(block => {
        let blockPosition = block.getBoundingClientRect().top;

        if (blockPosition < windowHeight - 100) {
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        }
    });
}



checkBlocksVisibility();

window.addEventListener('scroll', function() {
    checkBlocksVisibility();
});
});


window.addEventListener('scroll', function() {
  const scrollTopButton = document.querySelector('.scroll-top');
  if (window.pageYOffset > 200) {
    // Плавное появление (увеличиваем opacity)
    scrollTopButton.style.opacity = 1;
    scrollTopButton.style.display = 'block';
  } else {
    // Плавное исчезновение (уменьшаем opacity)
    scrollTopButton.style.opacity = 0.0;
  }
});

// Клик по кнопке переводит наверх
const scrollToTopButton = document.querySelector('.scroll-top');
scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
