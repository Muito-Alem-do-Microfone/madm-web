import { createSlice } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../../services/api";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: '',
  },
  reducers: {
    setUser: (state, { payload }) => {
      const { user, token } = payload
      state.user = user
      state.token = token
    }
  }
})

export const { setUser } = authSlice.actions

export const loginUser = (user, password) => async (dispatch) => {
  try {
    const response = await loginAPI(user, password);
    dispatch(setUser(response));
  } catch (error) {
    console.error(error);
  }
}

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    const response = await registerAPI(name, email, password);
    dispatch(setUser(response));
  } catch (error) {
    console.error(error);
  }
}

export const authReducer = authSlice.reducer