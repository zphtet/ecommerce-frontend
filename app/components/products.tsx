import getProducts from "@/actions/get-products";
import ProductCard from "./product-card";
import { DetailProductType } from "@/types";
const Products = async ({ title, query }: { title: string; query: string }) => {
  const data = await getProducts(query);
  const products: DetailProductType[] = data.data;
  if (products?.length <= 0)
    return <div className="py-5 font-bold">No Products Found </div>;
  return (
    <div className="my-5">
      <h5 className="text-2xl font-bold">{title}</h5>
      <hr />
      <div className="py-3 flex flex-wrap  gap-5">
        {products?.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
