import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SUBSCRIBE_CHANNEL,
} from "./userTypes";

const initialState = {
  loading: false,
  user: {},
  subscribedchannels:[],
  error: ``,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: ``,
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        user: {},
        error: action.payload,
      };

    case SUBSCRIBE_CHANNEL:
      return {
        ...state,
        loading: false,
        user:state.user,
        subscribedchannels:action.payload,
        error: ``,
      };

    default:
      return state;
  }
};

export default userReducer;
