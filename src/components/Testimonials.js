import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
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

    $('.testimonial-card').each(function () {
      observer.observe(this);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Tech StartUp Inc.',
      text: 'ValsCoder transformed our vision into reality. The team was professional, efficient, and delivered beyond expectations.',
      rating: 5,
      image: 'https://via.placeholder.com/60x60?text=John'
    },
    {
      name: 'Lisa Chen',
      company: 'Digital Marketing Co.',
      text: 'Outstanding work on our e-commerce platform. The design and functionality are perfect. Highly recommended!',
      rating: 5,
      image: 'https://via.placeholder.com/60x60?text=Lisa'
    },
    {
      name: 'David Martinez',
      company: 'Fashion Retail Group',
      text: 'Great communication, timely delivery, and exceptional quality. They truly care about their clients.',
      rating: 5,
      image: 'https://via.placeholder.com/60x60?text=David'
    },
    {
      name: 'Sophie Laurent',
      company: 'Consulting Services Ltd.',
      text: 'The best investment we made for our digital presence. Their expertise is unmatched.',
      rating: 5,
      image: 'https://via.placeholder.com/60x60?text=Sophie'
    }
  ];

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>What our satisfied clients say about us</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonials-carousel">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card ${index === current ? 'active' : ''}`}
              >
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="control-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === current ? 'active' : ''}`}
                  onClick={() => setCurrent(index)}
                ></button>
              ))}
            </div>
            <button onClick={nextTestimonial} className="control-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
