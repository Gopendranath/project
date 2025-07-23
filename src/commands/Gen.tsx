import React from "react";
import { Theme } from "../themes";
import { LoaderIcon } from "lucide-react";
import useStore from "../Provider/useStore";

interface GenProps {
  currentTheme: Theme;
  prompt: string;
}

export default function Gen({ currentTheme, prompt }: GenProps) {
  const { responses, loading, error, fetchResponse } = useStore();

  React.useEffect(() => {
    if (prompt && !responses[prompt]) {

      fetchResponse(prompt);
    }
  }, [prompt, fetchResponse, responses]);

  if (!prompt) {
    return null;
  }

  const response = responses[prompt] || "";

  return (
    <div className="mb-4" style={{ color: currentTheme.text }}>
      <p>User: {prompt}</p>
      <br />
      {loading && !responses[prompt] ? (
        <LoaderIcon
          className="animate-spin"
          style={{ position: "relative", left: "50%" }}
        />
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p dangerouslySetInnerHTML={{ __html: response }}></p>
      )}
    </div>
  );
}
