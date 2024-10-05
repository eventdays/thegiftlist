import React from 'react';

const Inspiration = () => {
  return (
    <section>
    <h3 className="centered-head">Gift Inspiration</h3>
    <div className="gift-options">
      <div className="gift-option">
        <img src="/src/assets/images/drone.webp" alt="Tech Gadgets" width="250" height="200" />
        <h3>Tech Gadgets</h3>
        <p>Latest smartphones, laptops, and smart home devices</p>
        <button className="purchase-btn">Explore Tech Gifts</button>
      </div>
      <div className="gift-option">
        <img src="/src/assets/images/deco3.webp" alt="Home Decor" width="250" height="200" />
        <h3>Home Decor</h3>
        <p>Stylish furniture, art pieces, and decorative items</p>
        <button className="purchase-btn">Explore Home Gifts</button>
      </div>
      <div className="gift-option">
        <img src="/src/assets/images/fashion.webp" alt="Fashion &amp; Accessories" width="250" height="200" />
        <h3>Fashion &amp; Accessories</h3>
        <p>Trendy clothing, jewelry, and accessories</p>
        <button className="purchase-btn">Explore Fashion Gifts</button>
      </div>
      <div className="gift-option">
        <img src="/src/assets/images/wedding.webp" alt="Experiences" width="250" height="200" />
        <h3>Experiences</h3>
        <p>Unforgettable adventures and activities</p>
        <button className="purchase-btn">Explore Experiences</button>
      </div>
    </div>
  
  </section>
  );
};

export default Inspiration;