import Cookies from "js-cookie";
import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";

const PrivateRoute = ({ children }) => {
  let isAuthenticated = false;

  const token = Cookies.get("token");
  
  const user = useSelector((state) => state.user);

  if (user.user._id) isAuthenticated = true;

  if (!isAuthenticated && !token) {
    return <Navigate to="/login" />;
  }

  return <>
   <Navbar/>
  {children}
  </>;
};

export default PrivateRoute;
