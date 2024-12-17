import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post("/api/auth/login", credentials);
    const { token, role } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    dispatch({ type: LOGIN_SUCCESS, payload: { token, role } });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");

  return { type: LOGOUT };
};
