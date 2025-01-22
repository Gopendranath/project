// import { OpenAI } from "openai";

import axios from "axios"

// import dotenv from "dotenv";
// dotenv.config();


// const apiKey = import.meta.env.VITE_API_TEXT_CHAT;
// const baseURL = "https://api.aimlapi.com/v1";
// const systemPrompt = "You are a helpful assistant. You know everything";
// // const userPrompt = "Tell me about San Francisco";

// const api = new OpenAI({
//   apiKey,
//   baseURL,
//   dangerouslyAllowBrowser: true,
// });

// const main = async (promt) => {
//   const completion = await api.chat.completions.create({
//     model: "mistralai/Mistral-7B-Instruct-v0.2",
//     messages: [
//       {
//         role: "system",
//         content: systemPrompt,
//       },
//       {
//         role: "user",
//         content: promt,
//       },
//     ],
//     temperature: 0.7,
//     max_tokens: 256,
//   });

//   const response = completion.choices[0].message.content;

//   // console.log("User:", userPrompt);
//   console.log("AI:", response);

//   return response;
// };

// main("prime numbers code in python");
// // export default main;

// privetServer("prime numbers code in python");
const main = async (prompt) => {
  try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, {
          prompt: prompt,
      });

      await new Promise((resolve) => setTimeout(resolve, 3000));

      console.log(response.data);

      return response.data;
  } catch (error) {
      console.error('Error:', error.message);
      return { error: 'Failed to get response from server' };
  }
};

export default main;