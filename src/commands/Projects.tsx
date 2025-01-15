import React from "react";

const projects = [
  {
    name: "Gemini clone",
    description: "Description here",
    website: "https://clone-gemini-v1.netlify.app/",
    github: "https://github.com/Gopendranath/GeminiClone",
  },
  {
    name: "Fullstack Auth",
    description: "Description here",
    website: "https://example.com/fullstack-auth",
    github: "https://github.com/yourusername/fullstack-auth",
  },
  {
    name: "Blogpost backend",
    description: "Description here",
    website: "https://example.com/blogpost-backend",
    github: "https://github.com/yourusername/blogpost-backend",
  },
  {
    name: "xAI-chat backend",
    description: "Description here",
    website: "https://example.com/xai-chat-backend",
    github: "https://github.com/yourusername/xai-chat-backend",
  },
  {
    name: "Mui-Socialmedia",
    description: "Description here",
    github: "https://github.com/yourusername/mui-socialmedia",
  },
  {
    name: "Logo-viewer",
    description: "Description here",
    website: "https://example.com/logo-viewer",
    github: "https://github.com/yourusername/logo-viewer",
  },
  {
    name: "Bouncing-Ball-screensaver",
    description: "Description here",
    github: "https://github.com/yourusername/bouncing-ball-screensaver",
  },
  {
    name: "Python Notepad",
    description: "Description here",
    github: "https://github.com/yourusername/python-notepad",
  },
  {
    name: "Python Calculator",
    description: "Description here",
    github: "https://github.com/yourusername/python-calculator",
  },
  {
    name: "Python Snakegame",
    description: "Description here",
    github: "https://github.com/yourusername/python-snakegame",
  },
  {
    name: "Python-Tic-tac-toe",
    description: "Description here",
    github: "https://github.com/yourusername/python-tict-act-oe",
  },
  {
    name: "Python backend Chatapp",
    description: "Description here",
    website: "https://example.com/python-backend-chatapp",
    github: "https://github.com/yourusername/python-backend-chatapp",
  },
  {
    name: "python screensaver",
    description: "Description here",
    github: "https://github.com/yourusername/python-screensaver",
  },
  {
    name: "Tinder-copybootstrap",
    description: "Description here",
    website: "https://example.com/tinder-copybootstrap",
    github: "https://github.com/yourusername/tinder-copybootstrap",
  },
  {
    name: "Counter-website",
    description: "Description here",
    website: "https://example.com/counter-website",
    github: "https://github.com/yourusername/counter-website",
  },
  {
    name: "Todo-Nextapp",
    description: "Description here",
    website: "https://example.com/todo-nextapp",
    github: "https://github.com/yourusername/todo-nextapp",
  },
  {
    name: "Todo-Reactapp",
    description: "Description here",
    website: "https://react-todo-sigma-sable.vercel.app/",
    github: "https://github.com/Gopendranath/React-Todo",
  },
];

const Projects = (props: any) => {
  const { currentTheme } = props;

  return (
    <div className="mb-2">
      <p>Featured Projects:</p>
      <ul className="ml-4">
        {projects.map((project, index) => (
          <li key={index}>
            <span className={currentTheme.text}>{project.name}</span> -{" "}
            {project.description}
            {project.website && (
              <>
                {" "}
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
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
  );
};

export default Projects;
