import React from 'react';

const Features = () => {
  return (
    <section id="features">
    <h2>Our Features</h2>
    <div className="features">
      <div className="feature-card">
        <i className="fas fa-gift"></i>
        <h3>Create Multiple Registries</h3>
        <p>Manage registries for weddings, birthdays, and all your other life events.</p>
      </div>
      <div className="feature-card">
        <i className="fas fa-share-alt"></i>
        <h3>Simple Sharing</h3>
        <p>Easily share your registry link through social media or email.</p>
      </div>
      <div className="feature-card">
        <i className="fas fa-mobile-alt"></i>
        <h3>Mobile-Friendly</h3>
        <p>Update your registry anywhere with our mobile-responsive design.</p>
      </div>
      <div className="feature-card">
        <i className="fas fa-lock"></i>
        <h3>Secure &amp; Private</h3>
        <p>Your data is safe with our top-tier security features.</p>
      </div>
    </div>
  </section>
  );
};

export default Features;