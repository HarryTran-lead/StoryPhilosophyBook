// src/StoryBook/BookToolbox.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ZoomIn, ZoomOut, RefreshCcw, Maximize2, Minimize2, Highlighter, StickyNote, Trash2 } from "lucide-react";
import { createPortal } from "react-dom";

const COLORS = ["#fde047", "#93c5fd", "#86efac", "#fca5a5"]; // vàng, xanh dương, xanh lá, đỏ nhạt
const ZMIN = 0.8, ZMAX = 1.6, ZSTEP = 0.1;

function clamp(n, a, b){ return Math.min(Math.max(n, a), b); }
function pct(n){ return Math.round(n * 100); }

export default function BookToolbox(){
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState(null);     // .philo-book .book-container
  const [bookEl, setBookEl] = useState(null);           // .philo-book .html-flip-book
  const [overlayEl, setOverlayEl] = useState(null);     // overlay layer for highlights

  const [zoom, setZoom] = useState(1);
  const [isFS, setIsFS] = useState(Boolean(document.fullscreenElement));
  const [color, setColor] = useState(COLORS[0]);
  const [highlights, setHighlights] = useState([]);

  const storageKey = useMemo(() => {
    // Bạn có thể đổi key nếu có nhiều sách
    return `storybook-highlights:${window.location.pathname}`;
  }, []);

  // mount vào .book-container bằng portal (không sửa JSX cũ)
  useEffect(() => {
    const root = document.querySelector(".philo-book .book-container");
    const book = document.querySelector(".philo-book .html-flip-book");

    if (!root || !book) return;

    setContainer(root);
    setBookEl(book);

    // tạo lớp overlay highlight nằm *trên* cuốn sách
    const layer = document.createElement("div");
    layer.className = "philo-highlight-layer";
    root.appendChild(layer);
    setOverlayEl(layer);

    setMounted(true);

    return () => {
      layer.remove();
    };
  }, []);

  // load/save highlights
  useEffect(() => {
    try{
      const raw = localStorage.getItem(storageKey);
      if (raw) setHighlights(JSON.parse(raw));
    }catch{}
  }, [storageKey]);

  useEffect(() => {
    try{
      localStorage.setItem(storageKey, JSON.stringify(highlights));
    }catch{}
    drawAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlights]);

  // theo dõi fullscreen
  useEffect(() => {
    const h = () => setIsFS(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", h);
    return () => document.removeEventListener("fullscreenchange", h);
  }, []);

  // áp zoom bằng transform trực tiếp lên flipbook (không chạm JSX)
  useEffect(() => {
    if (!bookEl) return;
    bookEl.style.transform = `scale(${zoom})`;
    bookEl.style.transformOrigin = "center center";
    bookEl.style.transition = "transform .18s ease";
    // để nav/button không lệch quá nhiều, ta để nguyên — chênh nhẹ ok
  }, [zoom, bookEl]);

  const zoomIn = () => setZoom(z => clamp(parseFloat((z + ZSTEP).toFixed(2)), ZMIN, ZMAX));
  const zoomOut = () => setZoom(z => clamp(parseFloat((z - ZSTEP).toFixed(2)), ZMIN, ZMAX));
  const zoomReset = () => setZoom(1);

  const toggleFullscreen = async () => {
    try{
      const scene = document.querySelector(".philo-book .book-scene");
      if (!document.fullscreenElement) await scene?.requestFullscreen();
      else await document.exitFullscreen();
    }catch{}
  };

  // =============== HIGHLIGHT ===============
  const getSelectionRects = () => {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;

    // chỉ xử lý nếu selection nằm trong .page-content
    const anchor = sel.anchorNode?.parentElement;
    if (!anchor) return null;
    const page = anchor.closest(".page-content");
    if (!page || !container) return null;

    const cRect = container.getBoundingClientRect();
    const rects = [];
    for (let i = 0; i < sel.rangeCount; i++){
      const r = sel.getRangeAt(i);
      Array.from(r.getClientRects()).forEach(rc => {
        // bỏ qua rect quá bé
        if (rc.width < 2 || rc.height < 2) return;
        rects.push({
          left: rc.left - cRect.left,
          top:  rc.top  - cRect.top,
          width: rc.width,
          height: rc.height
        });
      });
    }
    if (!rects.length) return null;

    return {
      rects,
      pageIndexHint: findPageIndexFromNode(page)
    };
  };

  const findPageIndexFromNode = (node) => {
    // tìm .page gần nhất rồi lấy thứ tự tương đối (để hiển thị/info)
    const page = node.closest(".page");
    if (!page) return null;
    const all = Array.from(page.parentElement?.children || []);
    const idx = all.indexOf(page);
    return idx >= 0 ? idx : null;
  };

  const addHighlight = (withNote = false) => {
    const data = getSelectionRects();
    if (!data) return;

    const id = `hl_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
    const payload = {
      id,
      rects: data.rects,
      color,
      pageIndex: data.pageIndexHint,
      note: ""
    };

    if (withNote){
      const txt = prompt("Nhập ghi chú cho đoạn đã bôi:");
      if (txt && txt.trim()) payload.note = txt.trim();
    }

    setHighlights(prev => [...prev, payload]);
    window.getSelection()?.removeAllRanges();
  };

  const clearAll = () => {
    if (!window.confirm("Xóa tất cả highlight & ghi chú trên trang này?")) return;
    setHighlights([]);
  };

  const drawAll = () => {
    if (!overlayEl) return;
    overlayEl.innerHTML = ""; // clear
    highlights.forEach(drawOne);
  };

  const drawOne = (item) => {
    if (!overlayEl) return;
    item.rects.forEach((r) => {
      const el = document.createElement("div");
      el.className = "philo-hl";
      el.style.left   = `${r.left}px`;
      el.style.top    = `${r.top}px`;
      el.style.width  = `${r.width}px`;
      el.style.height = `${r.height}px`;
      el.style.background = item.color + "66"; // 40% alpha
      el.dataset.id = item.id;

      // tooltip note (nếu có)
      if (item.note){
        el.title = item.note;
      }

      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = prompt(
          "Chọn tác vụ:\n1 = Sửa ghi chú\n2 = Đổi màu\n3 = Xóa highlight\n(để trống = hủy)"
        );
        if (action === "1"){
          const newTxt = prompt("Ghi chú mới:", item.note || "");
          setHighlights(prev => prev.map(h => h.id === item.id ? {...h, note: (newTxt||"")} : h));
        }else if (action === "2"){
          const pick = prompt("Nhập màu hex (vd #fde047) hoặc chọn 1-4:\n1 vàng, 2 xanh dương, 3 xanh lá, 4 đỏ nhạt", "1");
          let newColor = item.color;
          if (pick === "1") newColor = COLORS[0];
          else if (pick === "2") newColor = COLORS[1];
          else if (pick === "3") newColor = COLORS[2];
          else if (pick === "4") newColor = COLORS[3];
          else if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(pick||"")) newColor = pick;
          setHighlights(prev => prev.map(h => h.id === item.id ? {...h, color: newColor} : h));
        }else if (action === "3"){
          setHighlights(prev => prev.filter(h => h.id !== item.id));
        }
      });

      overlayEl.appendChild(el);
    });
  };

  if (!mounted || !container) return null;

  // PORTAL: render toolbar vào trong .book-container (nằm trên sách)
  return createPortal(
    <div className="booktools">
      <div className="booktools-group">
        <button className="booktools-btn" onClick={() => setZoom(z => clamp(z - ZSTEP, ZMIN, ZMAX))} title="Thu nhỏ (Ctrl -)">
          <ZoomOut size={16} />
        </button>
        <div className="booktools-zoom">{pct(zoom)}%</div>
        <button className="booktools-btn" onClick={() => setZoom(z => clamp(z + ZSTEP, ZMIN, ZMAX))} title="Phóng to (Ctrl +)">
          <ZoomIn size={16} />
        </button>
        <button className="booktools-btn" onClick={zoomReset} title="Về 100%">
          <RefreshCcw size={16} />
        </button>
        <div className="booktools-sep" />
        <button className="booktools-btn" onClick={toggleFullscreen} title="Toàn màn hình (F)">
          {isFS ? <Minimize2 size={16}/> : <Maximize2 size={16}/>}
        </button>
      </div>

      <div className="booktools-group">
        <div className="booktools-colors">
          {COLORS.map(c => (
            <button
              key={c}
              className={"booktools-color" + (c===color ? " is-active": "")}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)}
              title={`Màu ${c}`}
            />
          ))}
        </div>
        <button className="booktools-btn" onClick={() => addHighlight(false)} title="Tô sáng vùng đang bôi đen">
          <Highlighter size={16} />
        </button>
        <button className="booktools-btn" onClick={() => addHighlight(true)} title="Tô sáng + ghi chú">
          <StickyNote size={16} />
        </button>
        <button className="booktools-btn danger" onClick={clearAll} title="Xóa tất cả highlight/note">
          <Trash2 size={16} />
        </button>
      </div>
    </div>,
    container
  );
}
