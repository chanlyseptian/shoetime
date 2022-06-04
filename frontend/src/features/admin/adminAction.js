import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3001/user/";



// Login admin
export const login = createAsyncThunk("admin/login", async (admin, thunkAPI) => {
  try {
    const response = await axios.post(API_URL + "admin", admin);
    if (response.data) {
      localStorage.setItem("admin", JSON.stringify(response.data));
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

// Logout admin
export const logout = createAsyncThunk("admin/logout", async () => {
  return await localStorage.removeItem("admin");
});
