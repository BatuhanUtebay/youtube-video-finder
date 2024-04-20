import axios from "axios";

const KEY = "AIzaSyBWo6XEIKmxg4XmOfr8YUBoVNI5ITgThCw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});