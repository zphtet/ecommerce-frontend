import getProduct from "@/actions/get-product";
import { DetailProductType } from "@/types";
import Gallery from "@/app/components/gallery";
import ProductInfo from "@/app/components/product-info";
import { Suspense } from "react";
import RelatedProducts from "@/app/components/related-products";
const ProductDetail = async ({ params }: { params: { productid: string } }) => {
  const data = await getProduct(params.productid, "size=true&color=true");
  const product: DetailProductType = data.data;

  return (
    <div>
      <div className="details flex sm:flex-row flex-col gap-5 w-[min(100%,780px)]">
        <div className=" w-[min(100%,350px)] sm:flex-1">
          <Gallery images={product.images} productName={product.name} />
        </div>
        <div className=" flex-1">
          <ProductInfo data={product} />
        </div>
      </div>

      <hr className="my-5" />

      <p className="font-bold text-xl">Related Products</p>
      <hr className="my-2" />
      <Suspense fallback={<div>Loading related products ... </div>}>
        <RelatedProducts
          categoryId={product.categoryId}
          currentId={product.id}
        />
      </Suspense>
    </div>
  );
};

export default ProductDetail;
