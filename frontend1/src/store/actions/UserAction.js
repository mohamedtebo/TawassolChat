import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetDataToken } from "../../hook/useGetData";

// Fetch Users Thunk
export const getUsers = createAsyncThunk("user/getUsers", async (_, { getState, rejectWithValue }) => {
    try {
        const token = getState().auth.token;
        const response = await useGetDataToken('/user/get-users', token)
        return response.data;
    } catch (error) {
        // Return the error response data on failure
        return rejectWithValue(error.response.data);
    }
});

// Fetch Users Thunk
export const getFriends = createAsyncThunk("user/getFriends", async (_, { getState, rejectWithValue }) => {
    try {
        const token = getState().auth.token;
        const response = await useGetDataToken('/user/get-friends', token)
        return response.data;
    } catch (error) {
        // Return the error response data on failure
        return rejectWithValue(error.response.data);
    }
});

// Fetch Users Thunk
export const getFriendRequests = createAsyncThunk("user/getFriendRequests", async (_, { getState, rejectWithValue }) => {
    try {
        const token = getState().auth.token;
        const response = await useGetDataToken('/user/get-requests', token)
        return response.data;
    } catch (error) {
        // Return the error response data on failure
        return rejectWithValue(error.response.data);
    }
});