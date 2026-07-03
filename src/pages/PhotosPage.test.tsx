import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { PhotosPage } from "./PhotosPage";
import { tripPhotos, groupPhotosByDate } from "../lib/photos";

const setup = () =>
  render(
    <MemoryRouter>
      <PhotosPage />
    </MemoryRouter>,
  );

describe("PhotosPage", () => {
  it("renders one tile per discovered photo", () => {
    setup();
    expect(screen.getAllByRole("button", { name: /Visa stort/ })).toHaveLength(
      tripPhotos.length,
    );
  });

  it.runIf(tripPhotos.length > 0)(
    "opens a lightbox dialog on tile click and closes on Escape",
    async () => {
      const user = userEvent.setup();
      setup();
      await user.click(screen.getAllByRole("button", { name: /Visa stort/ })[0]);
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      await user.keyboard("{Escape}");
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    },
  );

  it.runIf(tripPhotos.length > 0)(
    "renders a date/route heading per day group",
    () => {
      setup();
      const headings = screen.getAllByRole("heading", { level: 3 });
      expect(headings).toHaveLength(groupPhotosByDate(tripPhotos).length);
    },
  );

  it.runIf(tripPhotos.length > 1)(
    "advances to the next photo with the ArrowRight key",
    async () => {
      const user = userEvent.setup();
      setup();
      await user.click(screen.getAllByRole("button", { name: /Visa stort/ })[0]);
      expect(screen.getByText(`1 / ${tripPhotos.length}`)).toBeInTheDocument();
      await user.keyboard("{ArrowRight}");
      expect(screen.getByText(`2 / ${tripPhotos.length}`)).toBeInTheDocument();
    },
  );
});
