import { create } from "zustand";

export const useStore = create((set) => ({
  productQuantities: {},
  allProductQuantities: 0,
  totalValueOfProducts: 0,

  increaseProductNumber: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: (state.productQuantities[id] || 0) + 1,
      },
    })),

  decreaseProductNumber: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: Math.max((state.productQuantities[id] || 0) - 1, 0),
      },
    })),

  getProductNumber: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: state.productQuantities[id] || 0,
      },
    })),
  removeProductQuantities: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: 0,
      },
    })),
  increaseAllProductNumber: () => set((state) => ({ allProductQuantities: state.allProductQuantities + 1 })),
  decreaseAllProductNumber: () => set((state) => ({ allProductQuantities: state.allProductQuantities - 1 })),
  getValueOfProducts: () => set((state) => ({ totalValueOfProducts: state.totalValueOfProducts + 200 })),
  removeAllProducts: () => set({ productQuantities: {} }),
}));
