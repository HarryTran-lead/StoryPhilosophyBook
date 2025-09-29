// src/StoryBook/philosophySpreads.jsx
import React from "react";
import AutoFitPage from "./AutoFitPage";

/**
 * Mỗi phần tử là 1 "spread" (cặp trang): { left: JSX|null, right: JSX|null }
 * Dùng AutoFitPage để nội dung tự scale vừa chiều cao page, không cuộn.
 */
export const spreads = [
  // ============ Spread 0: Bìa trước ============
  {
    left: null,
    right: (
      <AutoFitPage className="cover-front">
        <div className="cover-design">
          <div className="cover-stars">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
            <div className="star star-4" />
            <div className="star star-5" />
          </div>

          <div className="cover-ornament top" />

          <div className="cover-title">
            <div className="title-backdrop" />
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

          <div className="cover-ornament bottom" />
          <div className="cover-glow" />
        </div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 1: Chương I — Bản chất con người ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương I</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Bản Chất Con Người</h3>

          <p className="first-letter">
            Con người sinh ra không phải để tồn tại, mà để sống.
            Sự khác biệt giữa “tồn tại” và “sống” chính là ý thức về bản thân
            và khả năng tạo ra ý nghĩa.
          </p>

          <p>
            Aristotle từng nói: “Con người là động vật có lý trí”.
            Nhưng lý trí không chỉ là khả năng suy nghĩ, mà còn là khả năng chọn lựa,
            quyết định và chịu trách nhiệm cho những lựa chọn đó.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Tôi tư duy, vậy tôi tồn tại”</p>
            <div className="quote-author">— René Descartes</div>
          </div>
        </div>

        <div className="page-number">2</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="reflection-box">
          <div className="reflection-title">Suy Ngẫm</div>
          <p>
            Mỗi con người đều mang trong mình một vũ trụ riêng — với những ước mơ,
            nỗi sợ, niềm vui và nỗi buồn. Hiểu được bản thân không phải là đích đến,
            mà là một hành trình suốt đời.
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
      </AutoFitPage>
    ),
  },

  // ============ Spread 2: Chương II — Ý nghĩa & Mục đích ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương II</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Ý Nghĩa &amp; Mục Đích</h3>
          <p className="first-letter">
            Con người có thể chịu đựng hầu như bất cứ điều gì nếu tìm thấy một
            “vì sao” đủ lớn để tiếp tục. Khi có ý nghĩa, khó khăn trở thành bài học;
            khi vô nghĩa, cả tiện nghi cũng trở nên nặng nề.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Ai có một lý do ‘vì sao’ để sống có thể chịu đựng hầu như mọi ‘như thế nào’.”</p>
            <div className="quote-author">— Viktor E. Frankl</div>
          </div>
        </div>

        <div className="page-number">4</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="wisdom-section">
          <h4>3 Cách Nuôi Dưỡng Ý Nghĩa</h4>

          <div className="wisdom-item">
            <span className="wisdom-number">1</span>
            <div>
              <strong>Phục vụ:</strong> Đặt năng lực vào việc giúp ích người khác.
            </div>
          </div>

          <div className="wisdom-item">
            <span className="wisdom-number">2</span>
            <div>
              <strong>Thăng tiến nội tâm:</strong> Học, luyện, lớn lên mỗi ngày 1%.
            </div>
          </div>

          <div className="wisdom-item">
            <span className="wisdom-number">3</span>
            <div>
              <strong>Hiện diện:</strong> Làm trọn vẹn việc đang làm, không chạy theo so sánh.
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Gợi ý tự hỏi</div>
          <p>Điều gì, nếu thực hiện thường xuyên, khiến mình thấy cuộc đời đáng sống?</p>
        </div>

        <div className="page-number">5</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 3: Chương III — Tự do & Trách nhiệm ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương III</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Tự Do &amp; Trách Nhiệm</h3>
          <p className="first-letter">
            Tự do không phải muốn gì làm nấy, mà là khả năng chọn điều đúng đắn
            và giữ lời với chính mình. Mỗi lựa chọn đều kéo theo trách nhiệm —
            đó là giá của trưởng thành.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Con người bị kết án phải tự do; sau đó anh ta chịu trách nhiệm về mọi điều mình làm.”</p>
            <div className="quote-author">— Jean-Paul Sartre</div>
          </div>
        </div>

        <div className="page-number">6</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Nguyên Tắc Sống</h4>

          <div className="principle">
            <span className="principle-icon">🧭</span>
            <div><strong>Rõ giá trị:</strong> Biết điều gì là “không thoả hiệp”.</div>
          </div>

          <div className="principle">
            <span className="principle-icon">📅</span>
            <div><strong>Hứa ít, làm chắc:</strong> Cam kết nhỏ nhưng đều đặn.</div>
          </div>

          <div className="principle">
            <span className="principle-icon">🧱</span>
            <div><strong>Chịu trách nhiệm:</strong> Không đổ lỗi; hỏi “mình làm được gì?”.</div>
          </div>
        </div>

        <div className="page-number">7</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 4: Chương IV — Hạnh phúc & Khổ đau ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương IV</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Hạnh Phúc &amp; Khổ Đau</h3>
          <p className="first-letter">
            Hạnh phúc không phải là không có vấn đề, mà là có năng lực xử lý vấn đề.
            Khổ đau dạy ta khiêm nhường, biết ơn và trân trọng những điều bình dị.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Không phải sự vật làm ta rối loạn, mà là cách ta nhìn về chúng.”</p>
            <div className="quote-author">— Epictetus</div>
          </div>
        </div>

        <div className="page-number">8</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <h4>Cân Bằng</h4>
        <div className="balance-grid">
          <div className="balance-item">
            <span className="balance-symbol">🌿</span>
            <strong>Chấp nhận</strong>
            Những gì ngoài kiểm soát — buông.
          </div>
          <div className="balance-item">
            <span className="balance-symbol">🔥</span>
            <strong>Chủ động</strong>
            Những gì trong tầm với — hành động.
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Bài tập 2 phút</div>
          <p>Ghi 3 điều biết ơn hôm nay. Một niềm vui nhỏ cũng đáng ghi.</p>
        </div>

        <div className="page-number">9</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 5: Chương V — Thói quen & Kỷ luật ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương V</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Thói Quen &amp; Kỷ Luật</h3>
          <p className="first-letter">
            Tính cách là tổng các thói quen. Ta không vươn lên mức mục tiêu,
            ta rơi xuống mức hệ thống hằng ngày. Kỷ luật là lòng tự trọng trong hành động.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Mỗi ngày tốt hơn 1% — sau một năm, bạn khác hẳn.”</p>
            <div className="quote-author">— James Clear</div>
          </div>
        </div>

        <div className="page-number">10</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="wisdom-section">
          <h4>Chu Trình 4 Bước</h4>

          <div className="wisdom-item">
            <span className="wisdom-number">1</span>
            <div><strong>Tín hiệu:</strong> Làm nó rõ ràng — đặt sổ/giày ngay tầm mắt.</div>
          </div>

          <div className="wisdom-item">
            <span className="wisdom-number">2</span>
            <div><strong>Khao khát:</strong> Liên hệ với bản sắc “tôi là người…”.</div>
          </div>

          <div className="wisdom-item">
            <span className="wisdom-number">3</span>
            <div><strong>Hành vi:</strong> Bắt đầu cực nhỏ — 2 phút đầu tiên.</div>
          </div>

          <div className="wisdom-item">
            <span className="wisdom-number">4</span>
            <div><strong>Phần thưởng:</strong> Đánh dấu &amp; ăn mừng nhỏ để củng cố.</div>
          </div>
        </div>

        <div className="page-number">11</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 6: Chương VI — Tư duy phản biện ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương VI</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Tư Duy Phản Biện</h3>
          <p className="first-letter">
            Tin nhanh là bản năng; hiểu chậm là trí tuệ. Phản biện không để bác bỏ,
            mà để tiếp cận sự thật gần hơn.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Điều đáng sợ nhất là tin chắc những điều không đúng.”</p>
            <div className="quote-author">— Voltaire</div>
          </div>
        </div>

        <div className="page-number">12</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="wisdom-section">
          <h4>5 Câu Hỏi Socrates</h4>

          <div className="wisdom-item">
            <span className="wisdom-number">1</span>
            <div>Bằng chứng là gì?</div>
          </div>
          <div className="wisdom-item">
            <span className="wisdom-number">2</span>
            <div>Có cách hiểu nào khác không?</div>
          </div>
          <div className="wisdom-item">
            <span className="wisdom-number">3</span>
            <div>Điều gì mình đang giả định?</div>
          </div>
          <div className="wisdom-item">
            <span className="wisdom-number">4</span>
            <div>Hệ quả nếu điều này đúng/sai?</div>
          </div>
          <div className="wisdom-item">
            <span className="wisdom-number">5</span>
            <div>Một ví dụ ngược phản biện quan điểm?</div>
          </div>
        </div>

        <div className="page-number">13</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 7: Chương VII — Giao tiếp tử tế ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương VII</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Giao Tiếp Tử Tế</h3>
          <p className="first-letter">
            Lời nói có thể làm nở hoa một ngày, cũng có thể khép lại một cánh cửa.
            Tử tế không tốn kém, nhưng vô giá.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Trước khi nói, hãy đi qua ba cổng: Có thật không? Có tử tế không? Có cần thiết không?”</p>
            <div className="quote-author">— Tục ngữ</div>
          </div>
        </div>

        <div className="page-number">14</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Thực Hành Nhanh</h4>

          <div className="principle">
            <span className="principle-icon">👂</span>
            <div><strong>Lắng nghe:</strong> Nhắc lại ý người nói: “Bạn đang thấy rằng…”</div>
          </div>
          <div className="principle">
            <span className="principle-icon">💬</span>
            <div><strong>Nói “tôi”:</strong> “Tôi cảm thấy… khi… và tôi cần…”</div>
          </div>
          <div className="principle">
            <span className="principle-icon">🤝</span>
            <div><strong>Tìm điểm chung:</strong> “Chúng ta cùng muốn điều gì?”</div>
          </div>
        </div>

        <div className="page-number">15</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 8: Chương VIII — Thời gian & Tập trung ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương VIII</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Thời Gian &amp; Tập Trung</h3>
          <p className="first-letter">
            Ta không thiếu thời gian, ta chỉ thiếu ưu tiên. Mỗi “có” với điều không quan trọng
            đều là một “không” với điều quan trọng.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Những gì đo đếm được sẽ cải thiện.”</p>
            <div className="quote-author">— Peter Drucker</div>
          </div>
        </div>

        <div className="page-number">16</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <h4>Ma Trận Ưu Tiên (Eisenhower)</h4>
        <div className="balance-grid">
          <div className="balance-item">
            <span className="balance-symbol">⚡</span>
            <strong>Khẩn &amp; Quan trọng</strong>
            Làm ngay.
          </div>
          <div className="balance-item">
            <span className="balance-symbol">🗓️</span>
            <strong>Không Khẩn &amp; Quan trọng</strong>
            Lên lịch.
          </div>
          <div className="balance-item">
            <span className="balance-symbol">📤</span>
            <strong>Khẩn &amp; Không quan trọng</strong>
            Ủy quyền.
          </div>
          <div className="balance-item">
            <span className="balance-symbol">🗑️</span>
            <strong>Không Khẩn &amp; Không quan trọng</strong>
            Loại bỏ.
          </div>
        </div>

        <div className="page-number">17</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 9: Chương IX — Sáng tạo & Nghệ thuật ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương IX</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Sáng Tạo &amp; Nghệ Thuật</h3>
          <p className="first-letter">
            Sáng tạo nảy nở khi ta cho phép mình sai, thử và chơi.
            Ý tưởng thích những cuốn sổ tay và những bước đi ngoài trời.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Sáng tạo là trí thông minh đang vui đùa.”</p>
            <div className="quote-author">— Albert Einstein</div>
          </div>
        </div>

        <div className="page-number">18</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="wisdom-section">
          <h4>3 Thói Quen Nuôi Sáng Tạo</h4>

          <div className="wisdom-item">
            <span className="wisdom-number">1</span>
            <div><strong>Nhật ký ý tưởng:</strong> Ghi lại mọi tia loé, chưa cần hoàn hảo.</div>
          </div>
          <div className="wisdom-item">
            <span className="wisdom-number">2</span>
            <div><strong>Input đa dạng:</strong> Đọc khác lĩnh vực, gặp người khác ngành.</div>
          </div>
          <div className="wisdom-item">
            <span className="wisdom-number">3</span>
            <div><strong>Chu kỳ làm-nghỉ:</strong> Pomodoro 25′ làm, 5′ thả lỏng.</div>
          </div>
        </div>

        <div className="page-number">19</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 10: Chương X — Sống chậm & Chánh niệm ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương X</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Sống Chậm &amp; Chánh Niệm</h3>
          <p className="first-letter">
            Khi ta thật sự có mặt, từng hơi thở cũng là phép màu.
            Chậm lại để thấy rõ, rồi bước đi cho đúng.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>“Bình an có mặt trong từng bước chân tỉnh thức.”</p>
            <div className="quote-author">— Thiền sư Thích Nhất Hạnh</div>
          </div>
        </div>

        <div className="page-number">20</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="meditation-box">
          <div className="meditation-title">Thực Hành 1 Phút</div>
          <p>
            Hít vào đếm 4 — Giữ 2 — Thở ra 6. Quan sát cảm giác toàn thân.
            Trở lại với âm thanh, ánh sáng, nhịp tim.
          </p>
        </div>

        <div className="connection-wisdom">
          <div className="connection-title">Kết Nối Lại</div>
          <p>Gọi cho một người thân và nói “cảm ơn vì…”. Lòng biết ơn là chiếc cầu.</p>
        </div>

        <div className="page-number">21</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 11: Kết & Bìa sau ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="final-content">
          <div className="conclusion-title">
            <h2>Hành Trình Không Điểm Đến</h2>
          </div>

          <div className="final-wisdom">
            <p>
              Triết học không phải là bộ sưu tập những câu trả lời,
              mà là nghệ thuật đặt ra những câu hỏi đúng.
              Cuộc sống không phải là vấn đề cần giải quyết,
              mà là bí ẩn cần trải nghiệm.
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

        <div className="page-number">22</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="cover-back">
        <div className="back-cover-design">
          <div className="back-stars">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
          </div>

          <div className="back-ornament top" />

          <div className="back-title">
            <div className="back-title-backdrop" />
            <h1>VÔ TẬN</h1>
            <div className="infinity-symbol">∞</div>
          </div>

          <div className="back-quote">
            <div className="back-quote-text">
              “Cuối mỗi cuốn sách<br />là khởi đầu của một cuốn khác”
            </div>
            <div className="back-quote-divider" />
            <div className="back-quote-text">
              “Cuộc sống là hành trình,<br />không phải điểm đến”
            </div>
          </div>

          <div className="back-message">
            Hãy tiếp tục khám phá<br />những triết lý mới mỗi ngày
          </div>

          <div className="back-ornament bottom" />
          <div className="back-glow" />
        </div>
      </AutoFitPage>
    ),
  },
];

/** Chuyển spreads -> mảng pages cho HTMLFlipBook (showCover=true) */
export const spreadsToPages = (spreads) => {
  const pages = [];

  // 0) Bìa trước = right của spread 0
  pages.push(
    <div className="page" key="cover-front">
      {spreads[0].right}
    </div>
  );

  // 1) Các spread sau: left rồi right (nếu có)
  for (let i = 1; i < spreads.length; i++) {
    const s = spreads[i];
    if (s.left) {
      pages.push(<div className="page" key={`p-${i}-L`}>{s.left}</div>);
    }
    if (s.right) {
      pages.push(<div className="page" key={`p-${i}-R`}>{s.right}</div>);
    }
  }

  return pages;
};
