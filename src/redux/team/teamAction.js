import axios from "axios";
import { BackendUrl, config } from "../../constants";


export const fetchTeam = ()=>{
  return{
    type:'FETCH_TEAM',
    payload:axios.get(`${BackendUrl}/api/buddy/showbuddy`, config)
  }
} 

export const fetchBuddySubscribedChannels = (buddies)=>{
  return{
    type:'FETCH_BUDDIES_CHANNELS',
    payload:axios.post(`${BackendUrl}/api/buddy/allchannels`,{buddyId:buddies},config)
  }
}

export const decisonOnBuddyRequest  = (decision,id,navigate)=>{
  return{
    type:'INVITATION_REQUEST',
    payload:axios.post(`${BackendUrl}/api/buddy/add`,{decision,token:id},config),
    meta:{navigate:navigate}
  }
}
