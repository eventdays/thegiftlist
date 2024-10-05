import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';


function Contact() {
    return (
      <>
      <Header />
        <section className="hero-half">
            <h1>Contact Us</h1>
            <p>We're here to help with all your gift registry needs.</p>
        </section>

        <main>
            <div className="contact-section">
            <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>We're here to help! Whether you have a question about our gift registry services, need technical support, or just want to say hello, we'd love to hear from you.</p>
                
                <div className="contact-methods">
                <div className="contact-method">
                    <i className="fas fa-phone"></i>
                    <span>1-800-GIFTLIST</span>
                </div>
                <div className="contact-method">
                    <i className="fas fa-envelope"></i>
                    <span>support@thegiftlist.com</span>
                </div>
                <div className="contact-method">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>123 Gift Street, Registry City, GL 12345</span>
                </div>
                </div>
            </div>
            
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form action="/submit-form" method="POST">
                <div className="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
                </form>
            </div>
            </div>

            <div className="contact-section">
            <div className="contact-info">
                <h2>Our Office Hours</h2>
                <p>We're available to assist you during the following hours:</p>
            </div>
            <div className="contact-details">
                <ul>
                <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                <li>Saturday: 10:00 AM - 4:00 PM EST</li>
                <li>Sunday: Closed</li>
                </ul>
            </div>
            </div>

            <div className="contact-section">
            <div className="contact-info">
                <h2>Connect on Social Media</h2>
                <p>Stay updated with our latest news and offers:</p>
            </div>
            <div className="contact-details">
                <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook"></i> Facebook</a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i> Twitter</a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i> Instagram</a>
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i> LinkedIn</a>
                </div>
            </div>
            </div>

            <div className="contact-section">
            <div className="contact-info">
                <h2>Careers at TheGiftList</h2>
                <p>Interested in joining our team? Check out our current openings:</p>
            </div>
            <div className="contact-details">
                <a href="#" className="career-link">View Open Positions</a>
                <p>Or email your resume to: careers@thegiftlist.com</p>
            </div>
            </div>
            
            <div className="contact-section">
            <div className="contact-info">
                <h3>Find TheGiftList Near You</h3>
                <p>Looking for local gift ideas or in-person support? Enter your zip code to find TheGiftList partners in your area.</p>
                <button>Find Local Partners</button>
            </div>
            <div className="contact-details">
                <div id="map" className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.00840292959!2d-117.92154912565003!3d33.81209623037492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e0!3m2!1sen!2sng!4v1728074651290!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </div>

            <div className="additional-info">
            <div className="info-box">
                <h3>FAQs</h3>
                <p>Have a quick question? Check out our frequently asked questions for instant answers to common inquiries.</p>
                <button>View FAQs</button>
            </div>
            </div>
        </main>
        <Footer />
      </>
    );
}

export default Contact;