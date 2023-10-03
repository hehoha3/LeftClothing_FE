import axios from "axios";
import { create } from "zustand";

interface Data {
  id: number;
  categoryName: string;
}

interface StoreCategory {
  data: Data[];
  getAllData: () => Promise<void>;
  postData: (name: string) => Promise<void>;
  deleteData: (id: number) => Promise<void>;
}

export const useStoreCategory = create<StoreCategory>()((set, get) => ({
  data: [],

  getAllData: async () => {
    await axios
      .get("http://localhost:5549/category")
      .then((response) => set({ data: response.data }))
      .catch((error) => console.error("Error fetching data:", error));
  },

  postData: async (name: string) => {
    await axios
      .post("http://localhost:5549/category", { name: name })
      .then(() => get().getAllData())
      .catch((error) => console.error("Error posting data:", error));
  },

  deleteData: async (id: number) => {
    await axios
      .delete(`http://localhost:5549/category/${id}`)
      .then(() => get().getAllData())
      .catch((error) => console.error("Error deleting data:", error));
  },
}));
