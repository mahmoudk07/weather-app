import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "./services/weatherInfo/weatherSlice";
function App() {
  const { data, loading, error } = useSelector(state => state.Weather);
  const dispatch = useDispatch();
  const fetchWeatherData = async () => {
    try {
      await dispatch(fetchCurrentWeather()).unwrap();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWeatherData();
  }, [dispatch]);
  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {!loading && data && <h1>{data.data.weather[0].date}</h1>}
    </div>
  );
}
export default App;
