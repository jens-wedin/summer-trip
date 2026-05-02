import { Route, Routes } from "react-router-dom";
import { Masthead } from "./components/Masthead";
import { Footer } from "./components/Footer";
import { FrontPage } from "./pages/FrontPage";
import { Itinerary } from "./pages/Itinerary";
import { DayPage } from "./pages/DayPage";
import { MapPage } from "./pages/MapPage";
import { PackingPage } from "./pages/PackingPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Masthead />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/day/:id" element={<DayPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/checklist" element={<PackingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
