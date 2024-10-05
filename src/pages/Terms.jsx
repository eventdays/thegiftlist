import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';

function Terms() {
    return (
    <>
    <Header />
    <section className="hero-half">
        <h1>Terms and Conditions</h1>
        <p>Please Read Carefully Before Using Our Service</p>
      </section>
    
      <main>
        <div className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using TheGiftList service, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.</p>
        </div>
    
        <div className="terms-section">
          <h2>2. Description of Service</h2>
          <p>TheGiftList provides an online platform for users to create and share gift registries, wishlists, and manage gift-giving experiences. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.</p>
        </div>
    
        <div className="terms-section">
          <h2>3. User Accounts</h2>
          <p>To use certain features of the service, you must register for an account. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
        </div>
    
        <div className="terms-section">
          <h2>4. User Content</h2>
          <p>You retain all rights to the content you post on TheGiftList. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.</p>
        </div>
    
        <div className="terms-section">
          <h2>5. Prohibited Uses</h2>
          <p>You agree not to use the service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the service. Prohibited activities include but are not limited to:</p>
          <ul>
            <li>Harassment, abuse, or threatening of other users</li>
            <li>Posting of false or misleading information</li>
            <li>Attempting to gain unauthorized access to the service or its related systems</li>
            <li>Transmitting viruses, malware, or other malicious code</li>
          </ul>
        </div>
    
        <div className="terms-section">
          <h2>6. Intellectual Property</h2>
          <p>The service and its original content, features, and functionality are owned by TheGiftList and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </div>
    
        <div className="terms-section">
          <h2>7. Termination</h2>
          <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.</p>
        </div>
    
        <div className="terms-section">
          <h2>8. Limitation of Liability</h2>
          <p>In no event shall TheGiftList, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
        </div>
    
        <div className="terms-section">
          <h2>9. Changes to Terms</h2>
          <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        </div>
    
        <div className="terms-section">
          <h2>10. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at legal@thegiftlist.com.</p>
        </div>
      </main>
      <Footer />
      </>
    );
}

export default Terms;