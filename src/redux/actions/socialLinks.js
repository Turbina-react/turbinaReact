import dataList from "../../playList";
import {SET_SOCIAL_LINKS} from "../constants";

export const fetchSocialLinks = () => (dispatch) => {
  dispatch(setLinks(dataList.socialLinks))
}

export const setLinks = (items) => ({
  type: SET_SOCIAL_LINKS,
  payload: items,
})

