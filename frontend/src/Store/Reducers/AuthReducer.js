import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from '../Actions/AuthAction';

// Initial state for the authentication reducer
const initialState = JSON.parse(localStorage.getItem('authState')) || {
    user: {},
    isAuthenticated: false,
    token: "",
    user_email: "",
    user_id: "",
    status: 'idle',
    error: null,
}

export const AuthReducer = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        logOutUser: (state) => {
            state.user = {};
            state.status = 'idle';
            state.isAuthenticated = false;
            state.user_email = "";
            state.user_id = "";
            state.token = "";

            // Store token and user_id in localStorage
            localStorage.removeItem('authState');
        }
    },
    extraReducers: (builder) => {
        // Handle pending, fulfilled and rejected state of registerUser thunk
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.user_email = state.user.email;
                state.user_id = state.user.user_id;
                state.token = state.user.token;
                state.error = null;
    
                // Store token, user_email and user_id in localStorage
                localStorage.setItem('authState', JSON.stringify(state));
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.user = {};
                state.error = action.payload;
            });
        
        
        // Handle pending, fulfilled and rejected state of loginUser thunk
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isAuthenticated = true;
                state.user = action.payload;
                state.user_id = state.user.user_id;
                state.token = state.user.token;
                state.error = null;

                localStorage.setItem('authState', JSON.stringify(state));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.user = {};
                state.error = action.payload;
            });
    }
})

export const { logOutUser } = AuthReducer.actions;
export default AuthReducer.reducer;
