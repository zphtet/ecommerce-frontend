import { ShoppingCart, View } from "lucide-react";
import Image from "next/image";
const imgUrl =
  "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const ProductCard = () => {
  return (
    <div className=" border-2 p-[5px] rounded space-y-3 shadow product-card">
      <div className="relative w-[100%] h-[200px]">
        <Image
          src={imgUrl}
          alt="product image"
          fill
          className="object-cover  rounded"
        />
        <div className="absolute hidden card-btns bottom-3 right-0   w-full ">
          <button className="text-black w-[40px] h-[40px] rounded-full grid place-items-center bg-gray-50 bg-opacity-60 ">
            <View />
          </button>
          <button className="text-black w-[40px] h-[40px] rounded-full grid place-items-center bg-gray-50 bg-opacity-60">
            <ShoppingCart />
          </button>
        </div>
      </div>
      <div>
        <p className="font-bold">Blue Shirt</p>
        <p className="opacity-80">Suits</p>
      </div>
      <p className="font-bold">$ 20.00</p>
    </div>
  );
};

export default ProductCard;
