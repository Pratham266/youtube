import axios from "axios";
import {
    FETCH_BUDDY_SUBSCRIBE_CHANNEL,
  FETCH_TEAM_FAILURE,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
} from "./teamTypes";
import { BackendUrl, config } from "../../constants";

export const fetchTeamRequest = () => {
  return {
    type: FETCH_TEAM_REQUEST,
  };
};

export const fetchTeamSuccess = (team) => {
  return {
    type: FETCH_TEAM_SUCCESS,
    payload: team,
  };
};

export const fetchTeamFailure = (error) => {
  return {
    type: FETCH_TEAM_FAILURE,
    payload: error,
  };
};

export const fetchBuddySubscribeChannels = (data)=>{
    return{
        type:FETCH_BUDDY_SUBSCRIBE_CHANNEL,
        payload:data,
    }
}

export const fetchTeam = () => {
  return async (dispatch) => {
    dispatch(fetchTeamRequest());
    try {
      const res = await axios.get(`${BackendUrl}/api/buddy/showbuddy`, config);
      const data = await res.data;

      if (data.status === 200) {
        dispatch(fetchTeamSuccess(data.buddies));
      } else {
        console.log("data : ", data);
      }
    } catch (error) {
      console.log("ERROR:", error.message);
      dispatch(fetchTeamFailure(error.message));
    }
  };
};

export const fetchBuddyChannels = (userId)  =>{
    return async(dispatch)=>{
        dispatch(fetchTeamRequest());
        try{    

            const res =  await axios.get(`${BackendUrl}/api/buddy/buddychannels/${userId}`,config);
            const data = await res.data;
            console.log("res : ",data)
            if(data.status === 200){
                dispatch(fetchBuddySubscribeChannels(data.channels))
            }else if(data.status === 204){
                alert(`No data found!`)
                dispatch(fetchBuddySubscribeChannels([]))
            }
        }catch(error){
            console.log("error : ",error.message)
            dispatch(fetchTeamFailure(error.message));
        } 
    }
}