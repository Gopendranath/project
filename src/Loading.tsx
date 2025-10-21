import React, { useEffect, useState } from 'react';

interface Theme {
  background: string;
  text: string;
}

interface TerminalLoaderProps {
  theme: Theme;
  text?: string;
}

interface TerminalLoaderStyles {
  terminalLoader: React.CSSProperties;
  dots: React.CSSProperties;
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

  const styles: TerminalLoaderStyles = {
    terminalLoader: {
      fontFamily: 'monospace',
      fontSize: '1.2rem',
      letterSpacing: '0.1em',
    },
    dots: {
      display: 'inline-block',
      minWidth: '30px',
      textAlign: 'left',
    },
  };

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text} flex items-center justify-center`}>
      <div className="terminal-loader" style={styles.terminalLoader}>
        <span className="text">{text}</span>
        <span className="dots" style={styles.dots}>{dots}</span>
      </div>
    </div>
  );
};

export default TerminalLoader;