import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, SUBSCRIBE_CHANNEL, UNSUBSCRIBE_CHANNEL, UPGRADE_TO_PREMIUM } from "./userTypes"
import { BackendUrl, config } from "../../constants"
import Cookies from "js-cookie";

export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess=(users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUserFailure=(error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const subscribeChannelUser =(data)=>{
    return{
        type:SUBSCRIBE_CHANNEL,
        payload:data
    }
}



export const toggleUpgrade = (data)=>{
    return{
        type:UPGRADE_TO_PREMIUM,
        payload:data
    }
}

export const unsubscribeChannel=(data)=>{
    return{
        type:UNSUBSCRIBE_CHANNEL,
        payload:data
    }
}

export const userSignup=(signupData,navigate)=>{
    
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.post(`${BackendUrl}/api/auth/signup`,signupData,{
            headers: { "Content-Type": "multipart/form-data"},
         
        })
      .then((res) => {
        console.log("res : ",res)
        Cookies.set("token", res.data.token,{
          expires: 7,
          domain: ".custom.local",
          path: "/",
        });

        dispatch(fetchUserSuccess(res.data.user))
        alert("Signup Successful")
        navigate("/")    
    })
      .catch((err) => {
        console.log("Error at signup : ",err)
        dispatch(fetchUserFailure(err.message))
        alert("Some thing Went Wrong!")
        
      });
      
    }
}

export const userLogin=(loginData,navigate)=>{
    return async(dispatch)=>{
        dispatch(fetchUserRequest())
        try{
            const res = await axios.post(`${BackendUrl}/api/auth/login`,loginData,config)
            const data = await res.data;

            Cookies.set("token", res.data.token,{
                expires: 7,
                domain: ".custom.local",
                path: "/",
              });

            dispatch(fetchUserSuccess(data.user))
            navigate("/")
        }catch(error){
            dispatch(fetchUserFailure(error.message))
            alert("Something went wrong!")
        }
    }
}

export const verifyUser=(navigate)=>{
  
    return async(dispatch)=>{
        dispatch(fetchUserRequest())
        try {
            const res = await axios.get(`${BackendUrl}/api/data/profile`,config)
            const data = await res.data;
            //console.log("data in profile :",data)

            dispatch(fetchUserSuccess(data.user))
            // if(data.status === 200){
            // }

        } catch (error) {
            dispatch(fetchUserRequest(error.message))
            //  navigate("/login")
        }
    }
}

export const userLogout = (navigate)=>{
    return (dispatch)=>{
        Cookies.remove('token',{domain: ".custom.local",path: "/"})
        dispatch(fetchUserFailure('User Logged Out'))
        navigate("/login")
        alert("successful!")
    }
}

export const addSubscribeData =(channelData)=>{
    return (dispatch)=>{
        dispatch(subscribeChannelUser(channelData))
    }
}

export const removeUnsubscribeChannel=(channelId)=>{
    return async(dispatch)=>{
        try{
            
            const res = await axios.get(`${BackendUrl}/api/data/subscribe/${channelId}`,config);
            const data = await res.data;
            if(data.status){
                alert("Unsubscribed successfully")
                dispatch(unsubscribeChannel(channelId))
            }
            else{
                alert("fail to Unsubscribed!")
            }
        }catch(error){
            alert("Something went wrong!")
        }
    }
}


export const getSubscribedData = ()=>{
    return async(dispatch)=>{
        dispatch(fetchUserRequest())
        try{
            const res = await axios.get(`${BackendUrl}/api/data/viewsubscribed`,config);
            const data = await res.data;
            dispatch(addSubscribeData(data.channels))
            
        }catch(error){
            console.log("error")
            dispatch(fetchUserFailure(error.message))

        }
    }
}

export const toggleToPremium = () =>{
    return async(dispatch)=>{
        try{
            const res  = await axios.get(`${BackendUrl}/api/data/premium`,config);
            const data = await res.data;
            dispatch(toggleUpgrade(data.user))
            alert("Upgraded")
        }catch(error){
            dispatch(fetchUserFailure(error.message))
        }
    }
}