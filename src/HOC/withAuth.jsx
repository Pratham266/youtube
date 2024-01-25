import Cookies from "js-cookie";
import { Children } from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import Loader from "../Components/Loader";

const PrivateRoute = ({children}) => {

  let isAuthenticated = false;
  const token = Cookies.get("token");
  const user = useSelector((state) => state.user);
  if (user.user._id) isAuthenticated = true;
  
//   console.log("Token : ",token);
//   console.log("USER : ",user)

  if(user.loading){
    return <Loader/>
  } 

  if(!isAuthenticated && !token)  {

        return <Navigate to="/login"/>
    }

  return (
    <>
      {children}

    </>

  );
};

export default PrivateRoute;