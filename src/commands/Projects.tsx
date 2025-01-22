import React from "react";

interface Project {
  name: string;
  description: string;
  type: "Web" | "Python" | "IoT";
  website?: string;
  github: string;
}
const projects: Project[] = [
  {
    name: "Gemini clone",
    type: "Web",
    description: "A clone of Google's Gemini AI interface built with React and modern web technologies",
    website: "https://clone-gemini-v1.netlify.app/",
    github: "https://github.com/Gopendranath/GeminiClone",
  },
  {
    name: "Todo-Reactapp",
    type: "Web",
    description: "A React-based todo application with CRUD functionality and local storage",
    website: "https://react-todo-sigma-sable.vercel.app/",
    github: "https://github.com/Gopendranath/React-Todo",
  },
  {
    name: "Fullstack Auth",
    type: "Web",
    description: "Complete authentication system with JWT, includes both frontend and backend implementation",
    website: "https://authentication-clone.onrender.com",
    github: "https://github.com/Gopendranath/Authentication-Clone",
  },
  {
    name: "Python Snakegame",
    type: "Python",
    description: "Classic Snake game implemented in Python using Pygame library",
    github: "https://github.com/Gopendranath/python_Snake_game",
  },
  {
    name: "Weather Monitoring System",
    type: "IoT",
    description: "IoT-based weather monitoring system integrated with Google Sheets API and Python analysis",
    github: "https://github.com/Gopendranath/WeatherMonitoring",
  },
  {
    name: "Traffic Monitoring System",
    type: "IoT",
    description: "Smart traffic monitoring solution for congested areas using sensors and real-time analysis",
    github: "https://github.com/Gopendranath/street-light",
  },
   {
    name: "Blogpost backend",
    type: "Web",
    description: "Backend for a blog post application.",
    github: "https://github.com/yourusername/blogpost-backend",
  },
  {
    name: "xAI-chat backend",
    type: "Web",
    description: "Backend for an xAI chat application.",
    github: "https://github.com/Gopendranath/xAi-test",
  },
  {
      name:"Mui-Socialmedia",
      type:"Web",
      description:"Social media application built with MUI.",
      github:"https://github.com/yourusername/mui-socialmedia",
  },
  {
      name:"Logo-viewer",
      type:"Web",
      description:"Application for viewing and managing logos.",
      github:"https://github.com/Gopendranath/placeholderLogo",
  },
  {
      name:"Bouncing-Ball-screensaver",
      type:"Web",
      description:"Simple bouncing ball screensaver.",
      github:"https://github.com/Gopendranath/BouncingBall",
  },
   {
    name: "Python Notepad",
    type: "Python",
    description: "Simple text editor in Python.",
    github: "https://github.com/Gopendranath/python_Notepad",
  },
   {
    name: "Python Calculator",
    type: "Python",
    description: "Simple calculator application in Python.",
    github: "https://github.com/Gopendranath/python_Calculator",
  },
  {
    name: "Python-Tict-act-oe",
    type: "Python",
    description: "Tic-Tac-Toe game in Python.",
    github: "https://github.com/Gopendranath/python_Tic-Tac-Toe",
  },
  {
      name:"Python backend",
      type:"Python",
      description:"General purpose python backend application",
      github:"https://github.com/yourusername/python-backend",
  },
  //  {
  //     name:"Chatapp",
  //     type:"Web",
  //     description:"Simple chat application",
  //     github:"https://github.com/yourusername/chatapp",
  // },
   {
      name:"python screensaver",
      type:"Python",
      description:"Simple screensaver.",
      github:"https://github.com/yourusername/python-screensaver",
  },
   {
      name:"Tinder-copybootstrap",
      type:"Web",
      description:"Tinder clone using Bootstrap.",
      website:"https://gopendranath.github.io/WebDev_Bootstrap_TinderCopy/",
      github:"https://github.com/Gopendranath/WebDev_Bootstrap_TinderCopy",
  },
  {
    name: "Stopwatch-website",
    type: "Web",
    description: "Simple Stopwatch website.",
    website: "https://stop-watch-react-app-roan.vercel.app/",
    github: "https://github.com/Gopendranath/StopWatch-reactApp",
  },
 {
    name: "Todo-Nextapp",
    type: "Web",
    description: "Todo application using Next.js with MongoDB connection.",
    website: "https://nextjs-todo-app-blush.vercel.app/",
    github: "https://github.com/Gopendranath/nextjs-TodoApp",
  },
  {
    name: "Iot projects soil moisture measurement",
    type: "IoT",
    description: "Soil moisture measurement system using IoT.",
    github: "https://github.com/yourusername/soil-moisture",
  },
];

// ... (rest of your code)

const Projects = (props: any) => {
  const { currentTheme } = props;

  return (
    <div className="mb-2">
      <p>Featured Projects:</p>
      {["Web", "Python", "IoT"].map((type) => (
        <div key={type}>
          <h3 className={`${currentTheme.text} mt-4 mb-2`}>{type} Projects:</h3>
          <ul className="ml-4">
            {projects
              .filter((project) => project.type === type)
              .map((project, index) => (
                <li key={index}>
                  <span className={`${currentTheme.text} font-[900]`}>{'> '} {project.name}</span> -{" "}
                  {project.description}
                  {project.website && (
                    <>
                      {" "}
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-600"
                      >
                        Website
                      </a>
                    </>
                  )}{" "}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    GitHub
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};



export default Projects;