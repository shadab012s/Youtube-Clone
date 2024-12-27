import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,channelId,description,title,thumbnails}=snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-xl'>
        <img className="rounded-xl" alt='thumb' src={thumbnails.medium.url}/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard

