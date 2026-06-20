import React, { useState, useEffect } from 'react';
import { galleryCategories, galleryProjects } from '../data/galleryData';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter projects based on active category key
  const filteredProjects = filter === 'all' 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === filter);

  // Helper to compute count of projects for each category
  const getCategoryCount = (categoryKey) => {
    if (categoryKey === 'all') {
      return galleryProjects.length;
    }
    return galleryProjects.filter(project => project.category === categoryKey).length;
  };

  // Lightbox navigation functions
  const openLightbox = (index) => {
    setActiveProjectIndex(index);
    setActiveImageIndex(0);
  };

  const closeLightbox = () => {
    setActiveProjectIndex(null);
    setActiveImageIndex(0);
  };

  const activeProject = activeProjectIndex !== null ? filteredProjects[activeProjectIndex] : null;

  const handleNext = () => {
    if (!activeProject) return;
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % activeProject.images.length);
  };

  const handlePrev = () => {
    if (!activeProject) return;
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + activeProject.images.length) % activeProject.images.length);
  };

  // Keyboard shortcut listener for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeProjectIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectIndex, activeImageIndex, filteredProjects]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="w-full h-[300px] relative flex items-center justify-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Modern Glass Building" 
            className="w-full h-full object-cover object-center" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrXff5uxUQiI0Tc8sw8X9Bl8_9rYukQoSldTVP0J6UHcth9DIsCC5F5nwWWZX5Besbj4O8v2XuJIpSTWiX0r_rar82w7i8dBjgxHmGefG_rt12KT6JnbVbjhhR3HgZTVltj7UiGFpJLZYcsMKeqPDYWCjpeGnJ5OqlCZA7lYPdP-EYhbB0E5rZdYRunlLHyxXkXbbSYEciGoIZ-V6w_dis1coxBlodAFQKYjOsWw4kygnW5UYEQ3uxbv23ASKYz4dKlFz13ksl5q0"
          />
          <div className="absolute inset-0 bg-overlay-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-container-max mx-auto">
          <h1 className="text-headline-xl font-headline-xl text-white mb-4 tracking-tight">Our Portfolio</h1>
          <p className="text-headline-sm font-headline-sm text-surface-variant max-w-2xl mx-auto opacity-95">
            Explore our comprehensive showcase of structural elegance. From expansive commercial facades to precise residential installations, discover clarity defined.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow w-full px-gutter max-w-container-max mx-auto pt-section-padding-top pb-section-padding-bottom">
        
        {/* Filter Controls (Responsive Tabs with Badges) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 border-b border-surface-container pb-6">
          {galleryCategories.map((cat) => {
            const count = getCategoryCount(cat.key);
            const isActive = filter === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`text-label-md font-label-md px-5 py-2.5 rounded transition-all duration-300 flex items-center gap-2 border group focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-sm transform -translate-y-[1px]'
                    : 'bg-surface border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition-colors duration-300 ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-surface-container-high text-on-surface-variant group-hover:bg-secondary/15 group-hover:text-secondary'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Dynamic Bento Grid with Zoom & Detail Reveal on Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredProjects.map((project, index) => {
            // Disable grid item expanding for categories with 3 or fewer items
            // so they align cleanly side-by-side or stack neatly.
            const isLarge = project.large && filteredProjects.length > 3;

            return (
              <div
                key={project.id}
                onClick={() => openLightbox(index)}
                className={`soft-box flex flex-col overflow-hidden group cursor-pointer relative ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="w-full h-full relative overflow-hidden flex-grow bg-surface-container">
                  <img 
                    alt={`${project.title} at ${project.location}`} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={project.images[0]}
                  />
                  {/* Subtle dark overlay gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"></div>
                </div>
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-[10px_20px_12px_16px] text-white z-10 transition-transform duration-300 group-hover:-translate-y-[2px]">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed-dim block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-[18px] md:text-headline-sm font-headline-sm leading-snug line-clamp-1 mb-1 font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-body-md font-body-md text-surface-variant flex items-center gap-1 opacity-90">
                    <span className="material-symbols-outlined text-[15px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    {project.location}
                  </p>
                </div>
                {/* Multi-image badge */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">collections</span>
                    {project.images.length} Photos
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Premium Lightbox Modal (Glassmorphic Backdrop + Navigation + Info Box) */}
      {activeProjectIndex !== null && activeProject && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close button top right */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2.5 transition-all z-50 focus:outline-none"
            aria-label="Close lightbox"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>

          {/* Navigation Controls */}
          {activeProject.images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-full p-4 transition-all z-10 focus:outline-none hidden sm:flex items-center justify-center"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-[28px] -translate-x-[2px]">arrow_back_ios</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-full p-4 transition-all z-10 focus:outline-none hidden sm:flex items-center justify-center"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined text-[28px] translate-x-[2px]">arrow_forward_ios</span>
              </button>
            </>
          )}

          {/* Touch navigation helper on mobile */}
          {activeProject.images.length > 1 && (
            <>
              <div className="absolute inset-y-0 left-0 w-1/4 sm:hidden z-10" onClick={(e) => { e.stopPropagation(); handlePrev(); }}></div>
              <div className="absolute inset-y-0 right-0 w-1/4 sm:hidden z-10" onClick={(e) => { e.stopPropagation(); handleNext(); }}></div>
            </>
          )}

          {/* Image & Detail Canvas */}
          <div 
            className="max-w-[90vw] md:max-w-4xl max-h-[85vh] flex flex-col items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group max-h-[60vh] flex items-center justify-center">
              <img 
                src={activeProject.images[activeImageIndex]} 
                alt={`${activeProject.title} at ${activeProject.location}`} 
                className="max-h-[60vh] max-w-full object-contain rounded shadow-2xl border border-white/10"
              />
            </div>
            
            {/* Project Specifications Block */}
            <div className="mt-6 text-center text-white px-4">
              <span className="text-xs uppercase tracking-widest text-primary-fixed-dim font-bold block mb-1">
                {activeProject.category}
              </span>
              <h2 className="text-xl md:text-3xl font-headline-xl tracking-tight mb-2 font-bold">
                {activeProject.title}
              </h2>
              <p className="text-body-lg text-surface-variant flex items-center justify-center gap-1 font-body-lg">
                <span className="material-symbols-outlined text-[18px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                {activeProject.location}
              </p>
            </div>
          </div>

          {/* Image Counter Badge */}
          {activeProject.images.length > 1 && (
            <div className="absolute bottom-6 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-white/80 text-xs font-semibold uppercase tracking-wider">
              {activeImageIndex + 1} / {activeProject.images.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

