import {combineReducers} from "redux";

import songs from "./songs";
import active from "./active";
import blur from "./blur";
import links from './links'

const rootReduser = combineReducers({
  songs,
  active,
  blur,
  links
})

export default rootReduser