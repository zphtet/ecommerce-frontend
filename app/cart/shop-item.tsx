import { formatCurrency } from "@/lib/utlis";
import useCartStore from "@/store/cart";
import { CartItemType } from "@/types";
import { MoreVertical, Tally1, X } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

const ShopItem = ({ data }: { data: CartItemType }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeHandler = () => {
    removeFromCart(data.id);
    toast.success("removed from cart");
  };
  return (
    <div className="flex py-2 border-b gap-5">
      <div className="cart-img-container relative w-[70px] h-[70px]  sm:w-[150px] sm:h-[150px]">
        <Image
          src={data.imgUrl}
          alt={data.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-base sm:text-xl font-bold ">{data.name}</p>
        <p className="text-sm">{formatCurrency(data.price)}</p>
      </div>
      <div className="flex-1 self-start flex justify-end gap-3 items-center  text-sm">
        <p>{data.size}</p>
        <MoreVertical size={"16px"} opacity={0.5} />
        <div
          className="w-[15px] h-[15px] rounded-full"
          style={{
            backgroundColor: `${data.color}`,
          }}
        ></div>
        <button
          onClick={removeHandler}
          className="p-1 sm:p-1.5 rounded-full shadow-sm border"
        >
          <X size={"14px"} />
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
