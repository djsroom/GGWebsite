import React from 'react';

export default function ContactUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-hero-height flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-overlay-black z-10 opacity-60"></div>
        <img
          alt="Corporate building exterior"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhjsXFkma-5dkRrdJP8XoRM6pne31CwYlX4me1saaosFYd6QA6-LaYNKQjUV26fuc5PpJ0pMAUI_cvk2IhdqGmhhOgl_iWXzAi6lDQwvZ1xYTmlWjzFJHqre0fHUEUjxM_jZSQ-EMt65sojvp1aj5-CadHcU7RIrjnPV8hUErgSAGxnsW2d-_UECa1rixJPwhO16xaf3vnMHz9rdNy3b-Ammx8VZhMUvqrpLMmccvzDiACs2i4lECHgOKFiLw7dFYNhZ0VKTcaHsQ"
        />
        <div className="relative z-20 text-center px-gutter">
          <h1 className="text-headline-xl font-headline-xl text-white mb-4">Contact Us</h1>
          <p className="text-headline-sm font-headline-sm text-surface-variant max-w-2xl mx-auto opacity-95">
            Get in touch with our experts to discuss your architectural glass needs or learn more about our solutions.
          </p>
        </div>
      </section>

      {/* Headquarters Info & Map Section */}
      <section className="max-w-container-max mx-auto px-gutter pt-section-padding-top pb-section-padding-bottom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-stretch">
          
          {/* Info Card */}
          <div className="soft-box p-8 flex flex-col justify-center bg-surface">
            <h2 className="text-headline-md font-headline-md text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
              Headquarters
            </h2>
            
            <address className="text-body-lg font-body-lg text-on-surface-variant not-italic mb-8 leading-relaxed space-y-1">
              <strong className="text-xl text-on-surface font-semibold">Green Glass Corp.</strong><br />
              14114 Shoemaker Ave <br />
              Suite 402<br />
              Norwalk, CA 90650 USA
            </address>
            
            <div className="flex flex-col gap-5 border-t border-outline-variant pt-6">
              <a className="flex items-center gap-4 text-body-lg font-body-lg text-on-surface-variant hover:text-secondary transition-colors duration-200 group" href="tel:+15624056100">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary text-2xl transition-colors duration-200">call</span>
                <span className="font-semibold">+1 (562) 405-6100</span>
              </a>
              <a className="flex items-center gap-4 text-body-lg font-body-lg text-on-surface-variant hover:text-secondary transition-colors duration-200 group" href="mailto:info@greenglassus.com">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary text-2xl transition-colors duration-200">mail</span>
                <span className="font-semibold">info@greenglassus.com</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="soft-box p-2 min-h-[400px] md:h-auto overflow-hidden relative bg-surface">
            <iframe 
              title="Google Map of Green Glass Corp."
              src="https://maps.google.com/maps?q=14114%20Shoemaker%20Ave%20Suite%20402,%20Norwalk,%20CA%2090650%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 rounded"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
}
