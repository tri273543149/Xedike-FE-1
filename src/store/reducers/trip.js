import {
  SET_TRIPS,
  SET_USER_TRIPS,
  ADD_USER_TRIP,
  DELETE_USER_TRIP,
  FIND_TRIP,
  UPDATE_TRIP,
} from "../constants/trip";

let initialState = {
  tripList: [],
  userTrips: [],
  tripDetail: {},
};

const tripReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_TRIPS: {
      return { ...state, tripList: actions.payload };
    }
    case SET_USER_TRIPS: {
      return { ...state, userTrips: actions.payload };
    }
    case ADD_USER_TRIP: {
      state.userTrips = [...state.userTrips, actions.payload];
      return { ...state };
    }
    case FIND_TRIP: {
      let updateArray = [...state.userTrips];
      let index = updateArray.findIndex((trip) => trip._id === actions.payload);
      if (index !== -1) {
        state.tripDetail = updateArray[index];
      }
      return { ...state };
    }
    case UPDATE_TRIP: {
      let updateArray = [...state.userTrips];
      let index = updateArray.findIndex(trip => trip._id === actions.payload._id);
      if (index !== -1) {
        updateArray[index] = actions.payload;
      }
      state.userTrips = [...updateArray];
      return { ...state };
    }
    case DELETE_USER_TRIP: {
      let updateArray = [...state.userTrips];
      let index = updateArray.findIndex((trip) => trip._id === actions.payload);
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.userTrips = [...updateArray];
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default tripReducer;
