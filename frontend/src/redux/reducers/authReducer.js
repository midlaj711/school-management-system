import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload, isAuthenticated: true, error: null };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...state, token: null, role: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
