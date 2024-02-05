import {
  FETCH_BUDDY_SUBSCRIBE_CHANNEL,
  FETCH_TEAM_FAILURE,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  INVITATION_REQUEST_FOR_BUDDY,
} from "./teamTypes";

const initialState = {
  loading: false,
  members: [],
  subscribedChannels:[],
  error: ``,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        members: action.payload,
        error: ``,
      };

    case FETCH_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        members: [],
        error: action.payload,
      };
      
      case FETCH_BUDDY_SUBSCRIBE_CHANNEL:
        return{
            ...state,
            loading:false,
            subscribedChannels:action.payload,
            error:``
        }

      case INVITATION_REQUEST_FOR_BUDDY:
        return{
          ...state,
          loading:false,
          subscribedChannels:state.subscribedChannels,
          members:[...state.members,action.payload],
          error:``,        
        }
    default:
      return state;
  }
};

export default teamReducer;
