import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import { BackendUrl } from "../../constants"
import Cookies from "js-cookie";

const config = {
    headers: {"Content-Type": "application/json"},
    withCredentials: true,
};

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

export const userSignup=(signupData,navigate)=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
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
        dispatch(fetchUserRequest)
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
        dispatch(fetchUserRequest)
        try {
            const res = await axios.get(`${BackendUrl}/api/data/profile`,config)
            const data = await res.data;

            if(data.status === 200){
                dispatch(fetchUserSuccess(data.user))
            }

        } catch (error) {
            dispatch(fetchUserRequest(error.message))
            navigate("/login")
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

