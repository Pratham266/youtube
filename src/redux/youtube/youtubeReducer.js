import {
  ADD_SUBSCRIBE_CHANNEL,
  FETCH_YOUTUBE_FAILURE,
  FETCH_YOUTUBE_REQUEST,
  FETCH_YOUTUBE_SEARECH_SUCCESS,
  FETCH_YOUTUBE_SUCCESS,
} from "./youtubeTypes";

const initialState = {
  loading: false,
  data: [],
  error: ``,
};

const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_YOUTUBE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_YOUTUBE_SUCCESS:
      // const page  =   action.payload.page;
      // const data = page === 1 ? action.payload.channelsData:[];
      // console.log("data : ",data)
      // console.log("DATA HERE: ",[...state.data,...action.payload])
      return {
        ...state,
        loading: false,
        error: ``,
        data: [...state.data, ...action.payload],
      };

    case FETCH_YOUTUBE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_YOUTUBE_SEARECH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: ``,
      };

    case ADD_SUBSCRIBE_CHANNEL:
      const newChannelState = state.data.filter((item) => item._id !== action.payload);
      return {
        ...state,
        data: newChannelState,
        loading: false,
      };

    default:
      return state;
  }
};

export default youtubeReducer;
