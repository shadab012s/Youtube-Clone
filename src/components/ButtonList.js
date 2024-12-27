import React from 'react'
import Button from './Button'

const list=["ALL","Live","Gaming","News","Podcasts","Cricket","Hockey","Coding","Job","AI"]
const ButtonList = () => {
  return (
    <div className='flex m-2'>
        {list.map((item,index)=>(
 <Button key={index} name={item}/>
        ))}
     
      
    </div>
  )
}

export default ButtonList

