
const initialState = {
  loading: false,
  status: "pending",
  data: [],
  error: ``,
};

const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_YOUTUBE_PENDING":
      return {
        ...state,
        loading: true,
        status: "pending",
        error: ``,
      };

    case "FETCH_YOUTUBE_FULFILLED":
      
      if (action.meta.page == 1) {
        return {
          ...state,
          loading: false,
          status: "success",
          data: action.payload.data.channels,
        };
      } else {
        const newData = action.payload.data.channels.filter(
          (newObj) => {
            return !state.data.some(
              (existingObj) => existingObj._id === newObj._id
            );
          }
        );

        return {
          ...state,
          loading: false,
          status: "success",
          data: [...state.data, ...newData],
        };
      }

    case "FETCH_YOUTUBE_REJECTED":
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: "error in fetching youtubedata",
      };

    case "FETCH_SEARCH_CHANNEL_PENDING":
      return {
        ...state,
        loading: true,
        status: "pending",
        error: ``,
      };
    case "FETCH_SEARCH_CHANNEL_FULFILLED":
      return {
        ...state,
        data: action.payload.data.channels,
        loading: false,
        status: "success",
      };

    case "FETCH_SEARCH_CHANNEL_REJECTED":
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: "error in fetching searching channel",
      };

    case "SUBSCRIBE_CHANNEL_PENDING":
      return {
        ...state,
        loading: true,
        status: "pending",
        error: ``,
      };
    case "SUBSCRIBE_CHANNEL_FULFILLED":
      
      console.log(action.meta.id)
        alert("subscribed successfully");

        const newChannelState = state.data.filter(
          (item) => item.channelId !== action.meta.id
        );

        return {
          ...state,
          data: newChannelState,
          loading: false,
        };
      
    case "SUBSCRIBE_CHANNEL_REJECTED":
    return {
        ...state,
        loading: false,
        status: "rejected",
        error: "error in subscribe channel",
      };


    default:
      return state;
  }
};

export default youtubeReducer;
