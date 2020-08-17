import { SET_DRIVER_PROFILE } from "../constants/driver";
let initialState = {
  driverProfile: {},
};

const driverReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_DRIVER_PROFILE: {
      return { ...state, driverProfile: actions.payload };
    }
    default:
      return { ...state };
  }
};

export default driverReducer;