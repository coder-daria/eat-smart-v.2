import { combineReducers } from "redux";

import dailyReducer from "./daily";
import foodReducer from "./food";

export default combineReducers({
  daily: dailyReducer,
  food: foodReducer
});
