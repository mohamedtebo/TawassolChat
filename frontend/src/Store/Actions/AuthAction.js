import { createAsyncThunk } from "@reduxjs/toolkit";
import { useCreateData } from "../../Hook/useCreateData";

// Thunk for registering a user
export const registerUser = createAsyncThunk('Auth/register', async (body, { rejectWithValue }) => {
    try {
        // Call the API to register the user
        const response = await useCreateData(`/auth/register`, body);
        // Return the response data on success
        return response.data;
    } catch (error) {
        // Return the error response data on failure
        return rejectWithValue(error.response.data);
    }
});