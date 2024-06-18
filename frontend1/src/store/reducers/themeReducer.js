import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedTheme: 'Light',
}

const themeReducer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.selectedTheme = action.payload;
        },
    },
});

export const { setTheme } = themeReducer.actions;

export default themeReducer.reducer;
