import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import promise from "redux-promise-middleware";


const store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(promise)));

export default store;

