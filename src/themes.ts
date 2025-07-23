export type Theme = {
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
  solarizedDark: {
    name: "Solarized Dark",
    background: "bg-[#002b36]",
    text: "text-[#839496]",
    prompt: "text-[#b58900]",
    path: "text-[#268bd2]",
    accent: "text-[#2aa198]",
  },
  solarizedLight: {
    name: "Solarized Light",
    background: "bg-[#fdf6e3]",
    text: "text-[#657b83]",
    prompt: "text-[#b58900]",
    path: "text-[#268bd2]",
    accent: "text-[#2aa198]",
  },
  gruvbox: {
    name: "Gruvbox",
    background: "bg-[#282828]",
    text: "text-[#ebdbb2]",
    prompt: "text-[#fe8019]",
    path: "text-[#fabd2f]",
    accent: "text-[#b8bb26]",
  },
  oceanicNext: {
    name: "Oceanic Next",
    background: "bg-[#1b2b34]",
    text: "text-[#d8dee9]",
    prompt: "text-[#ec5f67]",
    path: "text-[#6699cc]",
    accent: "text-[#c594c5]",
  },
  ubuntu: {
    name: "Ubuntu",
    background: "bg-[#2C001E]", // dark purple
    text: "text-[#666666]", // medium gray
    prompt: "text-[#888888]", // light gray
    path: "text-[#AAAAAA]", // light gray-blue
    accent: "text-[#FF9900]", // orange
  },
  kali: {
    name: "Kali",
    background: "bg-[#18171B]", // dark gray
    text: "text-[#FFFFFF]", // white
    prompt: "text-[#CCCCCC]", // light gray
    path: "text-[#66CCCC]", // light blue
    accent: "text-[#FF0000]", // red
  },
  arch: {
    name: "Arch",
    background: "bg-[#343A40]", // dark gray-blue
    text: "text-[#FFFFFF]", // white
    prompt: "text-[#AAAAAA]", // light gray
    path: "text-[#66CCCC]", // light blue
    accent: "text-[#34C759]", // green
  },
  light: {
    name: "Light",
    background: "bg-white", // clean white background
    text: "text-gray-800", // dark text for readability
    prompt: "text-blue-600", // standout prompt color
    path: "text-green-600", // slightly soft green
    accent: "text-purple-600", // nice purple accent
  },
};
