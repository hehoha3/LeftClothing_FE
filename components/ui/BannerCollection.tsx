"use client";

import Image from "next/image";
import imgCollection from "../../public/collection-spring.webp";
import Button from "./Button";

const BannerCollection = () => {
  return (
    <div className="relative">
      <Image
        src={imgCollection}
        alt="collection spring"
        className="w-full h-full"
      />
      <div className="absolute top-1/3 left-0 w-full flex flex-col items-start justify-center px-4 bg-transparent">
        <h2 className="text-[60px] font-normal tracking-normal leading-[70px] mb-4">
          Spring
          <br />
          <span className="font-bold">Collection</span>
        </h2>
        <p className="text-[14px] font-normal tracking-normal leading-5">
          Lef.T clothing Boutique is located in Vinh city, Nghe An
        </p>
        <Button
          bgColor="bg-black"
          fontSize="text-[12px]"
          textColor="text-white"
          title="SEE MORE"
          classname="mt-[30px]"
        />
      </div>
    </div>
  );
};

export default BannerCollection;
