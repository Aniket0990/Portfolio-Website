import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';

const Home = () => {
  const el = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java FullStack Development", "Frontend development", "Backend development"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 400,
      });
    }

    return () => {
      typed.destroy();
    };
  }, []);

  const socials = [
    { label: 'LinkedIn', icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/shelkeaniket', hoverBg: 'hover:bg-[#007bb6]' },
    { label: 'GitHub', icon: 'fa-github', href: 'https://github.com/Aniket0990', hoverBg: 'hover:bg-[#0e0e0e]' },
    { label: 'Telegram', icon: 'fa-telegram-plane', href: 'https://t.me/aniketshelke24', hoverBg: 'hover:bg-[#0088cc]' },
    { label: 'Instagram', icon: 'fa-instagram', href: 'https://www.instagram.com/heyanikets', hoverBg: 'hover:bg-[#ee00da]' },
  ];

  return (
    <section className="relative flex flex-col min-[600px]:flex-row items-start min-[600px]:items-center min-[600px]:justify-between overflow-hidden gap-[2rem] min-[600px]:gap-[1rem] lg:gap-[2rem] pt-[8rem] min-[600px]:pt-[6rem] lg:pt-[8rem] xl:pt-0 min-[600px]:min-h-[55vh] lg:min-h-[75vh] xl:min-h-screen" id="home">
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0 bg-transparent pointer-events-none"></div>
      
      <div className="flex-none w-full min-[600px]:flex-[1_1_50%] xl:flex-[1_1_40rem] z-20 pt-0">
        <h2 className="text-[2rem] min-[600px]:text-[2.2rem] lg:text-[3rem] xl:text-[4rem] font-extrabold text-[#002057] mt-[0.3rem] min-[600px]:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[1.5rem] leading-tight min-[600px]:leading-[1.3] xl:leading-[1.2]">
          Hi There,<br /> I'm Aniket<span className="text-[#ff7b00]"> Shelke</span>
        </h2>
        <p className="text-[1.2rem] min-[600px]:text-[1.3rem] lg:text-[1.6rem] xl:text-[2rem] text-[#000] font-semibold p-0 mt-[0.3rem] min-[600px]:mt-[0.5rem] lg:mt-[0.5rem] xl:mt-0">
          i am into <span ref={el} className="typing-text text-[#940808] text-[2rem] min-[600px]:text-[2.2rem] lg:text-[2.5rem] xl:text-[4rem] font-semibold py-[1rem]"></span>
        </p>
        <a href="#about" className="group relative leading-none inline-block rounded-[4em] transition-all duration-500 text-white bg-[#2506ad] shadow-[0_5px_18px_rgba(48,68,247,0.6)] font-nunito hover:bg-[#1a047e] m-[0.8rem_0_0.5rem_0] min-[600px]:m-[1rem_0_0.7rem_0] lg:m-[1.2rem_0_0_0] xl:m-[1rem_0_0_0] px-[1.5rem] py-[0.8rem] min-[600px]:px-[2rem] min-[600px]:py-[1rem] lg:px-[2.5rem] lg:py-[1.2rem] xl:px-[3rem] xl:py-[1.6rem]">
          <span className="font-bold tracking-[0.1rem] text-[1rem] min-[600px]:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.7rem]">About Me</span>
          <i className="fas fa-arrow-circle-down ml-[0.3rem] text-[1.5rem] transition-transform duration-300 group-hover:translate-x-[5px]"></i>
        </a>
        <div className="relative mt-[0.8rem] min-[600px]:mt-[1rem] lg:mt-[1.5rem] lg:flex-[1_1_100%] xl:mt-[5rem] xl:w-auto w-full">
          <ul className="pl-0 mb-0 list-none flex gap-[0.5rem] min-[600px]:gap-[0.5rem] lg:gap-[0.8rem] xl:inline-flex">
            {socials.map((social, index) => (
              <li key={index} className="inline-block mb-[14px]">
                <a
                  className={`inline-block text-center rounded-full transition-all duration-200 text-[#00d9ff] bg-[#09011b] mr-[8px] hover:text-white ${social.hoverBg} w-[36px] h-[36px] leading-[36px] text-[1.3rem] min-[600px]:w-[34px] min-[600px]:h-[34px] min-[600px]:leading-[34px] min-[600px]:text-[1.2rem] lg:w-[40px] lg:h-[40px] lg:leading-[40px] xl:w-[44px] xl:h-[44px] xl:leading-[44px] xl:text-[2rem]`}
                  aria-label={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex-none w-full min-[600px]:flex-[1_1_45%] xl:flex-[1_1_20rem] mt-[1rem] min-[600px]:mt-0 text-left min-[600px]:text-right z-20">
        <img
          ref={tiltRef}
          draggable="false"
          className="tilt w-[22rem] min-[600px]:w-[24rem] lg:w-[32rem] xl:w-[38rem] max-w-[80vw] ml-0 mr-auto min-[600px]:ml-auto min-[600px]:mr-0 mt-0 rounded-full shadow-[0_2px_30px_rgba(0,0,0,0.3)] cursor-pointer hover:shadow-[0_10px_50px_rgba(0,0,0,0.5)] transition-shadow duration-300 object-cover aspect-square"
          src="/assets/images/aniket1.jpg"
          alt="Aniket Shelke"
        />
      </div>
    </section>
  );
};

export default Home;
