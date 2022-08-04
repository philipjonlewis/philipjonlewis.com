import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperSlider = ({ imageList }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="swiper"
      //   virtual={true}
    >
      {imageList?.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              //   objectFit="contain"
              objectPosition="center"
              className={"image"}
              alt="image"
            />

            {/* <div className="description-container">
              <p>amazing</p>
            </div> */}
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
  );
};

export default SwiperSlider;
