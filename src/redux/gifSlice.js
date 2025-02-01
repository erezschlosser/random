import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = 'XyNHp83nRSpqSG7b6e6h9mMUP8bAlFJa';
const BASE_URL = "https://api.giphy.com/v1/gifs/search";

export const fetchGifs = createAsyncThunk("Gifs/fetchGifs", async (searchTerm, {rejectWithValue}) => {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${searchTerm}&limit=10`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.data.length) {
            throw new Error('No GIFs found. Try another search');
        }
        return data.data;

    } catch (error) {
        return rejectWithValue(error.message);
    }

});

const gifSlice = createSlice({
    name: 'gifs',
    initialState: {
        gifs: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGifs.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchGifs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.gifs = action.payload;
            })
            .addCase(fetchGifs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; 
            })
    }
})

export default gifSlice.reducer;

