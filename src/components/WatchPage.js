import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams,} from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";


const WatchPage = () => {
  // To find out the current id from URL
   const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const videoId = searchParams.get("v");
  

 // console.log(videoId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      {/* Video and Chat Section */}
      <div className="flex flex-col lg:flex-row px-5">
        {/* Video Player */}
        <div className="w-full lg:w-[640px] my-5">
          <iframe
            className="w-full aspect-video rounded-lg"
            
            src={`https://www.youtube.com/embed/${videoId }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* Live Chat */}
        <div className="w-full lg:pl-10 lg:w-auto my-5">
          <LiveChat />
        </div>
      </div>
      {/* Comments Section */}
      <div className="px-5">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;

