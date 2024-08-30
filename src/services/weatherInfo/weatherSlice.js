import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentLocation } from "../../utils/getCurrentLocation";
import axios from "axios"

export const fetchCurrentWeather = createAsyncThunk("weather/currentWeather", async (data, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const { latitude, longitude } = await getCurrentLocation();
        const response = await axios.get(`${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}&num_of_days=7&ts=1&format=json`)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// initial state for weather slice
const initialState = {
    data: null,
    loading: false,
    error: null,
}

const WeatherSlice = createSlice({
    name: "weather", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeather.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default WeatherSlice.reducer;
