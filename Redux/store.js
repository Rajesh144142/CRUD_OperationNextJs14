import { configureStore } from '@reduxjs/toolkit';
import TicketsReducer from './features/slice';

export const store = configureStore({
  reducer: {
    Ticket: TicketsReducer,
  },
});