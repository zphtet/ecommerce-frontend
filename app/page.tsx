import { Suspense } from "react";
import Billboard from "./components/billboard";
import Products from "./components/products";
import BillboardSkeleton from "./components/billboard-skeleton";
import LoadingSpinner from "./components/loading-spinner";
export default async function Home() {
  return (
    <div>
      <Suspense fallback={<BillboardSkeleton />}>
        <Billboard billboardId="655f781940a7d78752343549" />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Products
          title="Featured Products"
          query="featured=true&category=true&color=true&size=true"
        />
      </Suspense>
    </div>
  );
}

export const dynamic = "force-dynamic";
