import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import adsReducer from "./reducers/ads.js";

const rootReducer = combineReducers({
  ads: adsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
