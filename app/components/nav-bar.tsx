import Link from "next/link";
import NavLinks from "./nav-links";
import { Suspense } from "react";
import ShoppingCart from "./shop-cart";
import NavbarSkeleton from "./navbar-skeleton";
import MobileNav from "./mobile-nav";
const Navbar = () => {
  return (
    <nav className=" px-5 py-5 flex items-center justify-between">
      <div className="flex items-center gap-5  w-full">
        <Link href={"/"}>
          <h1 className="uppercase text-2xl font-bold">Store</h1>
        </Link>
        <div className="sm:hidden flex justify-end flex-1">
          <MobileNav />
        </div>
        <div className="hidden sm:flex items-center justify-between flex-1 ">
          <Suspense fallback={<NavbarSkeleton />}>
            <NavLinks />
          </Suspense>

          <div>
            {/* shop cart */}
            <ShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
