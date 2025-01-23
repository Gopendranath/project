import { create } from "zustand";
import axios from "axios";

interface AppState {
 responses: { [prompt: string]: string };
 loading: boolean;
 error: string | null;
 fetchImageResponse: (prompt: string) => Promise<void>;
}

const MAX_RETRY_ATTEMPTS = 20;
const RETRY_INTERVAL = 3000;

const useImageStore = create<AppState>((set) => ({
 responses: {},
 loading: false,
 error: null,
 fetchImageResponse: async (prompt) => {
   set({ loading: true, error: null });
   try {
     const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/image`, { prompt });
     
     await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
     
     const responseid = res.data?.imageId || JSON.parse(res.data).imageId;
     console.log('responseid: ', responseid);
     
     const getUrl = async (imageId: string, attempts = 0) => {
       if (attempts >= MAX_RETRY_ATTEMPTS) {
         throw new Error("Max retry attempts reached");
       }
       
       try {
         const urlData = await axios.get(`${import.meta.env.VITE_API_URL}/api/imageUrl/${imageId}`);
         
         console.log('urlData: ', urlData);
         
         const urljsonData = typeof urlData.data === 'string' 
           ? JSON.parse(urlData.data)
           : urlData.data;
         
         if (urljsonData?.imageUrl && urljsonData.completeStatus === true) {
           set((state) => ({
             responses: { ...state.responses, [prompt]: urljsonData.imageUrl },
             loading: false,
           }));
         } else {
           await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
           await getUrl(imageId, attempts + 1);
         }
       } catch (error) {
         set({ 
           error: error instanceof Error ? error.message : 'Unknown error', 
           loading: false 
         });
       }
     };
     
     await getUrl(responseid);
   } catch (err: any) {
     set({ error: err.message, loading: false });
   }
 },
}));

export default useImageStore;