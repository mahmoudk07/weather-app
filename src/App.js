import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingDisplay from "./pages/LandingDisplay/LandingDisplay";
import CityDashboard from "./pages/CityDashboard/CityDashboard"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingDisplay />} />
        <Route path="/city/:cityName" element={<CityDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
