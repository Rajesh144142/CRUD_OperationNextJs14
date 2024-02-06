"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const Login = createAsyncThunk(
  "Login",
  async (data, { rejectWithValue }) => {
    try {
     // const response=await axios.post('/api/register',data)

      return data;
    } catch (error) {
      return rejectWithValue(err.message);
    }
  }
);
export const signUp = createAsyncThunk(
    "signUp",
    async (data, { rejectWithValue }) => {
      try {
        const response=await axios.post('/api/register',data)
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

