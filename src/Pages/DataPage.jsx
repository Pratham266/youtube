import React from "react";
import ListData from "../Components/ListData";
import Details from "../Components/Details";
import ErrorBoundary from "../Components/ErrorBoundary";
import Loader from "../Components/Loader";
import ListDataWrapper from "../Components/ListDataWrapper";

const DataPage = ({youtubeState,userState,fetchYoutube,subscribeChannel}) => {
 
  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="p-2 w-25 border-dark m-2 bg-primary rounded">
        <ListDataWrapper youtubeState={youtubeState} userState={userState} fetchYoutube={fetchYoutube}/>
      </div>

      <div className="p-2 w-75 border m-2 border-dark rounded bg-primary ">
          <Details  youtubeState={youtubeState} subscribeChannel={subscribeChannel}/>
        </div>
    </div>
  );
};

export default DataPage;
