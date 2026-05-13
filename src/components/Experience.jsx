import React from 'react';

const TimelineItem = ({ align, tag, title, date, details }) => {
  const isLeft = align === 'left';
  return (
    <div className={`relative w-full pl-[8rem] pr-[2rem] py-[10px] md:w-[50%] md:px-[40px] md:py-[10px] ${isLeft ? 'left-0' : 'left-0 md:left-[50%]'}`}>
      
      {/* Circle */}
      <div className={`absolute w-[25px] h-[25px] rounded-full bg-white border-[4px] border-[#ff9f55] top-[15px] z-10 flex items-center justify-center text-[#02094b] 
        left-[18.5px] ${isLeft ? 'md:left-auto md:-right-[12.5px]' : 'md:left-[-12.5px]'}
      `}>
      </div>

      {/* Arrow */}
      <div className={`absolute h-0 w-0 top-[22px] z-[1] border-solid border-y-[10px] border-y-transparent
        left-[70px] border-l-0 border-r-[10px] border-r-[#f68c09]
        ${isLeft ? 'md:left-auto md:border-r-0 md:border-l-[10px] md:border-l-[#f68c09] md:right-[30px]' : 'md:left-[30px] md:border-l-0 md:border-r-[10px] md:border-r-[#f68c09]'}
      `}></div>

      {/* Content */}
      <div className="bg-[#f68c09] relative rounded-[6px] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0.5rem_0.5rem_1.2rem_rgba(0,0,0,0.3)] pb-[0.5rem]">
        <div className="text-[1.4rem] pt-[1rem] pl-[1rem]">
          <h2 className="text-[2rem] font-bold">{tag}</h2>
        </div>
        <div className="ml-[1rem] pb-[0.5rem]">
          <h3 className="text-[1.5rem] font-semibold">{title}</h3>
          <p className="text-[1.3rem]">{date}</p>
          <p className="text-[1.4rem] mt-[0.5rem] mr-[1rem] leading-relaxed whitespace-pre-line">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="lg:min-h-screen" id="experience">
      <h2 className="heading text-[3.5rem] font-extrabold text-center text-[#202020]"><i className="fas fa-briefcase"></i> Experience </h2>

      <div className="relative max-w-[1200px] mx-auto mt-[2rem] md:mt-0">
        {/* Timeline vertical line */}
        <div className="absolute w-[6px] bg-[#020133] top-0 bottom-0 left-[31px] md:left-[50%] -ml-[3px] z-[-2]"></div>

        <TimelineItem 
          align="left"
          tag="TechTech"
          title="Frontend Developer"
          date="Feb 2026 - Present"
          details={`- Developing modern, responsive, and user-friendly web applications as a Frontend Developer at TechTech.
- Building scalable and reusable UI components using Next.js, React.js, JavaScript, TypeScript, and Tailwind CSS.
- Integrating frontend applications with backend services through REST APIs to ensure seamless functionality.
- Optimizing application performance and improving user experience across different devices and browsers.
- Collaborating with cross-functional teams including backend developers and designers.`}
        />

        <TimelineItem 
          align="right"
          tag="Self Employed"
          title="Full Stack Developer"
          date="June 2021 - present"
          details={`Self-employed Full Stack Developer specializing in creating responsive, user-friendly web applications. Experienced in designing and building both front-end and back-end solutions, managing projects independently.`}
        />

        <TimelineItem 
          align="left"
          tag="Robowaves"
          title="Java FullStack Developer | Internship"
          date="Feb 2025 - July 2025"
          details={`- Working on Java-based real-time application Development with Hands-on experience.
- Designed and integrated backend and frontend components to create scalable, user-friendly systems.
- Ensured coding best practices, clean architecture, and deployment on AWS.`}
        />

        <TimelineItem 
          align="right"
          tag="Oasis Infobyte"
          title="Web Developer | Internship"
          date="May 2023 - June 2023"
          details={`Built a Web Application like Calculator, Stop Watch, ToDo List WebApp, Quiz Web App, NeomorphismClock, Temperature Converter`}
        />
      </div>
    </section>
  );
};

export default Experience;
