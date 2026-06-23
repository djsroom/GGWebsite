import React from 'react';

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-hero-height flex items-center justify-center bg-surface-container-high overflow-hidden shadow-[0_3px_5px_rgba(136,136,136,0.5)]">
        <img
          alt="Industrial glass manufacturing facility with glowing orange hot glass and machinery"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACKrQuviQ4c6hOyKi5YuNL78UnB4M_k1A3vaHrl3fKnXO7g8iQCJV3wXtBnKXrom3aG7VL_PzaoG2bnAlJ4k7MSK-EYW-55bRzRbg68W4OMPCn9jMhia_KXMuCnQ3Ui0V7pWKn5o8f1o_qJQQyg-mObALRlPHq0J84h21mt7pnL4Lx_hHods2mjIUVi5Mpfw5vh4AqRN_7-mqIPy1SaehNKmUuG3T6byCV29OevnhVTkhYVgKpc5-rKXm6JV9JAMGX9qUxlQCSKmA"
        />
        <div className="absolute inset-0 bg-overlay-black opacity-50"></div>
        <div className="relative z-10 text-center px-gutter">
          <h1 className="text-headline-xl font-headline-xl text-white mb-4">Dedicated to Perfection</h1>
          <p className="text-headline-sm font-headline-sm text-white max-w-2xl mx-auto opacity-95">Crafting sustainable glass solutions for a modern world.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-section-padding-top px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-6">Our History</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-6">
              Based in Southern California since 1996, Green Glass is a professional glazing company built on experience, reliability, and quality workmanship. With 30 years of industry experience, we provide glazing services for commercial projects, working with contractors, owners, and project teams to support each scope with care and professionalism.
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Our work is grounded in a strong understanding of the construction process, from estimating and coordination to installation in the field. We approach every project with attention to detail, clear communication, and a commitment to completing work that meets project requirements and client expectations.
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              At Green Glass, we take pride in being a dependable partner throughout every stage of the project. Through experienced workmanship and a client focused approach, we continue to deliver glazing solutions that reflect professionalism, consistency, and trust.
            </p>
          </div>
          <div className="soft">
            <img
              alt="Team of professional engineers discussing blueprints in a bright modern office"
              className="w-full h-auto rounded-DEFAULT"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1m0A-PCvMX_-PtPIDd8VMKV7WmbKXzN3PR1-8uk9L5QU9SOBLgjjIZQ47NXhGFF69pzClqTVczxp7mn5FRoLdRmb_c5Tpiy2w7Bkev5WMlshgCii_4LpEMdtcNcmLUzMPH8jxmhGK4mAHCd_1Y5V4lrg73V7yj_7Cos6gH-t0yFdUb00YEGY8TUGizz7Jhjfn_httZf14NsNMu7SjT-H4R-5alwLei4crL8b19SFpy0N7MciQbBXJWFM4gzIFO6AbmBwbZc9v7Js"
            />
          </div>
        </div>
      </section>

      {/* Commercial Glass Expertise */}
      <section className="bg-surface-container-low py-section-padding-top shadow-[0_3px_5px_rgba(136,136,136,0.3)] border-y border-outline-variant mt-16">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="text-headline-md font-headline-md text-primary mb-12">Commercial Glass Expertise</h2>
          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
            <div className="soft bg-surface md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">domain</span>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Exterior Solutions</h3>
                  <div className="space-y-4">
                    <p className="text-body-lg font-body-lg text-on-surface-variant text-left">
                      Choosing the right glass for exterior commercial applications can be overwhelming. After all, there are a lot of variables to carefully consider and balance. For example, Codes. Clarity. Color. Insulation Value. Location. Looks. Light Transmission. Solar Control and much more.
                    </p>
                    <p className="text-body-lg font-body-lg text-on-surface-variant text-left">
                      Aluminum Curtain Wall, Storefront &amp; Commercial doors, Structural window wall, Aluminum Sunshades, Exterior Sliding &amp; Bi-folding doors (Nanawall, Fleetwood, La Cantina, Panda, and More), Automatic sliders &amp; operators, Aluminum Metal Cladding, and More.
                    </p>
                  </div>
                </div>
                <div className="h-full">
                  <img
                    alt="Modern commercial building featuring aluminum curtain wall system"
                    className="w-full h-64 md:h-full object-cover rounded-DEFAULT shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4WefRhLioMCE_-81e2ptLxV-whroiM85-68djesVGfFYysmvdCki_WOqJ6K8Akral9ySNwT0hRFQfm87nxAdbAYn-rDX9-RdZ931RHN4k-VxRiT_f2y9N_NyA1tDW_ZhVTzRkhg0wAmOmp8WPtYvesjPGA3fLeCc1F3mJHaBM3xf3OuDGZCKOuAKu8APXf8AJVoJbj5AXpMLzAUrvpvBAt7uiJho_ttGYWr7XvXcaBOMDmnciZUZpVenBJSHN6sTEPw7VgSviBsU"
                  />
                </div>
              </div>
            </div>
            <div className="soft bg-surface">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">meeting_room</span>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Interior Solutions</h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant text-left">
                We offer a complete range of products for every interior surface. Includes Low-iron, patterned, back-painted, acid-etched, and mirrors, as well as specialty glass like fire-rated, anti-corrosion, and wired glass with a wide variety of textures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Bento Grid */}
      <section className="py-section-padding-top pb-section-padding-bottom px-gutter max-w-container-max mx-auto">
        <h2 className="text-headline-lg font-headline-lg text-primary text-center mb-12">Precision in Every Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Large Feature Cell */}
          <div className="soft md:col-span-2 md:row-span-2 relative overflow-hidden group p-0">
            <img
              alt="Close up of precision glass cutting tool making a clean line on thick glass"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdgDafcpXGUOVbV85KIhVbWp7Vj3pEDFCuchnLpqg7h5eMFEvrLfWtEYgG5K_7sbwiyt2QDqgPads0Zuj5qZ7PQpaQuQ-Ar0xlx7ezcPg-zOt9oCReENDOkpaaPuUFnQfUMxkx2ahciKmgnodm-D8TQgMFqIbMEk8pozXdhbBCMJqhc7g2QSS7dl0TxI1_xwykRQ-u4FES9vxiBtXQ3M6REwj4dmqNX-7mYU-c2m10mUolKOeRR7FeMR-PvqbsU9k8VcOtC_wdK3o"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-overlay-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-headline-sm font-headline-sm text-white mb-2">Precision Engineering</h3>
              <p className="text-body-lg font-body-lg text-surface-variant">Computer-controlled cutting and shaping ensure every piece meets exact architectural specifications.</p>
            </div>
          </div>
          {/* Small Cell 1 */}
          <div className="soft md:col-span-1 md:row-span-1 bg-surface flex flex-col justify-center items-center text-center p-6 border border-outline-variant">
            <span className="material-symbols-outlined text-primary text-5xl mb-3">science</span>
            <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Raw Materials</h3>
            <p className="text-body-lg font-body-lg text-text-secondary mt-2">Sourcing high-performance glass for maximum durability and thermal efficiency.</p>
          </div>
          {/* Small Cell 2 */}
          <div className="soft md:col-span-1 md:row-span-1 bg-primary text-white flex flex-col justify-center p-6">
            <h3 className="text-headline-sm font-headline-sm mb-2">Quality Control</h3>
            <p className="text-body-lg font-body-lg text-primary-fixed-dim">Expert installation and multi-point inspections ensure long-term structural integrity.</p>
          </div>
          {/* Medium Cell */}
          <div className="soft md:col-span-2 md:row-span-1 relative overflow-hidden group p-0">
            <img
              alt="Modern mixed-use building featuring glass balconies and architectural metal cladding"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="/images/GGAboutUs.jpg"
            />
            <div className="absolute inset-0 bg-overlay-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              <h3 className="text-headline-sm font-headline-sm text-white mb-1">Final Delivery</h3>
              <p className="text-body-lg font-body-lg text-surface-variant">Transforming skylines with sustainable facades.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
