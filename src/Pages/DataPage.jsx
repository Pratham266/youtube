import React from "react";
import ListData from "../Components/ListData";
import Details from "../Components/Details";
import ErrorBoundary from "../Components/ErrorBoundary";
import Loader from "../Components/Loader";
import ListDataWrapper from "../Components/ListDataWrapper";

const DataPage = ({youtubeState,userState,fetchYoutube,subscribeChannel}) => {
 
  return (
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: "#686565" }}
    >
      <div className="p-2 w-25 border-dark m-2 bg-primary rounded">
        {/* <ListData youtubeState={youtubeState} userState={userState} fetchYoutube={fetchYoutube}/> */}
        <ListDataWrapper youtubeState={youtubeState} userState={userState} fetchYoutube={fetchYoutube}/>
      </div>

      <div className="p-2 w-75 border m-2 border-dark rounded bg-primary ">
        <ErrorBoundary
          fallback={
            <p style={{ color: "red", fontStyle: "italic" }}>Error Occured</p>
          }
        >
          <Details  youtubeState={youtubeState} subscribeChannel={subscribeChannel}/>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default DataPage;
