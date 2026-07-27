import React, { useEffect } from 'react';
import $ from 'jquery';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    // Animate hero text on load
    $('.hero-content h1').addClass('animate__animated animate__fadeInDown');
    $('.hero-content p').addClass('animate__animated animate__fadeInUp');
    $('.hero-buttons').addClass('animate__animated animate__fadeInUp');
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Build Your Digital <span className="highlight">Presence</span>
        </h1>
        <p className="hero-subtitle">
          Professional Web Development, Design & Digital Solutions for Your Business
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start Your Project</button>
          <button className="btn btn-secondary">View Our Work</button>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
