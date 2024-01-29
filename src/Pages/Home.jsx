import React, { Suspense, lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BackendUrl } from '../constants';
import UserProfile from './UserProfileModal';
import { verifyUser } from '../redux';
import DataPage from './DataPage';
import SmallLoader from '../Components/SmallLoader';
import UserBar from '../Components/UserBar';


const Home = () => {
    
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
      setShowModal(!showModal);
    };
    
    return (
      <>
        <UserBar handleModal={handleModal}/>
        {showModal && <UserProfile handleClose={handleModal} />}
        <DataPage/>

      </>
    );
}

export default Home
