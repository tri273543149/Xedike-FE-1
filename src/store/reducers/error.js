import {  SET_ERROR_INPUT, SET_ERROR_AUTH } from "../constants/error";

let initialState = {
  inputErrors: {},
  authErrors: {},
};

const errorReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_ERROR_INPUT:
      return { ...state, inputErrors: actions.payload };
    case SET_ERROR_AUTH:
      return { ...state, authErrors: actions.payload };
    default:
      return { ...state };
  }
};

export default errorReducer;
