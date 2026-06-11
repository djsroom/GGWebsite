import React from 'react';

export default function ProjectDetail() {
  const specs = [
    { label: "Project Scope", value: "200,000 sq ft Curtain Wall" },
    { label: "Glass Type", value: "Low-E, Triple Glazed Insulated Units" },
    { label: "Structural System", value: "Custom Silicone Glazed Curtain Wall & Glass Fins" },
    { label: "Building Height", value: "45 Stories" },
    { 
      label: "Sustainability", 
      value: (
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          LEED Platinum Certified
        </span>
      )
    }
  ];

  const gallery = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdkuUEqg7LGe7DCyqboWViR5SodGxfI-olIuRcfo-smowzk3tGeUlirvGuwqrvEsWFZsxESeuvM7OMZARu8WnRpOY7Pk9bGeQUP4auCe-q081IEsRc2SnUiAbOucWQ8d67XkT8dXiWw1juiVKsSOoOfZD0Bay_Q3PA6s3i3qwLMH9ojD6USsdn9ORzvG9e-9XsVx2IcylRyH8TmEsCgHUMvasrc1wJ3zr7S__FbzrWkeAnN0SJ1iR9OpCZHH9BKUBPJkvinSgyFo8",
      label: "Glazing Joints Detail",
      colSpan: "md:col-span-2 md:row-span-2"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJIHIHUWj2lka92JYXMx6T7riyAEgfaGpYSOaGCig5E2QfyM1dAr8j48jXM4_JmvtQxBzad4Qy_Ipd6AS6QxD7Ts_BRctkHcRvI_uAsQF3P29hqyvnmDl8dRGJNL9v7z_Fpng6oPatoCHFOxL9jmhSdMvUPopbvzP5PaCS8rwVNfinAX8cH8n2y2nxfafMIpz9c6G5Yg9-ycY_-qiK9fAdccPcWUI9tA8jRlqxe5HrUF4EQIoDM6yzhH9338rpv8M5tNpIOp9p8eU",
      label: "Atrium Fins"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtRpDC3bt34clzNyMFUFsVCYbFWtMvjfCYWa8B-p0HGzHKlKlaM5bPZry72R50OlaHmU-myaM295HHfRW-ikGpRLnUR-0t4hlIYE1pWkxItDVMiHZuFM0duhjnLyJ7bX00Z2eq7T5_nAZMz2x_TOcGvoeYtMKh4nm6aWr_Xj90_LasB32d3JQg5uljpcCiA3SRLjRp3bHyxCH6JaRc_XLTDaEbCaGvbSj3LCfsnzHDnill14atF5o7idrm3t2fzuI4E4PZtGLhdmw",
      label: "Curtain Wall Details"
    }
  ];

  const similarProjects = [
    {
      title: "Vertex Plaza",
      desc: "Complete renovation of a prominent 1980s office park with dynamic electrochromic smart glass.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3sLaMe5kwBwm-BYpRoup1U6S1IUu-5CdkmJGegVEPp5eLeKESsmYi6gYxU5-quTN1FAJs61GX_-1P8wlv1R8SL6jLLOZTvfzSl4VkgSWMWh5MyaKgIcIWTEuFO1px-47vK_J-vAVlx3QPHyiNoN6_EdCFssAyJZ8n18t823ZOD-3kOLmTRVq7aF1W4sbOMSR75G09_EzY85WUUF-JGHdoZeqHVVnZbEkFdilNyzumbruFNZGQRR0KT4LgJY6m-3KpwkUV4JBiZ-s"
    },
    {
      title: "Lumina HQ",
      desc: "A sweeping, curved curtain wall installation for a flagship corporate campus in Silicon Valley.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQoJfVPvPfbwiybRIAcIEcFWSj-1fJMvhYDYHuIjOQtvi7MTPYkgToGRUzgDnvwRoQFpkh1pJMYNNm-r82xk-oErA39R2C3kEqAaYSBlcKqCd-qSewuFXtXP1_nlJe2czFXonS6Y4stQx4eqIX74USxdQqkgnuK-MgByS-fVhsTQFY9YozE2XZiaJluOOMBgp5tCnEDK2dmgHKZt_hrlMQZe62Xf_w0hK5RH5sAl8ZOAQ7hvwJRNnAF3W_jlspiEkuz2J7skZLMJU"
    },
    {
      title: "The Monolith",
      desc: "High-performance acoustic glazing solutions for an urban residential tower near major transit hubs.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWfjNZmL8tLXTJn2hJw2donInPM14Bl8M6kS1qfLBG9jTARzPuZkg7moLIQ_-y1fH-75mPZo9O11O0_4GGyavoECVuh2jusj9D1KgDlxptIvBDQAHfO4fFblv7P7f3OymKp2R-d4Nia3AQWZzJodUTOE-ky_Lb0ld08atTe_H0WLNLZx4nU7DnfjQ-_2f9-CDqysFedJCMXfrUVF6mCz-3X6FGDdc0hpsgaAUX72xTbo90iwhAeH_IW8TJPQ5kT__LyV2SVG0rgwE",
      hideMobile: true
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqi-4zZUDmnAJXeoElNn4Sfg5XfsjKLG3vNPQb09fs91tU3NSgez2bVA2yyeGnjizbFbKoINwpjo8N8JxyvXPhy_UlZqkbKRujykYfR1ZNdC1KEGzynm0TZZFtGD6iCINDF_ISnkBEhQC0w7OIFLk1cNmOgBqjNl-tbclrtno-_Nca_jBcBGzTNH5qz0vr4kbxv6ijz_n_gWFcRd3roIAby7pJGb8lqh-cLd6PPf_AUpJuBeJlcnFwroxvCUj8ulq_lWYq3n1v-ZU')" }}
        >
          <div className="absolute inset-0 bg-overlay-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-gutter max-w-container-max mx-auto">
          <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl-mobile md:font-headline-xl text-white mb-4 tracking-tight">Apex Financial Tower</h1>
          <p className="text-headline-sm font-headline-sm text-surface-container-lowest opacity-90 max-w-2xl mx-auto">Commercial Excellence in San Francisco</p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-section-padding-top pb-section-padding-bottom px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">The Vision Made Reality</h2>
            <div className="space-y-4 text-on-surface-variant text-body-lg font-body-lg leading-relaxed">
              <p>
                Rising 45 stories above the financial district, the Apex Financial Tower represents a pinnacle of modern architectural glazing. The project demanded a facade that could withstand immense wind loads while maximizing natural light penetration and maintaining strict thermal efficiency standards required for LEED Platinum certification.
              </p>
              <p>
                Green Glass was contracted to engineer and install over 200,000 square feet of custom curtain wall. Our solution utilized state-of-the-art Low-E, triple-glazed panels that significantly reduce solar heat gain without sacrificing transparency. The intricate structural silicone glazing system provides a seamless, monolithic appearance from the exterior, reflecting the city skyline with pristine clarity.
              </p>
              <p>
                One of the most significant challenges was the installation of the striking 3-story glass atrium at the base. This required custom-engineered glass fins for structural support, eliminating the need for bulky metal mullions and creating a truly transparent, inviting entrance for the corporate tenants above.
              </p>
            </div>
          </div>

          {/* Right Column: Specs Card */}
          <div className="lg:col-span-4">
            <div className="bg-surface soft p-6 h-full border border-surface-variant flex flex-col justify-between">
              <div>
                <h3 className="text-headline-md font-headline-md text-primary mb-6 border-b border-surface-variant pb-4">Technical Specifications</h3>
                <dl className="space-y-5">
                  {specs.map((spec, idx) => (
                    <div key={idx}>
                      <dt className="text-label-md font-label-md text-text-secondary uppercase tracking-wider mb-1">{spec.label}</dt>
                      <dd className="text-body-lg font-body-lg text-on-surface font-semibold">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-variant">
                <button className="w-full bg-surface-container-high text-on-surface hover:bg-secondary hover:text-white transition-colors duration-300 py-3 rounded soft text-label-md font-label-md flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined">download</span>
                  Download Case Study
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Project Gallery Bento Grid */}
      <section className="bg-surface-container-low py-section-padding-top pb-section-padding-bottom">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-headline-md font-headline-md text-primary">Installation &amp; Detail</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mt-2">Precision at every connection.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {gallery.map((item, idx) => (
              <div 
                key={idx} 
                className={`soft overflow-hidden group cursor-pointer relative ${item.colSpan || ''}`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-label-md font-label-md">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Similar Projects */}
      <section className="py-section-padding-top pb-section-padding-bottom max-w-container-max mx-auto px-gutter">
        <h2 className="text-headline-md font-headline-md text-primary text-center mb-12">More Commercial Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className={`bg-surface soft border border-surface-variant flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300 ${
                proj.hideMobile ? 'hidden lg:flex' : ''
              }`}
            >
              <div 
                className="h-48 w-full bg-cover bg-center overflow-hidden" 
                style={{ backgroundImage: `url('${proj.image}')` }}
              ></div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2 group-hover:text-secondary transition-colors">
                  {proj.title}
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant mb-4 line-clamp-2">
                  {proj.desc}
                </p>
                <div className="mt-auto flex items-center text-secondary text-label-md font-label-md font-bold">
                  View Project <span className="material-symbols-outlined ml-1 text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
