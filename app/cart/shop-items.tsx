"use client";
import useCartStore from "@/store/cart";
import ShopItem from "./shop-item";

const ShopItems = () => {
  const cart = useCartStore((store) => store.cart);
  if (cart.length === 0) return <div className="py-5">No Cart items</div>;
  return (
    <div>
      {cart.map((cartItem) => {
        return <ShopItem key={cartItem.id} data={cartItem} />;
      })}
    </div>
  );
};

export default ShopItems;
