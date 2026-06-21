import { useCallback, useEffect, useRef } from "react";
import type { Photo } from "../lib/photos";

type Props = {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

const focusRing =
  "focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function Lightbox({ photos, index, onClose, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];
  const count = photos.length;

  const goPrev = useCallback(
    () => onNavigate((index - 1 + count) % count),
    [index, count, onNavigate],
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % count),
    [index, count, onNavigate],
  );

  // Focus the close button when the dialog opens.
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Lock background scroll while open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Esc to close, arrows to navigate, Tab trapped inside the dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft" && count > 1) {
        goPrev();
      } else if (e.key === "ArrowRight" && count > 1) {
        goNext();
      } else if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext, count]);

  if (!photo) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption ?? `Foto ${index + 1} av ${count}`}
      className="fixed inset-0 z-[60] bg-black/95 flex flex-col"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between p-3 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="kicker text-white/80">
          {index + 1} / {count}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Stäng"
          className={`inline-flex items-center justify-center h-11 w-11 text-white hover:bg-white/10 ${focusRing}`}
        >
          <span aria-hidden="true" className="text-3xl leading-none">
            ×
          </span>
        </button>
      </div>

      <div
        className="flex-1 min-h-0 flex items-center justify-center px-2"
        onClick={onClose}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-full max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div className="p-3 text-white" onClick={(e) => e.stopPropagation()}>
        {(photo.caption || photo.place || photo.date) && (
          <p className="font-serif text-[15px] text-center mb-3">
            {photo.caption}
            {photo.place && (
              <span className="text-white/70">
                {photo.caption ? " · " : ""}
                {photo.place}
              </span>
            )}
            {photo.date && <span className="text-white/70"> · {photo.date}</span>}
          </p>
        )}
        {count > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Föregående foto"
              className={`inline-flex items-center justify-center min-h-[44px] px-4 border border-white/40 text-white kicker hover:bg-white/10 ${focusRing}`}
            >
              ← Föregående
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Nästa foto"
              className={`inline-flex items-center justify-center min-h-[44px] px-4 border border-white/40 text-white kicker hover:bg-white/10 ${focusRing}`}
            >
              Nästa →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
