import axios from "axios";
import { BackendUrl, config } from "../constants";



export const getSearchUserData = async (searchTerm) => {
  try {
    const res = await axios.get(
      `${BackendUrl}/api/buddy/search?_searchTerm=${searchTerm}`,
      config
    );
    const data = await res.data;
    return data.buddies;
  } catch (error) {
    console.log("ERROR: ",error)
    }
};

export const addBuddyRequest = async(userId)=>{
  try {
    const res = await axios.post(`${BackendUrl}/api/buddy/request`,{buddyId:userId},config);
    const data = await res.data;
    console.log("res data : ",data);
    if(data.status === 200){
      alert("Email sent Succesfully")
    }
  } catch (error) {
    alert("Something went wrong!");
  }
}

export const decisonOnBuddyRequest=async(decision,id)=>{
    try{
      console.log(decision,id)
      const res = await axios.post(`${BackendUrl}/api/buddy/add`,{decision,token:id},config);
      const data = await res.data;

      if(data.status === 200){
        alert("Accepted Successfully")
      }else{
        alert("Rejected Successfully")
      }
    }catch(error){
      alert("Something went wrong!")
    }
}