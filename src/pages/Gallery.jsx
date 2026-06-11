import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'residential', label: 'Residential' },
    { key: 'custom', label: 'Custom Installations' }
  ];

  const items = [
    {
      id: 1,
      category: 'commercial',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt6dH3N_7lVoO1CvGqubl3PkW_wOeafFGs1kMRFllrHGOrihp6WO3TtIEAU7crG5nSlLA535Z_R3qr6tt4dTSiK4NK39GTNCfUMoPFgd7P-75DLf5hHZdwmI0zEMcWMAIzI3l9iLPJ76i_u50DQFCOfS0UvmVKTLYcl8h_j2DaLqxK91CM-dWcppXlC_kExmmENfPvF4bqQjLcmrlag1R6zi_oY7WQLxYp7n0TnxI9sU1gXNcbgr_AlHtbThTxxLCgXfoTjz60iF4",
      title: "Apex Financial Tower",
      subtitle: "Complete exterior envelope utilizing high-efficiency thermal glazing.",
      link: "/project-detail",
      large: true
    },
    {
      id: 2,
      category: 'residential',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh8bLmgiw_SEKxR-vDqu-MHc0cVg-Sp7-otr8ourXO4kqLlSV86UcxjpqBuWLd8SuEBohE0OKrfVuWxjNHoFaQCNixK4w3oXs_Jy44R5nJxkN_fsPm4Fm-LLa_RpYa3EL_G43kv_K8OpCoONuGOmJ88sD_MNuxzATpFok09Y_z0WUib98wfSMAUc71pVqey3r-17PEpfwM_TwI4zSep0I0sumrMMCtqIOmFndVpqkPNv_cpdrTRZghstdCJTqTCgDf-ezAn9defRo",
      title: "Horizon Villa",
      link: "/project-detail",
      large: false
    },
    {
      id: 3,
      category: 'custom',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiUbC8waPoloSWZvX8DXF-0YimeIxd6srIiA51jQUTRRWhUhHvjus1wrSQRlO0ejodrY4Dm-c_VNM6-IXpBkpJ99oxqBX5FcGjq9kD-7RIfMgMreo6UcHa2wZsM5gHnzp4tqxKW0FKZWsKZ9jFVQLG-8cX9nMljLtD220scStptWDGFQ2GLq0givgo_I6oerJLaRuUXO5TdM39i9LpAgYCJFqFpy9REUSuh8Zr_4--33nM47PmPFHrYP9yWap1SQpOm4O80pSHYp0",
      title: "Atrium Stairway",
      link: "/project-detail",
      large: false
    },
    {
      id: 4,
      category: 'commercial',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWtx5IoYSrhN4XLZsA9OweOPE2svd5wkF306b-xTz7pGqQF_QhYuBsQKQwKEvAyTUIiDPkb9qxlix8ISd2jOZE0vTlgKAN82iO1auWNWFzZhwBuvU5kFq9gG0ZnHJiAQbVm2txl0xUMrE0vBDetimju0E791HebEAL1BTzZnLpXYZ5deHKTjZhLnulkHgGZQOQn9gjTQXDqbS1ZlF2lx44Pc76VAJ0FTAfLYLvWP5FmW2_aRnnM9LFmdw_-aoI9Uo8iHSF2oegvYg",
      title: "Tech Hub Partitions",
      link: "/project-detail",
      large: false
    },
    {
      id: 5,
      category: 'residential',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVR-4Udpn-JhxCmgBHz7z3OyMmDbvFuG55x-Y6RX9Z_2DU5zX0U6Y863XU-vUeioVaxvPeu7R_2D3QJwKSV3C8zETq1DTf-R_7xCFaGPrMih4N9Rxta3eI_i6ioK7z7NsSSnHJ5dg5DuKQeNiMehIhHFRG92RqvXbJ9e-1Kka7m4MwsqUErcIFvhb_BxdrBty-JNVhGiSmeSEBCb3GCFzSZpcO_l5ErmywF5f0AbUTcf7lOQsenL7IxR-Y9U7JxP7lae6i2Rqzsmw",
      title: "Lakeside Retreat",
      subtitle: "Double-height structural window wall maximizing natural light and views.",
      link: "/project-detail",
      large: true
    }
  ];

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <div>
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
        
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-surface-container pb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`text-label-md font-label-md px-6 py-2 rounded border transition-colors ${
                filter === cat.key
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-surface border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.link)}
              className={`soft-box flex flex-col overflow-hidden group cursor-pointer relative ${
                item.large ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="w-full h-full relative overflow-hidden flex-grow">
                <img 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-[10px_20px_8px_16px] text-white">
                <span className="text-label-md font-label-md uppercase tracking-wider text-primary-fixed-dim block mb-1">
                  {item.category}
                </span>
                <h3 className="text-headline-sm font-headline-sm">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-body-md font-body-md text-surface-variant mt-2 hidden md:block">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
