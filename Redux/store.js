import { configureStore } from '@reduxjs/toolkit';
import TicketsReducer from './features/postSlice';
 import UserReducer from './features/authSlice'
export const store = configureStore({
  reducer: {
    Ticket: TicketsReducer,
    User:UserReducer
  },
});