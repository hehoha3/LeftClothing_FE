import { create } from "zustand";
import { Data } from "./useStoreProduct";
import { User } from "./useStoreUser";
import { devtools } from "zustand/middleware";
import axios from "axios";

interface Cart {
  id: number;
  product: Data;
  size: string;
  quantity: number;
  user: User;
}

interface AddToCart {
  productId: number;
  size: string;
  quantity: number;
}

export interface UpdateCart {
  productId: number;
  size: string;
}

interface StoreCart {
  userCarts: Cart[];
  getUserCarts: (token: string | null) => Promise<void>;
  addToCart: (productId: AddToCart, token: string | null) => Promise<void>;
  upCartQuantity: (
    productId: UpdateCart,
    token: string | null
  ) => Promise<void>;
  downCartQuantity: (
    productId: UpdateCart,
    token: string | null
  ) => Promise<void>;
  deleteCart: (productId: UpdateCart, token: string | null) => Promise<void>;
  checkOut: (token: string | null) => Promise<void>;
}

export const useStoreCart = create<StoreCart>()(
  devtools((set, get) => ({
    userCarts: [],

    getUserCarts: async (token: string | null) => {
      await axios
        .get(`http://localhost:5549/cart?token=${token}`)
        .then((response) => set({ userCarts: response.data }))
        .catch((error) => console.error("Error get data:", error));
    },

    addToCart: async (productId: AddToCart, token: string | null) => {
      await axios
        .post(`http://localhost:5549/cart?token=${token}`, productId)
        .then(() => get().getUserCarts(token))
        .catch((error) => console.error("Error post data:", error));
    },

    upCartQuantity: async (productId: UpdateCart, token: string | null) => {
      await axios
        .put(`http://localhost:5549/cart/up?token=${token}`, productId)
        .then(() => {
          const updatedCarts = get().userCarts.map((cart) => {
            if (
              cart.product.id === productId.productId &&
              cart.size === productId.size
            ) {
              return {
                ...cart,
                quantity: cart.quantity + 1,
              };
            }
            return cart;
          });
          set({ userCarts: updatedCarts });
        })
        .catch((error) => console.error("Error put data:", error));
    },

    downCartQuantity: async (productId: UpdateCart, token: string | null) => {
      await axios
        .put(`http://localhost:5549/cart/down?token=${token}`, productId)
        .then(() => {
          const updatedCarts = get().userCarts.map((cart) => {
            if (
              cart.product.id === productId.productId &&
              cart.size === productId.size
            ) {
              return {
                ...cart,
                quantity: cart.quantity - 1,
              };
            }
            return cart;
          });
          set({ userCarts: updatedCarts });
        })
        .catch((error) => console.error("Error put data:", error));
    },

    deleteCart: async (productId: UpdateCart, token: string | null) => {
      await axios
        .delete(`http://localhost:5549/cart?token=${token}`, {
          data: productId,
        })
        .then(() => get().getUserCarts(token))
        .catch((error) => console.error("Error post data:", error));
    },

    checkOut: async (token: string | null) => {
      await axios
        .delete(`http://localhost:5549/cart/checkout?token=${token}`)
        .then(() => get().getUserCarts(token))
        .catch((error) => console.error("Error get data:", error));
    },
  }))
);
