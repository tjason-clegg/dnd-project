import { FETCH_DATA, UPDATE_CLASSES, SET_ERROR } from "../actions";

const initialState = {
  results: [],
  isFetchingData: false,
  error: "",
};

export const ClassReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
      };
    case UPDATE_CLASSES:
      return {
        ...state,
        results: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
