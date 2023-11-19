import getProducts from "@/actions/get-products";
import { ProductWithCategoryType } from "@/types";
import ProductCard from "./product-card";

const RelatedProducts = async ({
  categoryId,
  currentId,
}: {
  categoryId: string;
  currentId: string;
}) => {
  const data = await getProducts(
    `category=true&categoryId=${categoryId}&limit=5`
  );
  const products: ProductWithCategoryType[] = data.data;

  const filteredProducts = products.filter(
    (product) => product.id !== currentId
  );

  if (filteredProducts.length <= 0) return <div>No Related Items</div>;

  return (
    <div className="py-3 flex flex-wrap  gap-5">
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} data={product} />;
      })}
    </div>
  );
};

export default RelatedProducts;
