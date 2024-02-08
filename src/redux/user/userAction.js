import axios from "axios";
import { BackendUrl, config } from "../../constants";

export const verifyUser = () => {
  return {
    type: "FETCH_USER",
    payload: axios.get(`${BackendUrl}/api/data/profile`, config),
  };
};


export const removeUnsubscribeChannel = (channelId) => {
  return {
    type: "UNSUBSCRIBE_CHANNEL",
    payload: axios.get(
        `${BackendUrl}/api/data/unsubscribe/${channelId}`,
        config
      ),
    meta:{id: channelId}
  };
};


export const getSubscribedData = (page,nameFilter,subscribersFilter) => {
  return {
    type: "FETCH_SUBSCRIBE",
    payload: axios.get(`${BackendUrl}/api/data/viewsubscribed?_limit=${6}&_page=${page}&_name=${nameFilter}&_subscribers=${subscribersFilter}`, config),
  };
};

export const toggleToPremium = () => {
  return {
    type: "TOGGLE_PREMIUM",
    payload: axios.get(`${BackendUrl}/api/data/premium`, config),
  };
};

export const userLogin = (loginData,navigate)=>{

  return{
    type:'LOGIN_USER',
    payload:axios.post(`${BackendUrl}/api/auth/login`,loginData,config),
    meta:{navigate:navigate}
  }
}

export const userSignup = (signupData,navigate)=>{

  return{
    type:'USER_SIGNUP',
    payload:axios.post(`${BackendUrl}/api/auth/signup`,signupData),
    meta:{navigate:navigate}
  }
}

export const editUser = (editData)=>{
  return {
    type:'USER_EDIT',
    payload:axios.post(`${BackendUrl}/api/data/updateprofile`,editData,config),
  }
}

export const userLogout = (navigate)=>{
  navigate('/sp/login')
  return{
    type:'USER_LOGOUT',
  }
}
