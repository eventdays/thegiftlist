import React, { useEffect } from 'react';

const FAQ = () => {
  useEffect(() => {  
    const faqItems = document.querySelectorAll('.faq-item');
    
    const toggleFAQ = (e) => {
      e.currentTarget.parentElement.classList.toggle('active');
    };
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', toggleFAQ);
    });
  
    return () => {
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.removeEventListener('click', toggleFAQ); // Corrected to remove the same listener
      });
    };
  }, []);
  

  return (
    <section id="faq" className="faq">
    <h2>FAQs</h2>
    <div className="faq-item">
      <div className="faq-question">How do I create a registry?</div>
      <div className="faq-answer">
        <p>It’s easy! Just sign up, click on "Create Registry," and start adding your favorite items. You can share your registry with guests once it's ready.</p>
      </div>
    </div>
    <div className="faq-item">
      <div className="faq-question">Is TheGiftList.com free?</div>
      <div className="faq-answer">
        <p>Yes, our basic service is free, and you can upgrade for extra features if needed.</p>
      </div>
    </div>
    <div className="faq-item">
      <div className="faq-question">Can I add items from any online store?</div>
      <div className="faq-answer">
        <p>Absolutely! Just paste the URL of the product, and we’ll pull in the details for you.</p>
      </div>
    </div>
    <div className="faq-item">
      <div className="faq-question">How do I share my registry?</div>
      <div className="faq-answer">
        <p>Once created, you'll get a custom link that you can send via email, social media, or print on your event invitations.</p>
      </div>
    </div>
  </section>
  );
};

export default FAQ;