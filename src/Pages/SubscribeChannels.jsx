import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Tabel from "../Components/Tabel";
import Pagination from "../Components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const SubscribeChannels = (props) => {
  const { subscribedchannels } = props.userState;

  const [filter, setFilter] = useState({ name: 'asc', subscribers: 'desc' })
  const [page, setPage] = useState(1)

  useEffect(() => {
    props.getSubscribedData(page, filter.name, filter.subscribers);
  }, [page, filter]);


  const config = [
    {
      label: 'Profile',
      sortable: false,

    },
    {
      label: 'Name',
      sortable: true,
      parameter: 'channelName'
    },
    {
      label: 'Premium',
      sortable: false
    },
    {
      label: 'Subscribers',
      sortable: true,
      parameter: 'subscribersCount'
    },
    {
      label: 'unsubscribe',
      sortable: false
    }
  ];


  const handelFilter = (fieldname) => {
    if (fieldname === 'channelName') {
      let setOrder = filter.name === 'asc' ? 'desc' : 'asc';
      setFilter((prev) => ({ ...prev, name: setOrder }))
    }

    if (fieldname === 'subscribersCount') {
      let setOrder = filter.subscribers === 'desc' ? 'asc' : 'desc';
      setFilter((prev) => ({ ...prev, subscribers: setOrder }))
    }
  }

  const getIcons = (label, filter) => {

    if (label === 'channelName') {
      if (filter.name === 'asc') {
        return <FontAwesomeIcon icon={faSortUp} />
      } else {
        return <FontAwesomeIcon icon={faSortDown} />
      }
    }

    if (label === 'subscribersCount') {
      if (filter.subscribers === 'asc') {
        return <FontAwesomeIcon icon={faSortUp} />
      } else {
        return <FontAwesomeIcon icon={faSortDown} />
      }
    }
  };

  if (props.userState?.status === 'pending') {
    return <Loader />;
  }

  return (
    <>
      <div className="bg-black m-2">
        <h1 className="text-center text-white">subscibed channels</h1>
      </div>
      {subscribedchannels.length === 0 ? <h1 className="text-white">No Subscribed Channels Yet!</h1>
        :
        <>
          <Tabel config={config} subscribedchannels={subscribedchannels} handelFilter={handelFilter} filter={filter} getIcons={getIcons} />
          <Pagination setPage={setPage} page={props.userState?.page} currentPage={page} />
        </>}


    </>
  );
};

export default SubscribeChannels;

