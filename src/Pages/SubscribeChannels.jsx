import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedData } from "../redux";
import Loader from "../Components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../Components/Table";

const SubscribeChannels = () => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const user = useSelector((state) => state.user);
  const { subscribedchannels } = user;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribedData());
  }, []);

  const handleSortClick = (label) => {
    if (sortBy && sortBy !== label) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };



  let sortedData = subscribedchannels;

  if (sortBy && sortOrder) {
    sortedData = [...subscribedchannels].sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  if (!user?.subscribedchannels) {
    return <Loader />;
  }

  return (
    <>
      <div className="bg-black m-2">
        <h1 className="text-center text-white">subscibed channels</h1>
      </div>

      <table className="table table-hover border-black">
        <thead>
          <tr>
            <th scope="col">Profile</th>
            <th
              scope="col"
              onClick={() => {
                handleSortClick("channelName");
              }}
            >
              <span className="me-2">Name</span>
              {getIcons("channelName", sortBy, sortOrder)}
            </th>
            <th scope="col">Premium</th>
            <th
              scope="col"
              onClick={() => {
                handleSortClick("subscribersCount");
              }}
            >
              <span className="me-2">Subscribers</span>
              {getIcons("subscribersCount", sortBy, sortOrder)}
            </th>
            <th>
              
            </th>
          </tr>
        </thead>

        <tbody>
          <Table data={sortedData} />
        </tbody>
      </table>
    </>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return <FontAwesomeIcon icon={faSort} />;
  }

  if (sortOrder === null) {
    return <FontAwesomeIcon icon={faSort} />;
  } else if (sortOrder === "asc") {
    return <FontAwesomeIcon icon={faSortUp} />;
  } else if (sortOrder === "desc") {
    return <FontAwesomeIcon icon={faSortDown} />;
  }
};

export default SubscribeChannels;

