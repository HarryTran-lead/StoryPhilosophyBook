import React, { useMemo, useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Home, BookOpenCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "../styles/PhilosophyStoryBook.css";
import "../styles/BookAnimations.css";
import "../styles/BookTheme.css";

const PhilosophyStoryBook = () => {
  const navigate = useNavigate();

  // Khóa flip tức thời (không phụ thuộc render của state)
  const flippingRef = useRef(false);
  const pendingActionRef = useRef(null); // "next" | "prev"
  const activeIndexRef = useRef(-1);

  // ============= SPREADS (giữ nguyên nội dung của bạn) =============
  const spreads = useMemo(
    () => [
      {
        left: null,
        right: (
          <div className="page-content cover-front">
            <div className="cover-design">
              <div className="cover-stars">
                <div className="star star-1"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
                <div className="star star-4"></div>
                <div className="star star-5"></div>
              </div>
              <div className="cover-ornament top"></div>
              <div className="cover-title">
                <div className="title-backdrop"></div>
                <h1 className="main-title">
                  <span className="title-line-1">TRIẾT LÝ</span>
                  <span className="title-line-2">CUỘC SỐNG</span>
                </h1>
                <div className="subtitle">Những Suy Ngẫm Về Đời Người</div>
              </div>
              <div className="cover-quote">
                <div className="quote-marks">"</div>
                <div className="quote-text">
                  Cuộc sống không phải là tìm kiếm bản thân,<br />
                  mà là tạo dựng bản thân
                </div>
                <div className="quote-author">— George Bernard Shaw</div>
                <div className="quote-marks closing">"</div>
              </div>
              <div className="cover-ornament bottom"></div>
              <div className="cover-glow"></div>
            </div>
          </div>
        ),
      },

      // ======== Ch.I ========
      {
        left: (
          <div className="page-content page-left">
            <div className="page-header">
              <h2>Chương I</h2>
              <div className="chapter-ornament">❦</div>
            </div>
            <div className="page-body">
              <h3>Bản Chất Con Người</h3>
              <p className="first-letter">
                Con người sinh ra không phải để tồn tại, mà để sống. Sự khác biệt giữa "tồn tại" và "sống" chính là ý thức về bản thân và khả năng tạo ra ý nghĩa.
              </p>
              <p>
                Aristotle từng nói: "Con người là động vật có lý trí". Nhưng lý trí không chỉ là khả năng suy nghĩ, mà còn là khả năng chọn lựa, quyết định và chịu trách nhiệm cho những lựa chọn đó.
              </p>
              <div className="philosophy-quote">
                <div className="quote-symbol">❝</div>
                <p>"Tôi tư duy, vậy tôi tồn tại"</p>
                <div className="quote-author">— René Descartes</div>
              </div>
            </div>
            <div className="page-number">2</div>
          </div>
        ),
        right: (
          <div className="page-content page-right">
            <div className="reflection-box">
              <div className="reflection-title">Suy Ngẫm</div>
              <p>
                Mỗi con người đều mang trong mình một vũ trụ riêng - với những ước mơ, nỗi sợ, niềm vui và nỗi buồn. Việc hiểu được bản thân không phải là đích đến, mà là hành trình suốt đời.
              </p>
            </div>
            <div className="wisdom-section">
              <h4>Ba Tầng Ý Thức</h4>
              <div className="wisdom-item">
                <span className="wisdom-number">1</span>
                <div>
                  <strong>Ý thức bề mặt:</strong> Những gì chúng ta nhận biết trực tiếp
                </div>
              </div>
              <div className="wisdom-item">
                <span className="wisdom-number">2</span>
                <div>
                  <strong>Tiềm thức:</strong> Những kinh nghiệm và ký ức được lưu giữ
                </div>
              </div>
              <div className="wisdom-item">
                <span className="wisdom-number">3</span>
                <div>
                  <strong>Vô thức tập thể:</strong> Trí tuệ chung của nhân loại
                </div>
              </div>
            </div>
            <div className="page-number">3</div>
          </div>
        ),
      },

      // TODO: thêm các spread Ch. II, III, IV của bạn ngay đây

      // ======== Kết & Bìa sau ========
      {
        left: (
          <div className="page-content page-left">
            <div className="final-content">
              <div className="conclusion-title">
                <h2>Hành Trình Không Điểm Đến</h2>
              </div>
              <div className="final-wisdom">
                <p>
                  Triết học không phải là bộ sưu tập những câu trả lời, mà là nghệ thuật đặt ra những câu hỏi đúng. Cuộc sống không phải là vấn đề cần giải quyết, mà là bí ẩn cần trải nghiệm.
                </p>
                <div className="life-summary">
                  <div className="summary-item">
                    <span className="summary-icon">🎭</span>
                    <p><strong>Sống chân thật</strong> với chính mình</p>
                  </div>
                  <div className="summary-item">
                    <span className="summary-icon">🌟</span>
                    <p><strong>Tạo ra ý nghĩa</strong> qua hành động</p>
                  </div>
                  <div className="summary-item">
                    <span className="summary-icon">💝</span>
                    <p><strong>Yêu thương</strong> không điều kiện</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-number">10</div>
          </div>
        ),
        right: (
          <div className="page-content cover-back">
            <div className="back-cover-design">
              <div className="back-stars">
                <div className="star star-1"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
              </div>
              <div className="back-ornament top"></div>
              <div className="back-title">
                <div className="back-title-backdrop"></div>
                <h1>VÔ TẬN</h1>
                <div className="infinity-symbol">∞</div>
              </div>
              <div className="back-quote">
                <div className="back-quote-text">
                  "Cuối mỗi cuốn sách<br />là khởi đầu của một cuốn khác"
                </div>
                <div className="back-quote-divider"></div>
                <div className="back-quote-text">
                  "Cuộc sống là hành trình,<br />không phải điểm đến"
                </div>
              </div>
              <div className="back-message">
                Hãy tiếp tục khám phá<br />những triết lý mới mỗi ngày
              </div>
              <div className="back-ornament bottom"></div>
              <div className="back-glow"></div>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  // ============= Map thành các tờ giấy (sheet) =============
  // Mỗi sheet i:
  //   - front = spreads[i].right (trang phải của spread i)
  //   - back  = spreads[i+1]?.left (trang trái của spread i+1)
  const papers = useMemo(
    () =>
      spreads.map((s, i) => ({
        front: s.right,
        back: spreads[i + 1]?.left ?? null,
      })),
    [spreads]
  );

  const [turned, setTurned] = useState(() => Array(papers.length).fill(false)); // tờ đã lật
  const [currentPaper, setCurrentPaper] = useState(0); // đang đứng ở spread nào
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(""); // "next" | "prev"
  const [activeIndex, setActiveIndex] = useState(-1);

  const canPrev = currentPaper > 0 && !isFlipping;
  const canNext = currentPaper < papers.length - 1 && !isFlipping;
  const atFinalSpread = currentPaper === papers.length - 1;

  // ============= Handlers =============
  const onFlipEnd = (e) => {
    if (e.propertyName !== "transform") return;
    if (!flippingRef.current) return;

    const act = pendingActionRef.current;
    if (act === "next") setCurrentPaper((v) => v + 1);
    if (act === "prev") setCurrentPaper((v) => v - 1);

    flippingRef.current = false;
    pendingActionRef.current = null;
    activeIndexRef.current = -1;

    setIsFlipping(false);
    setFlipDirection("");
    setActiveIndex(-1);
  };

  const nextPage = () => {
    if (!canNext || flippingRef.current) return;
    const i = currentPaper;
    flippingRef.current = true;
    pendingActionRef.current = "next";
    activeIndexRef.current = i;

    setFlipDirection("next");
    setActiveIndex(i);
    setIsFlipping(true);
    setTurned((t) => {
      const c = [...t];
      c[i] = true;
      return c;
    });
  };

  const prevPage = () => {
    if (!canPrev || flippingRef.current) return;
    const i = currentPaper - 1;
    flippingRef.current = true;
    pendingActionRef.current = "prev";
    activeIndexRef.current = i;

    setFlipDirection("prev");
    setActiveIndex(i);
    setIsFlipping(true);
    setTurned((t) => {
      const c = [...t];
      c[i] = false;
      return c;
    });
  };

  // Lật bằng bàn phím
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canNext, canPrev, currentPaper, isFlipping]);

  return (
    <div className="book-scene">
      <div className="book-container">
        {/* Back về Home */}
        <button
          className="global-back-btn"
          aria-label="Về trang chủ"
          onClick={() => navigate("/")}
        >
          <Home size={18} />
          <span>Về Trang Chủ</span>
        </button>

        {/* gáy sách */}
        <div className="book-spine">
          <div className="spine-text">TRIẾT LÝ CUỘC SỐNG</div>
        </div>

        {/* Stack sheets */}
        <div className={`book ${isFlipping ? "is-flipping" : ""}`}>
          {papers.map((paper, i) => {
            const clickableNext = !turned[i] && i === currentPaper;
            const clickablePrev = turned[i] && i === currentPaper - 1;

            return (
              <div
                key={i}
                className={[
                  "sheet",
                  turned[i] ? "is-turned" : "",
                  isFlipping && activeIndex === i
                    ? flipDirection === "next"
                      ? "flip-next"
                      : "flip-prev"
                    : "",
                  clickableNext || clickablePrev ? "is-clickable" : "",
                ].join(" ")}
                style={{ zIndex: papers.length - i }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (clickableNext) nextPage();
                  else if (clickablePrev) prevPage();
                }}
                onTransitionEnd={activeIndex === i ? onFlipEnd : undefined}
                data-index={i}
              >
                {/* mặt trước = trang phải của spread i */}
                <div className="page-face front">
                  <div className="page-pane right">{paper.front}</div>
                </div>

                {/* mặt sau = trang trái của spread i+1 */}
                <div className="page-face back">
                  <div className="page-pane left">
                    {paper.back ?? <div className="page-content page-left blank" />}
                  </div>
                </div>

                <div className="page-shadow" aria-hidden />
              </div>
            );
          })}
        </div>

        {/* Nút điều hướng */}
        <div className="navigation nav-prev">
          <button
            className="nav-button"
            onClick={prevPage}
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
            onClick={nextPage}
            disabled={!canNext}
            aria-label="Trang sau"
            title="Trang sau"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Chỉ số spread */}
        <div className="page-indicator">
          Trang {Math.min(currentPaper + 1, spreads.length)} / {spreads.length}
        </div>

        {/* Quiz ở spread cuối */}
        {atFinalSpread && (
          <button
            className="quiz-btn"
            aria-label="Đi tới Quiz"
            onClick={() => navigate("/quiz")}
          >
            <BookOpenCheck size={18} />
            <span>Làm Quiz</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PhilosophyStoryBook;
