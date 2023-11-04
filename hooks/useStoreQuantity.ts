import { create } from "zustand";

interface StoreQuantity {
  currentQuantity: number;
  upQuantity: () => void;
  downQuantity: () => void;
}

export const useStoreQuantity = create<StoreQuantity>()((set) => ({
  currentQuantity: 1,

  upQuantity: () =>
    set((state) => ({
      currentQuantity: state.currentQuantity + 1,
    })),

  downQuantity: () =>
    set((state) => ({
      currentQuantity: state.currentQuantity - 1,
    })),
}));
