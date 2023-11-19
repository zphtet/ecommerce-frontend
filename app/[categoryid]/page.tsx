import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import { CategoryType } from "@/types";
import { Suspense } from "react";
import Billboard from "../components/billboard";
import Products from "../components/products";
const CategoryPage = async ({ params }: { params: { categoryid: string } }) => {
  const data = await getCategory(params.categoryid);
  const category = data.data as CategoryType;
  return (
    <div>
      <Suspense fallback={<div>Loading billboard ... </div>}>
        <Billboard billboardId={category.billboardId} />
      </Suspense>
      <p>{data.name}</p>
      <Suspense>
        <Products
          title={`${category.name} `}
          query={`category=true&categoryId=${category.id}`}
        />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
