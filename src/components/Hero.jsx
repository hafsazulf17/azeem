import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import profileImg from '../assets/dis.jpeg';

const Hero = () => {
  const stats = [
    { number: '14+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '3', label: 'Research Papers' },
    { number: '2', label: 'Companies Founded' },
  ];

  const expertise = [
    'Structural design, analysis, detailing and project coordination',
    'Design of multistory RCC buildings, prestressed concrete bridges, culverts and RC walls',
    'Structural assessment, forensic analysis and seismic retrofitting',
    'Advanced finite element modelling and performance-based structural analysis',
    'Preparation of structural calculations, BOQs and quantity/cost estimation',
    'BIM coordination and drafting workflows',
  ];

  const standards = [
    'AS 3600, AS 4100, AS 1170, AS 3826, ACI 318, ASCE 7-16, AISC 360, AASHTO',
    'ETABS, SAP2000, SAFE, CSiBridge, AutoCAD, REVIT, STAAD Pro, RISA-3D, Tekla, SPACEGASS, IDEA StatiCa, RAM Connection, MS Project, Primavera',
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a1628] text-white flex items-center justify-center py-20 px-6">
      {/* --- Animated Background Elements --- */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2a58] to-[#0a1628] opacity-80" />

        {/* Animated Blur Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-blob"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -100, 0],
            y: [0, -80, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob"
        />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* --- Profile Image Section --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group order-2 lg:order-1"
        >
          {/* Decorative floating elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />

          {/* Organic Shape Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob opacity-70 blur-md group-hover:blur-xl transition-all duration-500" />

            <div className="relative w-full h-full overflow-hidden bg-slate-800 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-4 border-white/10 group-hover:border-blue-400/50 transition-colors duration-500 shadow-2xl shadow-blue-900/50">
              <img
                src={profileImg}
                alt="Muhammad Azeem"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Floating Badge near image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for Projects
            </motion.div>
          </div>
        </motion.div>

        {/* --- Content Section --- */}
        <div className="flex-1 text-center lg:text-left order-1 lg:order-2 max-w-3xl">
          {/* Floating Hero Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium tracking-wide uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            Senior Structure Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200"
          >
            Muhammad Azeem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
          >
            Pioneering Structural Excellence
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Structural Analysis, Design, Retrofitting & Construction Solutions with 12+ years of global experience. Delivering resilient infrastructure through advanced engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-16"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 border border-white/10 backdrop-blur-md hover:border-white/30 flex items-center gap-2"
            >
              Contact Me
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* About / Bio Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid lg:grid-cols-2 gap-10 text-left p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Structural Engineer with Australian Permanent Residency (Subclass 190) and full working rights in Australia, bringing 12+ years of experience in structural analysis, design, assessment, and retrofitting of buildings and infrastructure projects.
              </p>

              <div className="space-y-3">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-3">Core Expertise</h4>
                <div className="grid gap-2">
                  {expertise.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="space-y-3">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-3">Standards & Software</h4>
                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 text-sm text-slate-300 leading-relaxed">
                  {standards.join(' • ')}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-hover hover:bg-white/10">
                    <span className="block text-2xl font-bold text-white">{stat.number}</span>
                    <span className="text-xs text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- Bottom SVG Divider --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,8.23-1.17,16.85-1.17,25.1C430.66,24.31,458.35,11.2,488.6,11.2c30.25,0,58,13.11,66.3,30.24,8.3,17.13,15.4,34.26,22.5,51.39C620.2,64.38,645.4,75.44,672,75.44c26.6,0,51.8-11.06,79.5-24.05,27.7-13,55.4-26.11,83.1-39.21,27.7,0,55.4,13.11,83.1,39.21,27.7,13,53,24.05,79.5,24.05,26.6,0,51.8-11.06,79.5-24.05,27.7-13,55.4-26.11,83.1-39.21,27.7-13,53-24.05,79.5-24.05,26.6,0,51.8,11.06,79.5,24.05,27.7,13,55.4,26.11,83.1,39.21,27.7,13,53,24.05,79.5,24.05,26.6,0,51.8-11.06,79.5-24.05,27.7-13,55.4-26.11,83.1-39.21C1180,24.31,1152.3,11.2,1122,11.2c-30.25,0-58,13.11-66.3,30.24-8.3,17.13-15.4,34.26-22.5,51.39C1020.2,64.38,994.4,75.44,968,75.44c-26.6,0-51.8-11.06-79.5-24.05-27.7-13-55.4-26.11-83.1-39.21-27.7,0-55.4,13.11-83.1,39.21-27.7,13-53,24.05-79.5,24.05-26.6,0-51.8-11.06-79.5-24.05-27.7-13-55.4-26.11-83.1-39.21-27.7-13-53-24.05-79.5-24.05-26.6,0-51.8,11.06-79.5-24.05-27.7-13-55.4-26.11-83.1-39.21-27.7,0-55.4,13.11-83.1,39.21-27.7,13-53,24.05-79.5,24.05-26.6,0-51.8-11.06-79.5-24.05-27.7-13-55.4-26.11-83.1-39.21-27.7-13-53-24.05-79.5-24.05-26.6,0-51.8,11.06-79.5-24.05-27.7-13-55.4-26.11-83.1-39.21-27.7,0-55.4,13.11-83.1,39.21-27.7,13-53,24.05-79.5,24.05-26.6,0-51.8-11.06-79.5-24.05-27.7-13-55.4-26.11-83.1-39.21-27.7-13-53-24.05-79.5-24.05z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
