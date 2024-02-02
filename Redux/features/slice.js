"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
const TicketsSlice = createSlice({
  name: 'Tickets',
  initialState: { tickets: [], loading: false, error: null },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(ticketsGet.pending, (state, action) => {
      state.loading = true;
    }).addCase(ticketsGet.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.tickets = action.payload;
    }).addCase(ticketsGet.rejected, (state, action) => {
      state.error = action.payload;
    }).addCase(ticketdelete.fulfilled, (state, action) => {
      state.tickets = state.tickets.filter((value) => {
        return action.payload.id !== value._id;
      })
    }).addCase(editTickets.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.tickets = state.tickets.map((value) => {
        if (value._id === data._id) {
          return data;
        } else {
          return value;
        }
      });

    }).addCase(createTickets.fulfilled, (state, action) => {
      state.tickets.push(action.payload.data[0]);
    })
  }
});



// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });




export const { deleteReducer, editReducer } = TicketsSlice.actions;

export default TicketsSlice.reducer;
