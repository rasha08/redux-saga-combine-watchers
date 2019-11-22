import { GET_USERS, SET_FILTER_QUERY, SET_USERS } from "../types";

export const getUsers = () => ({ type: GET_USERS });

export const setUsers = users => ({
  type: SET_USERS,
  payload: users
});

export const setFilterQuery = query => ({
  type: SET_FILTER_QUERY,
  payload: query
});
