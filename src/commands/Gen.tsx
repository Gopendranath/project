import { Theme } from "../themes";

interface GenProps {
  currentTheme: Theme;
  prompt: string;
}

export default function Gen({ currentTheme, prompt }: GenProps) {
  if (!prompt) {
      return null;
  }
  
  return (
      <div className="mb-4">
        <p>User: {prompt}</p>
          <pre className={`${currentTheme.text} font-bold mb-4 text-xs sm:text-sm whitespace-pre-wrap`}>
              {prompt} from AI
          </pre>
      </div>
  );
}