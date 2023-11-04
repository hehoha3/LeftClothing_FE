import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface User {
  id: number;
  username: string;
  email: string;
  phoneNumber: number;
  firstName: string;
  lastName: string;
  address: string;
}

interface StoreUser {
  data: User[];
  detailUser: User;
  getAllUser: () => Promise<void>;
  getUserByToken: (token: string | null) => Promise<void>;
}

export const useStoreUser = create<StoreUser>()(
  devtools((set) => ({
    data: [],
    detailUser: {
      id: 0,
      username: "",
      email: "",
      phoneNumber: 0,
      firstName: "",
      lastName: "",
      address: "",
    },

    getAllUser: async () => {
      await axios
        .get("http://localhost:5549/user")
        .then((response) => set({ data: response.data }))
        .catch((error) => console.error("Error fetching data:", error));
    },

    getUserByToken: async (token: string | null) => {
      await axios
        .get(`http://localhost:5549/user/who?token=${token}`)
        .then((response) => set({ detailUser: response.data }))
        .catch((error) => console.error("Error fetching data:", error));
    },
  }))
);
