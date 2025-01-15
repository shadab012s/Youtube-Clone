import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import menu_logo from "./image/hamburger.png";
import youtube_logo from "./image/youtube logo.png";
import user_icon from "./image/user-icon.png";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_API_VALUE } from "../utils/constantss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cacheResults } from "../utils/searchSlice";

const Head = ({ setShowSearchResults, setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Reset search state on route change
    setSearchQuery("");
    setSearchSuggestions([]);
    setShowSearchResults(false);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setSearchSuggestions([]);
        return;
      }
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await response.json();
      setSearchSuggestions(json[1] || []);
      dispatch(cacheResults({ [searchQuery]: json[1] || [] }));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const handleSearch = async (query) => {
    setShowSearchResults(true);
    const searchValueUrl = `${YOUTUBE_SEARCH_API_VALUE}&q=${encodeURIComponent(query)}`;
    try {
      const response = await fetch(searchValueUrl);
      const json = await response.json();
      setSearchResults(json.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

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
        <Link to="/">
          <img className="h-7 w-20 ml-6" alt="YouTube logo" src={youtube_logo} />
        </Link>
      </div>

      {/* Middle Section */}
      <div className="input col-span-10 relative">
        <div>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full px-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShowSuggestion(false);
                handleSearch(searchQuery);
              }
            }}
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="bg-gray-50 border border-gray-400 rounded-r-full px-2"
            onClick={() => handleSearch(searchQuery)}
            aria-label="Search Button"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
          </button>
        </div>
        {showSuggestion && searchSuggestions.length > 0 && (
          <div className="absolute bg-white w-full max-w-[30rem] sm:w-[90%] rounded-lg shadow-lg overflow-auto max-h-64 z-50">
            <ul>
              {searchSuggestions.map((suggestion, index) => (
                <li
                  className="hover:bg-gray-100 py-1 px-2 cursor-pointer"
                  key={index}
                  onMouseDown={() => {
                    setSearchQuery(suggestion);
                    setShowSuggestion(false);
                    handleSearch(suggestion);
                  }}
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
        <img className="h-7" alt="User icon" src={user_icon} />
      </div>
    </div>
  );
};

export default Head;
