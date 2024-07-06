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

// Thunk for login a user
export const loginUser = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
    try {
        // Call the API to login the user
        const response = await useCreateData(`/auth/login`, body);
        // Return the response data on success
        return response.data;
    } catch (error) {
        // Return the error response data on failure
        return rejectWithValue(error.response.data);
    }
});

// Thunk for forgot password a user
export const forgotpasswordUser = createAsyncThunk('auth/forgotpassword', async (body, { rejectWithValue }) => {
    try {
        // Call the API to forgot password the user
        const response = await useCreateData(`/auth/forgot-password`, body);
        // Return the response data on success
        return response.data;
    } catch (error) {
        // Return the error response data on failure
        return rejectWithValue(error.response.data);
    }
});

// Thunk for VerifyPassword otp a user
export const VerifyPasswordUser = createAsyncThunk('auth/VerifyPassword', async (body, { rejectWithValue }) => {
    try {
        // Call the API to forgot password the user
        const response = await useCreateData(`/auth/verifyResetCode`, body);
        // Return the response data on success
        return response.data;
    } catch (error) {
        // Return the error response data on failure
        return rejectWithValue(error.response.data);
    }
});

// Thunk for reset-password otp a user
export const resetPasswordUser = createAsyncThunk('auth/resetPassword', async (body, { rejectWithValue }) => {
    try {
        // Call the API to forgot password the user
        const response = await useCreateData(`/auth/reset-password`, body);
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
    token: localStorage.getItem("token") || "",
    user_email: localStorage.getItem("user_email") || "",
    user_id: localStorage.getItem("user_id") || "",
    loading: false,
    error: null,
};


// Authentication reducer
const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOutUser: (state) => {
            state.user = {};
            state.loading = false;
            state.loggedIn = false;
            state.user_email = "";
            state.user_id = "";
            state.token = "";

            // Store token and user_id in localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            localStorage.removeItem("user_email");
        },
        sendCodeAgainUser: (state) => {
            state.user = {};
            state.user_email = "";
            state.loading = false;
            state.error = null;

            localStorage.removeItem("user_email");
        }
    },
    extraReducers: (builder) => {
        // Handle pending, fulfilled and rejected state of registerUser thunk
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.user_email = state.user.email;
            state.user_id = state.user.user_id;
            state.token = state.user.token;
            state.error = null;

            // Store token, user_email and user_id in localStorage
            localStorage.setItem("token", state.token);
            localStorage.setItem("user_email", state.user_email);
            localStorage.setItem("user_id", state.user_id);
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.user = {};
            state.error = action.payload;
        });
        
        
        // Handle pending, fulfilled and rejected state of loginUser thunk
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.loggedIn = true;
            state.user = action.payload;
            state.user_id = state.user.user_id;
            state.token = state.user.token;
            state.error = null;

            // Store token and user_id in localStorage
            localStorage.setItem("token", state.token);
            localStorage.setItem("user_id", state.user_id);
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = {};
            state.error = action.payload;
        });
        
        
        // Handle pending, fulfilled and rejected state of forgot password thunk
        builder.addCase(forgotpasswordUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(forgotpasswordUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        });
        builder.addCase(forgotpasswordUser.rejected, (state, action) => {
            state.loading = false;
            state.user = {};
            state.error = action.payload;
        });

        // Handle pending, fulfilled and rejected state of verify password thunk
        builder.addCase(VerifyPasswordUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(VerifyPasswordUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.user_email = state.user.email;
            state.error = null;

            localStorage.setItem("user_email", state.user_email);
        });
        builder.addCase(VerifyPasswordUser.rejected, (state, action) => {
            state.loading = false;
            state.user = {};
            state.user_email = "";
            state.error = action.payload;
            
            localStorage.removeItem("user_email");
        });

        // Handle pending, fulfilled and rejected state of reset password thunk
        builder.addCase(resetPasswordUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(resetPasswordUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        });
        builder.addCase(resetPasswordUser.rejected, (state, action) => {
            state.loading = false;
            state.user = {};
            state.error = action.payload;
        });
    },
});

export const { logOutUser, sendCodeAgainUser } = authReducer.actions
export default authReducer.reducer
