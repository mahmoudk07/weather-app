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
        const response = data
          ? await axios.get(
              `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&q=${data}&num_of_days=7&ts=1&format=json`
            )
          : await axios.get(
              `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&q=${country}&num_of_days=7&ts=1&format=json`
            );
        return { weatherData: response.data.data, cities: cities.data.slice(0, 41) };
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// initial state for weather slice
const initialState = {
  country: null,
  city: null,
  currentWeather: null,
  forecastWeather: null,
  historicalWeather: null,
  cities: [],
  error: null,
  loading: false,
};

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
            state.country = action.payload.weatherData.request[0].query.split(", ")[1];
            state.city = action.payload.weatherData.request[0].query
            state.currentWeather = action.payload.weatherData.current_condition[0];
            state.forecastWeather = action.payload.weatherData.weather;
            state.historicalWeather = action.payload.weatherData.ClimateAverages[0].month;
            state.cities = action.payload.cities;
        })
        builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default WeatherSlice.reducer;
