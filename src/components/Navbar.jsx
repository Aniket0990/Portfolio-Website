import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      // Optional: Logic to update activeLink based on scroll position could go here
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[4%] min-[600px]:px-[1%] md:px-[2%] lg:px-[8%] py-[1.2rem] h-[6.5rem] bg-[#edf1fa] shadow-[0_1px_4px_rgba(0,0,0,0.388)] transition-all">
      <a href="/" className="text-[1.8rem] min-[600px]:text-[1.5rem] md:text-[2rem] whitespace-nowrap font-extrabold no-underline text-[#0e2431] hover:text-[#fc8c05] transition-colors">
        <i className="fab fa-node-js text-[2rem] min-[600px]:text-[1.8rem] md:text-[2.2rem]"></i> Aniket Shelke
      </a>

      <div
        id="menu"
        className={`fas ${menuOpen ? 'fa-times rotate-180' : 'fa-bars'} text-[2.5rem] min-[600px]:!hidden cursor-pointer text-[#18023f] transition-transform duration-300`}
        onClick={handleMenuClick}
      ></div>

      <nav
        className={`navbar ${
          menuOpen ? 'right-0' : 'right-[-120%]'
        } fixed min-[600px]:static top-[6.5rem] min-[600px]:top-auto w-[75%] min-[600px]:w-auto h-[calc(100vh-6.5rem)] min-[600px]:h-auto bg-[#4242423c] min-[600px]:bg-transparent backdrop-blur-[10px] min-[600px]:backdrop-blur-none text-left min-[600px]:text-center flex items-start min-[600px]:items-center transition-all duration-300`}
      >
        <ul className="flex flex-col min-[600px]:flex-row w-full min-[600px]:w-auto p-[1rem] min-[600px]:p-0 items-center justify-center list-none">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-center min-[600px]:text-left w-full min-[600px]:w-auto my-[1rem] min-[600px]:my-0 min-[600px]:ml-[0.5rem] md:ml-[1rem] lg:ml-[1.8rem] rounded-[0.5rem] min-[600px]:rounded-none"
            >
              <a
                className={`block min-[600px]:inline-block p-[1rem] min-[600px]:p-0 text-left min-[600px]:text-center text-[1.8rem] min-[600px]:text-[0.95rem] md:text-[1.2rem] lg:text-[1.57rem] font-semibold tracking-[0.04rem] transition-all duration-200 no-underline ${
                  activeLink === link.href
                    ? 'text-[#fff] min-[600px]:text-[#011aff] border-b-[0.5rem] min-[600px]:border-b-[0.2rem] border-[#000] min-[600px]:border-[#011aff] min-[600px]:py-[0.5rem]'
                    : 'text-[#fff] min-[600px]:text-[#0e2431] hover:text-[#fff] min-[600px]:hover:text-[#011aff] hover:border-b-[0.5rem] min-[600px]:hover:border-b-[0.2rem] hover:border-[#000] min-[600px]:hover:border-[#011aff] min-[600px]:hover:py-[0.5rem]'
                }`}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
