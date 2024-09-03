import Sunny from "../assets/Sunny.png"
import Clear from "../assets/Clear.png"
import Cloudy from "../assets/Cloudy.png"
import Rainy from "../assets/Rainy.png"
import Snowy from "../assets/Snowy.png"
import PartlyCloudy from "../assets/Partly Cloudy.png"
import Thunderstorm from "../assets/Thunderstorm.png"  
export const getWeatherStatusImage = (status) => { 
    const lowerCaseStatus = status.toLowerCase();
    switch (lowerCaseStatus) {
      case "sunny":
        return Sunny;
      case "clear":
        return Clear;
      case "cloudy":
        return Cloudy;
      case "partly cloudy":
        return PartlyCloudy;
      case lowerCaseStatus.includes("rain"):
        return Rainy;
      case lowerCaseStatus.includes("snow"):
        return Snowy;
      case lowerCaseStatus.includes("thunder"):
        return Thunderstorm;
      default:
        return Clear;
    }
}