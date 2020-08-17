import { combineReducers } from "redux";
import modalReducer from "./modal";
import errorReducer from "./error";
import authReducer from "./auth";
import driverReducer from "./driver";
import tripReducer from "./trip";
import userReducer from "./user";
import filterReducer from "./filter";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  error: errorReducer,
  driver: driverReducer,
  trip: tripReducer,
  user: userReducer,
  filter: filterReducer,
});

export default rootReducer;
