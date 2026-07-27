import React, { useEffect } from 'react';
import $ from 'jquery';
import '../styles/Services.css';

const Services = () => {
  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $(entry.target).addClass('animate__animated animate__fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    $('.service-card').each(function () {
      observer.observe(this);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Custom responsive websites built with modern technologies and best practices.'
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that engage and delight your users.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Improve your online visibility and rank higher in search engines.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance',
      description: 'Lightning-fast loading times and optimized performance across all devices.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security',
      description: 'Enterprise-grade security and data protection for your peace of mind.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions tailored to your business needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
