"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ShoppingCart from "./shop-cart";
const SheetCom = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet key={"left"}>
        <SheetTrigger>
          <Menu className="-mr-4" />
        </SheetTrigger>
        <SheetContent side={"left"} className=" flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-center uppercase">Store</h1>
          {children}
          {/* <NavLinks isMobile={true} /> */}
          <div className=" flex items-center justify-center">
            <ShoppingCart />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetCom;
