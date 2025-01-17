import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaLinux, FaWindows, FaPython, FaHtml5, FaCss3, FaMicrochip, FaWifi } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiGit, SiDocker, SiExpress, 
         SiBootstrap, SiMui, SiPostman, SiApachekafka, SiNextdotjs, SiSocketdotio, 
         SiArduino, SiJavascript,
         SiEspressif} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 />, rating: 3, category: "Frontend" },
  { name: "CSS", icon: <FaCss3 />, rating: 5, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, rating: 4, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, rating: 4, category: "Frontend" },
  { name: "React.js", icon: <FaReact />, rating: 3, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, rating: 4, category: "Frontend" },
  { name: "React Router", icon: <FaReact />, rating: 3, category: "Frontend" },
  { name: "Zustand", icon: <FaReact />, rating: 3, category: "Frontend" },
  { name: "Material UI", icon: <SiMui />, rating: 4, category: "Frontend" },
  { name: "Lucid React", icon: <FaReact />, rating: 4, category: "Frontend" },
  { name: "Shadcn/ui", icon: <FaReact />, rating: 3, category: "Frontend" },
  { name: "Bootstrap", icon: <SiBootstrap />, rating: 4, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, rating: 3, category: "Frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs />, rating: 4, category: "Backend" },
  { name: "Express.js", icon: <SiExpress />, rating: 5, category: "Backend" },
  { name: "EJS", icon: <FaNodeJs />, rating: 4, category: "Backend" },
  { name: "Multer", icon: <FaNodeJs />, rating: 3, category: "Backend" },
  { name: "CORS", icon: <FaNodeJs />, rating: 2, category: "Backend" },
  { name: "Socket.io", icon: <SiSocketdotio />, rating: 2, category: "Backend" },
  { name: "Authentication", icon: <FaNodeJs />, rating: 4, category: "Backend" },
  { name: "Authorization", icon: <FaNodeJs />, rating: 3, category: "Backend" },

  // Database
  { name: "MongoDB", icon: <SiMongodb />, rating: 3, category: "Database" },
  { name: "SQL", icon: <FaDatabase />, rating: 4, category: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, rating: 3, category: "Database" },

  // DevOps & Tools
  { name: "Git", icon: <SiGit />, rating: 4, category: "DevOps" },
  { name: "GitHub", icon: <FaGithub />, rating: 3, category: "DevOps" },
  { name: "Docker", icon: <SiDocker />, rating: 2, category: "DevOps" },
//   { name: "Kafka", icon: <SiApachekafka />, rating: 3, category: "DevOps" },
  { name: "Postman", icon: <SiPostman />, rating: 2, category: "DevOps" },
  { name: "Bash", icon: <FaLinux />, rating: 4, category: "DevOps" },
  { name: "WSL", icon: <FaWindows />, rating: 3, category: "DevOps" },

  // Python & Others
  { name: "Python", icon: <FaPython />, rating: 4, category: "Python" },
  { name: "NumPy", icon: <FaPython />, rating: 3, category: "Python" },
  { name: "Tkinter", icon: <FaPython />, rating: 3, category: "Python" },
  { name: "Google App Script", icon: <FaDatabase />, rating: 2, category: "Others" },
  { name: "System Design", icon: <FaDatabase />, rating: 3, category: "Others" },
  { name: "Computer Networks", icon: <FaDatabase />, rating: 4, category: "Others" },
  { name: "GenAI", icon: <FaDatabase />, rating: 3, category: "Others" },

  // Add new Hardware category
  { name: "Arduino", icon: <SiArduino />, rating: 4, category: "Hardware" },
  { name: "Embedded C", icon: <FaMicrochip />, rating: 3, category: "Hardware" },
  { name: "ESP32", icon: <SiEspressif />, rating: 4, category: "Hardware" },
  { name: "ESP8266", icon: <SiEspressif />, rating: 4, category: "Hardware" },
  { name: "LDR Sensors", icon: <FaMicrochip />, rating: 3, category: "Hardware" },
  { name: "IR Sensors", icon: <FaMicrochip />, rating: 3, category: "Hardware" },
  { name: "LCD Display", icon: <FaMicrochip />, rating: 2, category: "Hardware" },
  { name: "RF Communication", icon: <FaWifi />, rating: 3, category: "Hardware" },
  { name: "LORA", icon: <FaWifi />, rating: 3, category: "Hardware" },
  { name: "433MHz Communication", icon: <FaWifi />, rating: 3, category: "Hardware" },
  { name: "Soldering", icon: <FaMicrochip />, rating: 4, category: "Hardware" },
  { name: "Circuit Design", icon: <FaMicrochip />, rating: 3, category: "Hardware" },
  { name: "Digital Electronics", icon: <FaMicrochip />, rating: 3, category: "Hardware" },
];

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="mb-2">
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <p className="text-xl font-semibold mb-3">{category} Skills:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <div key={index} className="group flex items-center space-x-2 p-2 border rounded hover:bg-emerald-700 hover:text-white transition-colors duration-200">
                  <div className="text-xl">{skill.icon}</div>
                  <div className="flex-1">{skill.name}</div>
                  <div className="hidden group-hover:block">
                    {"★".repeat(skill.rating) + "☆".repeat(5 - skill.rating)}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="text-xl font-semibold mb-3">Additional Skills:</p>
        <ul className="ml-4">
          <li>• Communication</li>
          <li>• Teamwork</li>
          <li>• Problem-solving</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;