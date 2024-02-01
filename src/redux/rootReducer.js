import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import youtubeReducer from "./youtube/youtubeReducer";
import teamReducer from "./team/teamReducer";

const rootReducer  = combineReducers({
    user:userReducer,
    youtube:youtubeReducer,
    team:teamReducer,
})

export default rootReducer;