const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    navbar.classList.add('navbar-hidden'); 
  } 
  else if (currentScrollY < lastScrollY) {
    navbar.classList.remove('navbar-hidden'); 
  }

  lastScrollY = currentScrollY;
});

// Carrosel hero

document.addEventListener("DOMContentLoaded", () => {
    const heroTrack = document.querySelector(".hero");
    const prevBtn = document.querySelector(".hero-carousel-btn.prev");
    const nextBtn = document.querySelector(".hero-carousel-btn.next");

    if (heroTrack && prevBtn && nextBtn) {
        
        nextBtn.addEventListener("click", () => {
            const cardWidth = heroTrack.clientWidth;
            
            if (heroTrack.scrollLeft + cardWidth >= heroTrack.scrollWidth - 10) {
                heroTrack.scrollLeft = 0;
            } else {
                heroTrack.scrollLeft += cardWidth;
            }
        });

        prevBtn.addEventListener("click", () => {
            const cardWidth = heroTrack.clientWidth;
            
            if (heroTrack.scrollLeft <= 10) {
                heroTrack.scrollLeft = heroTrack.scrollWidth;
            } else {
                heroTrack.scrollLeft -= cardWidth;
            }
        });
    }
});

// Carrosel products

document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".products-carousel-wrapper");

    wrappers.forEach(wrapper => {
        const carousel = wrapper.querySelector(".products-carousel");
        const prevBtn = wrapper.querySelector(".prod-carousel-btn.prev");
        const nextBtn = wrapper.querySelector(".prod-carousel-btn.next");

        if (!carousel || !prevBtn || !nextBtn) return;

        const getScrollAmount = () => {
            const card = carousel.querySelector(".product-card");
            if (!card) return 300;
            const gap = parseFloat(getComputedStyle(carousel.querySelector(".products-track")).gap) || 24;
            return card.offsetWidth + gap;
        };

        nextBtn.addEventListener("click", () => {
            carousel.scrollLeft += getScrollAmount();
        });

        prevBtn.addEventListener("click", () => {
            carousel.scrollLeft -= getScrollAmount();
        });
    });
});

