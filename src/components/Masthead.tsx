import { Link, useLocation } from "react-router-dom";
import { trip } from "../data/trip";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Front Page" },
  { to: "/itinerary", label: "Itinerary" },
  { to: "/towns", label: "Towns" },
  { to: "/normandy", label: "Normandy" },
  { to: "/paris", label: "Paris" },
  { to: "/food", label: "Food" },
  { to: "/drinks", label: "Drinks" },
  { to: "/checklist", label: "Packing" },
  { to: "/weather", label: "Weather" },
  { to: "/map", label: "Route Map" },
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
            <span>Price · One Smile</span>
            <ThemeToggle />
          </span>
        </div>
        <hr className="rule mt-3 mb-4" />
        <Link to="/" className="block text-center">
          <h1 className="masthead text-[64px] md:text-[96px] tracking-tight">
            Summer Trip 2026
          </h1>
        </Link>
        <hr className="rule mt-3" />
        <div className="flex items-center justify-between text-[11px] kicker py-2 flex-wrap gap-y-1">
          <span>Founded MMXXVI</span>
          <span className="text-center flex-1">
            All the trip that's fit to print
          </span>
          <span>Stockholm · Paris · Stockholm</span>
        </div>
        <hr className="double-rule" />
        <nav className="flex items-center justify-center gap-6 md:gap-10 py-3 flex-wrap">
          {nav.map((n) => {
            const active =
              n.to === "/"
                ? pathname === "/"
                : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`kicker text-[12px] tracking-section ${
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
