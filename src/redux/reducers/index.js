import {combineReducers} from "redux";

import songs from "./songs";
import active from "./active";
import blur from "./blur";

const rootReduser = combineReducers({
  songs,
  active,
  blur,
})

export default rootReduser