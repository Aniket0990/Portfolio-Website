import React from 'react';

const Footer = () => {
  return (
    <section className="pt-0 bg-[#00012b]" id="footer">
      <div className="flex justify-center flex-wrap">
        <div className="flex-[1_1_25rem] m-[1rem] md:m-[1.5rem]">
          <h3 className="text-[2.5rem] text-[#fff] pb-[0.5rem] font-normal">Aniket's Portfolio</h3>
          <p className="text-[1.5rem] text-[#ccc] py-[0.5rem] md:py-[0.7rem] normal-case">Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Rising 🚀. Connect with me over live chat!</p>
        </div>

        <div className="flex-[1_1_25rem] m-[1rem] md:m-[1.5rem]">
          <h3 className="text-[2.5rem] text-[#fff] pb-[0.5rem] font-normal">Quick Links</h3>
          <a href="#home" className="text-[1.5rem] text-[#eee] py-[0.3rem] block hover:text-[#ffae00] transition-colors"><i className="fas fa-chevron-circle-right"></i> Home</a>
          <a href="#about" className="text-[1.5rem] text-[#eee] py-[0.3rem] block hover:text-[#ffae00] transition-colors"><i className="fas fa-chevron-circle-right"></i> About</a>
          <a href="#skills" className="text-[1.5rem] text-[#eee] py-[0.3rem] block hover:text-[#ffae00] transition-colors"><i className="fas fa-chevron-circle-right"></i> Skills</a>
          <a href="#education" className="text-[1.5rem] text-[#eee] py-[0.3rem] block hover:text-[#ffae00] transition-colors"><i className="fas fa-chevron-circle-right"></i> Education</a>
          <a href="#work" className="text-[1.5rem] text-[#eee] py-[0.3rem] block hover:text-[#ffae00] transition-colors"><i className="fas fa-chevron-circle-right"></i> Work</a>
          <a href="#experience" className="text-[1.5rem] text-[#eee] py-[0.3rem] block hover:text-[#ffae00] transition-colors"><i className="fas fa-chevron-circle-right"></i> Experience</a>
        </div>

        <div className="flex-[1_1_25rem] m-[1rem] md:m-[1.5rem]">
          <h3 className="text-[2.5rem] text-[#fff] pb-[0.5rem] font-normal">Contact Info</h3>
          <p className="text-[1.5rem] text-[#ccc] py-[0.5rem] md:py-[0.7rem] normal-case"><i className="fas fa-phone text-[#ffae00] pr-[1rem]"></i>+91 9112776061</p>
          <p className="text-[1.5rem] text-[#ccc] py-[0.5rem] md:py-[0.7rem] normal-case"><i className="fas fa-envelope text-[#ffae00] pr-[1rem]"></i>aniketshelke554@gmail.com</p>
          <p className="text-[1.5rem] text-[#ccc] py-[0.5rem] md:py-[0.7rem] normal-case"><i className="fas fa-map-marked-alt text-[#ffae00] pr-[1rem]"></i>Pune, India-411038</p>
          <div className="flex flex-wrap py-[0.5rem]">
            <a href="https://www.linkedin.com/in/shelkeaniket" className="h-[4rem] w-[4rem] p-[0.8rem] md:p-[0.7rem] text-center rounded-[5rem] text-[1.7rem] mr-[1rem] transition-all duration-200 bg-[#e6e6e6] text-[#02094b] hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem] hover:border-[#b4b2b2] hover:text-[#ffae00]" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Aniket0990" className="h-[4rem] w-[4rem] p-[0.8rem] md:p-[0.7rem] text-center rounded-[5rem] text-[1.7rem] mr-[1rem] transition-all duration-200 bg-[#e6e6e6] text-[#02094b] hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem] hover:border-[#b4b2b2] hover:text-[#ffae00]" aria-label="GitHub" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:aniketshelke554@gmail.com" className="h-[4rem] w-[4rem] p-[0.8rem] md:p-[0.7rem] text-center rounded-[5rem] text-[1.7rem] mr-[1rem] transition-all duration-200 bg-[#e6e6e6] text-[#02094b] hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem] hover:border-[#b4b2b2] hover:text-[#ffae00]" aria-label="Mail" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://twitter.com/aniketshelke" className="h-[4rem] w-[4rem] p-[0.8rem] md:p-[0.7rem] text-center rounded-[5rem] text-[1.7rem] mr-[1rem] transition-all duration-200 bg-[#e6e6e6] text-[#02094b] hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem] hover:border-[#b4b2b2] hover:text-[#ffae00]" aria-label="Twitter" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://t.me/aniketshelke24" className="h-[4rem] w-[4rem] p-[0.8rem] md:p-[0.7rem] text-center rounded-[5rem] text-[1.7rem] mr-[1rem] transition-all duration-200 bg-[#e6e6e6] text-[#02094b] hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem] hover:border-[#b4b2b2] hover:text-[#ffae00]" aria-label="Telegram" target="_blank" rel="noreferrer">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>

      <h1 className="pt-[0.7rem] pb-0 text-center text-[1.5rem] font-nunito font-semibold text-[#fff] border-t-[0.1rem] border-[rgba(255,255,255,0.2)]">Designed with <i className="fa fa-heart text-[#e90606] mx-[0.3rem] text-[1.5rem] animate-pulse"></i> by <a href="https://www.linkedin.com/in/shelkeaniket" className="text-[#ffae00] hover:underline" target="_blank" rel="noreferrer"> Aniket Shelke</a></h1>
    </section>
  );
};

export default Footer;
