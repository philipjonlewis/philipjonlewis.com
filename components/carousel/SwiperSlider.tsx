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
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="swiper"
      //   virtual={true}
    >
      {imageList?.map(({ imagePath, imageDescription }, index) => {
        return (
          <SwiperSlide key={index}>
            {/* <div className="image-parent"> */}
            <Image
              src={imagePath}
              layout="fill"
              objectFit="contain"
              objectPosition={"top"}
              alt="image"
            />
            {/* 
            <div className="description-container">
              <p>{imageDescription.title}</p>
              <p>{imageDescription.desc}</p>
            </div> */}
            {/* </div> */}
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
