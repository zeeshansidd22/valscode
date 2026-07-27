import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Intersection Observer for portfolio items
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $(entry.target).addClass('animate__animated animate__zoomIn');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    $('.portfolio-item').each(function () {
      observer.observe(this);
    });

    return () => observer.disconnect();
  }, [filter]);

  const projects = [
    {
      id: 1,
      category: 'web',
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with payment integration',
      image: 'https://via.placeholder.com/400x300?text=E-Commerce'
    },
    {
      id: 2,
      category: 'web',
      title: 'Corporate Website',
      description: 'Professional website for Fortune 500 company',
      image: 'https://via.placeholder.com/400x300?text=Corporate'
    },
    {
      id: 3,
      category: 'design',
      title: 'Brand Identity',
      description: 'Complete brand design and guidelines',
      image: 'https://via.placeholder.com/400x300?text=Branding'
    },
    {
      id: 4,
      category: 'mobile',
      title: 'Fitness App',
      description: 'iOS and Android fitness tracking application',
      image: 'https://via.placeholder.com/400x300?text=Mobile'
    },
    {
      id: 5,
      category: 'web',
      title: 'SaaS Dashboard',
      description: 'Powerful analytics and management dashboard',
      image: 'https://via.placeholder.com/400x300?text=Dashboard'
    },
    {
      id: 6,
      category: 'design',
      title: 'UI Kit Design',
      description: 'Comprehensive design system and components',
      image: 'https://via.placeholder.com/400x300?text=UI+Kit'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>Showcase of our recent and notable projects</p>
        </div>

        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={filter === 'web' ? 'active' : ''} 
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={filter === 'mobile' ? 'active' : ''} 
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={filter === 'design' ? 'active' : ''} 
            onClick={() => setFilter('design')}
          >
            Design
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <button className="view-btn">View Project</button>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
