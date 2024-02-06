"use client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
export const ticketsGet = createAsyncThunk("ticketsGet", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/Tickets');
      return response.data.tickets;
    } catch (error) {
      return rejectWithValue(err.message);
    }
  });
  
  export const ticketdelete = createAsyncThunk("ticketdelete", async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(err.message);
    }
  })
  export const editTickets = createAsyncThunk("editTickets", async (formDataAndId, { rejectWithValue }) => {
    try {
      const { id, data } = formDataAndId;
      const response = await axios.put(`/api/${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(err.message);
    }
  })
  export const createTickets = createAsyncThunk("createTickets", async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/Tickets", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(err.message);
    }
  })