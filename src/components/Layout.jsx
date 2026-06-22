import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-body-lg">
      {/* TopNavBar */}
      <header
        className={`w-full top-0 sticky z-50 shadow-[0_3px_5px_rgba(136,136,136,0.3)] dark:shadow-none header-transition ${isScrolled
          ? 'header-scrolled bg-black text-white'
          : 'bg-surface dark:bg-surface-dark text-on-surface'
          }`}
        id="site-header"
      >
        <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
          {/* Brand Logo */}
          <Link
            className="flex items-center gap-3 h-full group"
            to="/"
          >
            <img
              src="/logo-symbol.png"
              alt="Green Glass Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`text-headline-md font-headline-md font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-primary dark:text-primary-fixed'
                }`}
            >
              Green Glass
            </span>
          </Link>

          {/* Navigation Links (Web) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => {
                  let classes = "transition-colors duration-300 text-label-md font-label-md uppercase tracking-wider ";
                  if (isActive) {
                    classes += isScrolled
                      ? "text-white border-b-2 border-white pb-1 font-bold"
                      : "text-secondary border-b-2 border-secondary pb-1 font-bold";
                  } else {
                    classes += isScrolled
                      ? "text-gray-300 hover:text-white"
                      : "text-on-surface dark:text-on-surface-variant hover:text-secondary";
                  }
                  return classes;
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>



          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-white' : 'text-primary dark:text-primary-fixed'}`}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface dark:bg-surface-dark border-t border-outline-variant px-gutter py-4 flex flex-col space-y-4 shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-label-md font-label-md uppercase tracking-wider block py-2 ${isActive
                    ? 'text-secondary font-bold'
                    : 'text-on-surface dark:text-on-surface-variant hover:text-secondary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </div>
        )}
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface-footer dark:bg-surface-dark w-full pt-section-padding-top pb-section-padding-bottom border-t border-outline-variant text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-container-max mx-auto px-gutter">
          {/* Brand / Copyright */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-3 w-fit group">
              <img
                src="/logo-symbol.png"
                alt="Green Glass Logo"
                className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-headline-sm font-headline-sm text-on-error font-bold">
                Green Glass
              </span>
            </Link>
            <p className="text-on-primary-fixed-variant text-body-md font-body-md opacity-80">
              © 2026 Green Glass. Dedicated to Perfection.
            </p>
          </div>
          {/* Links Column 1 */}
          {/* <div className="flex flex-col space-y-3">
            <h4 className="text-on-error text-label-md font-label-md uppercase tracking-wider mb-2">Services</h4>
            <a className="text-surface-variant text-body-md font-body-md hover:text-secondary-fixed transition-colors duration-200 hover:translate-x-1 focus:ring-1 focus:ring-primary-fixed-dim rounded w-fit" href="#installation">Installation</a>
            <a className="text-surface-variant text-body-md font-body-md hover:text-secondary-fixed transition-colors duration-200 hover:translate-x-1 focus:ring-1 focus:ring-primary-fixed-dim rounded w-fit" href="#eco-friendly">Eco-Friendly Construction</a>
          </div> */}
          {/* Links Column 2 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-on-error text-label-md font-label-md uppercase tracking-wider mb-2">Company</h4>
            <Link className="text-surface-variant text-body-md font-body-md hover:text-secondary-fixed transition-colors duration-200 hover:translate-x-1 focus:ring-1 focus:ring-primary-fixed-dim rounded w-fit" to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
