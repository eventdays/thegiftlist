import React from 'react';

const Why = () => {
  return (
    <section id="why" className="why-choose-us">
    <h2>Why Choose Us?</h2>
    <div className="features-grid">
      <div className="feature-item">
        <i className="fas fa-infinity"></i>
        <h3>No Limit on Items</h3>
        <p>Add as many items as you wish to your registry—there’s no cap!</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-globe"></i>
        <h3>Global Access</h3>
        <p>Your guests can access your registry from anywhere in the world.</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-users"></i>
        <h3>Group Gifting</h3>
        <p>Set up group gifts where multiple guests can contribute towards bigger-ticket items.</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-chart-line"></i>
        <h3>Gift Tracker</h3>
        <p>Track all your gifts and send personalized thank-you notes.</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-umbrella-beach"></i>
        <h3>Honeymoon Fund</h3>
        <p>Give guests the option to contribute cash towards your honeymoon adventure.</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-money-bill-wave"></i>
        <h3>Cash Fund</h3>
        <p>Set up a cash fund for your guests to contribute any amount they choose.</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-clipboard-check"></i>
        <h3>RSVP Tracking</h3>
        <p>Seamlessly manage event RSVPs and save yourself time on follow-ups.</p>
      </div>
    </div>
  </section>
  );
};

export default Why;