// import { G } from "react-router/dist/development/fog-of-war-DLtn2OLr";
// import { GET_PROFILE_SUCCESS } from "./auth.actionType";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, isAuthenticated: true, user: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, isAuthenticated: false };
    // case GET_PROFILE_SUCCESS:
    //   return { ...state, loading: false, isAuthenticated: true, user: action.payload };
    default:
      return state;
  }
};