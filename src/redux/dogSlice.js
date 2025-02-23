import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://dog.ceo/api/breeds/image/random";

export const fetchDog = createAsyncThunk('dogs/fetchDog', async (_, {rejectWithValue}) => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const dogSlice = createSlice({
    name: 'dogs',
    initialState: {
        dog: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDog.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchDog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dog = action.payload;
            })
            .addCase(fetchDog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default dogSlice.reducer;