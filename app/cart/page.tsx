import ShopItems from "./shop-items";
import OrderSummary from "./order-summary";
const CartPage = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-bold">Shopping Cart</p>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex-1 py-3">
          <ShopItems />
        </div>
        <div className="md:basis-[300px] py-5 px-5 bg-slate-100 rounded-md">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
