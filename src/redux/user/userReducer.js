import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SUBSCRIBE_CHANNEL,
  UNSUBSCRIBE_CHANNEL,
  UPGRADE_TO_PREMIUM,
} from "./userTypes";

const initialState = {
  loading: false,
  user: {},
  subscribedchannels: [],
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
        user: state.user,
        subscribedchannels: action.payload,
      };

    case UPGRADE_TO_PREMIUM:
      return {
        ...state,
        loading: false,
        user: { ...state.user, isPremium: action.payload.isPremium },
        errr: ``,
      };
      case UNSUBSCRIBE_CHANNEL:
      const updateDSubscribe = state.subscribedchannels.filter((item)=> item._id !== action.payload);
      return{
        ...state,
        subscribedchannels:updateDSubscribe
        }

    default:
      return state;
  }
};

export default userReducer;
