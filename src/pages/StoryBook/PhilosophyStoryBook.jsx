// src/pages/PhilosophyStoryBook.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@components/Header";
import BookToolbox from "../StoryBook/BookToolbox"; // hoặc "../StoryBook/BookToolbox.jsx" tùy alias của bạn

// Dùng file spreads đã tách (JSX), nếu bạn để nơi khác thì sửa lại path
import { spreads as PHILO_SPREADS, spreadsToPages } from "./philosophySpreads.jsx";

import "@styles/BookTheme.css";         // style chung (không chạm layout)
import "@styles/BookAnimations.css";    // hiệu ứng (không chạm layout)
import "@styles/PhilosophyStoryBook.css"; // style SCOPED, đặt CUỐI

export default function PhilosophyStoryBook() {
  const flipRef = useRef(null);
  const [pageSize, setPageSize] = useState({ w: 520, h: 700 });

  // Map spreads -> pages cho FlipBook
  const pages = useMemo(() => spreadsToPages(PHILO_SPREADS), []);

  const [currentPage, setCurrentPage] = useState(0);
  const currentSpread = Math.min(PHILO_SPREADS.length - 1, Math.ceil(currentPage / 2));
  const canPrev = currentPage > 0;
  const canNext = currentPage < pages.length - 1;

  const PAGE_RATIO = 0.74;   // width / height (520/700)
const BOOK_ZOOM  = 0.90;   // ~ giống 90% zoom trình duyệt (chỉnh 0.88–0.92 tùy mắt)
  // Nền toàn màn chỉ khi ở trang này
  useEffect(() => {
    document.body.classList.add("philo-bg");
    return () => document.body.classList.remove("philo-bg");
  }, []);

  
  // Responsive book size
  useEffect(() => {
    const calc = () => {
      const vw = Math.min(window.innerWidth, 1400);
      const vh = window.innerHeight;
      const targetBookH = Math.min(Math.round(vh * 0.8), 900);
      const pageWFromH = Math.round(targetBookH * 0.74);
      const pageWFromW = Math.round(vw * 0.40);
      const w = Math.min(680, Math.max(360, Math.min(pageWFromH, pageWFromW)));
      const h = Math.round(w / 0.74);
      setPageSize({ w, h });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const onFlip = (e) => setCurrentPage(e.data);

  // Lật bằng phím
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
<BookToolbox />

      {/* Phần nội dung nằm dưới header cố định */}
      <main className="page-with-header">
        {/* Chỉ 1 block scene, KHÔNG thêm bg-photo ở đây */}
        <section className="book-scene">
          
          <div className="book-container book-dark theme-amber">
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
}
