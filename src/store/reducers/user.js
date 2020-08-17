import {
  SET_USER_LIST,
  ADD_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../constants/user";

let initialState = {
  userList: [],
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_USER_LIST: {
      return { ...state, userList: actions.payload };
    }
    case ADD_NEW_USER: {
      state.userList = [...state.userList, actions.payload];
      return { ...state };
    }
    case UPDATE_USER: {
      let updateArray = [...state.userList];
      let index = updateArray.findIndex(
        (item) => item._id === actions.payload._id
      );
      if (index !== -1) {
        updateArray[index] = actions.payload;
      }
      state.userList = [...updateArray];
      return { ...state };
    }
    case DELETE_USER: {
      let updateArray = [...state.userList];
      let index = updateArray.findIndex((item) => item._id === actions.payload);
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.userList = [...updateArray];
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
