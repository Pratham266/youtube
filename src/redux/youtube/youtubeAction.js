import axios from "axios";
import { BackendUrl } from "../../constants";
import { config } from "../../constants";


export const fetchYoutube = (page) => {
  return {
    type: "FETCH_YOUTUBE",
    payload: 
      axios.get(
        `${BackendUrl}/api/data/suggested?_limit=${10}&_page=${page}&_searchTerm=${""}`,
        config
      ),
    meta:{page:page}
  };
};

export const fetchSearchYoutube = (searchTerm) => {
  return {
    type: "FETCH_SEARCH_CHANNEL",
    payload: axios.get(
      `${BackendUrl}/api/data/suggested?_limit=${10}&_page=${1}&_searchTerm=${searchTerm}`,
      config
    ),
  };
};

export const subscribeChannel = (channelId)=>{
  console.log('in subscribe channel : ',channelId)
  return{
    type:'SUBSCRIBE_CHANNEL',
    payload:axios.get(`${BackendUrl}/api/data/subscribe/${channelId}`,config),
    meta:{id:channelId}
  }
}
