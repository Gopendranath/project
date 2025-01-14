import React, { useEffect, useState } from 'react';

interface Theme {
  background: string;
  text: string;
}

interface TerminalLoaderProps {
  theme: Theme;
  text?: string;
}

const TerminalLoader: React.FC<TerminalLoaderProps> = ({ theme, text = "Loading" }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length >= 3) return '';
        return prevDots + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text} flex items-center justify-center`}>
      <div className="terminal-loader">
        <span className="text">{text}</span>
        <span className="dots">{dots}</span>
      </div>

      <style jsx>{`
        .terminal-loader {
          font-family: monospace;
          font-size: 1.2rem;
          letter-spacing: 0.1em;
        }

        .dots {
          display: inline-block;
          min-width: 30px;
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default TerminalLoader;