import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const LandingDisplay = lazy(() => import("./pages/LandingDisplay/LandingDisplay"));
const CityDashboard = lazy(() => import("./pages/CityDashboard/CityDashboard"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingDisplay />} />
            <Route path="/city" element={<CityDashboard />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
