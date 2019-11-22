import { SET_FILTER_QUERY, SET_USERS } from "../types";

const initialState = {
  users: [],
  filterQuery: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...{ users: action.payload }
      };
    case SET_FILTER_QUERY:
      return {
        ...state,
        ...{ filterQuery: action.payload }
      };
    default:
      return state;
  }
};
