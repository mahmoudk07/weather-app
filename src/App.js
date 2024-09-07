import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingDisplay from "./pages/LandingDisplay/LandingDisplay";
import CityDashboard from "./pages/CityDashboard/CityDashboard";
import Error from "./pages/Error/Error"
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<LandingDisplay />} />
          <Route path="/city" element={<CityDashboard />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
