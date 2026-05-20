import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import profileImg from './assets/dis.jpeg';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'CSI SAP2000', level: 95 },
    { name: 'ETABS', level: 95 },
    { name: 'SAFE', level: 90 },
    { name: 'STAAD Pro', level: 90 },
    { name: 'CSI Bridge', level: 85 },
    { name: 'REVIT', level: 80 },
    { name: 'TEKLA', level: 75 },
    { name: 'ANSYS14', level: 70 },
    { name: 'AutoCAD', level: 95 },
    { name: 'Microsoft Office', level: 95 },
    { name: 'RCC Structures', level: 98 },
    { name: 'Masonry Structures', level: 90 },
    { name: 'Timber Structures', level: 85 },
    { name: 'Prestressed Concrete Bridges', level: 88 },
  ];

  const experiences = [
    {
      title: 'Senior Structural Engineer',
      company: 'NESPAK',
      period: '2018 - Present',
      activities: [
        'Retrofitting designs of schools across Pakistan',
        'Structural audits and safety assessments',
        'Advanced structural analysis and design implementation',
        'Project management and client coordination',
      ],
    },
    {
      title: 'Junior Engineer',
      company: 'NESPAK',
      period: '2014 - 2018',
      activities: [
        'Design and analysis of airport structures',
        'Educational facilities structural planning',
        'Collaboration with senior engineers',
        'Technical documentation and reporting',
      ],
    },
    {
      title: 'Junior Engineer',
      company: 'Designmen Consulting Engineers',
      period: '2013 - 2014',
      activities: [
        'Structural design for commercial buildings',
        'Bridge design projects',
        'Client meeting and site visits',
        'Detailed structural calculations',
      ],
    },
    {
      title: 'Site Engineer Trainee',
      company: 'Allied Engineering Consultants',
      period: '2012',
      activities: [
        'Site monitoring and inspection',
        'Construction documentation',
        'Quality control assessments',
        'Working with construction teams',
      ],
    },
  ];

  const projects = [
    {
      title: 'Timber Deck Design in California',
      category: 'Timber Engineering',
      description: 'Complete structural design and analysis of timber deck systems for residential construction in California, ensuring compliance with local building codes.',
    },
    {
      title: 'Timber Roof Design',
      category: 'Structural Design',
      description: 'Innovative timber roof design featuring exposed beams and trusses, optimizing both aesthetic appeal and structural integrity.',
    },
    {
      title: 'Two Storey Timber House in Dallas',
      category: 'Residential Architecture',
      description: 'Full structural engineering services for a two-storey timber house, including foundation design and lateral load analysis.',
    },
    {
      title: 'Timber House Structural Alteration in Georgia',
      category: 'Retrofitting',
      description: 'Structural alterations and strengthening of existing timber house to meet modern building standards and load requirements.',
    },
    {
      title: 'Size Effect Analysis of Steel-Concrete Bond Strength',
      category: 'Research',
      description: 'Comprehensive research on bond strength between steel and concrete, analyzing size effects in reinforced concrete structures.',
    },
    {
      title: 'Base Isolation Systems Earthquake Research',
      category: 'Earthquake Engineering',
      description: 'Research paper published in international conference on advanced base isolation systems for earthquake resilience.',
    },
    {
      title: 'Durability of Carbon Nanotubes in Cement Composites',
      category: 'Advanced Materials',
      description: 'Published research on the long-term durability and performance of carbon nanotube reinforced cement composites.',
    },
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo">MA</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <section className="section skills" id="skills">
        <div className="section-header">
          <span className="section-tag">Technical Expertise</span>
          <h2 className="section-title">Skills & Software</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience" id="experience">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-line"></div>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-activities">
                  {exp.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section education" id="education">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>
        <div className="education-cards">
          <div className="education-card">
            <div className="education-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <h3 className="education-degree">M.Sc. Structural Engineering</h3>
            <p className="education-school">NUST</p>
            <p className="education-year">2017</p>
          </div>
          <div className="education-card">
            <div className="education-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
            </div>
            <h3 className="education-degree">B.Sc. Civil Engineering</h3>
            <p className="education-school">NUST</p>
            <p className="education-year">2013</p>
            <span className="education-medal">Rector's Gold Medal</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects" id="projects">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="white" opacity="0.5">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>pse.azeem@gmail.com</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h4>Phone</h4>
                <p>+92 321 9550591</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h4>Location</h4>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Muhammad Azeem | Structural Engineer</div>
        <p className="footer-text">© 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
