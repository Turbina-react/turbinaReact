import {BLUR} from "../constants";

export const blurBackground = (toggle) => ({
  type: BLUR,
  payload: toggle,
})