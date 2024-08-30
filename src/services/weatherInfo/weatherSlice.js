import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentLocation } from "../../utils/getCurrentLocation";
import { getCurrentCity } from "../../utils/getCurrentCity"
import { getCitiesByCountry } from "../../utils/getCitiesByCountry";
import axios from "axios"

export const fetchCurrentWeather = createAsyncThunk("weather/currentWeather", async (data, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const { latitude, longitude } = await getCurrentLocation();
        const country = await getCurrentCity(latitude, longitude);
        const cities = await getCitiesByCountry(country);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&q=${country}&num_of_days=7&ts=1&format=json`)
        return { weatherData: response.data, cities: cities.data.slice(0, 41) };
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// initial state for weather slice
const initialState = {
    data: null,
    cities: [],
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
            state.data = action.payload.weatherData;
            state.cities = action.payload.cities;
        })
        builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default WeatherSlice.reducer;
