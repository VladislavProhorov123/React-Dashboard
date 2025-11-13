import React from 'react'
import styles from './Overview.module.css'
import CardListDashboard from '../../Dashboard/CardListDashboard/CardListDashboard'
import Chart from './Chart/Chart'
import CircleChart from './CircleChart/CircleChart'
import SwiperCard from './SwiperCard/SwiperCard'
import SalesChart from './SalesChart/SalesChart'
import Table from './Table/Table'

export default function Overview() {
  return (
    <div className={styles.overview}>
      <CardListDashboard />
      <Chart />
      <div className={styles.card_inner}>
        <CircleChart />
        <SwiperCard />
        <SalesChart />
      </div>
      <Table />
    </div>
  )
}
