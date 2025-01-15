import React from 'react';
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer'; // Import VideoContainer
import SearchVideoCard from './SearchVideoCard';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Body = ({ showSearchResult, searchResults }) => {
 // console.log(searchResults);
  //console.log(showSearchResult);
  
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      {showSearchResult && (
        <div className="search-results mt-5">
          {searchResults.map((video) => (
            // <SearchVideoCard key={video.id.videoId} info={video} />
            <Link  key={video.id.videoId} to={"watch?v="+video.id.videoId}><SearchVideoCard info={video}/></Link>
          ))}
        </div>
      )}
      {!showSearchResult && <Outlet />}
    </div>
  );
};

export default Body;
