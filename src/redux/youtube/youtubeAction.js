import axios from "axios";
import {
  REMOVE_SUBSCRIBE_CHANNEL,
  FETCH_YOUTUBE_FAILURE,
  FETCH_YOUTUBE_REQUEST,
  FETCH_YOUTUBE_SEARECH_SUCCESS,
  FETCH_YOUTUBE_SUCCESS,
} from "./youtubeTypes";
import { BackendUrl } from "../../constants";
import { config } from "../../constants";

export const fetchYoutubRequest = () => {
  return {
    type: FETCH_YOUTUBE_REQUEST,
  };
};

export const fetchYoutubeSuccess = (youtubeData) => {
  return {
    type: FETCH_YOUTUBE_SUCCESS,
    payload: youtubeData,
  };
};

export const fetchYoutubeFailure = (error) => {
  return {
    type: FETCH_YOUTUBE_FAILURE,
    payload: error,
  };
};

export const fetchYoutubeSearchSuccess = (data) => {
  return {
    type: FETCH_YOUTUBE_SEARECH_SUCCESS,
    payload: data,
  };
};

export const removeSubscribeChannelsFromState = (dataId) => {
  return {
    type: REMOVE_SUBSCRIBE_CHANNEL,
    payload: dataId,
  };
};


export const fetchYoutube = (page) => {
  
  return async (dispatch) => {
    dispatch(fetchYoutubRequest());
    try {
      const res = await axios.get(
        `${BackendUrl}/api/data/suggested?_limit=${10}&_page=${page}&_searchTerm=${""}`,
        config
      );
      const data = await res.data;
      dispatch(fetchYoutubeSuccess({channels:data.channels,page}));
    } catch (error) {
      console.log("youtube data error : ", error);
      dispatch(fetchYoutubeFailure(error.message));
    }
  };
};

export const fetchSearchYoutube = (searchTerm) => {
  return async (dispatch) => {
    try {
      console.log("search term : ", searchTerm);
      const res = await axios.get(
        `${BackendUrl}/api/data/suggested?_limit=${10}&_page=${1}&_searchTerm=${searchTerm}`,
        config
      );
      const data = await res.data;
        console.log("SEARCH:",data)
      dispatch(fetchYoutubeSearchSuccess(data.channels));
    } catch (error) {
      console.log("Error : ", error);
    }
  };
};

export const subscribeChannel = (channelId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${BackendUrl}/api/data/subscribe/${channelId}`,
        config
      );
      const data = await res.data;
      console.log("data : ", data);

      if (res.status === 200) {
        alert("subscribed successfully")
        dispatch(removeSubscribeChannelsFromState(channelId));
      } else {
        alert("error");
      }

    } catch (error) {
      console.log("Error :", error);
    }
  };
};

