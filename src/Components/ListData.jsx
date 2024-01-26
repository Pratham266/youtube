import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYoutube } from "../redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faStar } from "@fortawesome/free-regular-svg-icons";
import Loader from "./Loader";
import SmallLoader from "./SmallLoader";

const ListData = () => {
  const youtubeData = useSelector((state) => state.youtube);
  const { dataId } = useParams();
  const scrollDiv = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchYoutube(page));
  }, [page]);

  const handleInfiniteScroll = () => {
    const container = scrollDiv.current;
    const { scrollHeight, scrollTop, clientHeight } = container;
    // console.log("scroll Height : ",scrollHeight);
    // console.log("user view port : ",clientHeight)
    // console.log("scroll current  : ",scrollTop);

    try {
      if (scrollTop + clientHeight + 2 >= scrollHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {

    scrollDiv.current.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      scrollDiv.current.removeEventListener("scroll", handleInfiniteScroll);
    };

  }, []);

  const scrollStyle = {
    overflowY: "scroll",
    height: "530px",
  };

 
  return (
    <div
      className="p-2 w-25 border-dark m-2 bg-primary rounded"
      style={scrollStyle}
      ref={scrollDiv}
    >
      {youtubeData?.data.map((item, index) => {
        // console.log("data id : ",item)
        return (
          <div key={item._id} onClick={() => navigate(`/${item._id}`)}>
            <div
              className={`card text-white  rounded border-white m-2 ${
                item._id === dataId ? "bg-dark" : "bg-black"
              }`}
              style={{
                maxWidth: "20rem",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <div className="d-flex ">
                <img
                  style={{ height: "30px", width: "30px", margin: "5px" }}
                  className="border rounded-circle"
                  src={item.avatarImage}
                  alt="image"
                />
                <div className="card-header">
                  {item.channelName} &nbsp;{item._id} 
                  {item.isPremium && (
                    <FontAwesomeIcon
                      icon={faStar}
                      beat
                      style={{ color: "#FFD43B" }}
                    />
                  )}
                </div>
              </div>
              <p className="p-2">{item.description}</p>
            </div>
          </div>
        );
      })}
      {youtubeData.loading ? <SmallLoader/>:<></>}
    </div>
  );
};

export default ListData;
