// Walk the DOM and replace pictographic emoji code points with inline SVG icons
// (from Lucide) where mapped, falling back to a sepia-tinted span for unmapped
// emojis. Country-flag regional-indicator pairs are deliberately not matched,
// so flags keep their colors.

import { emojiToIcon, lucideToSvgElement } from "./iconMap";

const EMOJI_RE = /\p{Extended_Pictographic}(?:️)?(?:‍\p{Extended_Pictographic}(?:️)?)*/gu;

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "CODE", "PRE", "SVG"]);

function buildReplacement(emoji: string): Node {
  const icon = emojiToIcon[emoji];
  if (icon) {
    const wrapper = document.createElement("span");
    wrapper.className = "brand-icon";
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.appendChild(lucideToSvgElement(icon));
    return wrapper;
  }
  // Fallback — sepia-tinted emoji
  const span = document.createElement("span");
  span.className = "brand-emoji";
  span.textContent = emoji;
  return span;
}

function wrapNode(node: Text) {
  const text = node.textContent ?? "";
  if (!text.match(EMOJI_RE)) return;

  const frag = document.createDocumentFragment();
  let last = 0;
  for (const match of text.matchAll(EMOJI_RE)) {
    const idx = match.index ?? 0;
    if (idx > last) {
      frag.appendChild(document.createTextNode(text.slice(last, idx)));
    }
    frag.appendChild(buildReplacement(match[0]));
    last = idx + match[0].length;
  }
  if (last < text.length) {
    frag.appendChild(document.createTextNode(text.slice(last)));
  }
  node.parentNode?.replaceChild(frag, node);
}

function walk(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.classList.contains("brand-emoji")) return NodeFilter.FILTER_REJECT;
      if (parent.classList.contains("brand-icon")) return NodeFilter.FILTER_REJECT;
      if (parent.closest(".brand-emoji, .brand-icon")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const queue: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) queue.push(n as Text);
  queue.forEach(wrapNode);
}

let observer: MutationObserver | null = null;
let scheduled = false;
let scheduledRoot: Node | null = null;

function scheduleWalk(root: Node) {
  scheduledRoot = root;
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    if (scheduledRoot) walk(scheduledRoot);
    scheduledRoot = null;
  });
}

export function startEmojiTinting(root: HTMLElement = document.body) {
  walk(root);

  if (observer) observer.disconnect();
  observer = new MutationObserver((mutations) => {
    for (const mut of mutations) {
      mut.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
          scheduleWalk(node);
        }
      });
    }
  });
  observer.observe(root, { childList: true, subtree: true, characterData: false });
}

export function stopEmojiTinting() {
  observer?.disconnect();
  observer = null;
}
