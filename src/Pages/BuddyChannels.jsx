import React, { useEffect } from "react";

import Loader from "../Components/Loader";

import Tabel from "../Components/Tabel";

const BuddyChannels = ({team}) => {
  if (team?.loading) {
    return <Loader />;
  }

  const fieldNameForSorting = ['channelName','subscribersCount']
  
  return (
    <>
    {console.log("channels : ", team?.subscribedChannels)}
          {team?.subscribedChannels.length === 0 ? (
            <p className="text-white m-4">
              No Subscribed Channels for this Buddy
            </p>
          ) : (
              <Tabel subscribedchannels={team?.subscribedChannels} fieldNameForSorting={fieldNameForSorting}/>
          )}
        </>
  );
};

export default BuddyChannels;
