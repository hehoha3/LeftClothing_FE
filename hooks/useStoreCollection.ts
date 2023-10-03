import axios from "axios";
import { create } from "zustand";

interface Data {
  id: number;
  name: string;
}

interface StoreCollection {
  data: Data[];
  getAllData: () => Promise<void>;
  postData: (name: string) => Promise<void>;
  deleteData: (id: number) => Promise<void>;
}

export const useStoreCollection = create<StoreCollection>()((set, get) => ({
  data: [],

  getAllData: async () => {
    await axios
      .get("http://localhost:5549/collection")
      .then((response) => set({ data: response.data }))
      .catch((error) => console.error("Error fetching data:", error));
  },

  postData: async (name: string) => {
    await axios
      .post("http://localhost:5549/collection", { name: name })
      .then(() => get().getAllData())
      .catch((error) => console.error("Error posting data:", error));
  },

  deleteData: async (id: number) => {
    try {
      await axios.delete(`http://localhost:5549/collection/${id}`);
      set((store) => ({ data: store.data.filter((item) => item.id !== id) }));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },
}));
