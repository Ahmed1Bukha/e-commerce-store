import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "../lib/types";

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  removeOneFromCart: (id: string) => void;
  getCart: () => Product[];
  getCartTotalPrice: () => number;
  getCartQuantity: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: Product) => {
        set((state) => ({ cart: [...state.cart, product] }));
      },
      removeFromCart: (id: string) => {
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== id),
        }));
      },
      removeOneFromCart: (id: string) => {
        set((state) => {
          const index = state.cart.findIndex((product) => product.id === id);
          if (index === -1) return state;
          const next = [...state.cart];
          next.splice(index, 1);
          return { cart: next };
        });
      },
      getCart: () => get().cart,
      getCartTotalPrice: () =>
        get().cart.reduce((acc, product) => acc + product.price, 0),
      getCartQuantity: () => get().cart.length,
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
