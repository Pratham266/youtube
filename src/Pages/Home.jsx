import React, { useState } from 'react'
import UserProfile from './UserProfileModal';
import DataPage from './DataPage';
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
