import React from 'react';
import menu_logo from "./image/hamburger.png"
import youtube_logo from"./image/youtube logo.png"
import user_icon from './image/user-icon.png'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';


const Head = () => {

    const dispatch=useDispatch(); // dispatch the  action
    const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
    };
    
  return (
    <div className='ham-youtube grid grid-flow-col   p-5 shadow-lg'>
      
      <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className="h-7 cursor-pointer"alt='menu' src={menu_logo} />
        <img className="h-7 w-20 ml-6 "alt='menu' src={youtube_logo} />
      </div>
      
      <div  className='input col-span-10'>
        <input className="w-1/2 border border-gray-400  rounded-l-full " type='text'/>
        <button className='bg-gray-50 border border-gray-400 rounded-r-full'>search</button>
      </div>
      <div className='user col-span-1'>
    <img className='h-7' alt='user icon' src={user_icon}/>
      </div>
    </div>
  )
}

export default Head
