import { configureStore } from "@reduxjs/toolkit";
import Weather from './services/weatherInfo/weatherSlice'

export const store = configureStore({
    reducer: {
        Weather
    }
})