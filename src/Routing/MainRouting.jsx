import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Form from '../Components/Form/Form'
import Dashboard from '../Components/Dashboard/Dashboard'

export default function MainRouting() {
  return (
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
  )
}
