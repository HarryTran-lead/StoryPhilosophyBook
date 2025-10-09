// src/StoryBook/philosophySpreads.jsx
import React from "react";
import AutoFitPage from "./AutoFitPage";
import Coverbook from "../../assets/picture/Coverbook.png";

/**
 * Mỗi phần tử là 1 "spread" (cặp trang): { left: JSX|null, right: JSX|null }
 * Dùng AutoFitPage để nội dung tự scale vừa chiều cao page, không cuộn.
 */
export const spreads = [
  // ============ Spread 0: Bìa trước ============
  {
    left: null,
    right: (
      <AutoFitPage
        className="cover-front"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(124,58,237,.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(245,158,11,.12) 0%, transparent 40%),
            url(${Coverbook}) center / cover no-repeat,
            linear-gradient(135deg, #0a0a14 0%, #1a1a2e 50%, #0f0f1a 100%)
          `
        }}
      >
        {/* Nếu muốn chỉ hiển thị ảnh full-bleed, xóa các khối dưới đi.
            Nếu vẫn muốn giữ tiêu đề/quote chồng lên ảnh, giữ nguyên nội dung. */}
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
                <span className="title-line-1">CHỦ NGHĨA</span>
                <span className="title-line-2">DUY VẬT LỊCH SỬ</span>
              </h1>
              <div className="subtitle">
                Đời sống vật chất &amp; tinh thần của xã hội vận động ra sao?
              </div>
            </div>

            <div className="cover-quote">
              <div className="quote-marks">"</div>
              <div className="quote-text">
                Không phải ý thức của con người quyết định tồn tại của họ;
                <br />
                trái lại, chính tồn tại xã hội của họ quyết định ý thức của họ
              </div>
              <div className="quote-author">— Karl Marx</div>
              <div className="quote-marks closing">"</div>
            </div>

          <div className="cover-ornament bottom" />
          <div className="cover-glow" />
        </div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 1: Dẫn nhập — “Cặp kính” duy vật lịch sử ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Dẫn nhập</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Một “cặp kính” để nhìn xã hội</h3>
          <p className="first-letter">
            Vì sao mỗi thời đại lại có phong tục, luật pháp, niềm tin khác nhau?
            Vì sao suy nghĩ hôm nay khác xa cha ông? Chủ nghĩa duy vật lịch sử
            trao cho ta “cặp kính” để thấy sợi dây nối giữa đời sống vật chất và
            đời sống tinh thần: cách con người sản xuất, sinh sống và quan hệ
            với nhau định hình những gì họ tin, họ nghĩ, họ mơ ước.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>
              “Cách chúng ta sống và lao động sẽ quyết định cách chúng ta suy
              nghĩ.”
            </p>
            <div className="quote-author">
              — Tóm lược tinh thần duy vật lịch sử
            </div>
          </div>
        </div>

        <div className="page-number">2</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Mục tiêu học</h4>
          <div className="principle">
            <span className="principle-icon">🎯</span>
            <div>
              <strong>Nắm khái niệm:</strong> Tồn tại xã hội (TTXH) &amp; Ý thức
              xã hội (YTXH).
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🧭</span>
            <div>
              <strong>Hiểu quan hệ:</strong> Vật chất quyết định tinh thần và
              tác động trở lại.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🔎</span>
            <div>
              <strong>Biết vận dụng:</strong> Giải thích biến đổi tư tưởng qua
              biến đổi sản xuất.
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Từ khóa</div>
          <p>
            Phương thức sản xuất • Lực lượng sản xuất • Quan hệ sản xuất • Tâm
            lý xã hội • Hệ tư tưởng
          </p>
        </div>

        <div className="page-number">3</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 2: Chương I — Tồn tại xã hội ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương I</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Tồn Tại Xã Hội (TTXH) — Nền móng vật chất</h3>
          <p className="first-letter">
            Hãy hình dung xã hội như một ngôi nhà: để vững chắc cần nền móng
            tốt. Tồn tại xã hội chính là “nền móng” ấy — toàn bộ đời sống vật
            chất và những điều kiện sinh hoạt vật chất của xã hội.
          </p>

          <div className="wisdom-section">
            <h4>Ba yếu tố cơ bản</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Phương thức sản xuất của cải vật chất:</strong> yếu tố
                quyết định nhất; gồm <em>lực lượng sản xuất</em> và{" "}
                <em>quan hệ sản xuất</em>.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Hoàn cảnh địa lý &amp; điều kiện tự nhiên:</strong> tạo
                thuận lợi/khó khăn nhưng không quyết định tất cả.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Dân cư:</strong> mật độ, cơ cấu, tăng trưởng — “những
                người thợ” dựng nhà xã hội.
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">4</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        {/* Đổi "Gợi ý hình ảnh" -> "Mẫu chuyện nhỏ" */}
        <div className="reflection-box">
          <div className="reflection-title">Mẫu chuyện nhỏ</div>
          <p>
            Ở một xã miền núi, nhóm thanh niên mang về máy xay ngô chạy điện và mở điểm thu mua.
            Chỉ sau hai vụ, lịch làm việc đổi hẳn: phụ nữ rảnh buổi tối đi lớp xoá mù,
            trẻ con có tiền mua sách. Làng lập quy ước chia ca và tổ góp vốn — không còn
            cảnh “giữ bí quyết gia truyền” như trước. <em>LLSX</em> đổi → <em>QHSX</em> đổi,
            và đời sống vật chất toàn xã hội nhích lên một nấc.
          </p>
        </div>

        <div className="life-principles">
          <h4>Phương thức sản xuất</h4>
          <div className="principle">
            <span className="principle-icon">🛠️</span>
            <div>
              <strong>Lực lượng sản xuất (LLSX):</strong> công cụ, công nghệ,
              tay nghề, tri thức.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🤝</span>
            <div>
              <strong>Quan hệ sản xuất (QHSX):</strong> sở hữu, tổ chức quản lý,
              phân phối.
            </div>
          </div>
        </div>

        <div className="page-number">5</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 3: Chương II — Ý thức xã hội ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương II</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Ý Thức Xã Hội (YTXH) — “Linh hồn” của xã hội</h3>
          <p className="first-letter">
            Nếu TTXH là “thân thể”, YTXH là toàn bộ đời sống tinh thần nảy sinh
            từ và phản ánh TTXH ở mỗi giai đoạn: tư tưởng, quan điểm, niềm tin,
            phong tục, luật lệ…
          </p>

          <div className="wisdom-section">
            <h4>Cấu trúc hai tầng</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Tâm lý xã hội:</strong> tình cảm, thói quen, truyền
                thống — hình thành tự phát trong đời sống hằng ngày.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Hệ tư tưởng xã hội:</strong> quan điểm đã được hệ thống
                hóa (chính trị, pháp luật, triết học…).
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">6</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Tính giai cấp của YTXH</h4>
          <div className="principle">
            <span className="principle-icon">🏛️</span>
            <div>
              <strong>Giai cấp thống trị</strong> về kinh tế thường{" "}
              <em>thống trị</em> đời sống tinh thần.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">⚖️</span>
            <div>
              Các giai cấp bị trị có <strong>hệ tư tưởng riêng</strong> → đấu
              tranh tư tưởng.
            </div>
          </div>
        </div>

        {/* Đổi "Gợi ý hình ảnh" -> "Mẫu chuyện nhỏ" */}
        <div className="reflection-box">
          <div className="reflection-title">Mẫu chuyện nhỏ</div>
          <p>
            Nhà máy giày mở ở thị trấn. Bảng tin công ty đăng bài “Gia đình là động lực — hãy tự nguyện tăng ca”:
            một cách nhìn từ phía quản lý. Trong quán nước đối diện, nhóm công nhân chia sẻ bài viết về quyền nghỉ bù
            từ một blog độc lập. Vài tuần sau, họ đề xuất quỹ ca đêm và lịch bù minh bạch. Cùng một sự kiện,
            hai hệ tư tưởng đối thoại ngay trên cùng con phố.
          </p>
        </div>
        <div className="page-number">7</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 4: Chương III — Các hình thái ý thức xã hội ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương III</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Những “hình thái” chủ yếu</h3>
          <div className="wisdom-section">
            <h4>Danh mục nhanh</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Ý thức chính trị</strong>
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Ý thức pháp quyền</strong>
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Ý thức đạo đức</strong>
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>
                <strong>Ý thức nghệ thuật (thẩm mỹ)</strong>
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">5</span>
              <div>
                <strong>Ý thức tôn giáo</strong>
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">6</span>
              <div>
                <strong>Ý thức khoa học</strong>
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">7</span>
              <div>
                <strong>Ý thức triết học</strong> — hạt nhân lý luận của thế
                giới quan.
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">8</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="reflection-box">
          <div className="reflection-title">Liên hệ chéo</div>
          <p>
            Chính trị ảnh hưởng nghệ thuật; khoa học chi phối triết học; tôn
            giáo, đạo đức tác động pháp luật…
          </p>
        </div>

        <div className="philosophy-quote">
          <div className="quote-symbol">❝</div>
          <p>
            “Mỗi hình thái phản ánh TTXH theo cách riêng — bằng quyền lực, quy
            tắc, giá trị, niềm tin, chân lý…”
          </p>
          <div className="quote-author">— Tóm lược</div>
        </div>

        <div className="page-number">9</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 5: Chương IV — Vật chất quyết định tinh thần ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương IV</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Nguyên tắc cơ bản</h3>
          <p className="first-letter">
            Tồn tại xã hội quyết định ý thức xã hội. TTXH có trước và là nguồn
            gốc, YTXH có sau và là sự phản ánh. Khi phương thức sản xuất thay
            đổi, sớm hay muộn YTXH cũng thay đổi theo.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>
              “Nhà máy mọc lên — tư tưởng về quyền của người lao động &amp; dân
              chủ hiện đại lan rộng.”
            </p>
            <div className="quote-author">— Ví dụ minh hoạ</div>
          </div>
        </div>

        <div className="page-number">10</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <h4>Sơ đồ mũi tên</h4>
        <div className="balance-grid">
          <div className="balance-item">
            <span className="balance-symbol">🏭</span>
            <strong>Biến đổi sản xuất</strong>
            Công nghệ, tổ chức, phân công lao động…
          </div>
          <div className="balance-item">
            <span className="balance-symbol">➡️</span>
            <strong>Biến đổi ý thức</strong>
            Quyền, luật, đạo đức, nghệ thuật, tôn giáo…
          </div>
        </div>

        <div className="page-number">11</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 6: Chương V — Tính độc lập tương đối của YTXH ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương V</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Không chỉ là tấm gương thụ động</h3>
          <div className="wisdom-section">
            <h4>Năm biểu hiện chính</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Lạc hậu:</strong> thói quen cũ tiếp tục tồn tại (vd.
                định kiến giới) dù cơ sở đã đổi.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Vượt trước:</strong> tư tưởng khoa học/tiến bộ dự báo
                tương lai.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Kế thừa:</strong> thế hệ sau không bắt đầu từ số 0.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>
                <strong>Tác động lẫn nhau:</strong> chính trị ↔ nghệ thuật, khoa
                học ↔ triết học…
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">5</span>
              <div>
                <strong>Tác động trở lại TTXH:</strong> tư tưởng tiến bộ thúc
                đẩy phát triển; tư tưởng lạc hậu kìm hãm.
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">12</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        {/* Đổi "Gợi ý hình ảnh" -> "Mẫu chuyện nhỏ" */}
        <div className="reflection-box">
          <div className="reflection-title">Mẫu chuyện nhỏ</div>
          <p>
            Ở một trường huyện, cô giáo Vật lý lập CLB maker. Trước cả khi xưởng mới được đầu tư,
            học sinh đã thống nhất nội quy “ai cũng được thử — không phân biệt nam nữ” và mở ngày chia sẻ dự án.
            Một năm sau, phòng lab về tới nơi; thói quen “nam máy — nữ sổ” đã biến mất từ trước.
            <em>Ý thức mới</em> đi <em>vượt trước</em> và kéo điều kiện vật chất thay đổi theo.
          </p>
        </div>

        <div className="philosophy-quote">
          <div className="quote-symbol">❝</div>
          <p>“Ý tưởng đúng lúc là đòn bẩy của lịch sử.”</p>
          <div className="quote-author">— Ẩn dụ biện chứng</div>
        </div>

        <div className="page-number">13</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 7: Chương VI — Ví dụ & vận dụng ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương VI</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Minh họa nhanh</h3>
          <div className="wisdom-section">
            <h4>TTXH → YTXH</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                Internet phổ cập → tư duy mở, văn hoá số, mô hình làm việc mới.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                Đô thị hoá → chuẩn mực sống, pháp luật, lối sống hiện đại.
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                Chuỗi cung ứng toàn cầu → ý thức về quyền lao động và tiêu dùng
                bền vững.
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">14</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>YTXH → TTXH (tác động trở lại)</h4>
          <div className="principle">
            <span className="principle-icon">🚀</span>
            <div>
              Phong trào khoa học, giáo dục mở thúc đẩy năng suất &amp; đổi mới.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🛑</span>
            <div>
              Tập tục lạc hậu kìm hãm lao động nữ, lãng phí nguồn lực xã hội.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">📜</span>
            <div>
              Cải cách pháp luật phản chiếu tư tưởng mới, đồng thời tạo môi
              trường sản xuất mới.
            </div>
          </div>
        </div>

        <div className="page-number">15</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 8: Chương VII — Câu hỏi Socrates & thảo luận ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương VII</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Gợi ý tranh biện &amp; tư duy phản biện</h3>
          <div className="wisdom-section">
            <h4>5 câu hỏi kiểu Socrates</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                Bằng chứng TTXH nào đang đổi (công nghệ, tổ chức, lao động)?
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                Những thay đổi YTXH nào đi kèm (luật, đạo đức, nghệ thuật)?
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>Mình đang giả định gì về “nguyên nhân–hệ quả”?</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>Ví dụ phản chứng: nơi TTXH tương tự nhưng YTXH khác?</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">5</span>
              <div>Hệ quả thực tiễn nếu nhận định đúng/sai?</div>
            </div>
          </div>
        </div>

        <div className="page-number">16</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="reflection-box">
          <div className="reflection-title">Câu hỏi thảo luận</div>
          <p>
            Khi mức sống vật chất tăng, vì sao một số tập tục vẫn bền bỉ? Hãy
            chỉ ra yếu tố “kế thừa”, “lạc hậu”, hay “vượt trước”.
          </p>
        </div>

        <div className="page-number">17</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 9: Chương VIII — Bảng tóm tắt & so sánh ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương VIII</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Tóm tắt nhanh</h3>

          <div className="balance-grid">
            <div className="balance-item">
              <span className="balance-symbol">🏗️</span>
              <strong>TTXH</strong>
              Nền móng vật chất: phương thức sản xuất, tự nhiên, dân cư.
            </div>
            <div className="balance-item">
              <span className="balance-symbol">🧠</span>
              <strong>YTXH</strong>
              Đời sống tinh thần: tâm lý xã hội &amp; hệ tư tưởng; mang tính
              giai cấp.
            </div>
          </div>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>
              “Vật chất quyết định tinh thần — tinh thần tác động trở lại vật
              chất.”
            </p>
            <div className="quote-author">— Quy luật tổng quát</div>
          </div>
        </div>

        <div className="page-number">18</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Vận dụng ôn tập</h4>
          <div className="principle">
            <span className="principle-icon">📝</span>
            <div>
              <strong>3′–Bài tập:</strong> Nêu 1 biến đổi sản xuất tại địa
              phương và 2 biến đổi tinh thần đi kèm.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🧩</span>
            <div>
              <strong>So khớp:</strong> Ghi 2 ví dụ YTXH “lạc hậu” và 1 ví dụ
              “vượt trước”.
            </div>
          </div>
        </div>

        <div className="page-number">19</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 10: Chương IX — Lời kết học thuật ============
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương IX</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Ý nghĩa phương pháp</h3>
          <p className="first-letter">
            Hiểu quan hệ TTXH–YTXH giúp ta nhìn thấy “cơ chế sâu” của biến đổi
            xã hội, từ đó cải cách không chỉ kinh tế–kỹ thuật mà còn văn hoá–tư
            tưởng, để phát triển toàn diện và bền vững.
          </p>

          <div className="reflection-box">
            <div className="reflection-title">Gợi ý thực tiễn</div>
            <p>
              Phát triển kinh tế đi đôi xây dựng đời sống tinh thần lành mạnh;
              coi trọng giáo dục, khoa học, pháp quyền.
            </p>
          </div>
        </div>

        <div className="page-number">20</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="meditation-box">
          <div className="meditation-title">Một phút suy ngẫm</div>
          <p>
            Trong lớp, trong gia đình, trong công việc — điều kiện vật chất nào
            đang dẫn dắt lối nghĩ của bạn? Và bạn có thể dùng tư tưởng tiến bộ
            nào để tác động ngược, cải thiện điều kiện ấy?
          </p>
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
            <h2>Vật chất &amp; tinh thần — Nhịp đôi của lịch sử</h2>
          </div>

          <div className="final-wisdom">
            <p>
              Để thay đổi xã hội toàn diện, không chỉ phát triển sản xuất, mà
              còn nuôi dưỡng đời sống tinh thần tiến bộ. Hai mặt ấy song hành,
              tác động qua lại, tạo nên sự vận động không ngừng của lịch sử.
            </p>

            <div className="life-summary">
              <div className="summary-item">
                <span className="summary-icon">🏗️</span>
                <p><strong>Xây nền móng vật chất</strong> </p>
              </div>

              <div className="summary-item">
                <span className="summary-icon">🧠</span>
                <p><strong>Bồi đắp ý thức</strong> </p>
              </div>

              <div className="summary-item">
                <span className="summary-icon">🔄</span>
                <p><strong>Phối hợp biện chứng</strong> </p>
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
            <h1>BIỆN CHỨNG</h1>
            <div className="infinity-symbol">∞</div>
          </div>

          <div className="back-quote">
            <div className="back-quote-text">
              “Mỗi bước tiến vật chất
              <br />
              gợi mở một chân trời tinh thần mới”
            </div>
            <div className="back-quote-divider" />
            <div className="back-quote-text">
              “Kết thúc một trang sách
              <br />
              là khởi đầu của trang khác”
            </div>
          </div>

          <div className="back-message">
            Tiếp tục quan sát TTXH &amp; YTXH
            <br />
            trong đời sống hằng ngày
          </div>

          <div className="back-ornament bottom" />
          <div className="back-glow" />
        </div>
      </AutoFitPage>
    ),
  },
];

/** Chuyển spreads -> mảng pages cho HTMLFlipBook (showCover=true)
 *  + Thêm 2 trang Mục lục (TOC-L & TOC-R) ngay sau cover-front (index = 1,2)
 *  + Nhận onTocClick để lật trang khi bấm mục lục
 */
export const spreadsToPages = (spreads, { onTocClick } = {}) => {
  const pages = [];

  // 0) Bìa trước = right của spread 0
  pages.push(
    <div className="page" key="cover-front">
      {spreads[0].right}
    </div>
  );

  // Mapping gốc (không TOC): left = 2*s - 1, right = 2*s (s>=1).
  // Sau khi có 2 trang TOC -> cộng +2 cho mọi trang nội dung.
  const OFFSET = 2;
  const idxFor = (spreadIndex, side = "left") => {
    if (spreadIndex <= 0) return 0; // cover
    const base = side === "left" ? 2 * spreadIndex - 1 : 2 * spreadIndex;
    return base + OFFSET;
  };

  // Danh sách mục lục (label + spread đích)
  const toc = [
    { label: "Dẫn nhập", s: 1, side: "left" },
    { label: "Chương I — Tồn Tại Xã Hội", s: 2, side: "left" },
    { label: "Chương II — Ý Thức Xã Hội", s: 3, side: "left" },
    { label: "Chương III — Hình thái YTXH", s: 4, side: "left" },
    { label: "Chương IV — Vật chất quyết định tinh thần", s: 5, side: "left" },
    { label: "Chương V — Tính độc lập tương đối của YTXH", s: 6, side: "left" },
    { label: "Chương VI — Ví dụ & vận dụng", s: 7, side: "left" },
    { label: "Chương VII — Câu hỏi & thảo luận", s: 8, side: "left" },
    { label: "Chương VIII — Tóm tắt & so sánh", s: 9, side: "left" },
    { label: "Chương IX — Ý nghĩa phương pháp", s: 10, side: "left" },
    { label: "Kết — Lời cuối", s: 11, side: "left" },
  ];

  // Chia TOC thành 2 trang cho đẹp
  const mid = Math.ceil(toc.length / 2);
  const tocLeft = toc.slice(0, mid);
  const tocRight = toc.slice(mid);

  const renderTocList = (items) => (
    <div className="wisdom-section">
      <h4>Chương / Trang</h4>
      {items.map((item, i) => {
        const targetIdx = idxFor(item.s, item.side);
        const printedPage = 2 * item.s; // số trang hiển thị trong nội dung (left của spread s)
        return (
          <div className="principle" key={`${item.label}-${i}`}>
            <span className="principle-icon">📖</span>
            <a
              href="#"
              className="toc-link"
              data-goto={targetIdx}
              title={`Tới trang ${printedPage}`}
              onClick={onTocClick}
            >
              <strong>{item.label}</strong>
              <span className="toc-page"> — tr. {printedPage}</span>
            </a>
          </div>
        );
      })}
    </div>
  );

  // 1) TOC-L (index = 1)
  pages.push(
    <div className="page" key="toc-L">
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Mục lục</h2>
          <div className="chapter-ornament">❦</div>
        </div>
        <div className="page-body">{renderTocList(tocLeft)}</div>
        {/* Không in số trang cho TOC để giữ numbering nội dung cũ */}
      </AutoFitPage>
    </div>
  );

  // 2) TOC-R (index = 2)
  pages.push(
    <div className="page" key="toc-R">
      <AutoFitPage className="page-right">
        <div className="page-header">
          <h2>Mục lục (tiếp)</h2>
          <div className="chapter-ornament">❦</div>
        </div>
        <div className="page-body">{renderTocList(tocRight)}</div>
        {/* Không in số trang cho TOC để giữ numbering nội dung cũ */}
      </AutoFitPage>
    </div>
  );

  // 3) Các spread sau: left rồi right (nếu có)
  for (let i = 1; i < spreads.length; i++) {
    const s = spreads[i];
    if (s.left) pages.push(<div className="page" key={`p-${i}-L`}>{s.left}</div>);
    if (s.right) pages.push(<div className="page" key={`p-${i}-R`}>{s.right}</div>);
  }

  return pages;
};
