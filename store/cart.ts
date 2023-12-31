import { CartItemType } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { configurePersist } from "zustand-persist";
// const { persist, purge } = configurePersist({
//   storage: localStorage,
// });
type CartState = {
  cart: CartItemType[];
};

type CartAction = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

const useCartStore = create<CartState & CartAction>((set) => ({
  cart: [],
  removeFromCart: (id: string) =>
    set((state) => {
      const filteredCart = state.cart.filter((item) => item.id !== id);
      return { cart: filteredCart };
    }),

  addToCart: (item) =>
    set((state) => {
      const cartClone = [...state.cart];
      cartClone.push(item);
      return {
        ...state,
        cart: cartClone,
      };
    }),
}));

// const useCartStore = create<CartAction & CartState>(
//   persist(
//     (set) => ({
//       cart: [],
//       removeFromCart: (id: string) =>
//         set((state: CartState) => {
//           const filteredCart = state.cart.filter((item) => item.id !== id);
//           return { cart: filteredCart };
//         }),

//       addToCart: (item: CartItemType) =>
//         set((state: CartState) => {
//           const cartClone = [...state.cart];
//           cartClone.push(item);
//           return {
//             ...state,
//             cart: cartClone,
//           };
//         }),
//     }),
//     {
//       name: "cart",
//     }
//   )
// );

export default useCartStore;
