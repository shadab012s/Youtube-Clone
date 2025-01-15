# YouTube Clone

## Overview
The YouTube Clone project is a feature-rich, single-page application that replicates key functionalities of YouTube. This project is built using React and Redux for state management and fetches data dynamically using APIs. The clone provides a responsive user interface, ensuring seamless functionality across different devices.

---

## Features

1. **Search Functionality**
   - Users can search for videos using a search bar.
   - Real-time suggestions appear as the user types, fetched using the YouTube Search API.
   - Clicking on a suggestion or hitting Enter displays a list of related videos.

2. **Responsive Design**
   - Fully responsive design to support desktops, tablets, and mobile devices.
   - CSS classes and utility frameworks (e.g., Tailwind CSS) ensure a consistent user experience.

3. **Navigation Menu**
   - Hamburger menu toggles to show/hide the navigation sidebar.
   - Smooth transitions for opening and closing the menu.

4. **Video Listings**
   - Display of a grid of video thumbnails with titles fetched dynamically using APIs.
   - Clicking on a video redirects the user to a detailed view (future functionality).

5. **User Account Icon**
   - Placeholder for user authentication (future scope).

6. **Dynamic Suggestions**
   - Search suggestions are cached to optimize API usage and reduce redundant calls.
   - Suggestions dropdown with hover and click functionality.

7. **Route-Based Updates**
   - The application listens for route changes and resets the search state to provide a seamless browsing experience.

---

## APIs Used
All API endpoints are managed in a single file (`api.js`) for better organization. Below are the APIs used in the project:

1. **YouTube Video API**  
   Fetches the most popular videos in a specific region.  
   ```javascript
   export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`;
2. **YouTube Search Suggestion API**  
   Provides real-time search suggestions based on the user's query.  
   ```javascript
   export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

3. **YouTube Search API**  
   Fetches video search results based on user queries.  
   ```javascript
   export const YOUTUBE_SEARCH_API_VALUE = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict&type=videos&videoCaption=any&videoType=any&key=${process.env.REACT_APP_API_KEY}`;
 
   
   
   
