import {
  FETCH_YOUTUBE_FAILURE,
  FETCH_YOUTUBE_REQUEST,
  FETCH_YOUTUBE_SEARECH_SUCCESS,
  FETCH_YOUTUBE_SUCCESS,
  REMOVE_SUBSCRIBE_CHANNEL,
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
      if (action.payload.page == 1) {
        return {
          ...state,
          loading: false,
          error: ``,
          data: action.payload.channels,
        };
      } else {
        const newData = action.payload.channels.filter((newObj) => {
          return !state.data.some(
            (existingObj) => existingObj._id === newObj._id
          );
        });
        return {
          ...state,
          loading: false,
          error: ``,
          data: [...state.data, ...newData],
        };
      }
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

    case REMOVE_SUBSCRIBE_CHANNEL:
      const newChannelState = state.data.filter(
        (item) => item._id !== action.payload
      );
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
