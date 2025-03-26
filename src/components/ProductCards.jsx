import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constant/constants.index";

const ProductCards = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        style={{
          "--swiper-pagination-color": "#578E7E",
          "--swiper-pagination-bullet-inactive-color": "#F5ECD5",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "5px",
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        Mousewheel={true}
        modules={[FreeMode, Pagination, Mousewheel]}
        className="max-w-[90%] xl:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[350px] lg:w-[300px] xl:h-[400px] xl:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center blur-[2px] "
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl text-right backdrop-blur-md p-1 ">
                  {item.title}{" "}
                </h1>
                <p className="lg:text-[16px] opacity-60 text-[12px] text-right lg:mt-36  backdrop-blur-md">
                  {item.content}{" "}
                </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCards;
