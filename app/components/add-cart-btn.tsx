import { ShoppingCart } from "lucide-react";

const AddToCartButton = () => {
  return (
    <button className="flex items-center gap-1 text-sm px-5 py-1 bg-black text-white rounded-full">
      AddToCart
      <ShoppingCart />
    </button>
  );
};

export default AddToCartButton;
