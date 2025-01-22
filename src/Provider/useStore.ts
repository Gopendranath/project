import { create } from "zustand";
import axios from "axios";

interface AppState {
  responses: { [prompt: string]: string }; // Map-like structure for responses
  loading: boolean;
  error: string | null;
  fetchResponse: (prompt: string) => Promise<void>;
}

const useStore = create<AppState>((set) => ({
  responses: {},
  loading: false,
  error: null,

  fetchResponse: async (prompt) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, {
        prompt: prompt,
      });
      const responseText = res.data; // Update this based on the response structure
      set((state) => ({
        responses: { ...state.responses, [prompt]: responseText },
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useStore;
