import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../redux';
import SmallLoader from './SmallLoader';
import { BackendUrl } from '../constants';

const UserBar = ({handleModal}) => {
    const {user,loading}  = useSelector((state)=>state.user);
    console.log("user : ",user,"loading : ",loading)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
     dispatch(verifyUser(navigate));
    }, []);
  
    if(loading){
      return<SmallLoader/>
    }

  return (
    <div className="w-full p-2 text-white bg-black ">
    <div className="d-flex flex-row">
      <div className="p-2">
        {user && <img
          src={`${BackendUrl}/${user.image}`}
          className="rounded-circle"
          style={{ width: "60px", height: "60px" }}
          alt="profile_photo"
        />}
        
      </div>
      <div className="p-2">
        <h5 className='text-white'>{user.firstname} {user.lastname}</h5>
        <p className="me-auto" style={{"cursor":"pointer"}} onClick={handleModal}>
          Profile
        </p>
      </div>
    </div>
  </div>
  )
}

export default UserBar
