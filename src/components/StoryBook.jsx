import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StoryBook = () => {
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
              <h1>CUỐN SÁCH<br/>KỲ DIỆU</h1>
              <div className="author">Tác giả: Harry Potter</div>
            </div>
            <div className="cover-quote">
              "Những trang sách là cánh cửa<br/>dẫn đến vô vàn thế giới kỳ diệu"
            </div>
            <div className="cover-ornament bottom"></div>
          </div>
        </div>
      )
    },
    // Trang 1-2
    {
      left: (
        <div className="page-content page-left">
          <div className="page-header">
            <h2>Chương 1</h2>
            <div className="chapter-ornament">❦</div>
          </div>
          <div className="page-body">
            <h3>Khởi Đầu Hành Trình</h3>
            <p className="first-letter">
              Chào mừng bạn đến với một cuộc phiêu lưu đầy màu sắc! Đây không chỉ là một cuốn sách thông thường, mà là một cánh cửa dẫn đến thế giới của những điều kỳ diệu.
            </p>
            <p>
              Mỗi trang bạn lật là một bước tiến trong hành trình khám phá bản thân và thế giới xung quanh. Hãy để trí tưởng tượng của bạn bay bổng cùng những câu chuyện này.
            </p>
          </div>
          <div className="page-number">2</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <div className="illustration">
            <img src="https://picsum.photos/300/200?random=1" alt="Minh họa" />
            <div className="image-caption">Hình 1.1: Khởi đầu của cuộc hành trình</div>
          </div>
          <div className="quote-box">
            <div className="quote-mark">"</div>
            <p>Cuốn sách này sẽ đưa bạn đến những vùng đất của sự tưởng tượng, nơi tri thức và cảm xúc hòa quyện như một bản nhạc.</p>
            <div className="quote-mark closing">"</div>
          </div>
          <div className="page-number">3</div>
        </div>
      )
    },
    // Trang 3-4
    {
      left: (
        <div className="page-content page-left">
          <div className="page-header">
            <h2>Chương 2</h2>
            <div className="chapter-ornament">❦</div>
          </div>
          <div className="page-body">
            <h3>Nội Dung Chính</h3>
            <p>Nội dung được chia thành các phần để bạn dễ theo dõi:</p>
            <div className="content-list">
              <div className="list-item">
                <div className="item-number">1</div>
                <div className="item-content">
                  <h4>Khởi Đầu</h4>
                  <p>Lý do hình thành và ý nghĩa sâu sắc</p>
                </div>
              </div>
              <div className="list-item">
                <div className="item-number">2</div>
                <div className="item-content">
                  <h4>Quá Trình</h4>
                  <p>Những chặng đường và thử thách</p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-number">4</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <div className="content-list">
            <div className="list-item">
              <div className="item-number">3</div>
              <div className="item-content">
                <h4>Kết Quả</h4>
                <p>Giá trị đạt được và kinh nghiệm đúc kết từ hành trình</p>
              </div>
            </div>
          </div>
          <div className="highlight-box">
            <div className="highlight-title">Lưu ý quan trọng</div>
            <p>Mỗi trang sách là một thế giới mới chờ bạn khám phá và chinh phục.</p>
          </div>
          <div className="decorative-border"></div>
          <div className="page-number">5</div>
        </div>
      )
    },
    // Trang 5-6
    {
      left: (
        <div className="page-content page-left">
          <div className="page-header">
            <h2>Chương 3</h2>
            <div className="chapter-ornament">❦</div>
          </div>
          <div className="page-body">
            <h3>Bộ Sưu Tập Hình Ảnh</h3>
            <p>Những hình ảnh đẹp để gợi mở sự sáng tạo:</p>
            <div className="image-grid">
              <div className="grid-image">
                <img src="https://picsum.photos/120/120?random=2" alt="Hình 1" />
                <span>Khám phá</span>
              </div>
              <div className="grid-image">
                <img src="https://picsum.photos/120/120?random=3" alt="Hình 2" />
                <span>Sáng tạo</span>
              </div>
            </div>
          </div>
          <div className="page-number">6</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <div className="image-grid">
            <div className="grid-image">
              <img src="https://picsum.photos/120/120?random=4" alt="Hình 3" />
              <span>Cảm hứng</span>
            </div>
            <div className="grid-image">
              <img src="https://picsum.photos/120/120?random=5" alt="Hình 4" />
              <span>Ước mơ</span>
            </div>
          </div>
          <div className="artistic-text">
            Hãy để những hình ảnh này khơi gợi trí tưởng tượng và sự sáng tạo trong bạn.
          </div>
          <div className="page-number">7</div>
        </div>
      )
    },
    // Trang cuối
    {
      left: (
        <div className="page-content page-left">
          <div className="final-content">
            <div className="thank-you">
              <h2>Cảm Ơn Bạn!</h2>
              <div className="heart-ornament">♥</div>
              <p>
                Cảm ơn bạn đã đọc cuốn sách nhỏ này. Hy vọng những trang sách đã mang lại cho bạn những giây phút thư giãn và những điều hữu ích.
              </p>
              <div className="final-message">
                💡 Hãy tiếp tục nuôi dưỡng trí tưởng tượng!
              </div>
            </div>
          </div>
          <div className="page-number">8</div>
        </div>
      ),
      right: (
        <div className="page-content cover-back">
          <div className="back-cover-design">
            <div className="back-ornament top"></div>
            <div className="back-title">
              <h1>HẾT</h1>
            </div>
            <div className="back-quote">
              "Kết thúc cũng là<br/>một khởi đầu mới"
            </div>
            <div className="back-message">
              Hẹn gặp lại trong những<br/>cuộc phiêu lưu tiếp theo!
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
      }, 800);
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
      }, 800);
    }
  };

  return (
    <div className="book-scene">
      <style jsx>{`
        .book-scene {
          min-height: 100vh;
          background: linear-gradient(135deg, #8B4513 0%, #D2B48C 50%, #F5DEB3 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          perspective: 2000px;
          font-family: 'Georgia', 'Times New Roman', serif;
          overflow: hidden;
        }

        .book-container {
          position: relative;
          width: 95vw;
          height: min(85vh, 700px);
          max-width: 1200px;
          max-height: 700px;
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .book-container {
            width: 98vw;
            height: 75vh;
            min-height: 450px;
          }
        }

        @media (max-width: 480px) {
          .book-container {
            width: 100vw;
            height: 70vh;
            min-height: 400px;
          }
        }

        .book-container:hover {
          transform: rotateY(-5deg) rotateX(2deg);
        }

        .book {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .book-spine {
          position: absolute;
          left: -2%;
          top: 0;
          width: 4%;
          height: 100%;
          background: linear-gradient(to right, #8B4513, #A0522D, #8B4513);
          transform: rotateY(-90deg);
          transform-origin: right center;
          box-shadow: inset -5px 0 10px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spine-text {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          color: #FFD700;
          font-weight: bold;
          font-size: 14px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .book-page {
          position: absolute;
          width: 50%;
          height: 100%;
          background: #FFFEF7;
          border: 2px solid #DDD;
          box-shadow: 
            0 0 20px rgba(0,0,0,0.1),
            inset 0 0 30px rgba(139, 69, 19, 0.05);
          transform-style: preserve-3d;
          transform-origin: left center;
          transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .book-page.left {
          left: 0;
        }

        .book-page.right {
          right: 0;
        }

        .book-page.flipping-next {
          transform: rotateY(-180deg);
        }

        .book-page.flipping-prev {
          transform: rotateY(0deg);
        }

        .page-content {
          width: 100%;
          height: 100%;
          padding: 2% 3%;
          box-sizing: border-box;
          position: relative;
          background: 
            radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.03) 0%, transparent 50%);
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .page-content {
            padding: 3% 4%;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .page-content {
            padding: 4% 5%;
            font-size: 13px;
          }
        }

        .page-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 4%;
          right: 4%;
          bottom: 0;
          border-left: 2px solid rgba(139, 69, 19, 0.1);
          border-right: 2px solid rgba(139, 69, 19, 0.1);
          pointer-events: none;
        }

        .page-content.page-left::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.1) 50%, transparent);
        }

        .cover-front, .cover-back {
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%);
          color: #FFD700;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 3px solid #654321;
        }

        .cover-design, .back-cover-design {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .cover-ornament, .back-ornament {
          width: 80%;
          height: 2px;
          background: linear-gradient(to right, transparent, #FFD700, transparent);
          margin: 20px 0;
        }

        .cover-title h1, .back-title h1 {
          font-size: 28px;
          font-weight: bold;
          margin: 20px 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 2px;
        }

        .author {
          font-size: 16px;
          font-style: italic;
          margin: 10px 0;
          opacity: 0.9;
        }

        .cover-quote, .back-quote, .back-message {
          font-size: 14px;
          font-style: italic;
          margin: 20px 0;
          opacity: 0.8;
          line-height: 1.6;
        }

        .page-header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(139, 69, 19, 0.2);
          padding-bottom: 15px;
        }

        .page-header h2 {
          font-size: 24px;
          color: #8B4513;
          margin: 0 0 10px 0;
          font-weight: bold;
        }

        .chapter-ornament {
          font-size: 20px;
          color: #8B4513;
        }

        .page-body h3 {
          color: #8B4513;
          font-size: 18px;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .page-body p {
          line-height: 1.8;
          color: #333;
          margin-bottom: 15px;
          text-align: justify;
          font-size: 14px;
        }

        .first-letter::first-letter {
          float: left;
          font-size: 48px;
          line-height: 42px;
          margin: 5px 8px 0 0;
          color: #8B4513;
          font-weight: bold;
        }

        .illustration {
          text-align: center;
          margin: 20px 0;
        }

        .illustration img {
          max-width: 100%;
          border: 2px solid #8B4513;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .image-caption {
          font-size: 12px;
          font-style: italic;
          color: #666;
          margin-top: 8px;
        }

        .quote-box {
          background: rgba(139, 69, 19, 0.05);
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #8B4513;
          position: relative;
        }

        .quote-mark {
          font-size: 48px;
          color: #8B4513;
          opacity: 0.3;
          position: absolute;
          top: -10px;
          left: 10px;
        }

        .quote-mark.closing {
          bottom: -20px;
          right: 10px;
          top: auto;
          left: auto;
        }

        .content-list {
          margin: 20px 0;
        }

        .list-item {
          display: flex;
          margin-bottom: 20px;
          align-items: flex-start;
        }

        .item-number {
          width: 30px;
          height: 30px;
          background: #8B4513;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .item-content h4 {
          margin: 0 0 5px 0;
          color: #8B4513;
          font-size: 14px;
        }

        .item-content p {
          margin: 0;
          font-size: 12px;
        }

        .highlight-box {
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid #FFD700;
          padding: 15px;
          margin: 20px 0;
          border-radius: 5px;
        }

        .highlight-title {
          font-weight: bold;
          color: #8B4513;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .image-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
          margin: 20px 0;
        }

        .grid-image {
          text-align: center;
          flex: 1;
          min-width: 100px;
        }

        .grid-image img {
          width: 100%;
          max-width: 120px;
          height: 120px;
          object-fit: cover;
          border: 2px solid #8B4513;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .grid-image span {
          display: block;
          font-size: 12px;
          color: #8B4513;
          font-weight: bold;
          margin-top: 5px;
        }

        .artistic-text {
          text-align: center;
          font-style: italic;
          color: #666;
          margin: 20px 0;
          font-size: 14px;
        }

        .final-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          text-align: center;
        }

        .thank-you h2 {
          color: #8B4513;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .heart-ornament {
          font-size: 24px;
          color: #8B4513;
          margin: 10px 0;
        }

        .final-message {
          background: rgba(139, 69, 19, 0.1);
          padding: 15px;
          border-radius: 10px;
          margin: 20px 0;
          font-weight: bold;
          color: #8B4513;
        }

        .page-number {
          position: absolute;
          bottom: 15px;
          right: 20px;
          font-size: 12px;
          color: #8B4513;
          font-weight: bold;
        }

        .page-left .page-number {
          left: 20px;
          right: auto;
        }

        .decorative-border {
          position: absolute;
          bottom: 40px;
          left: 30px;
          right: 30px;
          height: 1px;
          background: linear-gradient(to right, transparent, #8B4513, transparent);
        }

        .navigation {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        .nav-button {
          background: rgba(139, 69, 19, 0.8);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .nav-button:hover {
          background: rgba(139, 69, 19, 1);
          transform: scale(1.1);
        }

        .nav-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .nav-button:disabled:hover {
          transform: none;
        }

        .nav-prev {
          left: -80px;
        }

        .nav-next {
          right: -80px;
        }

        .page-indicator {
          position: absolute;
          bottom: -8%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(139, 69, 19, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          color: #8B4513;
          font-size: clamp(12px, 2vw, 14px);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .page-indicator {
            bottom: -10%;
          }
        }
      `}</style>

      <div className="book-container">
        {/* Gáy sách */}
        <div className="book-spine">
          <div className="spine-text">CUỐN SÁCH KỲ DIỆU</div>
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

export default StoryBook;