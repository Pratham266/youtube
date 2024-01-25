import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BackendUrl } from '../constants';
import UserProfile from './UserProfileModal';
import { verifyUser } from '../redux';
import DataPage from './DataPage';

const Home = () => {
    const userData  = useSelector((state)=>state.user.user);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleModal = () => {
      setShowModal(!showModal);
    };
    
    useEffect(() => {
      dispatch(verifyUser(navigate));
    }, []);
  
    return (
      <>
        <div className="w-full p-2 text-black">
          <div className="d-flex flex-row">
            <div className="p-2">
              {userData && <img
                src={`${BackendUrl}/${userData.image}`}
                className="rounded-circle"
                style={{ width: "65px", height: "65px" }}
                alt="profile_photo"
              />}
              
            </div>
            <div className="p-2">
              <h3 className="mt-2">{userData.firstname} {userData.lastname}</h3>
              <p className="me-auto" style={{"cursor":"pointer"}} onClick={handleModal}>
                Profile
              </p>
            </div>
          </div>
        </div>
        <DataPage/>
        {showModal && <UserProfile handleClose={handleModal} />}
      </>
    );
}

export default Home
