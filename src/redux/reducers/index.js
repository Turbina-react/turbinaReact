import {combineReducers} from "redux";

import songs from "./songs";
import active from "./active";
import blur from "./blur";
import musicLinks from './musicLinks';
import socialLinks from './socialLinks';

const rootReduser = combineReducers({
  songs,
  active,
  blur,
  musicLinks,
  socialLinks
})

export default rootReduser