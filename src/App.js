import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingDisplay from "./pages/LandingDisplay/LandingDisplay";
import CityDashboard from "./pages/CityDashboard/CityDashboard";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingDisplay />} />
            <Route path="/city" element={<CityDashboard />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}
export default App;
