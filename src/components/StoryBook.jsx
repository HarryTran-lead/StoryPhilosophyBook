import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/StoryBook.css";

const StoryBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("");

  // ================== CÁC TRANG TRIẾT LÝ ==================
  const pages = [
    {
      left: null,
      right: (
        <div className="page-content cover-front">
          <h1>NHỮNG SUY TƯ TRIẾT LÝ</h1>
          <p>"Triết học không phải để trả lời, mà để khơi gợi những câu hỏi bất tận."</p>
          <div className="author">— Harry Tran</div>
        </div>
      ),
    },
    {
      left: (
        <div className="page-content page-left">
          <h2>Chương 1</h2>
          <h3>Con Người và Bản Chất</h3>
          <p>
            Con người luôn đi tìm ý nghĩa cho sự tồn tại. Nhưng ý nghĩa có thật sự tồn tại,
            hay nó chỉ là sản phẩm của tâm trí?
          </p>
          <p>
            Nietzsche từng nói: “Ai có lý do để sống thì có thể chịu đựng hầu như bất cứ cách nào.”
          </p>
          <div className="page-number">2</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <blockquote>
            "Tồn tại không phải là câu hỏi có sẵn đáp án, mà là hành trình tìm kiếm không hồi kết."
          </blockquote>
          <div className="page-number">3</div>
        </div>
      ),
    },
    {
      left: (
        <div className="page-content page-left">
          <h2>Chương 2</h2>
          <h3>Tự Do và Trách Nhiệm</h3>
          <p>
            Sartre cho rằng: “Con người bị kết án phải tự do.” Tự do đồng nghĩa với trách nhiệm,
            và trách nhiệm đi kèm nỗi lo âu.
          </p>
          <div className="page-number">4</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <blockquote>
            "Khi ta chọn, ta không chỉ chọn cho mình mà còn cho toàn nhân loại."
          </blockquote>
          <div className="page-number">5</div>
        </div>
      ),
    },
    {
      left: (
        <div className="page-content page-left">
          <h2>Chương 3</h2>
          <h3>Thời Gian và Vô Thường</h3>
          <p>
            Heidegger nhìn thời gian không phải chỉ là chuỗi khoảnh khắc, mà là cách con người trải
            nghiệm sự tồn tại hữu hạn của mình.
          </p>
          <div className="page-number">6</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <blockquote>
            "Chúng ta không sở hữu thời gian, mà chỉ được sống trong sự trôi đi của nó."
          </blockquote>
          <div className="page-number">7</div>
        </div>
      ),
    },
    {
      left: (
        <div className="page-content page-left">
          <h2>Chương 4</h2>
          <h3>Cái Đẹp và Nghệ Thuật</h3>
          <p>
            Kant cho rằng cái đẹp không nằm trong sự vật, mà trong cách ta cảm nhận chúng — một sự
            hòa hợp vô thức giữa lý trí và cảm xúc.
          </p>
          <div className="page-number">8</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <blockquote>
            "Nghệ thuật không sao chép thực tại, mà phơi bày chân lý ẩn sau nó."
          </blockquote>
          <div className="page-number">9</div>
        </div>
      ),
    },
    {
      left: (
        <div className="page-content page-left">
          <h2>Chương 5</h2>
          <h3>Cái Chết và Ý Nghĩa</h3>
          <p>
            Triết học hiện sinh coi cái chết không phải là sự chấm dứt, mà là lời nhắc nhở rằng
            từng khoảnh khắc đều quý giá.
          </p>
          <div className="page-number">10</div>
        </div>
      ),
      right: (
        <div className="page-content page-right">
          <blockquote>
            "Chỉ khi đối diện với cái chết, con người mới thật sự học cách sống."
          </blockquote>
          <div className="page-number">11</div>
        </div>
      ),
    },
    {
      left: (
        <div className="page-content page-left">
          <h2>Kết</h2>
          <p>
            Triết học không hứa hẹn câu trả lời cuối cùng. Nó chỉ dạy chúng ta một cách sống:
            sống trong câu hỏi, sống trong sự tìm kiếm, sống trong ánh sáng và bóng tối của tồn tại.
          </p>
          <div className="page-number">12</div>
        </div>
      ),
      right: (
        <div className="page-content cover-back">
          <h2>Hết</h2>
          <p>Cảm ơn bạn đã đồng hành trong hành trình triết lý này.</p>
        </div>
      ),
    },
  ];

  // ================== HÀM LẬT TRANG ==================
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setFlipDirection("next");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
        setFlipDirection("");
      }, 1000);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
        setFlipDirection("");
      }, 1000);
    }
  };

  return (
    <div className="book-scene">
      {/* overlay tối khi lật */}
      {isFlipping && <div className="dark-overlay"></div>}

      <div className="book-container">
        {/* gáy sách */}
        <div className="book-spine">
          <div className="spine-text">NHỮNG SUY TƯ TRIẾT LÝ</div>
        </div>

        {/* sách */}
        <div className="book">
          {/* Trang trái */}
          <div
            className={`book-page left ${
              isFlipping && flipDirection === "prev" ? "flipping-prev" : ""
            }`}
            onClick={prevPage}
          >
            {pages[currentPage].left}
          </div>

          {/* Trang phải */}
          <div
            className={`book-page right ${
              isFlipping && flipDirection === "next" ? "flipping-next" : ""
            }`}
            onClick={nextPage}
          >
            {pages[currentPage].right}
          </div>
        </div>

        {/* nút điều hướng */}
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

        {/* chỉ số trang */}
        <div className="page-indicator">
          Trang {currentPage + 1} / {pages.length}
        </div>
      </div>
    </div>
  );
};

export default StoryBook;
