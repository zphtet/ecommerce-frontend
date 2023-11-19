import { Suspense } from "react";
import Billboard from "./components/billboard";
import Products from "./components/products";
export default async function Home() {
  // // const products = await getProducts("featured=true");
  // const billboard = await getBillboard(`65599c52649ee1d7be97c612`);
  return (
    <div>
      <Suspense fallback={<div>Loading billboard ...</div>}>
        <Billboard billboardId="65599c52649ee1d7be97c612" />
      </Suspense>
      <Suspense fallback={<div>Loading featured products ....</div>}>
        <Products title="Featured Products" />
      </Suspense>
    </div>
  );
}

export const dynamic = "force-dynamic";
