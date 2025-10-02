// src/StoryBook/BookToolbox.jsx
import React, { useEffect, useRef, useState } from "react";
import { ZoomIn, ZoomOut, RefreshCcw, Maximize2, Minimize2, GripVertical } from "lucide-react";
import { createPortal } from "react-dom";

const ZMIN = 0.8, ZMAX = 1.6, ZSTEP = 0.1;
const clamp = (n, a, b) => Math.min(Math.max(n, a), b);
const pct = (n) => Math.round(n * 100);

export default function BookToolbox() {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState(null);   // .philo-book .book-container
  const [bookEl, setBookEl] = useState(null);         // .philo-book .html-flip-book
  const [zoom, setZoom] = useState(1);
  const [isFS, setIsFS] = useState(Boolean(document.fullscreenElement));
  const [dock, setDock] = useState(() => localStorage.getItem("book:dock") || "left");
  const toolRef = useRef(null);

  // mount
  useEffect(() => {
    const root = document.querySelector(".philo-book .book-container");
    const book = document.querySelector(".philo-book .html-flip-book");
    if (!root || !book) return;
    setContainer(root);
    setBookEl(book);
    setMounted(true);
  }, []);

  // flag dock (nếu cần style)
  useEffect(() => {
    if (!container) return;
    container.classList.toggle("tool-left", dock === "left");
    container.classList.toggle("tool-right", dock === "right");
  }, [container, dock]);

  // zoom
  useEffect(() => {
    if (!bookEl) return;
    bookEl.style.transform = `scale(${zoom})`;
    bookEl.style.transformOrigin = "center center";
    bookEl.style.transition = "transform .18s ease";
  }, [zoom, bookEl]);

  // fullscreen
  useEffect(() => {
    const h = () => setIsFS(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", h);
    return () => document.removeEventListener("fullscreenchange", h);
  }, []);
  const toggleFullscreen = async () => {
    try {
      const scene = document.querySelector(".philo-book .book-scene");
      if (!document.fullscreenElement) await scene?.requestFullscreen();
      else await document.exitFullscreen();
    } catch {}
  };

  // ====== Layout: canh GIỮA THEO SÁCH + đặt nav theo mép sách ======
  const layout = () => {
    if (!container || !toolRef.current || !bookEl) return;

    const crect = container.getBoundingClientRect();
    const brect = bookEl.getBoundingClientRect();
    const tool  = toolRef.current;
    const trect = tool.getBoundingClientRect();

    // top = top_sach (so với container) + (cao_sach - cao_tool)/2
    let top = (brect.top - crect.top) + Math.round((brect.height - trect.height) / 2);

    // tránh đè nút lật (ở giữa)
    const prev = container.querySelector(".navigation.nav-prev");
    const next = container.querySelector(".navigation.nav-next");
    const bump = (btn) => {
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const btnMid = r.top + r.height / 2 - crect.top;
      const toolMid = top + trect.height / 2;
      const overlap = Math.abs(btnMid - toolMid) < (r.height/2 + trect.height/2 + 8);
      if (overlap) top = Math.min(crect.height - trect.height - 16, btnMid + r.height/2 + 16 - trect.height/2);
    };
    bump(prev); bump(next);

    // mobile: dạt đáy trái cho gọn
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) top = crect.height - trect.height - 16;

    // clamp trong container
    top = clamp(top, 16, crect.height - trect.height - 16);

    tool.style.top = `${top}px`;
    const margin = 16;
    tool.style.left = dock === "left"
      ? `${margin}px`
      : `calc(100% - ${trect.width + margin}px)`;

    // ===== NAV: theo mép sách =====
    const navPrev = container.querySelector(".navigation.nav-prev");
    const navNext = container.querySelector(".navigation.nav-next");
    if (!navPrev || !navNext) return;

    const navPrevW = navPrev.getBoundingClientRect().width || 48;
    const navNextW = navNext.getBoundingClientRect().width || 48;
    const GAP  = 16;  // cách mép sách
    const SAFE = 12;  // né tool

    const bookLeft  = brect.left  - crect.left;
    const bookRight = brect.right - crect.left;

    let prevLeft = bookLeft  - GAP - navPrevW;
    let nextLeft = bookRight + GAP;

    const toolLeft  = tool.getBoundingClientRect().left  - crect.left;
    const toolRight = tool.getBoundingClientRect().right - crect.left;

    if (dock === "left")  prevLeft = Math.max(prevLeft, toolRight + SAFE);
    else                  nextLeft = Math.min(nextLeft, toolLeft - SAFE - navNextW);

    prevLeft = Math.max(8, prevLeft);
    nextLeft = Math.min(crect.width - navNextW - 8, nextLeft);

    Object.assign(navPrev.style, { left: `${Math.round(prevLeft)}px`, right: "auto" });
    Object.assign(navNext.style, { left: `${Math.round(nextLeft)}px`,  right: "auto" });
  };

  // re-layout khi thay đổi kích thước/zoom/dock
  useEffect(() => {
    layout();
    window.addEventListener("resize", layout);
    const ro1 = new ResizeObserver(layout);
    const ro2 = new ResizeObserver(layout);
    if (container) ro1.observe(container);
    if (bookEl)    ro2.observe(bookEl);
    return () => {
      window.removeEventListener("resize", layout);
      ro1.disconnect(); ro2.disconnect();
    };
  }, [container, dock, bookEl]);
  useEffect(() => { requestAnimationFrame(layout); }, [zoom, dock]);

  // kéo thả đổi dock
  useEffect(() => {
    const el = toolRef.current;
    if (!el || !container) return;

    let dragging = false;
    let startX = 0, startLeft = 0;

    const down = (e) => {
      dragging = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX);
      startLeft = el.getBoundingClientRect().left;
      el.classList.add("dragging");
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
      document.addEventListener("touchmove", move, { passive: false });
      document.addEventListener("touchend", up);
    };
    const move = (e) => {
      if (!dragging) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX);
      if (!x) return;
      const delta = x - startX;
      el.style.left = `${startLeft + delta - container.getBoundingClientRect().left}px`;
      e.preventDefault?.();
    };
    const up = () => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove("dragging");
      const mid = container.getBoundingClientRect().width / 2;
      const leftNow = el.getBoundingClientRect().left - container.getBoundingClientRect().left;
      const nextDock = leftNow < mid ? "left" : "right";
      setDock(nextDock);
      localStorage.setItem("book:dock", nextDock);
      layout();
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", up);
    };

    const grip = el.querySelector(".booktools-grip");
    grip?.addEventListener("mousedown", down);
    grip?.addEventListener("touchstart", down, { passive: true });
    return () => {
      grip?.removeEventListener("mousedown", down);
      grip?.removeEventListener("touchstart", down);
    };
  }, [container]);

  if (!mounted || !container) return null;

  return createPortal(
    <div className={`booktools dock-${dock}`} ref={toolRef} role="toolbar" aria-label="Công cụ sách">
      <button className="booktools-grip" title="Kéo để đổi vị trí" aria-label="Kéo để đổi vị trí">
        <GripVertical size={16} />
      </button>

      <button className="booktools-btn" onClick={() => setZoom((z) => clamp(parseFloat((z - ZSTEP).toFixed(2)), ZMIN, ZMAX))} title="Thu nhỏ (Ctrl -)" aria-label="Thu nhỏ">
        <ZoomOut size={16} />
      </button>

      <div className="booktools-zoom" aria-live="polite">{pct(zoom)}%</div>

      <button className="booktools-btn" onClick={() => setZoom((z) => clamp(parseFloat((z + ZSTEP).toFixed(2)), ZMIN, ZMAX))} title="Phóng to (Ctrl +)" aria-label="Phóng to">
        <ZoomIn size={16} />
      </button>

      <button className="booktools-btn" onClick={() => setZoom(1)} title="Về 100%" aria-label="Về 100%">
        <RefreshCcw size={16} />
      </button>

      <div className="booktools-sep" aria-hidden="true" />

      <button className="booktools-btn" onClick={toggleFullscreen} title="Toàn màn hình (F)" aria-label="Toàn màn hình">
        {isFS ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
      </button>
    </div>,
    container
  );
}
