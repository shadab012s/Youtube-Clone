import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  // Polling for live messages
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API polling");

      dispatch(
        addMessage({
          name: generateRandomName().name,
          message: generateRandomName().message,
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <div className="w-full max-w-2xl mx-auto h-[600px] my-5 p-2 border border-black bg-slate-100 rounded-lg relative">
      {/* Fixed Header */}
      <div className="font-bold p-2  bg-slate-100 z-10 sticky top-0 text-center ">
        
        Live Chat
      

      {/* Scrollable Chat Messages */}
      <div className="h-[480px] mt-2 flex flex-col-reverse overflow-y-scroll">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      {/* Input Form */}
      <form
        className="flex flex-wrap items-center gap-2 mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on form submit", liveMessage);
          dispatch(
            addMessage({
              name: "default",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="flex-grow min-w-[200px] px-2 py-1 border border-black rounded-lg"
          type="text"
          placeholder="Type your message..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-green-100 px-4 py-1 rounded-lg">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default LiveChat;
