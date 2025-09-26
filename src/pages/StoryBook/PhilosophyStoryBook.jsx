// src/pages/PhilosophyStoryBook.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@components/Header";

import { spreads as PHILO_SPREADS, spreadsToPages } from "./philosophySpreads.jsx"; // <-- dùng data tách riêng

import "@styles/BookTheme.css";
import "@styles/BookAnimations.css";
import "@styles/PhilosophyStoryBook.css"; // import CUỐI

const PhilosophyStoryBook = () => {
  const flipRef = useRef(null);
  const [pageSize, setPageSize] = useState({ w: 520, h: 700 });

  // Map spreads -> pages cho FlipBook
  const pages = useMemo(() => spreadsToPages(PHILO_SPREADS), []);
  const [currentPage, setCurrentPage] = useState(0);

  // spread hiện tại để hiển thị chỉ số
  const currentSpread = Math.min(PHILO_SPREADS.length - 1, Math.ceil(currentPage / 2));
  const canPrev = currentPage > 0;
  const canNext = currentPage < pages.length - 1;

  // responsive size
  useEffect(() => {
    const calc = () => {
      const vw = Math.min(window.innerWidth, 1400);
      const vh = window.innerHeight;
      const targetBookH = Math.min(Math.round(vh * 0.8), 900);
      const pageWFromH = Math.round(targetBookH * 0.74);
      const pageWFromW = Math.round(vw * 0.4);
      const w = Math.min(680, Math.max(360, Math.min(pageWFromH, pageWFromW)));
      const h = Math.round(w / 0.74);
      setPageSize({ w, h });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const onFlip = (e) => setCurrentPage(e.data);

  // lật bằng bàn phím
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") flipRef.current?.pageFlip().flipNext();
      if (e.key === "ArrowLeft")  flipRef.current?.pageFlip().flipPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="philo-book">
      <Header />

      <main className="page-with-header">
        {/* CHỈ MỘT .book-scene + bg-photo */}
        <section className="book-scene bg-photo">
          <div className="book-container book-dark">
            {/* gáy sách (trang trí) */}
            <div className="book-spine">
              <div className="spine-text">TRIẾT LÝ CUỘC SỐNG</div>
            </div>

            <HTMLFlipBook
              ref={flipRef}
              className="html-flip-book"
              width={pageSize.w}
              height={pageSize.h}
              showCover
              maxShadowOpacity={0.5}
              drawShadow
              mobileScrollSupport
              onFlip={onFlip}
            >
              {pages}
            </HTMLFlipBook>

            {/* Nút điều hướng */}
            <div className="navigation nav-prev">
              <button
                className="nav-button"
                onClick={() => flipRef.current?.pageFlip().flipPrev()}
                disabled={!canPrev}
                aria-label="Trang trước"
                title="Trang trước"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="navigation nav-next">
              <button
                className="nav-button"
                onClick={() => flipRef.current?.pageFlip().flipNext()}
                disabled={!canNext}
                aria-label="Trang sau"
                title="Trang sau"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Chỉ số spread */}
            <div className="page-indicator">
              Trang {Math.min(currentSpread + 1, PHILO_SPREADS.length)} / {PHILO_SPREADS.length}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PhilosophyStoryBook;
