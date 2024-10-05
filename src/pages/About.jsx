import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';

function About() {
    return (
     <>
        <Header />
        <section className="hero-half">
            <h1>About TheGiftList</h1>
            <p>Revolutionizing the way you give and receive gifts</p>
        </section>
        
        <main>
            <div className="about-section">
            <div className="section-content">
                <h2>Our Vision</h2>
                <p>TheGiftsList.com is a revolutionary online platform that merges the functionality of traditional gift registries with the essential interactivity aspects of social media. Our innovative service allows you to create personalized profiles where you can curate a catalog of gifts you would love to receive.</p>
            </div>
            <div className="section-image">
                <img src="/assets/images/step1.webp" alt="Person using TheGiftList platform on a tablet" width="500" height="300" />
            </div>
            </div>
        
            <div className="about-section reverse">
            <div className="section-content">
                <h2>Social Interaction</h2>
                <p>Connect with friends, family, and colleagues, allowing them to view your wishlist and contribute to your desired gifts. Our platform fosters a sense of community and makes gift-giving a more personal and meaningful experience.</p>
            </div>
            <div className="section-image">
                <img src="/assets/images/toon-social.webp" alt="Group of friends discussing gift ideas on their phones" width="500" height="300" />
            </div>
            </div>
        
            <div className="about-section">
            <div className="section-content">
                <h2>Smart Recommendations</h2>
                <p>Our advanced algorithm analyzes your preferences and past selections to provide tailored gift suggestions, ensuring that your registry always reflects your unique taste and style.</p>
            </div>
            <div className="section-image">
                <img src="/assets/images/algorithm.webp" alt="Personalized gift recommendations on a smartphone screen" width="500" height="300" />
            </div>
            </div>
        
            <div className="about-section reverse">
            <div className="section-content">
                <h2>Seamless Integration</h2>
                <p>TheGiftList integrates with major e-commerce platforms and local businesses, offering a vast selection of products and experiences to add to your registry. From traditional items to unique experiences, we've got you covered.</p>
            </div>
            <div className="section-image">
                <img src="/assets/images/integration.webp" alt="Various gift options displayed on a computer screen" width="500" height="300" />
            </div>
            </div>
        </main>
        <Footer />
    </>    
    );
}

export default About;