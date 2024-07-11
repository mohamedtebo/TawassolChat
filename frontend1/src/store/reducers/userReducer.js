import { createSlice } from '@reduxjs/toolkit';
import { getFriendRequests, getFriends, getUsers } from '../actions/UserAction';

const initialState = {
    users: [],
    friends: [],
    friendRequests: [],
    status: 'idle',
    error: null
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
        builder
            .addCase(getFriends.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getFriends.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.friends = action.payload;
            })
            .addCase(getFriends.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
        builder
            .addCase(getFriendRequests.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getFriendRequests.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.friendRequests = action.payload;
            })
            .addCase(getFriendRequests.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
    }
})

export default userReducer.reducer
