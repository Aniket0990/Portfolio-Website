import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const About = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 400,
      });
    }
  }, []);

  return (
    <section className="bg-[#e5ecfb] lg:min-h-screen" id="about">
      <h2 className="heading text-[3.5rem] text-[#202020] font-extrabold text-center"><i className="fas fa-user-alt"></i> About <span className="text-[#7303a7]">Me</span></h2>
      <div className="flex flex-row gap-[2rem] flex-wrap p-[0.5rem] md:p-[2.5rem] mb-[7rem] md:mb-0">
        <div className="text-left flex-[1_1_20rem] mt-[2rem] md:mt-0">
          <img ref={tiltRef} draggable="false" className="tilt ml-0 mr-auto w-[70%] min-[400px]:w-[22rem] md:mt-[2rem] md:w-[30rem] lg:w-[50rem] h-auto rounded-[5%] shadow-[0_5px_10px_rgba(0,0,0,0.6)] transition-all duration-300 cursor-pointer hover:mix-blend-normal" src="/assets/images/aniket.jpg" alt="" />
        </div>
        <div className="flex-[1_1_45rem] p-[1rem] md:p-[2rem]">
          <h3 className="text-[#1b1b1b] text-[2.5rem]">I'm Aniket Shelke.</h3>
          <div className="text-[1.4rem] text-[#020133] font-semibold mt-[1rem]">FullStack Developer</div>
          <p className="text-[1.5rem] mt-[1.5rem] font-nunito font-semibold normal-case">
            - I am currently working as a Frontend Developer at TechTech, where I focus on building modern, responsive, and
            user-friendly web applications. My role involves developing clean and scalable user interfaces while ensuring
            a smooth and engaging user experience across different devices and browsers. <br /> <br />

            - In my current work, I primarily use technologies such as Next.js, React.js, JavaScript, TypeScript, and
            Tailwind CSS to create high-performance web applications. I enjoy working on UI development, optimizing
            application performance, and implementing best practices to deliver reliable and efficient frontend solutions. <br /> <br />

            - I also have knowledge of backend technologies including Core Java, Advanced Java, Spring Boot, and REST APIs.
            This understanding helps me collaborate effectively with backend teams and build well-integrated full-stack
            solutions. I also have experience working with databases such as MySQL and PostgreSQL. <br /> <br />

            - I am familiar with the Software Development Life Cycle (SDLC) and understand how different stages such as
            planning, development, testing, and deployment contribute to building successful software products.
            Additionally, I have experience with CI/CD practices that help streamline development workflows, improve code
            quality, and enable faster and more reliable deployments. <br /> <br />

            - Tech Stack: HTML5 | CSS3 | JavaScript | TypeScript | React.js | Next.js | Tailwind CSS | Java | Spring Boot |
            REST API | SQL | MySQL | PostgreSQL | Git | GitHub | SDLC | CI/CD
          </p>

          <div className="flex flex-wrap gap-0 md:gap-[1.5rem] font-nunito font-semibold mt-[1.5rem]">
            <div className="box">
              <p className="normal-case text-[1.5rem]"><span className="text-[#011aff]"> email : </span> aniketshelke554@gmail.com</p>
              <p className="normal-case text-[1.5rem]"><span className="text-[#011aff]"> location : </span> Pune, India - 411038</p>
            </div>
          </div>

          <div className="mt-[3rem]">
            <a href="https://drive.google.com/file/d/1PJmb60fxoTgYuEcCRKRhH0NY6vyS9hWF/view?usp=sharing"
              target="_blank" rel="noreferrer" className="inline-block p-[1.7rem_3rem] rounded-[0.5em] transition-all duration-300 text-[#fff] bg-[#2506ad] shadow-[0_5px_10px_rgba(48,68,247,0.6)] font-nunito hover:bg-[#1a047e] group w-max no-underline">
              <span className="font-semibold text-[1.8rem] tracking-[0.1rem]">Resume</span>
              <i className="fas fa-chevron-right ml-[0.3rem] text-[1.2rem] transition-transform duration-300 group-hover:translate-x-[5px]"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
