import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';
import Help from './commands/Help';
import About from './commands/About';
import Skills from './commands/Skills';
import Projects from './commands/Projects';
import Contact from './commands/Contact';
import Loading from './Loading';
import { themes } from './themes';

type Command = {
  command: string | JSX.Element;
  output: string | JSX.Element;
};

type Theme = {
  name: string;
  background: string;
  text: string;
  prompt: string;
  path: string;
  accent: string;
};

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [currentPath] = useState('portfolio@yourdomain.com');
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.default);
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const asciiArt = `
  ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
  ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
  ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
  ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
  `;

  const welcomeMessage = {
    command: 'welcome',
    output: (
      <div className="mb-4">
        <pre className={`${currentTheme.accent} font-bold mb-4 text-xs sm:text-sm whitespace-pre-wrap`}>
          {asciiArt}
        </pre>
        <div className={`flex items-center gap-2 ${currentTheme.text} font-bold`}>
          <Terminal size={24} />
          <span>Welcome to my terminal based portfolio!</span>
        </div>
        <p className="mt-2">Type 'help' to see available commands.</p>
      </div>
    ),
  };

  const commands = {
    help: <Help />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects currentTheme={currentTheme} />,
    contact: <Contact />,
  };

  useEffect(() => {
    setHistory([welcomeMessage]);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleThemeCommand = (args: string) => {
    const [subCommand, themeName] = args.split(' ');
    // console.log(`subCommand: ${subCommand}, themeName: ${themeName}`);
    
    if (subCommand === 'list') {
      return (
        <div className="mb-2">
          <p>Available themes:</p>
          <ul className="ml-4">
            {Object.keys(themes).map((theme) => (
              <li key={theme}>• {themes[theme].name}</li>
            ))}
          </ul>
          <p className="mt-2">Usage: theme [name]</p>
        </div>
      );
    }

    let capitalizedThemeName = '' 
    if (themeName) {
      capitalizedThemeName = themeName.charAt(0).toUpperCase() + themeName.slice(1);
    }

    const fullThemeName = subCommand.toLowerCase() + capitalizedThemeName;
    const newTheme = themes[fullThemeName];
    if (newTheme) {
      setCurrentTheme(newTheme);
      return `Theme changed to ${newTheme.name}`;
    }

    return 'Theme not found. Use "theme list" to see available themes.';
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: string | JSX.Element = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;

    if (trimmedCmd === 'clear') {
      setHistory([welcomeMessage]);
      return;
    }

    if (trimmedCmd.startsWith('theme')) {
      const args = trimmedCmd.slice(6);
      output = handleThemeCommand(args);
    } else if (trimmedCmd in commands) {
      output = commands[trimmedCmd as keyof typeof commands];
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className={`min-h-screen ${currentTheme.background} ${currentTheme.text} p-4 font-mono`}>
      {loading ? (<Loading theme={currentTheme} text="Loading" />) :( 
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center gap-2">
                <span className={currentTheme.path}>{currentPath}</span>
                <span className={currentTheme.prompt}>~$</span>
                <span>{entry.command}</span>
              </div>
              <div className="ml-4 mt-1">{entry.output}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className={currentTheme.path}>{currentPath}</span>
          <span className={currentTheme.prompt}>~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
      )}
    </div>
  );
}

export default App;