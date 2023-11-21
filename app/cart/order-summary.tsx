"use client";
import { formatCurrency } from "@/lib/utlis";
import useCartStore from "@/store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";
const OrderSummary = () => {
  const { cart } = useCartStore((state) => state);
  const router = useRouter();
  const [checking, setChecking] = useState(false);
  const totalPrice = cart.reduce((accum, item) => {
    return accum + Number(item.price);
  }, 0);
  const checkoutHandler = async () => {
    setChecking(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_CHECKOUT_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
    const data = await res.json();
    console.log(data, "returned from checkout");
    console.log("Post successful");
    router.replace(data.url);
  };
  const isEmpty = cart.length === 0;
  return (
    <>
      <p className="text-xl ">Order Summary</p>
      <hr className="my-2 border border-slate-200" />
      <div className="flex text-sm items-center justify-between">
        <p>Order Total</p>
        <p>{formatCurrency(totalPrice.toString())}</p>
      </div>
      <div className="py-5">
        <button
          onClick={checkoutHandler}
          disabled={isEmpty || checking}
          className={`text-sm w-full py-2 rounded-3xl bg-black text-white  ${
            (isEmpty || checking) && "opacity-50"
          }`}
        >
          {checking ? "Checking Out.." : "Check Out"}
        </button>
      </div>
    </>
  );
};
export default OrderSummary;
