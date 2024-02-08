import axios from "axios";
import { BackendUrl, config } from "../../constants";

export const fetchTeam = () => {
  return {
    type: "FETCH_TEAM",
    payload: axios.get(`${BackendUrl}/api/buddy/showbuddy`, config),
  };
};

export const fetchBuddySubscribedChannels = (buddies, page) => {
  console.log("in reducer : ", buddies);

  return {
    type: "FETCH_BUDDIES_CHANNELS",
    payload: axios.post(
      `${BackendUrl}/api/buddy/allchannels?_limit=${5}&_page=${page}`,
      { buddyId: buddies },
      config
    ),
  };
};

export const decisonOnBuddyRequest = (decision, id, navigate) => {
  return {
    type: "INVITATION_REQUEST",
    payload: axios.post(
      `${BackendUrl}/api/buddy/add`,
      { decision, token: id },
      config
    ),
    meta: { navigate: navigate },
  };
};
