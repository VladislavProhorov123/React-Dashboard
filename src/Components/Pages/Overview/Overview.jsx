import React from 'react'
import './Overview.css'
import CardListDashboard from '../../Dashboard/CardListDashboard/CardListDashboard'
import Chart from './Chart/Chart'

export default function Overview() {
  return (
    <div className='overview'>
      <CardListDashboard />
      <Chart />
    </div>
  )
}
