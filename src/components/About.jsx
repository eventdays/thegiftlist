import React from 'react';

const About = () => {
  return (
    <section id="about" className="how-it-works">
    <h2>All Your Desired Gifts in One Place</h2>
    <p className="intro-text">
      TheGiftsList.com is a revolutionary online platform that merges the functionality of traditional gift registries with the essential interactivity aspects of social media. Our innovative service allows you to create personalized profiles where you can curate a catalog of gifts you would love to receive. 
    </p>
    <h2>How It Works</h2>
    <div className="steps">
      <div className="step">
        <span className="step-number">1</span>
        <h4>Create</h4>
        <p>Design a personalized gift list for weddings, birthdays, baby showers, and more.</p>
      </div>
      <div className="step">
        <span className="step-number">2</span>
        <h4>Share Your Link</h4>
        <p>A unique URL takes your guests directly to your page, where they can view and buy from your list.</p>
      </div>
      <div className="step">
        <span className="step-number">3</span>
        <h4>Track</h4>
        <p>Avoid duplicate gifts with our tracking feature and easily manage your purchased items.</p>
      </div>
    </div>
  </section>
  );
};

export default About;