import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
  document.documentElement.removeAttribute("data-theme");
  if (typeof localStorage !== "undefined" && localStorage.clear) {
    localStorage.clear();
  }
});
