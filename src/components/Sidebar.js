import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    // subscribing to know menu is open or close
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);// subscribing to specific part
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg col-span-1'>
        <ul>
       <Link to="/"><li>Home</li></Link> 
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold py-5 '>subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
