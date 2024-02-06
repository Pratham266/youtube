import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
// import { fetchBuddyChannels } from "../redux";
import ImageComponent from "../Components/ImageComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const BuddyChannels = ({team}) => {
  //const team = useSelector((state) => state.team);
  if (team?.loading) {
    return <Loader />;
  }

  const scrollStyle = {
    overflowY: "scroll",
    height: "550px",
  };

  return (
    <>
    {console.log("channels : ", team?.subscribedChannels)}
          {team?.subscribedChannels.length === 0 ? (
            <p className="text-white m-4">
              No Subscribed Channels for this Buddy
            </p>
          ) : (
            <div  className="scrollbar-ripe-malinka" style={scrollStyle}>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Profile</th>
                    <th scope="col">Name</th>
                    <th scope="col">SUBSCRIBERSCOUNT</th>
                    <th scope="col">premium</th>
                  </tr>
                </thead>
                <tbody>
                  {team?.subscribedChannels.map((item) => {
                  
                    return (
                      <tr className="table-active" key={item._id}>
                        <td>
                          <ImageComponent
                            src={item.avatarImage}
                            style={{ height: "35px", width: "35px" }}
                            alt={item.channelName}
                            className={"border rounded-circle"}
                          />
                        </td>
                        <th scope="row">{item.channelName}</th>
                        <td>{item.subscribersCount}</td>
                        <td>{item.isPremium ? <FontAwesomeIcon icon={faCheck} /> :<FontAwesomeIcon icon={faXmark} />}</td>
                      </tr>
                    );
                  })}
                </tbody>
                
              </table>
            </div>
          )}
        </>
  );
};

export default BuddyChannels;
