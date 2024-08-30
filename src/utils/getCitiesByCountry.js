import axios from "axios"
export const getCitiesByCountry = async (country) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_CITIES_API_URL}`, { country })
        return response.data
    } catch (error) {
        throw new Error(error.response.data)
    }
}