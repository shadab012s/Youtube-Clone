import React, { useEffect, useState } from 'react';
import menu_logo from "./image/hamburger.png";
import youtube_logo from "./image/youtube logo.png";
import user_icon from "./image/user-icon.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constantss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]); // for search suggestion
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache=useSelector((store)=>store.search);


  const dispatch = useDispatch();

  // Debounced API call
  useEffect(() => {
    const timer = setTimeout(() => {

      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery])
      }
      else{
        getSearchSuggestions();
        

      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // Fetch search suggestions
  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await response.json();
      // console.log(json);
      setSearchSuggestions(json[1]);

      //updating cache
      dispatch(cacheResults({
        [searchQuery]:json[1],
      }))
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  // Dispatch toggle menu action
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="ham-youtube grid grid-flow-col p-5 shadow-lg">
      {/* Left Section */}
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-7 cursor-pointer"
          alt="menu"
          src={menu_logo}
        />
        <img className="h-7 w-20 ml-6" alt="logo" src={youtube_logo} />
      </div>

      {/* Middle Section */}
      <div className="input col-span-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full px-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)} // Delay hiding suggestions to allow click
          />
          <button className="bg-gray-50 border border-gray-400 rounded-r-full px-2">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
          </button>
        </div>
        {showSuggestion && searchSuggestions.length > 0 && (
          <div className="px-2 absolute bg-white w-[30rem] rounded-lg shadow-lg">
            <ul>
              {searchSuggestions.map((suggestion, index) => (
                <li
                  className="hover:bg-gray-100 py-1 cursor-pointer"
                  key={index}
                >
                  <FontAwesomeIcon icon={faSearch} className="mr-2" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="user col-span-1">
        <img className="h-7" alt="user icon" src={user_icon} />
      </div>
    </div>
  );
};

export default Head;
