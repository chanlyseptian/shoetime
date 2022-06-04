import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3001/user/";

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
    try {
      const response = await axios.post(API_URL + "create", user);
      if (response.data) {
        // localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await axios.post(API_URL + "login", user);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  return await localStorage.removeItem("user");
});
