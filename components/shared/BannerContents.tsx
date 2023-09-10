"use client";

import Image from "next/image";
import banner1 from "../../public/banner1.webp";
import banner2 from "../../public/banner2.webp";
import banner3 from "../../public/banner3.webp";
import banner4 from "../../public/banner4.webp";
import Button from "../ui/Button";

const BannerContents = () => {
  return (
    <div className="flex flex-row">
      <div className="min-w-[38.2%] flex flex-col">
        <div className="flex-1 relative">
          <Image src={banner1} alt="banner1" />
          <div className="absolute top-48 left-1/3 w-full flex flex-col items-start justify-center px-4 bg-transparent">
            <Button
              bgColor="bg-white"
              fontSize="text-[14px]"
              textColor="text-black"
              title="Dress"
              classname=""
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row">
          <div className="flex-1 relative">
            <Image src={banner2} alt="banner2" />
            <div className="absolute top-32 left-1/2 translate-x-[-40%] w-full flex flex-col items-start justify-center px-4 bg-transparent">
              <Button
                bgColor="bg-white"
                fontSize="text-[14px]"
                textColor="text-black"
                title="Accessories"
                classname=""
              />
            </div>
          </div>
          <div className="flex-1 relative">
            <Image src={banner3} alt="banner3" />
            <div className="absolute top-32 left-1/2 translate-x-[-30%] w-full flex flex-col items-start justify-center px-4 bg-transparent">
              <Button
                bgColor="bg-white"
                fontSize="text-[14px]"
                textColor="text-black"
                title="Shoes"
                classname=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[61.8%]">
        <div className="relative">
          <Image src={banner4} alt="banner4" />
          <div className="absolute top-1/3 left-0 w-full flex flex-col items-start justify-center px-[120px] bg-transparent">
            <p className="text-[12px] font-normal tracking-normal leading-5">
              NEW COLLECTION
            </p>
            <h2 className="text-[45px] font-normal tracking-normal leading-[70px] mb-4">
              Summer Vibes <br />
              With Minimalist
            </h2>
            <Button
              bgColor="bg-black"
              fontSize="text-[12px]"
              textColor="text-white"
              title="CHECK NOW"
              classname="mt-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContents;
