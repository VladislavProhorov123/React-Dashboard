import React from 'react'
import Swiper from './Swiper/Swiper'
import styles from './Products.module.css'
import ProductList from './ProductList/ProductList'

export default function Products() {
  return (
    <div>
      <h2 className={styles.title}>Products</h2>
      <Swiper />
      <ProductList />
    </div>
  )
}
