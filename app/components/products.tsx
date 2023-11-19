import ProductCard from "./product-card";
const Products = async ({ title }: { title: string }) => {
  return (
    <div className="my-5">
      <h5 className="text-2xl font-bold">{title}</h5>
      <hr />
      <div className="py-3 flex flex-wrap  gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
