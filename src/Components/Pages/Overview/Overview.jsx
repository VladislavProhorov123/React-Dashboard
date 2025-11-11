import React from 'react'
import './Overview.css'
import CardListDashboard from '../../Dashboard/CardListDashboard/CardListDashboard'
import Chart from './Chart/Chart'
import CircleChart from './CircleChart/CircleChart'
import SwiperCard from './SwiperCard/SwiperCard'

export default function Overview() {
  return (
    <div className='overview'>
      <CardListDashboard />
      <Chart />
      <div className="card-inner">
        <CircleChart />
        <SwiperCard />
      </div>
    </div>
  )
}
