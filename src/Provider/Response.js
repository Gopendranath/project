import { OpenAI } from "openai";


const apiKey = import.meta.env.VITE_API_TEXT_CHAT;
const baseURL = "https://api.aimlapi.com/v1";
const systemPrompt = "You are a helpful assistant. You know everything";
// const userPrompt = "Tell me about San Francisco";

const api = new OpenAI({
  apiKey,
  baseURL,
  dangerouslyAllowBrowser: true,
});

const main = async (promt) => {
  const completion = await api.chat.completions.create({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: promt,
      },
    ],
    temperature: 0.7,
    max_tokens: 256,
  });

  const response = completion.choices[0].message.content;

  // console.log("User:", userPrompt);
  console.log("AI:", response);

  return response;
};

export default main;
