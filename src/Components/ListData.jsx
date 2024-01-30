import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchYoutube } from "../redux";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import SmallLoader from "./SmallLoader";
import ImageComponent from "./ImageComponent";

const ListData = () => {
  const youtubeData = useSelector((state) => state.youtube);
  const { dataId } = useParams();
  const scrollDiv = useRef();
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
      if (scrollDiv && scrollDiv.current) {
        scrollDiv.current.removeEventListener("scroll", handleInfiniteScroll);
      }
    };

  }, []);

  const scrollStyle = {
    overflowY: "scroll",
    height: "530px",
  };

  return (
    <div
      style={scrollStyle}
      ref={scrollDiv}
      id="pratham"
      className="scrollbar-ripe-malinka"
    >
      {youtubeData?.data.length === 0 ? (
        <h3 className="text-white"> No data found</h3>
      ) : (
        <></>
      )}

      {youtubeData?.data.map((item, index) => {
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
                <ImageComponent
                  src={item.avatarImage}
                  style={{ height: "40px", width: "40px", margin: "5px" }}
                  alt={item.channelName}
                  className={"border rounded-circle"}
                />
                <div className="card-header">
                  {item.channelName} &nbsp;
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
      {youtubeData.loading ? <SmallLoader color={"white"}/> : <></>}
    </div>
  );
};

export default ListData;
