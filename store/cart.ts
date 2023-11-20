import { CartItemType } from "@/types";
import { create } from "zustand";
import { configurePersist } from "zustand-persist";
const { persist, purge } = configurePersist({
  storage: localStorage,
});
type CartState = {
  cart: CartItemType[];
};

type CartAction = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

// const useCartStore = create<CartState & CartAction>((set) => ({
//   cart: [],
//   removeFromCart: (id: string) =>
//     set((state) => {
//       const filteredCart = state.cart.filter((item) => item.id !== id);
//       return { cart: filteredCart };
//     }),

//   addToCart: (item) =>
//     set((state) => {
//       const cartClone = [...state.cart];
//       cartClone.push(item);
//       return {
//         ...state,
//         cart: cartClone,
//       };
//     }),
// }));

const useCartStore = create<CartState & CartAction>(
  //@ts-ignore
  persist(
    {
      key: "cart",
      denylist: [],
    },
    //   @ts-ignore
    (set) => ({
      cart: [],
      removeFromCart: (id: string) =>
        //   @ts-ignore
        set((state) => {
          // @ts-ignore
          const filteredCart = state.cart.filter((item) => item.id !== id);
          return { cart: filteredCart };
        }),
      // @ts-ignore
      addToCart: (item) =>
        // @ts-ignore
        set((state) => {
          const cartClone = [...state.cart];
          cartClone.push(item);
          return {
            ...state,
            cart: cartClone,
          };
        }),
    })
  )
);

export default useCartStore;
