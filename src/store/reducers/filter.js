import { FILTER } from "../constants/filter";

let initialState = {
    filterType: "",
    filterValue: -1,
  };
  
  let filterReducer = (state = initialState, actions) => {
    switch (actions.type) {
      case FILTER:
        state = {
          filterType: actions.filterType,
          filterValue: actions.filterValue,
        };
        return { ...state };
      default:
        return { ...state };
    }
  };
  
  export default filterReducer;