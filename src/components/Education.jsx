import React from 'react';

const Education = () => {
  return (
    <section className="bg-[#e5ecfb] lg:min-h-screen" id="education">
      <h1 className="heading text-[3.5rem] font-extrabold text-center text-[#202020]"><i className="fas fa-graduation-cap"></i> My <span className="text-[#7303a7]">Education</span></h1>
      <div className="flex flex-wrap justify-center items-center flex-col md:gap-5 md:mt-7">
        <div className="flex flex-col md:flex-row w-full md:h-[20rem] md:w-[80%] lg:w-[70%] rounded-[1.5rem] shadow-[0.2rem_0.5rem_1rem_rgba(0,0,0,0.2)] text-center relative mt-[0.6rem] overflow-visible transition-all duration-300 bg-[#fcfcfc] hover:scale-[1.08] hover:shadow-[1rem_0.5rem_1.2rem_rgba(0,0,0,0.3)]">
          <div className="flex-[1_1_20rem] w-full h-[25rem] md:h-auto">
            <img draggable="false" src="/assets/images/educat/college.webp" alt="College" className="object-cover relative w-full h-full rounded-t-[1.5rem] md:rounded-none md:rounded-l-[1.5rem]" />
          </div>
          <div className="relative flex flex-col p-[1rem] flex-wrap flex-none md:flex-[1_1_70rem]">
            <h3 className="text-[2.5rem] text-[#012970] py-[0.5rem] font-semibold text-left ml-[1rem]">Bachelor of Engineering in Computer Science</h3>
            <p className="text-[1.5rem] ml-[1rem] text-left">SKN Sinhgad Institute of Technology and Science | Lonavala </p>
            <h4 className="text-[2rem] text-[#226d00] text-left m-[1rem] font-nunito font-bold">2020-2024 | 7.83(CGPA) </h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:h-[20rem] md:w-[80%] lg:w-[70%] rounded-[1.5rem] shadow-[0.2rem_0.5rem_1rem_rgba(0,0,0,0.2)] text-center relative mt-[0.6rem] overflow-visible transition-all duration-300 bg-[#fcfcfc] hover:scale-[1.08] hover:shadow-[1rem_0.5rem_1.2rem_rgba(0,0,0,0.3)] mt-[2rem]">
          <div className="flex-[1_1_20rem] w-full h-[25rem] md:h-auto">
            <img draggable="false" src="/assets/images/educat/school1.jpg" alt="HSC School" className="object-cover relative w-full h-full rounded-t-[1.5rem] md:rounded-none md:rounded-l-[1.5rem]" />
          </div>
          <div className="relative flex flex-col p-[1rem] flex-wrap flex-none md:flex-[1_1_70rem]">
            <h3 className="text-[2.5rem] text-[#012970] py-[0.5rem] font-semibold text-left ml-[1rem]">HSC Science</h3>
            <p className="text-[1.5rem] ml-[1rem] text-left">Arts, Science and Commerce College | Rahuri </p>
            <h4 className="text-[2rem] text-[#226d00] text-left m-[1rem] font-nunito font-bold">2019-2020 | 61% </h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:h-[20rem] md:w-[80%] lg:w-[70%] rounded-[1.5rem] shadow-[0.2rem_0.5rem_1rem_rgba(0,0,0,0.2)] text-center relative mt-[0.6rem] overflow-visible transition-all duration-300 bg-[#fcfcfc] hover:scale-[1.08] hover:shadow-[1rem_0.5rem_1.2rem_rgba(0,0,0,0.3)] mt-[2rem]">
          <div className="flex-[1_1_20rem] w-full h-[25rem] md:h-auto">
            <img draggable="false" src="/assets/images/educat/school2.jpg" alt="SSC School" className="object-cover relative w-full h-full rounded-t-[1.5rem] md:rounded-none md:rounded-l-[1.5rem]" />
          </div>
          <div className="relative flex flex-col p-[1rem] flex-wrap flex-none md:flex-[1_1_70rem]">
            <h3 className="text-[2.5rem] text-[#012970] py-[0.5rem] font-semibold text-left ml-[1rem]">SSC Science</h3>
            <p className="text-[1.5rem] ml-[1rem] text-left">Savitribai Phule Madhyamik Vidyalaya, MPKV | Rahuri</p>
            <h4 className="text-[2rem] text-[#226d00] text-left m-[1rem] font-nunito font-bold">2017-2018 | 87%</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
