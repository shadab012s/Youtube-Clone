import React from 'react'
import user_icon from "./image/user-icon.png";

const Comment = ({data}) => {
    const {name, text}=data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img
      className='w-12 h-12'
      alt='user' src={user_icon}/>
      <div className='px-3'><p className='font-bold'>{name}</p>
      <p>{text}</p></div>
      
    </div>
  )
}

export default Comment
