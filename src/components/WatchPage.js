import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    // to find out the curent id from url
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch=useDispatch();
    useEffect(()=>
    {
        dispatch(closeMenu());
    },[])

  return (
    <div className='flex flex-col '>
      <div className='px-5 flex'>
        <div className='pl-10 my-5'>
      <iframe width="640" height="360" 
      src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
      title="YouTube video player" 
      frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" 
       allowFullScreen>
       </iframe>
       </div>
       <div className='w-full pl-20'>
        <LiveChat/>
       </div>
      
    </div>
    <CommentContainer/>
    </div>
    
  )
}

export default WatchPage
