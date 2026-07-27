import React, { useEffect } from 'react';
import $ from 'jquery';
import '../styles/Team.css';

const Team = () => {
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

    $('.team-card').each(function () {
      observer.observe(this);
    });

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: 'Zeeshan Siddiqui',
      role: 'Founder & Lead Developer',
      bio: 'Expert in full-stack development with 8+ years experience',
      image: 'https://via.placeholder.com/300x300?text=Zeeshan',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Anderson',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user experience and modern design',
      image: 'https://via.placeholder.com/300x300?text=Sarah',
      social: {
        twitter: '#',
        linkedin: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Mike Johnson',
      role: 'Backend Developer',
      bio: 'Specialized in cloud architecture and scalable systems',
      image: 'https://via.placeholder.com/300x300?text=Mike',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emma Davis',
      role: 'Project Manager',
      bio: 'Ensuring timely delivery and client satisfaction',
      image: 'https://via.placeholder.com/300x300?text=Emma',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>Talented professionals dedicated to your success</p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <div className="social-links">
                    {Object.entries(member.social).map(([platform]) => (
                      <a key={platform} href={member.social[platform]} title={platform}>
                        <i className={`fab fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
