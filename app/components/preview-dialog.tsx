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
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50 "
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/30 ">
        <Dialog.Panel className="w-[min(100%,600px)] flex gap-5 rounded bg-white relative xsm:p-5 pt-8 px-5 pb-5 xsm:flex-row flex-col">
          <button
            className="absolute top-2 xsm:top-2 right-2 xsm:right-2 border xsm:w-[25px] w-[20px] h-[20px] xsm:h-[25px] grid place-items-center rounded-full shadow"
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
            <ProductInfo data={product} />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PreviewDialog;
