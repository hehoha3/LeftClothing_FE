"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import slider1 from "../../public/slider1.webp";
import slider2 from "../../public/slider2.webp";
import slider3 from "../../public/slider3.webp";
import slider4 from "../../public/slider4.webp";
import slider5 from "../../public/slider5.webp";
import slider6 from "../../public/slider6.webp";
import slider7 from "../../public/slider7.webp";
import slider8 from "../../public/slider8.webp";
import slider9 from "../../public/slider9.webp";

const UnderAbout = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        speed={2500}
        autoplay={{ delay: 1, disableOnInteraction: false }}
        modules={[Autoplay, FreeMode]}
      >
        <SwiperSlide>
          <Image src={slider1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider3} alt="slider3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider4} alt="slider4" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider5} alt="slider5" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider6} alt="slider6" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider7} alt="slider7" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider8} alt="slider8" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider9} alt="slider9" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UnderAbout;
