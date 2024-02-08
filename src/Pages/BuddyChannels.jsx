import React, { useEffect } from "react";

import Loader from "../Components/Loader";

import Tabel from "../Components/Tabel";
import Pagination from "../Components/Pagination";

const BuddyChannels = ({ team, setPage, page, currentPage }) => {


  const config = [
    {
      label: 'Profile',
      sortable: false,

    },
    {
      label: 'Name',
      sortable: false,
      parameter: 'channelName'
    },
    {
      label: 'Premium',
      sortable: false
    },
    {
      label: 'Subscribers',
      sortable: false,
      parameter: 'subscribersCount'
    },
  ];

  if (team?.loading) {
    return <Loader />;
  }

  console.log("team in buddy channelas : ", team)

  return (
    <>
      {console.log("channels : ", team?.subscribedChannels)}
      {team?.subscribedChannels.length === 0 ? (
        <p className="text-white m-4">
          No Subscribed Channels for this Buddy
        </p>
      ) : (
        <>
          <Tabel config={config} subscribedchannels={team?.subscribedChannels} />
        </>
      )}
    </>
  );
};


export default BuddyChannels;
