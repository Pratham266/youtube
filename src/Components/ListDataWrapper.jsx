import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ListDataClass from './ListDataClass';

const ListDataWrapper = ({userState,youtubeState,fetchYoutube}) => {
    const { dataId } = useParams();
    const navigate = useNavigate();

  return (
    <ListDataClass userState={userState} youtubeState={youtubeState} fetchYoutube={fetchYoutube} dataId={dataId} navigate={navigate}/>
  )

}

export default ListDataWrapper
