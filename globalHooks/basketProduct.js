import { create } from "zustand";

export const useBasketStore = create((set) => ({
  BasketSatete: [],

  update: (newProducts) => set((state) => ({ BasketSatete: [...state.BasketSatete, ...newProducts] })),
  remove: (id) => set((state) => ({ BasketSatete: state.BasketSatete.filter((product) => product.id !== id) })),
  clear: () => set({ BasketSatete: [] }),
}));
