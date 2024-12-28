
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, isAuthenticated: true, user: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, isAuthenticated: false };
    default:
      return state;
  }
};