import React, { useContext } from "react";
import { FavoritesContext } from "../../../Context/FavoritesContext";
import styles from "./Favorites.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Favorites() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  return (
    <div>
      <h2>Favorites</h2>

      {favorites.length === 0 && (
        <p className={styles.empty_product}>
          Нет сохранённых товаров. Нажмите на сердечко, чтобы добавить в
          избранное.
        </p>
      )}
      <div className={styles.product_inner}>
        {favorites.map((product) => (
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
                onClick={() => toggleFavorite(product)}
              >
                <i className="ri-heart-fill"></i>
              </button>
            </div>

            <button className={styles.edit}>Edit Product</button>
          </div>
        ))}
      </div>
    </div>
  );
}
