"use client";
import useCartStore from "@/store/cart";
import { ShoppingBag } from "lucide-react";

const ShoppingCart = () => {
  const cart = useCartStore((state) => state.cart);
  console.log("cart from shoopign cart", cart);

  return (
    <button className="px-4 py-2 rounded-full bg-black text-white flex items-center gap-2">
      <ShoppingBag size={"16px"} />
      <span className="text-sm">{cart.length}</span>
    </button>
  );
};

export default ShoppingCart;
