import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useCreateData } from "../../hook/useCreateData";

// Thunk for registering a user
export const registerUser = createAsyncThunk('auth/register', async (body, { rejectWithValue }) => {
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


// Initial state for the authentication reducer
const initialState = {
    user: {},
    loggedIn: false,
    token: "",
    user_email: "",
    user_id: "",
    loading: false,
    error: null,
};


// Authentication reducer
const authReducer = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        // Handle pending, fulfilled and rejected state of registerUser thunk
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.loggedIn = true;
            state.user = action.payload;
            state.user_email = state.user.email;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default authReducer.reducer
