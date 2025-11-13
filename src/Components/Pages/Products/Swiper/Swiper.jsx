import React from "react";
import styles from "./Swiper.module.css";
import { PRODUCT_BANNER } from "../../../../Data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SwiperCard() {
  return (
    <div className={styles.swiper}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{delay: 10000}}
      >
        {PRODUCT_BANNER.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slide_card}>
              <p className={styles.data}>{item.date}</p>
              <h3>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <button>Get Started</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
