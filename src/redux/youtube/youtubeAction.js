import axios from "axios"
import { FETCH_YOUTUBE_FAILURE, FETCH_YOUTUBE_REQUEST, FETCH_YOUTUBE_SUCCESS } from "./youtubeTypes"
import { BackendUrl } from "../../constants"
import { config } from "../../constants"

export const fetchYoutubRequest=()=>{
    return {
        type:FETCH_YOUTUBE_REQUEST,
    }
}

export const fetchYoutubeSuccess=(youtubeData)=>{
    return{
        type:FETCH_YOUTUBE_SUCCESS,
        payload:youtubeData
    }
}

export const fetchYoutubeFailure=(error)=>{
    return{
        type:FETCH_YOUTUBE_FAILURE,
        payload:error
    }
}

export const fetchYoutube = (page)=>{

    return async(dispatch)=>{
        dispatch(fetchYoutubRequest())
        try{
            const res = await axios.get(`${BackendUrl}/api/data/suggested?_limit=${10}&_page=${page}`,config);
            const data = await res.data;

            dispatch(fetchYoutubeSuccess(data.channels));

        }catch(error){
            console.log("youtube data error : ",error);
            dispatch(fetchYoutubeFailure(error.message));
        }
    }
}

