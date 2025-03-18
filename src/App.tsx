import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import LandingPage from "./pages/LandingPage";
import SavedPropertiesPage from "./pages/SavedPropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import { PropertyProvider } from "./context/PropertyContext";

function App() {
  return (
    <PropertyProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/saved" element={<SavedPropertiesPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}
          </Routes>
        </>
      </Suspense>
    </PropertyProvider>
  );
}

export default App;
