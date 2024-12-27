import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=' m-2 p-2 grid grid-flow-col'>
      
      <Sidebar/>
      {/* <MainContainer/> */}
      <Outlet/>
    </div>
  )
}

export default Body

