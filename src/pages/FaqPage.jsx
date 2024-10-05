import React, { useEffect } from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';


function FaqPage() {
    useEffect(() => {  
        const faqItems = document.querySelectorAll('.faq-page-item');
        
        const toggleFAQ = (e) => {
          e.currentTarget.parentElement.classList.toggle('active');
        };
      
        faqItems.forEach(item => {
          const question = item.querySelector('.faq-page-question');
          question.addEventListener('click', toggleFAQ);
        });
      
        return () => {
          faqItems.forEach(item => {
            const question = item.querySelector('.faq-page-question');
            question.removeEventListener('click', toggleFAQ); // Corrected to remove the same listener
          });
        };
      }, []);

    return (
        <>
          <Header />
         <section className="hero-half">
            <div className="slider-text">
              <h1>Your Ultimate Gift Registry Platform</h1>
              <p>Create, manage, and share your gift registries for any occasion with ease.</p>
              <a href="/signup" className="cta-button">Get Started</a>
            </div>
          </section>

    <main>        
        <section className="faq-page">
            <h1>Frequently Asked Questions</h1>
            
            <div className="faq-page-section">
                <div className="faq-page-topic">
                    <h2>Getting Started</h2>
                </div>
                <div className="faq-page-content">
                    <div className="faq-page-item">
                        <div className="faq-page-question">How do I create a gift registry?</div>
                        <div className="faq-page-answer">Creating a gift registry on TheGiftList is easy! Simply sign up for an account, click on "Create Registry," and follow the step-by-step guide to set up your personalized registry.</div>
                    </div>
                    <div className="faq-page-item">
                        <div className="faq-page-question">Can I have multiple registries?</div>
                        <div className="faq-page-answer">Yes, you can create multiple registries for different occasions such as weddings, baby showers, birthdays, or holidays. Each registry can be customized and managed separately.</div>
                    </div>
                    <div className="faq-page-item">
                        <div className="faq-page-question">Is my registry information private?</div>
                        <div className="faq-page-answer">Your registry's privacy settings are customizable. You can choose to make it public, share it with specific people, or keep it completely private. You have full control over who can view your registry.</div>
                    </div>
                </div>
            </div>
            
            <div className="faq-page-section">
                <div className="faq-page-topic">
                    <h2>Managing Your Registry</h2>
                </div>
                <div className="faq-page-content">
                    <div className="faq-page-item">
                        <div className="faq-page-question">How do I add or remove items from my registry?</div>
                        <div className="faq-page-answer">To add items, use our "Add to Registry" button when browsing products on partner websites or manually add items. To remove items, simply go to your registry dashboard and click the "Remove" option next to the item you wish to delete.</div>
                    </div>
                    <div className="faq-page-item">
                        <div className="faq-page-question">Can I change the quantity of items on my registry?</div>
                        <div className="faq-page-answer">Absolutely! You can adjust the quantity of any item on your registry at any time. Just log in to your account, go to your registry, and update the quantity as needed.</div>
                    </div>
                </div>
            </div>
            
            <div className="faq-page-section">
                <div className="faq-page-topic">
                    <h2>For Gift Givers</h2>
                </div>
                <div className="faq-page-content">
                    <div className="faq-page-item">
                        <div className="faq-page-question">How do I purchase a gift from someone's registry?</div>
                        <div className="faq-page-answer">To purchase a gift, search for the recipient's registry using their name or registry ID. Select the item you wish to purchase and follow the checkout process. The item will be automatically marked as purchased on the registry.</div>
                    </div>
                    <div className="faq-page-item">
                        <div className="faq-page-question">Can I send a gift directly to the recipient?</div>
                        <div className="faq-page-answer">Yes, during the checkout process, you'll have the option to ship the gift directly to the recipient's address (if they've provided it) or to your own address if you prefer to give the gift in person.</div>
                    </div>
                </div>
            </div>
            
            <div className="faq-page-section">
                <div className="faq-page-topic">
                    <h2>Technical Support</h2>
                </div>
                <div className="faq-page-content">
                    <div className="faq-page-item">
                        <div className="faq-page-question">What should I do if I encounter a problem with the website?</div>
                        <div className="faq-page-answer">If you experience any issues, please try clearing your browser cache and cookies first. If the problem persists, contact our support team through the "Help" section of our website or email us at support@thegiftlist.com.</div>
                    </div>
                </div>
            </div>
            
            <div className="help-section">
                <h3>Still have questions? We're here to help!</h3>
                <p>For any other inquiries, please email us at<br/>support@thegiftlist.com or call us at 1-800-GIFTLIST</p>
            </div>
        </section>
     </main>   
     <Footer />
        </>
    );
}

export default FaqPage;






 