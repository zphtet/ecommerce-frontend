import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import { CategoryType } from "@/types";
import { Suspense } from "react";
import Billboard from "../components/billboard";
import Products from "../components/products";
import BillboardSkeleton from "../components/billboard-skeleton";
import LoadingSpinner from "@/app/components/loading-spinner";
const CategoryPage = async ({ params }: { params: { categoryid: string } }) => {
  const data = await getCategory(params.categoryid);
  const category = data.data as CategoryType;
  return (
    <div>
      <Suspense fallback={<BillboardSkeleton />}>
        <Billboard billboardId={category.billboardId} />
      </Suspense>
      <p>{data.name}</p>
      <Suspense fallback={<LoadingSpinner />}>
        <Products
          title={`${category.name} `}
          query={`category=true&categoryId=${category.id}&color=true&size=true`}
        />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
