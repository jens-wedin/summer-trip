import { Link, useLocation } from "react-router-dom";
import { trip } from "../data/trip";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Förstasidan" },
  { to: "/itinerary", label: "Reseplan" },
  { to: "/towns", label: "Städer" },
  { to: "/normandy", label: "Normandie" },
  { to: "/paris", label: "Paris" },
  { to: "/food", label: "Mat" },
  { to: "/drinks", label: "Dryck" },
  { to: "/checklist", label: "Packlista" },
  { to: "/weather", label: "Väder" },
  { to: "/sun", label: "Solen" },
  { to: "/map", label: "Reskartan" },
];

export function Masthead() {
  const { pathname } = useLocation();
  return (
    <header className="border-b-[3px] border-double border-ink bg-paper">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-3">
        <div className="flex items-center justify-between text-[11px] kicker">
          <span>{trip.edition}</span>
          <span className="hidden md:inline">{trip.dateline}</span>
          <span className="flex items-center gap-3">
            <span className="hidden sm:inline">Pris · Ett leende</span>
            <ThemeToggle />
          </span>
        </div>
        <hr className="rule mt-3 mb-4" />
        <Link to="/" className="block text-center">
          <h1 className="masthead text-[clamp(2rem,10.5vw,6rem)] tracking-tight break-words">
            Sommarresan 2026
          </h1>
        </Link>
        <hr className="rule mt-3" />
        <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-between sm:gap-0 sm:text-left text-[11px] kicker py-2">
          <span>Grundad MMXXVI</span>
          <span className="sm:flex-1 sm:text-center">
            Vår sommarguide
          </span>
          <span>Stockholm · Paris · Stockholm</span>
        </div>
        <hr className="double-rule" />
        <nav className="flex items-center justify-center gap-x-5 gap-y-0 md:gap-x-10 py-1 flex-wrap">
          {nav.map((n) => {
            const active =
              n.to === "/"
                ? pathname === "/"
                : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`kicker text-[12px] tracking-section inline-flex items-center min-h-[44px] px-2 ${
                  active ? "text-accent underline underline-offset-4" : ""
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <hr className="rule" />
      </div>
    </header>
  );
}
