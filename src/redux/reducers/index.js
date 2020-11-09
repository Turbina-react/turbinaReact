import {combineReducers} from "redux";

import songs from "./songs";
import active from "./active";

const rootReduser = combineReducers({
  songs,
  active,
})

export default rootReduser