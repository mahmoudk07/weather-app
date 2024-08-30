import axios from 'axios'
export const getCurrentCity = async (langitude, latitude) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_COUNTRY_API_URL}/reverse?lat=${latitude}&lon=${langitude}&format=json`)
        return response.data.address.country
    } catch (error) {
        throw new Error(error.response.data)
    }
}