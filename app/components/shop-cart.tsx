"use client";
import useCartStore from "@/store/cart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const ShoppingCart = ({ isMobile }: { isMobile?: boolean }) => {
  const cart = useCartStore((state) => state.cart);

  return (
    <Link
      href={"/cart"}
      onClick={() => {
        document.getElementById("sheet-close")?.click();
      }}
    >
      <button className="px-4 py-1 rounded-full bg-black text-sm text-white flex items-center gap-2">
        <ShoppingBag size={"16px"} />
        <span className="text-sm">{cart.length}</span>
      </button>
    </Link>
  );
};

export default ShoppingCart;
