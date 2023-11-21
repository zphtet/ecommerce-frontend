"use client";
import { formatCurrency } from "@/lib/utlis";
import useCartStore from "@/store/cart";

const OrderSummary = () => {
  const { cart } = useCartStore((state) => state);
  const totalPrice = cart.reduce((accum, item) => {
    return accum + Number(item.price);
  }, 0);
  return (
    <>
      <p className="text-xl ">Order Summary</p>
      <hr className="my-2 border border-slate-200" />
      <div className="flex text-sm items-center justify-between">
        <p>Order Total</p>
        <p>{formatCurrency(totalPrice.toString())}</p>
      </div>
      <div className="py-5">
        <button className="text-sm w-full py-2 rounded-3xl bg-black text-white ">
          Check Out
        </button>
      </div>
    </>
  );
};
export default OrderSummary;
