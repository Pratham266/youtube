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
  console.log("user : ", user);
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

  //Make a copy of data prop

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

// [
//   {
//       "_id": "65b21f6dbd942237aec0496a",
//       "channelName": "TechExplorers",
//       "description": "Unraveling the mysteries of cutting-edge technology.",
//       "subscribersCount": 55000,
//       "avatarImage": "https://img.freepik.com/premium-vector/gamer-youtuber-gaming-avatar-with-headphones-esport-logo_8169-260.jpg?w=2000",
//       "isPremium": true
//   }

//   {
//       "_id": "65b21f6dbd942237aec0496b",
//       "channelName": "CulinaryWonders",
//       "description": "Embark on a culinary journey with delightful recipes.",
//       "subscribersCount": 32000,
//       "avatarImage": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125296371/original/653cc81872119844644e33d40f5afd9bd61743b6/create-cool-cartoon-avatars.jpg",
//       "isPremium": false
//   },
//   {
//       "_id": "65b21f6dbd942237aec0496c",
//       "channelName": "WanderlustAdventures",
//       "description": "Roaming the globe, one destination at a time.",
//       "subscribersCount": 78000,
//       "avatarImage": "https://via.placeholder.com/500x500/2ecc71/ffffff?text=WanderlustAdventures",
//       "isPremium": true
//   },
//   {
//       "_id": "65b21f6dbd942237aec0496d",
//       "channelName": "GameMasters",
//       "description": "Conquer virtual realms with epic gaming content.",
//       "subscribersCount": 110000,
//       "avatarImage": "https://via.placeholder.com/500x500/9b59b6/ffffff?text=GameMasters",
//       "isPremium": false
//   },
//   {
//       "_id": "65b21f6dbd942237aec0496e",
//       "channelName": "SciFiEnthusiasts",
//       "description": "Exploring the wonders of science fiction and fantasy.",
//       "subscribersCount": 45000,
//       "avatarImage": "https://via.placeholder.com/500x500/34495e/ffffff?text=SciFiEnthusiasts",
//       "isPremium": true
//   },
//   {
//       "_id": "65b21f6dbd942237aec0496f",
//       "channelName": "ArtisticVisions",
//       "description": "Immerse yourself in the world of creative expression.",
//       "subscribersCount": 60000,
//       "avatarImage": "https://via.placeholder.com/500x500/f39c12/ffffff?text=ArtisticVisions",
//       "isPremium": false
//   },
//   {
//       "_id": "65b21f6dbd942237aec04970",
//       "channelName": "FitnessFanatics",
//       "description": "Achieve your fitness goals with expert advice and workouts.",
//       "subscribersCount": 85000,
//       "avatarImage": "https://via.placeholder.com/500x500/1abc9c/ffffff?text=FitnessFanatics",
//       "isPremium": true
//   }
// ]
