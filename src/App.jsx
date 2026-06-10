import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
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

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      {/* Navigation */}
      <Navbar isScrolled={isScrolled} />

      {/* Hero Section */}
      <Hero />
      <Projects />


      {/* Skills Section */}
      <section className="py-16 md:py-24 px-6" id="skills">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-2 block">Technical Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Software</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-start gap-4 hover:border-blue-500/50 transition-all" key={index}>
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="font-medium text-slate-200">{skill.name}</div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 px-6" id="experience">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-2 block">Career Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto relative">
          {experiences.map((exp, index) => (
            <div className="relative pl-8 pb-12 last:pb-0" key={index}>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 relative z-10">
                <div className="text-xs font-bold text-blue-500 mb-2">{exp.period}</div>
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{exp.company}</p>
                <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                  {exp.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-20"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 px-6" id="education">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-2 block">Academic Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col items-center text-center gap-4">
            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 mb-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">M.Sc. Structural Engineering</h3>
            <p className="text-slate-400 font-medium">NUST</p>
            <p className="text-sm text-slate-500">2017</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col items-center text-center gap-4">
            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 mb-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">B.Sc. Civil Engineering</h3>
            <p className="text-slate-400 font-medium">NUST</p>
            <p className="text-sm text-slate-500">2013</p>
            <span className="mt-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded-full border border-yellow-500/20">Rector's Gold Medal</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-6" id="contact">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-2 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center gap-4 hover:border-blue-500/50 transition-all">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-white">Email</h4>
                <p className="text-sm text-slate-400">pse.azeem@gmail.com</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center gap-4 hover:border-blue-500/50 transition-all">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-white">Phone</h4>
                <p className="text-sm text-slate-400">+92 321 9550591</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center gap-4 hover:border-blue-500/50 transition-all">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-white">Location</h4>
                <p className="text-sm text-slate-400">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <div className="text-sm font-bold text-white mb-2">Muhammad Azeem | Structural Engineer</div>
        <p className="text-xs text-slate-500">© 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
