
const apiKey = process.env.REACT_APP_API_KEY;
console.log("Google API Key:", apiKey);
export const OFFSET_LIVE_CHAT=10;

export const YOUTUBE_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key="+process.env.REACT_APP_API_KEY;
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

