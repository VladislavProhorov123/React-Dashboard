import React, { useState } from "react";
import { APPLE_PRODUCTS } from "../../../../Data/data";
import styles from "./ProductList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductList() {
  const [products, setPtoducts] = useState(
    APPLE_PRODUCTS.map((item) => ({ ...item, liked: false }))
  );

  const toggleLike = (id) => {
    setPtoducts((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, liked: !card.liked } : card
      )
    );
  };
  return (
    <div className={styles.card_list}>
      {products.map((product) => (
        <div className={styles.product_card} key={product.id}>
          <Swiper modules={[Navigation]} navigation slidesPerView={1}>
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={product.title} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.card_info}>
            <div className={styles.card_inner}>
              <h3>{product.title}</h3>
              <p className={styles.price}>{product.price}</p>
              <p>
                {"⭐".repeat(Math.round(product.rating))} ({product.reviews})
              </p>
            </div>
            <button
              className={styles.like}
              onClick={() => toggleLike(product.id)}
            >
              <i
                className={product.liked ? "ri-heart-fill" : "  ri-heart-line"}
              ></i>
            </button>
          </div>
          <button className={styles.edit}>Edit Product</button>
        </div>
      ))}
    </div>
  );
}
