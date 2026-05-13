import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const projectsData = [
  {
    name: "Store Rating Web App",
    image: "/assets/images/projects/store rating app.jpg",
    desc: "Developed a full-stack web application using Spring Boot, MySQL, and ReactJS that enables users to submit ratings for registered stores. Implemented a role-based login system supporting System Administrators, Normal Users, and Store Owners with dashboards and functionalities."
  },
  {
    name: "Nasa-API Implementation",
    image: "/assets/images/projects/Nasa-API.png",
    desc: "Astronomy Picture of the Day (APOD) & Mars Rover Photos-Developed a Full-Stack Web Application that fetches and displays images from NASA’s API. Implemented MySQL database for efficient data storage and retrieval. Built using Spring Boot 3."
  },
  {
    name: "Nvidia Fibernet BroadbandSystem",
    image: "/assets/images/projects/NvidiaFibernet.png",
    desc: "Built a full-stack desktop application using Java Swing for broadband service for users. Integrated MySQL database using JDBC for dynamic data fetching, managing billing, user data, and service queries."
  },
  {
    name: "NotePad Code Editor",
    image: "/assets/images/projects/NotePadCodeEditor.png",
    desc: "Created a lightweight text editor with integrated Java compiler for beginner developers. Utilized Core Java concepts such as OOP, file handling, and exception handling. Designed user-friendly GUI using Java Swing and AWT."
  },
  {
    name: "Calculator",
    image: "/assets/images/projects/Calculator.png",
    desc: "A functional calculator web app built with HTML, CSS, and JavaScript, capable of performing basic arithmetic operations with a clean, responsive, and user-friendly interface."
  },
  {
    name: "Stop Watch",
    image: "/assets/images/projects/StopWatch.png",
    desc: "A functional stopwatch web app built with HTML, CSS, and JavaScript, featuring start, pause, reset, and lap functionalities with a clean, responsive, and user-friendly interface."
  },
  {
    name: "Quiz WebApp",
    image: "/assets/images/projects/QuizWebApp.png",
    desc: "A functional quiz web app built with HTML, CSS, and JavaScript, featuring multiple-choice questions, score tracking, and interactive feedback."
  },
  {
    name: "ToDo List App",
    image: "/assets/images/projects/ToDoApp.png",
    desc: "A to-do list web app built with HTML, CSS, and JavaScript, allowing users to add, edit, and delete tasks with a clean, responsive, and user-friendly interface."
  },
  {
    name: "NeomorphismClock",
    image: "/assets/images/projects/Clock.png",
    desc: "A stylish Neomorphism-themed clock web app built with HTML, CSS, and JavaScript, featuring a modern soft UI design and real-time display."
  }
];

const Projects = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 10,
      speed: 400,
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#000031] to-[#00002c] lg:min-h-screen" id="work">
      <h2 className="heading text-[3.5rem] font-extrabold text-center text-[#fff] p-[0.5rem]"><i className="fas fa-laptop-code"></i> Projects <span className="text-[#ffe600]">Made</span></h2>
      <div className="flex flex-wrap gap-[1.5rem] m-[1rem]">
        {projectsData.map((project, index) => (
          <div className="tilt flex-[1_1_30rem] rounded-[0.5rem] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)] relative overflow-hidden h-[35rem] group" key={index}>
            <img draggable="false" className="h-full w-full object-cover" src={project.image} alt={project.name} />
            <div className="h-full w-full absolute top-[85%] left-0 bg-[rgba(255,255,255,0.9)] flex flex-col transition-all duration-300 group-hover:top-[25%]">
              <div className="flex flex-row justify-center items-center h-[4.5rem] w-full pl-[1rem] bg-[#ffd900]">
                <h3 className="text-[2rem]">{project.name}</h3>
              </div>
              <div className="m-[1rem] flex flex-col justify-center">
                <p className="text-[1.4rem]">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
