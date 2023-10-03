import axios from "axios";
import { create } from "zustand";

interface Data {
  id: number;
  name: string;
  typeCategory: { id: number; categoryName: string };
}

interface PostDataType {
  name: string;
  typeCategory: number;
}

interface StoreType {
  data: Data[];
  getAllData: () => Promise<void>;
  postData: (newType: PostDataType) => Promise<void>;
  deleteData: (id: number) => Promise<void>;
}

export const useStoreType = create<StoreType>()((set, get) => ({
  data: [],

  getAllData: async () => {
    await axios
      .get("http://localhost:5549/type")
      .then((response) => set({ data: response.data }))
      .catch((error) => console.error("Error fetching data:", error));
  },

  postData: async (newType: PostDataType) => {
    await axios
      .post("http://localhost:5549/type", newType)
      .then(() => get().getAllData())
      .catch((error) => console.error("Error posting data:", error));
  },

  deleteData: async (id: number) => {
    try {
      await axios.delete(`http://localhost:5549/type/${id}`);
      set((store) => ({ data: store.data.filter((item) => item.id !== id) }));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },
}));
