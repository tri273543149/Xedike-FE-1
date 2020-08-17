import _ from "lodash";
import { SET_CURRENT_USER } from "../constants/auth";

let initialState = {
  isAuthenticated: false,
  profile: {},
};

const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        profile: actions.payload,
        isAuthenticated: !_.isEmpty(actions.payload),
      };
    default:
      return { ...state };
  }
};

export default authReducer;