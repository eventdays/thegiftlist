import React from 'react';
import Header from '/src/components/Header';
import Hero from '/src/components/Hero';
import About from '/src/components/About';
import What from '/src/components/What';
import Why from '/src/components/Why';
import Testimonials from '/src/components/Testimonials';
import FAQ from '/src/components/FAQ';
import Footer from '/src/components/Footer';
import Inspiration from '/src/components/Inspiration';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <What />
      <Why />
      <Inspiration />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;