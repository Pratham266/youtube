import React, { useState } from 'react'
import UserProfile from './UserProfileModal';
import UserBar from '../Components/UserBar';
import Loader from '../Components/Loader';
import ListDataWrapper from '../Components/ListDataWrapper';
import { Outlet, useParams } from 'react-router-dom';


const Home = (props) => {

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const { dataId } = useParams()

  if (props.userState === 'pending') {
    return <Loader />
  }

  return (
    <>
      <UserBar handleModal={handleModal} userState={props.userState} />
      {showModal && <UserProfile handleClose={handleModal} userState={props.userState} toggleToPremium={props.toggleToPremium} editUser={props.editUser} />}


      <div className="d-flex justify-content-center bg-dark">
        <div className="p-2 w-25 border-dark m-2 bg-primary rounded">
          <ListDataWrapper youtubeState={props.youtubeState} userState={props.userState} fetchYoutube={props.fetchYoutube} />
        </div>

        <div className="p-2 w-75 border m-2 border-dark rounded bg-primary ">

          <Outlet />

        </div>
      </div>
    </>
  );
}

export default Home
