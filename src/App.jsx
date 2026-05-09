import React, { useState, useEffect } from 'react';

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
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(15, 32, 71, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 0.8rem 5%;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: #4a90d9;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #4a90d9;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0c1e47 0%, #1a3a6e 40%, #2d5a87 70%, #1a3a6e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 5%;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(74, 144, 217, 0.2);
          border: 1px solid rgba(74, 144, 217, 0.4);
          color: #4a90d9;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeInDown 0.8s ease;
        }

        .hero h1 {
          font-size: 4.5rem;
          color: #fff;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: 2px;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        .hero-title {
          font-size: 1.8rem;
          color: #4a90d9;
          font-weight: 600;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease 0.4s both;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.8s ease 0.6s both;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease 0.8s both;
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #4a90d9 0%, #357abd 100%);
          color: #fff;
          box-shadow: 0 10px 30px rgba(74, 144, 217, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(74, 144, 217, 0.5);
        }

        .btn-secondary {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
          transform: translateY(-3px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        .scroll-indicator svg {
          width: 30px;
          height: 30px;
          fill: rgba(255, 255, 255, 0.6);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-15px);
          }
          60% {
            transform: translateX(-50%) translateY(-7px);
          }
        }

        /* Section Styles */
        .section {
          padding: 6rem 5%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, rgba(74, 144, 217, 0.1) 0%, rgba(74, 144, 217, 0.05) 100%);
          color: #4a90d9;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.8rem;
          color: #0c1e47;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #4a90d9 0%, #357abd 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* About Section */
        .about {
          background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
        }

        .about-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .about-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0c1e47 0%, #1a3a6e 100%);
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 60px rgba(12, 30, 71, 0.2);
          border: 5px solid #fff;
          overflow: hidden;
        }

        .about-image span {
          font-size: 4rem;
          color: #4a90d9;
          font-weight: 700;
        }

        .about-text {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.9;
          text-align: justify;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-item {
          background: #fff;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0c1e47;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #666;
          font-size: 0.9rem;
        }

        /* Skills Section */
        .skills {
          background: linear-gradient(180deg, #0c1e47 0%, #1a3a6e 100%);
          position: relative;
        }

        .skills::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
        }

        .skills .section-title {
          color: #fff;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .skill-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #4a90d9 0%, #357abd 100%);
          border-radius: 12px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .skill-name {
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .skill-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          margin-top: 0.8rem;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #4a90d9 0%, #6ba3e0 100%);
          border-radius: 2px;
          transition: width 1s ease;
        }

        /* Experience Section */
        .experience {
          background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
        }

        .timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #0c1e47 0%, #4a90d9 100%);
          border-radius: 3px;
        }

        .timeline-item {
          display: flex;
          gap: 3rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row-reverse;
          text-align: right;
        }

        .timeline-content {
          width: 45%;
          background: #fff;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: #4a90d9;
          border-radius: 50%;
          border: 4px solid #fff;
          box-shadow: 0 5px 20px rgba(74, 144, 217, 0.4);
        }

        .timeline-period {
          color: #4a90d9;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1.3rem;
          color: #0c1e47;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .timeline-company {
          color: #666;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .timeline-activities {
          list-style: none;
        }

        .timeline-activities li {
          color: #555;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .timeline-activities li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 6px;
          height: 6px;
          background: #4a90d9;
          border-radius: 50%;
        }

        /* Education Section */
        .education {
          background: linear-gradient(180deg, #0c1e47 0%, #1a3a6e 100%);
        }

        .education .section-title {
          color: #fff;
        }

        .education-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .education-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-10px);
        }

        .education-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #4a90d9 0%, #357abd 100%);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }

        .education-degree {
          color: #fff;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .education-school {
          color: #4a90d9;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .education-year {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }

        .education-medal {
          display: inline-block;
          background: linear-gradient(135deg, #ffd700 0%, #ffb347 100%);
          color: #0c1e47;
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-top: 1rem;
        }

        /* Projects Section */
        .projects {
          background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          height: 160px;
          background: linear-gradient(135deg, #0c1e47 0%, #1a3a6e 50%, #4a90d9 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-category {
          color: #4a90d9;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.2rem;
          color: #0c1e47;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .project-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Contact Section */
        .contact {
          background: linear-gradient(180deg, #0c1e47 0%, #1a3a6e 100%);
          position: relative;
        }

        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10zM40 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10zM30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .contact .section-title {
          color: #fff;
        }

        .contact-content {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #4a90d9 0%, #357abd 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .contact-info h4 {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .contact-info p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }

        /* Footer */
        .footer {
          background: #080f1e;
          padding: 2rem 5%;
          text-align: center;
        }

        .footer-logo {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .hero h1 {
            font-size: 2.8rem;
          }

          .hero-title {
            font-size: 1.4rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .about-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            flex-direction: column !important;
            text-align: left !important;
            padding-left: 50px;
          }

          .timeline-content {
            width: 100%;
          }

          .timeline-dot {
            left: 20px;
          }

          .education-cards {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-card {
            flex-direction: column;
            text-align: center;
          }

          .contact-card:hover {
            transform: translateY(-5px);
          }
        }

        @media (max-width: 480px) {
          .hero h1 {
            font-size: 2.2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

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
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-badge">Structural Engineering Expert</span>
          <h1>Muhammad Azeem</h1>
          <p className="hero-title">Senior Structural Engineer</p>
          <p className="hero-subtitle">
            Structural Analysis, Design, Retrofitting & Construction Solutions
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="section-header">
          <span className="section-tag">Get To Know</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <span>MA</span>
          </div>
          <p className="about-text">
            As a highly skilled Structural Engineer with diverse experience, I have expertise in structural analysis and design of high-rise buildings, bridges, culverts, and retrofitting of RCC structures. I have successfully supervised design projects and worked with advanced structural design, detailing, and drawing software. My academic achievements include a Bachelor's degree awarded with gold medal and Master's in Structural Engineering from NUST, as well as a Professional Engineer License from Pakistan Engineering Council (PEC). I have also published an earthquake engineering research paper in an international conference. Currently, I am a Senior Design Engineer at NESPAK. Additionally, I am the founder of GRS Contractors and Pakmaterials.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">14+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Research Papers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Companies Founded</div>
            </div>
          </div>
        </div>
      </section>

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
