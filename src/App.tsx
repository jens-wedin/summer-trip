import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { startEmojiTinting } from "./lib/tintEmojis";
import { Masthead } from "./components/Masthead";
import { Footer } from "./components/Footer";
import { FrontPage } from "./pages/FrontPage";
import { Itinerary } from "./pages/Itinerary";
import { DayPage } from "./pages/DayPage";
import { MapPage } from "./pages/MapPage";
import { PackingPage } from "./pages/PackingPage";
import { ParisPage } from "./pages/ParisPage";
import { NormandyPage } from "./pages/NormandyPage";
import { TownPage, TownsIndex } from "./pages/TownPage";
import { DrinksPage } from "./pages/DrinksPage";
import { FoodPage } from "./pages/FoodPage";
import { WeatherPage } from "./pages/WeatherPage";
import { SunPage } from "./pages/SunPage";

export default function App() {
  useEffect(() => {
    startEmojiTinting();
  }, []);

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
          <Route path="/paris" element={<ParisPage />} />
          <Route path="/normandy" element={<NormandyPage />} />
          <Route path="/towns" element={<TownsIndex />} />
          <Route path="/town/:id" element={<TownPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/sun" element={<SunPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
