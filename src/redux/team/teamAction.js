import axios from "axios";
import {
    FETCH_BUDDY_SUBSCRIBE_CHANNEL,
  FETCH_TEAM_FAILURE,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  INVITATION_REQUEST_FOR_BUDDY,
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

export const invitationRequestForBuddy=(data)=>{
  return{
    type:INVITATION_REQUEST_FOR_BUDDY,
    payload:data,
  }
}

export const fetchTeam = () => {
  return async (dispatch) => {
    dispatch(fetchTeamRequest());
    try {
      const res = await axios.get(`${BackendUrl}/api/buddy/showbuddy`, config);
      const data = await res.data;
      console.log("res Team : ",data)
      if (data.status === 200) {
        dispatch(fetchTeamSuccess(data.buddies));
      } else if(data.status === 204)
      {
        dispatch(fetchTeamSuccess(data.buddies));
      }
    } catch (error) {
      console.log("ERROR:", error.message);
      dispatch(fetchTeamFailure(error.message));
    }
  };
};

// export const fetchBuddyChannels = (userId)  =>{
//     return async(dispatch)=>{
//         // dispatch(fetchTeamRequest());
//         try{    
//             const res =  await axios.get(`${BackendUrl}/api/buddy/buddychannels/${userId}`,config);
//             const data = await res.data;
//             console.log("res Buddy Channels : ",data)
//             if(data.status === 200){
//                 dispatch(fetchBuddySubscribeChannels(data.channels))
//             }else if(data.status === 204){
//                 dispatch(fetchBuddySubscribeChannels([]))
//             }
//         }catch(error){
//             console.log("error : ",error.message)
//             dispatch(fetchTeamFailure(error.message));
//         } 
//     }
// }

export const fetchBuddySubscribedChannels = (buddies)  =>{
  return async(dispatch)=>{
      // dispatch(fetchTeamRequest());
      try{    
          const res =  await axios.post(`${BackendUrl}/api/buddy/allchannels`,{buddyId:buddies},config);
          const data = await res.data;

          console.log("buddy res: ",data)
          if(data.status === 200){
              dispatch(fetchBuddySubscribeChannels(data.channels))
          }else if(data.status === 204){
              dispatch(fetchBuddySubscribeChannels([]))
          }
      }catch(error){
          console.log("error : ",error.message)
          dispatch(fetchTeamFailure(error.message));
      } 
  }
}

export const decisonOnBuddyRequest=(decision,id,navigate)=>{
  return async(dispatch)=>{
    dispatch(fetchTeamRequest());
    try{
      const res = await axios.post(`${BackendUrl}/api/buddy/add`,{decision,token:id},config);
      const data = await res.data;
      console.log("in data :",data)
      if(data.status === 200){
        dispatch(invitationRequestForBuddy(data.user))
        alert("Accepted Successfully")
      }else{
        alert("Rejected Successfully")
      }
      navigate("/login")
    }catch(error){
      alert("Something went wrong!")
    }
  }
}