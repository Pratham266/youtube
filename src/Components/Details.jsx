import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDataUsingId } from "../Js/filterData";
import Bell from "./Bell";
import SmallLoader from "./SmallLoader";
import { subscribeChannel } from "../redux";

const Details = () => {

  const { dataId } = useParams();

  const youtubeData = useSelector((state) => state.youtube);
  const data = getDataUsingId(youtubeData.data, dataId);
  const navigate = useNavigate();

  const dispatch= useDispatch()
  
  if (youtubeData.loading) {
    return <SmallLoader />;
  }

  const handleSubscribe=()=>{
    dispatch(subscribeChannel(dataId));  
    navigate("/")
  }
  
  console.log("data : ",data)
  console.log("Details Page: ",youtubeData.data.length)
  
  return (
    <>
      {!dataId ? (
        <>
          <div className="align-item-center justify-content-center">
            <h1 className="text-white">Welcome to Our Website</h1>
            <p className="text-white">
              We're thrilled to welcome you to our online space! Explore our
              site to discover a wealth of information, exciting features, and a
              community that shares your interests.
            </p>
            <p className="text-white">
              Whether you're here for knowledge, entertainment, or to connect
              with others, we've got something for you. Take a look around and
              make yourself at home. If you have any questions or need
              assistance, feel free to reach out. Enjoy your time here!
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="card h-100 bg-black">
            <div className=" d-flex card-header bg-black">
              <button type="button" className="btn btn-warning" onClick={handleSubscribe}>
                Subscribe
              </button>
              <Bell dataId={dataId} />
            </div>
            <div className="d-flex flex text-white bg-primary rounded m-2">
              <div className="m-4 border border-white rounded">
                <img
                  src={data.avatarImage}
                  alt={data.avatarImage}
                  style={{ height: "325px", width: "525px" }}
                  className={"rounded"}
                />
              </div>

              <div className="m-4">
                <p className="card-text">{data.description}</p>
              </div>
            </div>
            <h3 className="card-header bg-black text-white">
           
              {data.channelName} &nbsp;
              {data.isPremium && (
                <span
                  className="badge rounded-pill bg-warning"
                  style={{ height: "25px", fontSize: "20px" }}
                >
                  Pro
                </span>
              )}
            </h3>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
