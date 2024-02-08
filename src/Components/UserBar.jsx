import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../redux';
import SmallLoader from './SmallLoader';
import { BackendUrl } from '../constants';
import ImageComponent from './ImageComponent';

const UserBar = ({handleModal,userState}) => {
    
    // const {user,loading}  = useSelector((state)=>state.user);

    const {user,loading}  = userState;
    
    const navigate = useNavigate();  

    if(userState.status === 'pending'){
      return <SmallLoader color={"black"}/>
    }

  return (
    <div className="w-full p-2 text-white bg-black ">
    <div className="d-flex flex-row">
      <div className="p-2">
        {user && <ImageComponent
          src={user.image}
          className=" img_cmp rounded-circle"
          
          alt="profile_photo"
        />}
        
      </div>

      <div className="p-2">
        <h5 className='text-white'>{user.firstname} {user.lastname} {user.isPremium && <span className="badge rounded-pill bg-warning">Premium</span>}</h5>
        <div className='d-flex'>
       
        <button className="btn btn-secondary cursor-pointer mx-1" onClick={handleModal}>
          Profile 
        </button>

        <button className="btn btn-secondary cursor-pointer mx-1" onClick={()=>navigate("/subscibe/channels")}>
         Subscribed channels
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserBar
