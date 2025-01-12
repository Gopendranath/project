type Theme = {
  name: string;
  background: string;
  text: string;
  prompt: string;
  path: string;
  accent: string;
};

export const themes: Record<string, Theme> = {
  default: {
    name: "Default",
    background: "bg-gray-900",
    text: "text-green-400",
    prompt: "text-purple-400",
    path: "text-blue-400",
    accent: "text-cyan-400",
  },
  dracula: {
    name: "Dracula",
    background: "bg-[#282a36]",
    text: "text-[#f8f8f2]",
    prompt: "text-[#ff79c6]",
    path: "text-[#8be9fd]",
    accent: "text-[#bd93f9]",
  },
  monokai: {
    name: "Monokai",
    background: "bg-[#272822]",
    text: "text-[#f8f8f2]",
    prompt: "text-[#fd971f]",
    path: "text-[#a6e22e]",
    accent: "text-[#66d9ef]",
  },
  nord: {
    name: "Nord",
    background: "bg-[#2e3440]",
    text: "text-[#d8dee9]",
    prompt: "text-[#88c0d0]",
    path: "text-[#81a1c1]",
    accent: "text-[#5e81ac]",
  },
};
