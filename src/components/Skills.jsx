import React from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-[#57059e] to-[#4a00e0] lg:min-h-screen" id="skills">
      <h2 className="heading text-[3.5rem] font-extrabold text-center text-[#fff]"><i className="fas fa-laptop-code"></i> Skills & <span className="text-[#ffe600]">Tools</span></h2>
      <div className="bg-[rgba(0,0,22,0.4)] text-[#fff] rounded-[1rem] w-full p-0 m-0 mt-[5px] md:w-[90%] md:p-[1.5rem] md:mx-auto md:mt-[1.5rem]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem] md:gap-[2rem] flex-wrap m-[1rem] p-[2rem_0.2rem] md:m-0 md:p-4" id="skillsContainer">
          {skillsData.map((skill, index) => (
            <div className="mb-[10px] p-[8px] rounded-[1rem] shadow-[0_4px_10px_rgba(0,0,0,0.2)] bg-[rgba(0,0,22,0.9)] transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_8px_15px_rgba(0,2,68,0.8)] hover:bg-[rgba(0,0,0,0.9)]" key={index}>
              <div className="flex flex-col items-center gap-[1rem] mt-[1rem]">
                <img src={skill.icon} alt={skill.name} className="w-[4rem] h-[4rem] object-contain" />
                <span className="text-[2rem] font-medium font-poppins ml-[0.5rem] text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
