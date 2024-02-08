import React, { useState } from 'react'
import UserProfile from './UserProfileModal';
import DataPage from './DataPage';
import UserBar from '../Components/UserBar';
import Loader from '../Components/Loader';


const Home = (props) => {
    
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
      setShowModal(!showModal);
    };
    
    if(props.userState==='pending'){
      return <Loader/>
    }
    
    return (
      <>
        <UserBar handleModal={handleModal} userState={props.userState}/>
        {showModal && <UserProfile handleClose={handleModal} userState={props.userState} toggleToPremium={props.toggleToPremium} editUser={props.editUser}/>}
        <DataPage userState={props.userState} youtubeState={props.youtubeState} fetchYoutube={props.fetchYoutube} subscribeChannel={props.subscribeChannel}/>
      </>
    );
}

export default Home
