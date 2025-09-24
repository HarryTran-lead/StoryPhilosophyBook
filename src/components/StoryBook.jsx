import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/StoryBook.css';
import '../styles/book-amber-theme.css';
import '../styles/marxism-amber.css';

const PhilosophyStoryBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');

  const pages = [
    // Bìa trước
    {
      left: null,
      right: (
        <div className="page-content cover-front">
          <div className="cover-design">
            <div className="cover-ornament top"></div>
            <div className="cover-title">
              <h1>TRIẾT LÝ<br/>CUỘC SỐNG</h1>
              <div className="author">Những Suy Ngẫm Về Đời Người</div>
            </div>
            <div className="cover-quote">
              "Cuộc sống không phải là tìm kiếm bản thân,<br/>
              mà là tạo dựng bản thân"<br/>
              <em>— George Bernard Shaw</em>
            </div>
            <div className="cover-ornament bottom"></div>
          </div>
        </div>
      )
    },
    
    // Chương 1: Bản Chất Con Người
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
      )
    },

    // Chương 2: Ý Nghĩa Cuộc Sống
    {
      left: (
        <div className="page-content page-left">
          <div className="page-header">
            <h2>Chương II</h2>
            <div className="chapter-ornament">❦</div>
          </div>
          <div className="page-body">
            <h3>Tìm Kiếm Ý Nghĩa</h3>
            <p>
              Victor Frankl, người từng trải qua trại tập trung Nazi, đã khám phá ra rằng con người có thể chịu đựng mọi đau khổ nếu họ tìm thấy ý nghĩa trong đó.
            </p>
            <p>
              Ý nghĩa không phải là thứ chúng ta tìm thấy sẵn có, mà là thứ chúng ta tạo ra qua những hành động, mối quan hệ và thái độ sống của mình.
            </p>
            
            <div className="life-principles">
              <h4>Ba Nguồn Ý Nghĩa</h4>
              <div className="principle">
                <div className="principle-icon">🎯</div>
                <div>
                  <strong>Công việc sáng tạo:</strong> Những gì ta cống hiến cho thế giới
                </div>
              </div>
            </div>
          </div>
          <div className="page-number">4</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <div className="life-principles">
            <div className="principle">
              <div className="principle-icon">❤️</div>
              <div>
                <strong>Giá trị trải nghiệm:</strong> Những gì ta nhận từ thế giới
              </div>
            </div>
            <div className="principle">
              <div className="principle-icon">🧘</div>
              <div>
                <strong>Thái độ với khổ đau:</strong> Lập trường ta chọn khi đối mặt khó khăn
              </div>
            </div>
          </div>

          <div className="meditation-box">
            <div className="meditation-title">Thiền Định</div>
            <p>
              "Giữa kích thích và phản ứng có một khoảng không gian. Trong khoảng không gian đó nằm quyền tự do và sức mạnh lựa chọn phản ứng của chúng ta. Trong phản ứng của chúng ta nằm sự phát triển và hạnh phúc của chúng ta."
            </p>
            <div className="meditation-author">— Viktor Frankl</div>
          </div>

          <div className="nature-wisdom">
            <p><em>Cuộc sống giống như dòng sông - không bao giờ giống nhau ở hai thời điểm, nhưng luôn hướng về biển cả của vô tận.</em></p>
          </div>
          
          <div className="page-number">5</div>
        </div>
      )
    },

    // Chương 3: Hạnh Phúc và Đau Khổ
    {
      left: (
        <div className="page-content page-left">
          <div className="page-header">
            <h2>Chương III</h2>
            <div className="chapter-ornament">❦</div>
          </div>
          <div className="page-body">
            <h3>Nghịch Lý Hạnh Phúc</h3>
            <p className="first-letter">
              Hạnh phúc không thể được theo đuổi trực tiếp. Nó giống như bóng của chúng ta - càng đuổi theo, nó càng tránh xa. Chỉ khi ta quên đi việc tìm kiếm nó và tập trung vào những việc có ý nghĩa, hạnh phúc mới tự nhiên đến.
            </p>
            <p>
              Đau khổ không phải là kẻ thù của hạnh phúc. Đau khổ là thầy dạy giúp ta trân trọng niềm vui, là đất để trồng trọt sự trưởng thành.
            </p>

            <div className="duality-concept">
              <h4>Âm Dương Cuộc Sống</h4>
              <div className="yin-yang-wisdom">
                <p>Trong triết học Đông phương, mọi thứ đều có hai mặt đối lập nhưng bổ sung cho nhau.</p>
              </div>
            </div>
          </div>
          <div className="page-number">6</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <div className="balance-grid">
            <div className="balance-item">
              <div className="balance-symbol light">☀️</div>
              <strong>Ánh sáng</strong>
              <p>Niềm vui, hy vọng, thành công</p>
            </div>
            <div className="balance-item">
              <div className="balance-symbol dark">🌙</div>
              <strong>Bóng tối</strong>
              <p>Nỗi buồn, thất bại, khó khăn</p>
            </div>
          </div>

          <div className="wisdom-insight">
            <p>
              Không có ánh sáng vĩnh cửu, cũng không có bóng tối vĩnh cửu. Cuộc sống là sự luân phiên của cả hai, và trong sự luân phiên đó, ta học cách trân trọng từng khoảnh khắc.
            </p>
          </div>

          <div className="stoic-quote">
            <div className="quote-symbol">❝</div>
            <p>"Bạn không thể kiểm soát những gì xảy ra với mình, nhưng bạn có thể kiểm soát phản ứng của mình với những điều đó."</p>
            <div className="quote-author">— Epictetus</div>
          </div>

          <div className="growth-note">
            <p><em>Mỗi thử thách là một cơ hội để khám phá sức mạnh ẩn giấu trong bản thân.</em></p>
          </div>

          <div className="page-number">7</div>
        </div>
      )
    },

    // Chương 4: Tình Yêu và Kết Nối
    {
      left: (
        <div className="page-content page-left">
          <div className="page-header">
            <h2>Chương IV</h2>
            <div className="chapter-ornament">❦</div>
          </div>
          <div className="page-body">
            <h3>Tình Yêu - Ngôn Ngữ Của Vũ Trụ</h3>
            <p className="first-letter">
              Tình yêu không chỉ là cảm xúc, mà là hành động. Không chỉ là nhận, mà là cho đi. Không chỉ là cảm giác, mà là quyết định hàng ngày.
            </p>
            <p>
              Erich Fromm đã phân biệt giữa "yêu" như một động từ và "yêu" như một danh từ. Tình yêu thật sự là nghệ thuật, đòi hỏi sự học hỏi, thực hành và cống hiến.
            </p>

            <div className="love-dimensions">
              <h4>Năm Chiều Của Tình Yêu</h4>
              <div className="love-item">
                <span className="love-icon">🤗</span>
                <div>
                  <strong>Chăm sóc:</strong> Quan tâm đến sự phát triển của người khác
                </div>
              </div>
              <div className="love-item">
                <span className="love-icon">🛡️</span>
                <div>
                  <strong>Trách nhiệm:</strong> Sẵn sàng đáp ứng nhu cầu của họ
                </div>
              </div>
            </div>
          </div>
          <div className="page-number">8</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <div className="love-dimensions">
            <div className="love-item">
              <span className="love-icon">👁️</span>
              <div>
                <strong>Tôn trọng:</strong> Chấp nhận họ như chính họ
              </div>
            </div>
            <div className="love-item">
              <span className="love-icon">🧠</span>
              <div>
                <strong>Hiểu biết:</strong> Nỗ lực thấu hiểu thế giới nội tâm của họ
              </div>
            </div>
            <div className="love-item">
              <span className="love-icon">🌱</span>
              <div>
                <strong>Tăng trưởng:</strong> Giúp họ trở thành phiên bản tốt nhất
              </div>
            </div>
          </div>

          <div className="connection-wisdom">
            <div className="connection-title">Kết Nối Tâm Linh</div>
            <p>
              Chúng ta đều là những giọt nước trong đại dương vô tận của ý thức. Khi ta yêu thương chân thật, ta không chỉ kết nối với một người, mà với cả nhân loại.
            </p>
          </div>

          <div className="rumi-quote">
            <div className="quote-symbol">❝</div>
            <p>"Tình yêu là cầu nối giữa hai tâm hồn"</p>
            <div className="quote-author">— Rumi</div>
          </div>

          <div className="page-number">9</div>
        </div>
      )
    },

    // Trang cuối - Kết luận
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
            <div className="back-ornament top"></div>
            <div className="back-title">
              <h1>VÔ TẬN</h1>
            </div>
            <div className="back-quote">
              "Cuối mỗi cuốn sách<br/>
              là khởi đầu của một cuốn khác"<br/><br/>
              "Cuộc sống là hành trình,<br/>
              không phải điểm đến"
            </div>
            <div className="back-message">
              Hãy tiếp tục khám phá<br/>
              những triết lý mới mỗi ngày
            </div>
            <div className="back-ornament bottom"></div>
          </div>
        </div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 600);
    }
  };

  return (
    <div className="book-scene">
      <div className="book-container">
        {/* Gáy sách */}
        <div className="book-spine">
          <div className="spine-text">TRIẾT LÝ CUỘC SỐNG</div>
        </div>

        {/* Cuốn sách */}
        <div className="book">
          {/* Trang trái */}
          <div className={`book-page left ${isFlipping && flipDirection === 'prev' ? 'flipping-prev' : ''}`}>
            {pages[currentPage].left}
          </div>

          {/* Trang phải */}
          <div className={`book-page right ${isFlipping && flipDirection === 'next' ? 'flipping-next' : ''}`}>
            {pages[currentPage].right}
          </div>
        </div>

        {/* Nút điều hướng */}
        <div className="navigation nav-prev">
          <button 
            className="nav-button" 
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className="navigation nav-next">
          <button 
            className="nav-button" 
            onClick={nextPage}
            disabled={currentPage === pages.length - 1 || isFlipping}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Chỉ số trang */}
        <div className="page-indicator">
          Trang {currentPage + 1} / {pages.length}
        </div>
      </div>
    </div>
  );
};

export default PhilosophyStoryBook;