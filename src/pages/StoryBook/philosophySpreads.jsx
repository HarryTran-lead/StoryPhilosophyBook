// src/StoryBook/philosophySpreads.jsx
import React from "react";

/** Mảng spreads: mỗi phần tử { left: JSX|null, right: JSX|null } */
export const spreads = [
  // Spread 0: Bìa trước
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

  // Spread 1: Chương I
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
            <div><strong>Ý thức bề mặt:</strong> Những gì chúng ta nhận biết trực tiếp</div>
          </div>
          <div className="wisdom-item">
            <span className="wisdom-number">2</span>
            <div><strong>Tiềm thức:</strong> Những kinh nghiệm và ký ức được lưu giữ</div>
          </div>
          <div className="wisdom-item">
            <span className="wisdom-number">3</span>
            <div><strong>Vô thức tập thể:</strong> Trí tuệ chung của nhân loại</div>
          </div>
        </div>
        <div className="page-number">3</div>
      </div>
    ),
  },

  // Spread cuối: Kết & bìa sau
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
];

/** Chuyển spreads -> mảng pages cho HTMLFlipBook (showCover=true) */
export const spreadsToPages = (spreads) => {
  const arr = [];
  // 0) Bìa trước = right của spread 0
  arr.push(
    <div className="page" key="cover-front">
      {spreads[0].right}
    </div>
  );

  // 1) Các spread sau: left rồi right (nếu có)
  for (let i = 1; i < spreads.length; i++) {
    const s = spreads[i];
    if (s.left) {
      arr.push(
        <div className="page" key={`p-${i}-L`}>
          {s.left}
        </div>
      );
    }
    if (s.right) {
      arr.push(
        <div className="page" key={`p-${i}-R`}>
          {s.right}
        </div>
      );
    }
  }
  return arr;
};
