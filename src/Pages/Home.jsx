import React, { useState } from 'react'
import UserProfile from './UserProfileModal';
import DataPage from './DataPage';
import UserBar from '../Components/UserBar';


const Home = (props) => {
    
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
      setShowModal(!showModal);
    };
    
    return (
      <>
        <UserBar handleModal={handleModal} userState={props.userState}/>
        {showModal && <UserProfile handleClose={handleModal} userState={props.userState} toggleToPremium={props.toggleToPremium}/>}
        <DataPage userState={props.userState} youtubeState={props.youtubeState} fetchYoutube={props.fetchYoutube} subscribeChannel={props.subscribeChannel}/>
      </>
    );
}

export default Home
