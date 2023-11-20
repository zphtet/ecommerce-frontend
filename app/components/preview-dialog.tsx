import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Gallery from "./gallery";
import ProductInfo from "./product-info";
import { DetailProductType } from "@/types";
import { X } from "lucide-react";

const PreviewDialog = ({
  open,
  setOpen,
  product,
}: {
  open: boolean;
  setOpen: (state: boolean) => void;
  product: DetailProductType;
}) => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50 "
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/30">
        <Dialog.Panel className="w-[min(100%,600px)] flex gap-3 rounded bg-white relative p-5">
          <button
            className="absolute top-2 right-2 border w-[25px] h-[25px] grid place-items-center rounded-full shadow"
            onClick={() => setOpen(false)}
          >
            <X size={"16px"} />
          </button>
          <div className="flex-1">
            <Gallery
              images={product.images}
              productName={product.name}
              preview={true}
            />
          </div>
          <div className="flex-1">
            <ProductInfo
              name={product.name}
              price={product.price}
              size={product?.size?.value}
              color={product?.color?.value}
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PreviewDialog;
