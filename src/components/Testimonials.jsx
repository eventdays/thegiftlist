import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
        // Testimonial slider
    
        const slider = document.querySelector('.testimonial-slider');
        const testimonials = document.querySelectorAll('.testimonial');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        let currentIndex = 0;
  
        function updateSlider() {
          slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
  
        function nextSlide() {
          currentIndex = (currentIndex + 1) % testimonials.length;
          updateSlider();
        }
  
        function prevSlide() {
          currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
          updateSlider();
        }
  
        rightArrow.addEventListener('click', nextSlide);
        leftArrow.addEventListener('click', prevSlide);
  
        // Optional: Add keyboard navigation
        document.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowRight') nextSlide();
          if (e.key === 'ArrowLeft') prevSlide();
        });
  
        // Optional: Add auto-slide functionality
        setInterval(nextSlide, 5000);
  }, []);


  return (
    <section id="testimonials" className="testimonials">
    <h2>What People Are Saying</h2>
    <div className="testimonial-container">
      <button className="slider-arrow left-arrow">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="testimonial-slider">
        <div className="testimonial">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah M." width="80" height="80"/>
          <p>"TheGiftList.com made planning my wedding registry so simple. Our guests loved how easy it was to use!"</p>
          <span className="author">- Sarah M., Bride</span>
        </div>
        <div className="testimonial">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John D." width="80" height="80"/>
          <p>"TheGiftList.com was a lifesaver for my baby shower! Everything was so organized."</p>
          <span className="author">- John D., New Parent</span>
        </div>
        <div className="testimonial">
          <img src="https://randomuser.me/api/portraits/women/89.jpg" alt="Emma L." width="80" height="80"/>
          <p>"The mobile version is amazing! I could tweak my birthday registry from anywhere. Love it!"</p>
          <span className="author">- Emma L., Birthday Girl</span>
        </div>
      </div>
      <button className="slider-arrow right-arrow">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
  );
};

export default Testimonials;
