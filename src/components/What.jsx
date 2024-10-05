import React from 'react';

const What = () => {
  return (
    <section id="what" className="what-you-can-do">
    <h2>What You Can Do</h2>
    <div className="action-cards">
      <div className="action-card">
        <i className="fas fa-clipboard-list"></i>
        <h3>Create a Registry</h3>
        <p>Let friends and family know exactly what you want for your special day.</p>
      </div>
      <div className="action-card">
        <i className="fas fa-search"></i>
        <h3>Find a Registry</h3>
        <p>Easily search and find registries of people you care about.</p>
      </div>
      <div className="action-card">
        <i className="fas fa-plane"></i>
        <h3>Honeymoon Fund</h3>
        <p>Help newlyweds by contributing to their dream honeymoon experience.</p>
      </div>
    </div>
  </section>
  );
};

export default What;