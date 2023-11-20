"use client";
import { formatCurrency } from "@/lib/utlis";
import { DetailProductType, ProductWithCategoryType } from "@/types";
import { ShoppingCart, View } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PreviewDialog from "./preview-dialog";
import { useState } from "react";
const ProductCard = ({ data }: { data: DetailProductType }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className=" border-2 p-[5px] cursor-pointer rounded space-y-3 shadow product-card"
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
          <button className="text-black w-[40px] h-[40px] rounded-full grid place-items-center bg-gray-50 bg-opacity-60">
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
