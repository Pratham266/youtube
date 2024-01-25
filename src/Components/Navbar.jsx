import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogout } from '../redux';

const Navbar = () => {
  const {user} = useSelector((state)=>state);
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout=()=>{
   
    dispatch(userLogout(navigate));
  }
  
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">socialpilot</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        
        <li className="nav-item">
          <Link className="nav-link" to="/">Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About
          </Link>
        </li>
        {user?.user?._id ?<>
        <li className="nav-item">
          <span className="nav-link" style={{"cursor":"pointer"}} onClick={handleLogout}>Logout</span>
        </li></>:<>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        </>}
        
      </ul>
      
    </div>
  </div>
</nav> 
    </>
  )
}

export default Navbar
