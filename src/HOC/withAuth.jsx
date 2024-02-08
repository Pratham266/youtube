import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const PrivateRoute = ({ children }) => {
  let isAuthenticated = false;

  const token = Cookies.get("token");

  const user = useSelector((state) => state.user);

  if (user.user._id) isAuthenticated = true;

  if (!isAuthenticated && !token) {
    return <Navigate to="/sp/login" />;
  }

  return <>
    <Navbar />
    {children}
  </>;
};

export default PrivateRoute;
