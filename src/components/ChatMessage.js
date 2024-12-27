import React from 'react'
import user_icon from "./image/user-icon.jpg"

const ChatMessage = ({name,message}) => {
  return (
    
    <div className=''>
      {/* <h1 className='font-bold m-2 p-2 shadow-lg'>ChatMessage</h1> */}
     <div className="user flex items-center mt-4 m-2 p-2 ">
     <img className="h-7" alt="user icon" src={user_icon} />
     <span className='font-bold px-2'>{name}</span>
     <span>{message}</span>
   </div>
   </div>
  )
}

export default ChatMessage
