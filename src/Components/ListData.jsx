import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYoutube } from "../redux";
import { Link } from "react-router-dom";

const ListData = () => {
  const youtubeData = useSelector((state) => state.youtube);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYoutube());
  }, []);
  const scrollStyle = {
    overflowY: "scroll",
    height: "500px",
    WebkitScrollbar: {
      display: "none",
    },
  };

  return (
    <div
      className="p-2 w-25 border m-2  bg-primary rounded"
      style={scrollStyle}
    >
      {youtubeData?.data.map((item, index) => {
        console.log(item);
        return (
          <Link key={item._id} to={`/${item._id}`}>
          <div
            className="card text-white border-white  bg-primary m-2 rounded "
            style={{ maxWidth: "20rem", cursor:"pointer"}} 
          >
            
            <div className="d-flex ">
              <img
                style={{ height: "30px", width: "30px", margin: "5px" }}
                className="border rounded-circle"
                src={item.avatarImage}
                alt="image"
              />
              <div className="card-header">{item.channelName}  &nbsp;
              {item.isPremium && <span class="badge rounded-pill bg-warning ">P</span>}
              </div>
            </div>
            <p className="p-2">{item.description}</p>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListData;
