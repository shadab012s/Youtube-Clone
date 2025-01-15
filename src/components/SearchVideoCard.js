import React from 'react'

const SearchVideoCard = ({info}) => {
      const {snippet}=info;
    const {channelTitle,description,title,thumbnails}=snippet;

  return (
    <div className=''>
        <div className='p-2 ml-10 rounded-xl flex w-full'>
        <div>
        <img className="rounded-xl mr-10 w-" alt='thumb' src={thumbnails.medium.url}/>
        </div>
        <div>
            <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{description}</li>
      </ul>
      </div>
      
    </div>
</div>
    

    
  )
}

export default SearchVideoCard;




