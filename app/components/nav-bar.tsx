import Link from "next/link";
import NavLinks from "./nav-links";
import { Suspense } from "react";
import ShoppingCart from "./shop-cart";

const Navbar = () => {
  return (
    <nav className=" px-5 py-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={"/"}>
          <h1 className="uppercase text-2xl font-bold">Store</h1>
        </Link>
        <Suspense fallback={<div>Loading Navlinks ...</div>}>
          <NavLinks />
        </Suspense>
      </div>
      <div>
        {/* shop cart */}
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
