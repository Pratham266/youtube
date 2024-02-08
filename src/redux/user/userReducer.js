import Cookies from "js-cookie";

const initialState = {
  loading: false,
  status: "pending",
  user: {},
  subscribedchannels: [],
  page: 1,
  error: ``,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_FULFILLED":
      return {
        ...state,
        status: "success",
        loading: false,
        user: action.payload.data.user,
      };
    case "FETCH_USER_PENDING":
      return {
        ...state,
        status: "pending",
        loading: true,
        error: ``,
      };
    case "FETCH_USER_REJECTED":
      return {
        ...state,
        status: "rejected",
        loading: false,
        error: "request rejected",
      };

    case "UNSUBSCRIBE_CHANNEL_FULFILLED":
      const updatedSubscribe = state.subscribedchannels.filter(
        (item) => item.channelId !== action.meta.id
      );

      return {
        ...state,
        subscribedchannels: updatedSubscribe,
        loading: false,
        status: "success",
      };

    case "UNSUBSCRIBE_CHANNEL_REJECTED":
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: "Error in unsubscribe channels",
      };

    // case "FETCH_SUBSCRIBE_PENDING":
    //   return {
    //     ...state,
    //     loading: true,
    //     status: "pending",
    //     error: ``,
    //   };

    case "FETCH_SUBSCRIBE_FULFILLED":
      return {
        ...state,
        loading: false,
        status: "success",
        page: action.payload.data.totalPages,
        subscribedchannels: action.payload.data.channels,
      };

    case "FETCH_SUBSCRIBE_REJECTED":
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: "Error in fetching subscribed channels",
      };

    case "TOGGLE_PREMIUM_FULFILLED":
      return {
        ...state,
        loading: false,
        status: "success",
        user: { ...state.user, isPremium: action.payload.data.user.isPremium },
      };
    case "TOGGLE_PREMIUM_REJECTED":
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: `Error in toggle the user premium`,
      };

    case "LOGIN_USER_PENDING":
      return {
        ...state,
        loading: true,
        status: "pending",
        error: ``,
      };

    case "LOGIN_USER_FULFILLED":

    if (action.payload.status === 200) {
        Cookies.set("token", action.payload.data.token, {
          expires: 7,
          domain: ".custom.local",
          path: "/",
        });
        action.meta.navigate("/");
      }

      return {
        ...state,
        loading: false,
        user: action.payload.data.user,
        status: "success",
      };

    case "LOGIN_USER_REJECTED":
      alert(`Error in Login user`);
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: `Error in Login user`,
      };

    case "USER_SIGNUP_PENDING":
      
      return {
        ...state,
        loading: true,
        status: "pending",
        error: ``,
      };

    case "USER_SIGNUP_FULFILLED":

      if (action.payload.data.status === 204) {
        alert(action.payload?.data?.msg[0]?.message);
      } else if (action.payload.status === 200) {
        Cookies.set("token", action.payload.data.token, {
          expires: 7,
          domain: ".custom.local",
          path: "/",
        });
        action.meta.navigate("/");
      }

      return {
        ...state,
        loading: false,
        user: action.payload.data.user,
        status: "success",
      };

    case "USER_SIGNUP_REJECTED":
      alert(`Error in Signup user`);
      return {
        ...state,
        loading: false,
        status: "rejected",
        error: `Error in Signup user`,
      };

    case "USER_LOGOUT":
      Cookies.remove("token", { domain: ".custom.local", path: "/" });
      return {
        ...state,
        loading: false,
        status: "success",
        error: ``,
      };

      case 'USER_EDIT_FULFILLED':
      if(action.payload.data.status === 200){
        alert('Updated')
        return{
          ...state,
          loading:false,
          status:'success',
          user:action.payload.data.user,
        }
      }else if(action.payload.data.status === 204){
        alert(action.payload?.data?.msg[0]?.message)
        return{
          ...state,
          loading:false,
          status:'success'
        }
      }
  
      case 'USER_EDIT_REJECTED':
        return{
          ...state,
          loading:false,
          status:'rejected',
          error:'Error in User Edit!'
        }

    default:
      return state;
  }
};

export default userReducer;
