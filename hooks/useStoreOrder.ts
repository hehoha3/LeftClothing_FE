import { create } from "zustand";
import { Data } from "./useStoreProduct";
import { User } from "./useStoreUser";
import { devtools } from "zustand/middleware";
import axios from "axios";

interface Order {
  id: number;
  product: Data;
  size: string;
  quantity: number;
  status: string;
  user: User;
}

interface StoreOrder {
  orders: Order[];
  getAllOrder: () => Promise<void>;
  changeToNew: (id: number) => Promise<void>;
  changeToProcess: (id: number) => Promise<void>;
  changeToDone: (id: number) => Promise<void>;
  deleteOrder: (id: number) => Promise<void>;
}

export const useStoreOrder = create<StoreOrder>()(
  devtools((set, get) => ({
    orders: [],

    getAllOrder: async () => {
      await axios
        .get("http://localhost:5549/order")
        .then((response) => set({ orders: response.data }))
        .catch((error) => console.error("Error fetching data:", error));
    },

    changeToNew: async (id: number) => {
      await axios
        .put(`http://localhost:5549/order/status/new/${id}`)
        .then(() => get().getAllOrder())
        .catch((error) => console.error("Error put data:", error));
    },

    changeToProcess: async (id: number) => {
      await axios
        .put(`http://localhost:5549/order/status/processing/${id}`)
        .then(() => get().getAllOrder())
        .catch((error) => console.error("Error put data:", error));
    },

    changeToDone: async (id: number) => {
      await axios
        .put(`http://localhost:5549/order/status/done/${id}`)
        .then(() => get().getAllOrder())
        .catch((error) => console.error("Error put data:", error));
    },

    deleteOrder: async (id: number) => {
      await axios
        .delete(`http://localhost:5549/order/delete/${id}`)
        .then(() => get().getAllOrder())
        .catch((error) => console.error("Error put data:", error));
    },
  }))
);
