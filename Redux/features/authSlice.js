"use client"
import { createSlice } from '@reduxjs/toolkit';
import { Login, signUp } from '@/Redux/api/authApi'
const User = createSlice({
    name: 'User',
    initialState: { user:{}, loading: false, error: null },
    reducers: {
        clearError:(state)=>{
            state.error=null
        }
    },
    extraReducers(builder) {
        builder.addCase(Login.pending, (state, action) => {
            state.loading = true;
        }).addCase(Login.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.user = action.payload;
        }).addCase(Login.rejected, (state, action) => {
            state.error = action.payload;
        }).addCase(signUp.pending, (state, action) => {
            state.loading = true;
        }).addCase(signUp.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        }).addCase(signUp.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
});

export const {clearError} = User.actions;

export default User.reducer;