import React, { useEffect ,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomName } from '../utils/helper';


const LiveChat = () => {

  const [liveMessage,setLiveMessage]=useState("");
  // subscribing to store
  const dispatch =useDispatch();
  const chatMessages=useSelector((store)=>store.chat.messages);
  // using the concept of polling
  useEffect(()=>{
  const i=  setInterval(() => {
      // api polling
      console.log("api polling");

      dispatch(
        addMessage({
          name:generateRandomName().name,
          message:generateRandomName().message,
        })
      )

    }, 1000);

    // clearing the interval
return ()=>clearInterval(i);
  },[]);
  return (
    <div className="w-full h-[600px] ml-2 my-5 p-2 border border-black bg-slate-100 rounded-lg relative  ">
    {/* Fixed Header */}
    <h1 className="font-bold  p-2 shadow-lg bg-slate-100 z-10 sticky top-0">
      ChatMessage
    </h1>
  
    {/* Scrollable Chat Messages */}
    <div className=" h-[540px] mt-2 flex flex-col-reverse overflow-y-scroll">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
    <form className='w-full m-2  p-2  border border-black rounded-lg' 
    onSubmit={(e)=>{
      e.preventDefault();
      console.log("on form submit",liveMessage);
      dispatch(
        addMessage({
          name:"default",
          message:liveMessage,
        })
      )
      setLiveMessage("");
    }}>
      <input className='w-96 px-2 border border-black' type='text' value={liveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value);
      }} />
      <button className=' bg-green-100'>Submit</button>
    </form>
  </div>
  
  )
}

export default LiveChat
