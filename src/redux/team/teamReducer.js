const initialState = {
  loading: false,
  members: [],
  status: "pending",
  page: 1,
  subscribedChannels: [],
  error: ``,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "FETCH_TEAM_PENDING":
    //   console.log("fetch team pending");
    //   return {
    //     ...state,
    //     loading: true,
    //     status: "pending",
    //     error: ``,
    //   };
    case "FETCH_TEAM_FULFILLED":
      return {
        ...state,
        loading: false,
        members: action.payload.data.buddies,
        error: ``,
      };
    case "FETCH_TEAM_REJECTED":
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: "error in team fetching",
      };

    // case "FETCH_BUDDIES_CHANNELS_PENDING":
    //   console.log("fetch buddy pending");
    //   return {
    //     ...state,
    //     status: "pending",
    //     loading: true,
    //     error: ``,
    //   };

    case "FETCH_BUDDIES_CHANNELS_FULFILLED":
      let BuddyData;
      if (action.payload.data.status === 200) {
        BuddyData = action.payload.data.channels;
      } else if (action.payload.data.status === 204) {
        BuddyData = [];
      }

      return {
        ...state,
        status: "success",
        loading: false,
        page: action.payload.data.totalPages,
        subscribedChannels: BuddyData,
      };

    case "FETCH_BUDDIES_CHANNELS_REJECTED":
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: "in fetching the buddy channels",
      };

    case "INVITATION_REQUEST_PENDING":
      return {
        ...state,
        status: "pending",
        loading: true,
        error: ``,
      };
    case "INVITATION_REQUEST_FULFILLED":
      if (action.payload.data.status === 200) {
        alert("successfully accepted");
        action.meta.navigate("/");
        return {
          ...state,
          status: "success",
          loading: false,
          subscribedChannels: state.subscribedChannels,
          members: [...state.members, action.payload.data.user],
        };
      } else {
        alert("successfully rejected");
        action.meta.navigate("/");
        return {
          ...state,
          loading: false,
          status: "success",
          error: "",
        };
      }

    case "INVITATION_REQUEST_REJECTED":
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: "Error in accept invitation",
      };

    default:
      return state;
  }
};

export default teamReducer;
