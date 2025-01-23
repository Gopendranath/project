import React from "react";
import { Theme } from "../themes";
import useImageStore from "../Provider/useImageStore";
import Skeleton from "@mui/material/Skeleton";

interface ImagineProps {
  currentTheme: Theme;
  prompt: string;
}

const Imagine = ({ currentTheme, prompt }: ImagineProps) => {
  const { responses, loading, error, fetchImageResponse } = useImageStore();

  React.useEffect(() => {
    if (prompt && !responses[prompt]) {
      fetchImageResponse(prompt);
    }
  }, [prompt, fetchImageResponse, responses]);

  if (!prompt) {
    return null;
  }

  const response = responses[prompt] || "";

  return (
    <div className="mb-4" style={{ color: currentTheme.text }}>
      <p>User: {prompt}</p>
      <br />
      <p>AI agent:</p>
      <br />
      {loading && !responses[prompt] ? (
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={512}
          height={512}
          animation="wave"
        />
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <img
          src={response}
          alt="Generated Image"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            border: "2px solid #00ff00",
            borderRadius: "5px",
          }}
        />
      )}
    </div>
  );
};

export default Imagine;
