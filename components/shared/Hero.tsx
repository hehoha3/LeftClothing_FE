"use client";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import hero1 from "../../public/hero1.webp";
import hero2 from "../../public/hero2.webp";
import hero3 from "../../public/hero3.webp";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image src={hero2} alt="hero2" className="w-full h-full" />
            <div className="absolute top-1/3 left-0 w-full flex flex-col items-start justify-center px-4 bg-transparent">
              <h2 className="text-[60px] font-normal tracking-normal leading-[70px] mb-4">
                Essentials
                <br />
                starting at 220.000đ
              </h2>
              <p className="text-[14px] font-normal tracking-normal leading-5">
                Lef.T clothing Boutique is located in Vinh city, Nghe An
              </p>
              <Button
                bgColor="bg-black"
                fontSize="text-[12px]"
                textColor="text-white"
                title="SHOP NOW"
                classname="mt-[30px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={hero1} alt="hero1" className="w-full h-full" />
            <div className="absolute top-1/3 left-0 w-full flex flex-col items-start justify-center px-4 bg-transparent">
              <h2 className="text-[60px] font-normal tracking-normal leading-[70px] mb-4">
                Today Only <br />
                20% off + free Shipping
              </h2>
              <p className="text-[14px] font-normal tracking-normal leading-5">
                Lef.T clothing Boutique is located in Vinh city, Nghe An
              </p>
              <Button
                bgColor="bg-black"
                fontSize="text-[12px]"
                textColor="text-white"
                title="SHOP NOW"
                classname="mt-[30px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={hero3} alt="hero3" className="w-full h-full" />
            <div className="absolute top-64 left-0 w-full flex flex-col items-center justify-center px-4 bg-transparent">
              <p className="text-[17px] font-normal tracking-normal leading-5 text-white">
                Check out now !!
              </p>
              <h2 className="text-[60px] font-normal tracking-normal leading-[70px] mb-4 text-white">
                Spring Vibes
              </h2>
              <Button
                bgColor="bg-white"
                fontSize="text-[12px]"
                textColor="text-black"
                title="SHOP NOW"
                classname="mt-[30px]"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
