import React from 'react'
import Info from '../Pages/Info'
import { Outlet } from 'react-router-dom'

const InfoLayout = () => {
  return (
    <div>
        <Info />
        <Outlet />
    </div>
  )
}

export default InfoLayout