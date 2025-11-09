import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import Header from '../Header/Header'
import './Dashboard.css'

export default function Dashboard() {

  const [activeTab, setActiveTab] = useState('overview')
  return (
    <div className='dashboard'>
      <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="dashboard-main">
        <Header />
        <Content activeTab={activeTab} />
      </div>
    </div>
  )
}
