import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import { CategoryType } from "@/types";
import { Suspense } from "react";
import Billboard from "../components/billboard";
const CategoryPage = async ({ params }: { params: { categoryid: string } }) => {
  const category = await getCategory(params.categoryid);
  const data = category.data as CategoryType;
  return (
    <div>
      <Suspense fallback={<div>Loading billboard ... </div>}>
        <Billboard billboardId={data.billboardId} />
      </Suspense>
      <p>{data.name}</p>
    </div>
  );
};

export default CategoryPage;
