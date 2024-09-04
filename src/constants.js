import { WiHumidity } from "react-icons/wi";
import { WiWindBeaufort0 } from "react-icons/wi";
import { LuGauge } from "react-icons/lu";
export const weatherInfo = {
  humidity: {
    name: "Humidity",
    icon: <WiHumidity className="weather-info-icon" />,
    unit: "%",
  },
  windspeedKmph: {
    name: "Wind",
    icon: <WiWindBeaufort0 className="weather-info-icon" />,
    unit: "km/h",
  },
  pressure: {
    name: "Pressure",
    icon: <LuGauge className="weather-info-icon" />,
    unit: "mb",
  },
};
