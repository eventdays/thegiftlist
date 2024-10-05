import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';

function HowItWorks() {
    return (
     <>
        <Header />
        <section className="hero-half">
            <h1>HowItWorks TheGiftList</h1>
            <p>Revolutionizing the way you give and receive gifts</p>
        </section>
        <main>
            <div className="how-it-works-section">
            <div className="section-content">
                <div className="step-number ls">1</div>
                <h2>Create Your Registry</h2>
                <p>Start by signing up and creating your personalized gift registry. Choose from our wide selection of products or add your own custom items.</p>
            </div>
            <div className="section-image">
                <img src="/assets/images/step1.webp" alt="Person creating a gift registry on a laptop" width="500" height="300"  />
            </div>
            </div>

            <div className="how-it-works-section reverse">
            <div className="section-content">
                <div className="step-number ls">2</div>
                <h2>Share With Friends and Family</h2>
                <p>Once your registry is set up, easily share it with your loved ones through email, social media, or by sharing your unique registry link.</p>
            </div>
            <div className="section-image">
                <img src="/assets/images/family.webp" alt="Person sharing registry on social media" width="500" height="300"  />
            </div>
            </div>

            <div className="how-it-works-section">
            <div className="section-content">
                <div className="step-number ls">3</div>
                <h2>Manage Your Gifts</h2>
                <p>Keep track of purchased gifts, send thank-you notes, and make changes to your registry as needed. Our user-friendly interface makes it easy to stay organized.</p>
            </div>
            <div className="section-image">
                <img src="/assets/images/thank-you.webp" alt="Person managing gifts on TheGiftList dashboard" width="500" height="300" />
            </div>
            </div>

            <div className="how-it-works-section reverse">
            <div className="section-content">
                <div className="step-number ls">4</div>
                <h2>Enjoy Your Special Day</h2>
                <p>Relax and enjoy your special occasion, knowing that your gift registry is taken care of. After the event, easily manage returns or exchanges if needed.</p>
            </div>
            <div className="section-image">
                <img src="/assets/images/couple-specialday.webp" alt="Happy couple at their wedding with gifts" width="500" height="300" />
            </div>
            </div>
            
        </main>
      
        <Footer />
    </>    
    );
}

export default HowItWorks;