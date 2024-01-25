import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import youtubeReducer from "./youtube/youtubeReducer";

const rootReducer  = combineReducers({
    user:userReducer,
    youtube:youtubeReducer,
})

export default rootReducer;