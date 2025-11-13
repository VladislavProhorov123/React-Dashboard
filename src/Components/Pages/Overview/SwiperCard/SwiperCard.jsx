import React from "react";
import styles from "./SwiperCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { DATA_SWIPER } from "../../../../Data/data";

export default function SwiperCard() {
  return (
    <div className={styles.swiper_card}>
      <h3>Featured Product</h3>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
      >
        {DATA_SWIPER.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card_swiper}>
              <img src={item.img} alt="" />
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
