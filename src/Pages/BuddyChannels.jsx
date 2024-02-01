import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { fetchBuddyChannels } from "../redux";
import ImageComponent from "../Components/ImageComponent";

const BuddyChannels = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchBuddyChannels(userId));
  }, [userId]);

  if (team?.loading) {
    return <Loader />;
  }

  return (
    <>
      {console.log("channels : ", team?.subscribedChannels)}
      {!userId ? (
        <h1 className="text-white">Here is your team Buddies</h1>
      ) : (
        <>
          {team?.subscribedChannels.length === 0 ? (
            <p className="text-white m-4">No Subscribed Channels for this Buddy</p>
          ) : (
            <>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Profile</th>
                    <th scope="col">Name</th>
                    <th scope="col">subscribersCount</th>
                    <th scope="col">premium</th>
                  </tr>
                </thead>
                <tbody>

                  {team?.subscribedChannels.map((item) => {
                    return(<tr class="table-active">
                        <td><ImageComponent
                    src={item.avatarImage}
                    style={{ height: "35px", width: "35px"}}
                    alt={item.channelName}
                    className={"border rounded-circle"}
                  /></td>
                    <th scope="row">{item.channelName}</th>
                    <td>{item.subscribersCount}</td>
                    <td>{item.isPremium ? "true" : "false"}</td>
                    
                  </tr>)
                    
                  })}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </>
  );
};

export default BuddyChannels;
