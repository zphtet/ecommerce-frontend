"use client";
import { CartItemType } from "@/types";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/store/cart";
import toast from "react-hot-toast";
const AddToCartButton = ({ cartItem }: { cartItem: CartItemType }) => {
  const { addToCart, cart } = useCartStore((state) => state);
  const addCartHandler = () => {
    const isAlready = cart.find((item) => item.id === cartItem.id);
    if (isAlready)
      return toast.error("Already in Cart", {
        style: {
          padding: "8px",
          color: "#000",
        },
        iconTheme: {
          primary: "#000",
          secondary: "#FFFAEE",
        },
      });
    addToCart(cartItem);
    toast.success("added to cart");
  };

  return (
    <button
      onClick={addCartHandler}
      className="flex items-center gap-1 text-sm px-5 py-1 bg-black text-white rounded-full"
    >
      AddToCart
      <ShoppingCart />
    </button>
  );
};

export default AddToCartButton;
