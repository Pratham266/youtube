import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataUsingId } from "../Js/filterData";
import SmallLoader from "./SmallLoader";

const Details = ({youtubeState,subscribeChannel}) => {

  const { dataId } = useParams();

  // const youtubeState = useSelector((state) => state.youtube);
  const data = getDataUsingId(youtubeState?.data, dataId);

  const navigate = useNavigate();
  
  // const dispatch= useDispatch()
  
  const handleSubscribe=()=>{
    subscribeChannel(dataId);
    navigate("/")
  }

  
  if(youtubeState?.loading){
    return <SmallLoader color={"white"}/>
  }

  const style={
    image:{ height: "325px", width: "525px" },
    tag:{ height: "25px", fontSize: "20px" }
  }

  return (
    <>
      {!dataId ? (
        <>
          <div className="align-item-center justify-content-center">
            <h1 className="text-white">Welcome to Our Website</h1>
          </div>
        </>
      ) : (
        <>
          <div className="card h-100 bg-black">
            <div className=" d-flex card-header bg-black">
              <button type="button" className="btn btn-warning" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
            <div className="d-flex flex text-white bg-primary rounded m-2">
              <div className="m-4 border border-white rounded">
                <img
                  src={data?.avatarImage}
                  alt={data?.avatarImage}
                  style={style.image}
                  className={"rounded"}
                />
              </div>

        <div className="d-flex  flex-column">
              <div className="m-4">
                <h1>Description</h1>
                <p className="card-text">{data?.description}</p>
              </div>
              <div className="m-4">
                <h1>Subscribers Count</h1>
                <p className="card-text">{data?.subscribersCount}</p>
              </div>
              </div>
            </div>
            <h3 className="card-header bg-black text-white">
           
              {data?.channelName} &nbsp;
              {data?.isPremium && (
                <span
                  className="badge rounded-pill bg-warning"
                  style={style.tag}
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
