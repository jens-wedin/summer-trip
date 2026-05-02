import { useState } from "react";
import type { ChecklistItem } from "../types";

type Props = {
  initial: ChecklistItem[];
  storageKey?: string;
  title?: string;
};

export function Checklist({ initial, storageKey, title }: Props) {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    if (storageKey) {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) return JSON.parse(raw) as ChecklistItem[];
      } catch {
        /* ignore */
      }
    }
    return initial;
  });

  const toggle = (id: string) => {
    setItems((prev) => {
      const next = prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i));
      if (storageKey) {
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {
          /* ignore */
        }
      }
      return next;
    });
  };

  const completed = items.filter((i) => i.done).length;

  return (
    <div className="border border-ink p-5 bg-paper/60">
      {title && (
        <div className="flex items-baseline justify-between mb-3 border-b border-ink pb-2">
          <h3 className="headline text-xl">{title}</h3>
          <span className="kicker">
            {completed} / {items.length}
          </span>
        </div>
      )}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-label={item.done ? "Mark incomplete" : "Mark complete"}
              className={`mt-1 h-4 w-4 flex-shrink-0 border border-ink flex items-center justify-center transition-colors ${
                item.done ? "bg-ink text-paper" : "bg-paper"
              }`}
            >
              {item.done && (
                <span
                  className="font-hand text-[14px] leading-none"
                  style={{ transform: "translateY(-1px)" }}
                >
                  ✓
                </span>
              )}
            </button>
            <span
              className={`body-prose text-[15px] leading-snug ${
                item.done ? "line-through text-muted" : ""
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
