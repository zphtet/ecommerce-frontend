import { CartItemType, DetailProductType } from "@/types";
import AddToCartButton from "./add-cart-btn";
import { formatCurrency } from "@/lib/utlis";

const ProductInfo = ({ data }: { data: DetailProductType }) => {
  const cartItem = {
    id: data.id,
    imgUrl: data.images[0],
    color: data.color?.value,
    size: data.size?.value,
    name: data.name,
    price: data.price,
  };
  return (
    <div>
      <p className="text-xl font-bold">{data?.name}</p>
      <p className="my-2 text-sm">{formatCurrency(data.price)}</p>
      <hr />
      <div className="space-y-2 my-5 text-sm">
        <p className="flex gap-5 items-center">
          Size : <span className="block">{data.size?.value}</span>
        </p>
        <p className="flex gap-5 items-center">
          Color :{" "}
          <span
            className="w-[20px] h-[20px] rounded-full block"
            style={{ backgroundColor: `${data.color?.value}` }}
          ></span>
        </p>
      </div>
      <div className="my-5">
        <AddToCartButton cartItem={cartItem} />
      </div>
    </div>
  );
};

export default ProductInfo;
