import { IS_MODAL_OPEN, IS_MODAL_CLOSE } from "../constants/modal";
let initialState = {
  isModalOpen: false,
  isComponentOpen: "",
};

const modalReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case IS_MODAL_OPEN: {
      return { ...state, isModalOpen: true, isComponentOpen: actions.payload };
    }

    case IS_MODAL_CLOSE: {
      return { ...state, isModalOpen: false, isComponentOpen: "" };
    }
    default:
      return { ...state };
  }
};
export default modalReducer;
