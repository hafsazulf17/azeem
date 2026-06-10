import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import page01 from '../assets/page-01.jpg';
import page02 from '../assets/page-02.jpg';
import page03 from '../assets/page-03.jpg';
import page04 from '../assets/page-04.jpg';
import page05 from '../assets/page-05.jpg';
import page06 from '../assets/page-06.jpg';
import page07 from '../assets/page-07.jpg';
import page08 from '../assets/page-08.jpg';
import page09 from '../assets/page-09.jpg';
import page10 from '../assets/page-10.jpg';
import page11 from '../assets/page-11.jpg';
import page12 from '../assets/page-12.jpg';
import page13 from '../assets/page-13.jpg';
import page14 from '../assets/page-14.jpg';

const tabs = [
  { label: 'Wood & Steel Structures', images: [page01] },
  { label: 'Bridge Design', images: [page02] },
  { label: 'Commercial Projects', images: [page03] },
  { label: 'RCC Structures', images: [page04] },
  { label: 'Forensic Science Lab', images: [page04] },
  { label: 'Supreme Court', images: [page05] },
  { label: 'Educational Buildings', images: [page07] },
  { label: 'Residential', images: [page08] },
  { label: 'Retaining Walls & Hydraulic', images: [page09] },
  { label: 'Retrofitting — Stone Masonry', images: [page10] },
  { label: 'US Projects', images: [page11, page12, page13, page14] },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5));

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      setZoomLevel(prev => Math.min(prev + 0.1, 3));
    } else {
      setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-slate-900" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Tab Bar - Wrapping Layout */}
        <div className="flex flex-wrap justify-center gap-3 pb-6 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                activeTab === index
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tabs[activeTab].images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
                    onClick={() => {
                      setActiveImage(img);
                      setIsModalOpen(true);
                      setZoomLevel(1);
                    }}
                  >
                    <img
                      src={img}
                      alt={`${tabs[activeTab].label} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-lg font-semibold text-white">{tabs[activeTab].label}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-3 z-50">
              <div className="flex items-center bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-white/20 gap-3 text-white">
                <button
                  onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                  className="hover:text-blue-400 transition-colors font-bold text-xl w-8 h-8 flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-xs font-mono min-w-[45px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                  className="hover:text-blue-400 transition-colors font-bold text-xl w-8 h-8 flex items-center justify-center"
                >
                  +
                </button>
              </div>

              <button
                className="text-white/70 hover:text-white transition-colors bg-black/60 backdrop-blur-md rounded-full p-2 border border-white/20"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={activeImage}
              style={{
                scale: zoomLevel,
                transition: 'transform 0.2s ease'
              }}
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
              onWheel={handleWheel}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
