import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataUsingId } from "../Js/filterData";

const Details = () => {
  const { dataId } = useParams();
  const youtubeData = useSelector((state) => state.youtube);

  const data = getDataUsingId(youtubeData.data, dataId);
  console.log(data);
  return (
    <div className="p-2 w-75 border m-2 border-dark bg-primary">
      {!dataId ? (
        <>
          <h1>Please select first!</h1>
        </>
      ) : (
        <>
<div class="card h-100">
  <h3 class="card-header">{data.channelName}</h3>
 <div className="d-flex flex">
  <div className="mt-4">
    <img src={data.avatarImage} alt={data.avatarImage}className="h-75 w-70" />
  </div>
 
  <div className="mt-4">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</div> 
        </>
      )}
    </div>
  );
};

export default Details;
