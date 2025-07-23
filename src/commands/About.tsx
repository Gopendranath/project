import React, { useState, useEffect } from "react";

const About = () => {
  const [text, setText] = useState("");
  const fullName = "Gopendranath.";

  const styles = {
    animatedText: {
      borderRight: "2px solid #00ff00",
      height: "1.2em", // Add height
      animation: "blink-caret 1s step-end infinite",
      display: "inline-block",
      verticalAlign: "middle", // Improve alignment
      paddingRight: "2px", // Add small padding for cursor
    },
  };

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-2">
      <style>
        {`
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { 
        border-color: #00ff00; 
        border-right-width: 4px;
        height: 1.2em; /* Match height in cursor animation */
      }
    }
  `}
      </style>
      <p>
        Hello! I'm <span style={styles.animatedText}>{text}</span>
      </p>
      <p className="mt-2">
        I'm a passionate software developer with expertise in web development. I
        love creating elegant solutions to complex problems.
      </p>
      <div className="mt-4">
        <p className="text-xl font-semibold mb-3">CV : <a href="https://drive.google.com/file/d/1B_DsnTb6GviEg4q5ztvJ62y5OD2ffn5S/view?usp=drive_link">View</a></p>
      </div>
    </div>
  );
};

export default About;
