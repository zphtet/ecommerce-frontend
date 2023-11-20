"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

const Gallery = ({
  images,
  productName,
  preview,
}: {
  images: string[];
  productName: string;
  preview?: boolean;
}) => {
  return (
    <Tab.Group>
      <Tab.Panels className={`mb-5`}>
        {images.map((imgUrl, idx) => {
          return (
            <Tab.Panel
              key={imgUrl}
              className={`relative sm:h-[min(50vh,400px)] h-[min(40vh,300px)] ${
                preview && "sm:h-[min(28vh,220px)] h-[min(25vh,200px)]"
              }`}
            >
              <Image
                src={imgUrl}
                alt={`${productName} ${idx}`}
                fill
                className={`object-cover`}
              />
            </Tab.Panel>
          );
        })}

        {/* <Tab.Panel>Content 3</Tab.Panel> */}
      </Tab.Panels>
      <Tab.List className={`flex gap-3`}>
        {/* <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab> */}
        {images.map((imgUrl, idx) => {
          return (
            <Tab key={imgUrl} as={Fragment}>
              {({ selected }) => (
                <div
                  className={`relative w-[50px] h-[50px] rounded-md p-5  overflow-hidden ${
                    selected && "ring-1 ring-offset-2 ring-black"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${productName} tab ${idx}`}
                    className={`cursor-pointer object-cover`}
                    fill
                  />
                </div>
              )}
            </Tab>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
};
export default Gallery;
