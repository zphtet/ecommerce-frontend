import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BillboardSkeleton = () => {
  return (
    <div className=" relative h-[40vh] sm:h-[60vh] ">
      <Skeleton className="w-full h-full" />
    </div>
  );
};

export default BillboardSkeleton;
