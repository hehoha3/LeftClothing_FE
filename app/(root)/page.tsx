import UnderAbout from "@/components/elements/UnderAbout";
import BannerContents from "@/components/shared/BannerContents";
import Hero from "@/components/shared/Hero";
import imgCollection from "../../public/collection-spring.webp";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ListProductHomePage from "@/components/shared/ListProductHomePage";

const page = () => {
  return (
    <>
      <Hero />

      <BannerContents />

      <div className="px-4">
        <ListProductHomePage />
      </div>

      <section className="mb-5">
        <div className="relative">
          <Image
            src={imgCollection}
            alt="collection spring"
            className="w-full h-full"
          />
          <div className="absolute top-1/3 left-0 w-full flex flex-col items-start justify-center pl-16 bg-transparent">
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
      </section>
      <section className="mb-5">
        <UnderAbout />
      </section>
    </>
  );
};

export default page;
