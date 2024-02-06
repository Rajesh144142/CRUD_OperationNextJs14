"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {ticketsGet,ticketdelete,editTickets,createTickets} from '@/Redux/api/postApi'
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




//export const { deleteReducer, editReducer } = TicketsSlice.actions;

export default TicketsSlice.reducer;
