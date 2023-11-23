import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NavbarSkeleton = () => {
  return (
    <div className="flex items-center gap-5">
      {[1, 2, 3, 4].map((num) => {
        return <Skeleton key={num} width={"100px"} />;
      })}
    </div>
  );
};
export default NavbarSkeleton;
