import getBillboard from "@/actions/get-billboard";
import { BillboardType } from "@/types";
import Image from "next/image";

const Billboard = async ({ billboardId }: { billboardId: string }) => {
  const billboard = await getBillboard(billboardId);
  const data = billboard.data as BillboardType;
  return (
    <div className=" relative h-[40vh] sm:h-[60vh] ">
      <Image
        src={data.imageUrl}
        alt={`${data.label} image`}
        className="object-cover"
        fill
      />
      <div className="absolute z-10 invert sm:text-4xl text-2xl top-1/2 text-center  -translate-y-1/2  w-full ">
        <h5>{data.label}</h5>
      </div>
    </div>
  );
};

export default Billboard;
