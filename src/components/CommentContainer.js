import React from 'react'
import Comment from './Comment'

// comment data
const commnetsData=[
    {
        name:'farhan',
        text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
        replies:[
            {
                name:'farhan',
                text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
                replies:[ 
                    {
                    name:'farhan',
                    text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
                    replies:[
                        {
                            name:'farhan',
                            text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
                            replies:[],  
                        },
                    ],  
                },
                {
                    name:'farhan',
                    text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
                    replies:[],  
                },
            ],  
            },
            {
                name:'farhan',
                text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
                replies:[],  
            },
            {
                name:'farhan',
                text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
                replies:[],  
            },
            {
                name:'farhan',
                text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
                replies:[],  
            },
        ],
        
    },
    {
        name:'farhan',
        text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
        replies:[],
        
    },
    {
        name:'farhan',
        text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
        replies:[],
        
    },
    {
        name:'farhan',
        text:"Absolutely loved this video! It's informative, engaging, and well-executed. Great visuals and clear explanations make it truly outstanding",
        replies:[],
        
    }
]
// commnetlist
const CommentsList = ({ comments }) => {
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };
  
  

// rendering comment list
const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
     <h1 className=' text-2xl font-bold'>Commnets: </h1> 
     <CommentsList comments={commnetsData}/>
    </div>
  )
}

export default CommentContainer


