import { createAsyncThunk } from "@reduxjs/toolkit";
import { useCreateData } from "../../hook/useCreateData";

export const register = createAsyncThunk('auth/signUp', async ({ body }, thunkAPI) => {
    try {
        const response = await useCreateData('/auth/register', body);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});
