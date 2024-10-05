import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';

function Privacy() {
    return (
    <>
      <Header />
      <section className="hero-half">
            <h1>Data & Privacy Policy</h1>
            <p>Protecting Your Information is Our Priority</p>
        </section>

        <main>
            <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>At TheGiftList, we are committed to protecting your privacy and ensuring the security of your personal information. This Data & Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our platform.</p>
            </div>

            <div className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
                <li>Personal information (e.g., name, email address, phone number)</li>
                <li>Account information (e.g., username, password)</li>
                <li>Gift preferences and wishlist data</li>
                <li>Usage data (e.g., how you interact with our platform)</li>
                <li>Device and browser information</li>
            </ul>
            </div>

            <div className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Provide and improve our services</li>
                <li>Personalize your experience</li>
                <li>Process transactions and manage your account</li>
                <li>Communicate with you about our services and promotions</li>
                <li>Analyze usage patterns and improve our platform</li>
            </ul>
            </div>

            <div className="policy-section">
            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
                <li>Service providers who assist in our operations</li>
                <li>Other users, as per your privacy settings</li>
                <li>Legal authorities when required by law</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
            </div>

            <div className="policy-section">
            <h2>5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div className="policy-section">
            <h2>6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access and update your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Delete your account and associated data</li>
                <li>Adjust your privacy settings</li>
            </ul>
            </div>

            <div className="policy-section">
            <h2>7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending you an email.</p>
            </div>

            <div className="policy-section">
            <h2>8. Contact Us</h2>
            <p>If you have any questions or concerns about our Data & Privacy Policy, please contact us at privacy@thegiftlist.com.</p>
            </div>
        </main>
      <Footer />
      </>
    );
}

export default Privacy;