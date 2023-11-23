"use client";
import { formatCurrency } from "@/lib/utlis";
import { DetailProductType, ProductWithCategoryType } from "@/types";
import { ShoppingCart, View } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PreviewDialog from "./preview-dialog";
import { MouseEvent, useEffect, useState } from "react";
import useCartStore from "@/store/cart";
import toast from "react-hot-toast";
const ProductCard = ({ data }: { data: DetailProductType }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { addToCart, cart } = useCartStore((state) => state);
  const [mounted, setIsMounted] = useState(false);
  const cartItem = {
    id: data.id,
    name: data.name,
    price: data.price,
    imgUrl: data.images[0],
    size: data.size?.value,
    color: data.color?.value,
  };
  const addCartHandler = (e: MouseEvent) => {
    e.stopPropagation();
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
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!mounted) return null;
  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className=" border-2 p-[10px] cursor-pointer rounded space-y-3 shadow product-card"
    >
      <div className="relative w-[100%] h-[200px]">
        <Image
          src={data.images[0]}
          alt="product image"
          fill
          className="object-cover  rounded"
        />
        <div className="absolute hidden card-btns bottom-3 right-0   w-full ">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            className="text-black w-[40px] h-[40px] rounded-full grid place-items-center bg-gray-50 bg-opacity-60 "
          >
            <View />
          </button>
          <button
            onClick={addCartHandler}
            className="text-black w-[40px] h-[40px] rounded-full grid place-items-center bg-gray-50 bg-opacity-60"
          >
            <ShoppingCart />
          </button>
        </div>
      </div>
      <div>
        <p className="font-bold">{data.name}</p>
        <p className="opacity-80"> {data.category.name}</p>
      </div>
      <p className="font-bold">{formatCurrency(data.price)}</p>

      <PreviewDialog open={open} setOpen={setOpen} product={data} />
    </div>
  );
};

export default ProductCard;
