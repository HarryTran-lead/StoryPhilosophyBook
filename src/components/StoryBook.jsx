import HTMLFlipBook from "react-pageflip";
import "../styles/StoryBook.css";

const StoryBook = () => {
  return (
    <div className="book-container">
      <HTMLFlipBook
        width={window.innerWidth / 2}   // mỗi trang chiếm nửa màn hình
        height={window.innerHeight}     // full màn hình
        size="stretch"
        drawShadow={true}
        flippingTime={1000}
        showCover={true}
        mobileScrollSupport={false}     // tắt scroll
        className="shadow-2xl rounded-lg"
      >
        {/* Bìa Trước */}
        <div className="page cover">
          <h1>📖 Cuốn Sách Của Tôi</h1>
          <p>Tác giả: <b>Harry</b></p>
          <p className="quote">"Một cuốn sách là giấc mơ bạn cầm trong tay"</p>
        </div>

        {/* Trang 1 */}
        <div className="page">
          <h2>Chương 1: Giới thiệu</h2>
          <p>
            Đây là trang mở đầu của cuốn sách. Nội dung giới thiệu sẽ cho người
            đọc biết mục tiêu, ý nghĩa và hành trình mà họ sắp khám phá.
          </p>
          <p>
            <i>
              "Cuốn sách này sẽ đưa bạn đến những vùng đất của sự tưởng tượng,
              nơi tri thức và cảm xúc hòa quyện như một bản nhạc."
            </i>
          </p>
          <img
            src="https://picsum.photos/450/250"
            alt="ảnh minh họa"
            className="page-img"
          />
        </div>

        {/* Trang 2 */}
        <div className="page">
          <h2>Chương 2: Nội dung chính</h2>
          <p>
            Nội dung chính được chia thành các ý để người đọc dễ theo dõi:
          </p>
          <ul>
            <li>📌 <b>Khởi đầu:</b> Lý do hình thành và ý nghĩa.</li>
            <li>📌 <b>Quá trình:</b> Những chặng đường, thử thách, bài học.</li>
            <li>📌 <b>Kết quả:</b> Giá trị đạt được, kinh nghiệm đúc kết.</li>
          </ul>
          <blockquote>
            "Mỗi trang sách là một thế giới mới chờ bạn khám phá."
          </blockquote>
        </div>

        {/* Trang 3 */}
        <div className="page">
          <h2>Chương 3: Hình ảnh minh họa</h2>
          <p>
            Dưới đây là một vài hình ảnh gợi mở sự sáng tạo và trí tưởng tượng:
          </p>
          <div className="gallery">
            <img src="https://picsum.photos/200/200" alt="ảnh 1" />
            <img src="https://picsum.photos/201/200" alt="ảnh 2" />
            <img src="https://picsum.photos/202/200" alt="ảnh 3" />
          </div>
        </div>

        {/* Trang 4 */}
        <div className="page">
          <h2>Kết thúc</h2>
          <p>
            Cảm ơn bạn đã đọc cuốn sách nhỏ này. Hy vọng nội dung mang lại cho
            bạn những giây phút thư giãn và một vài điều hữu ích.
          </p>
          <p className="thanks">💡 Hãy tiếp tục nuôi dưỡng trí tưởng tượng!</p>
        </div>

        {/* Bìa Sau */}
        <div className="page cover">
          <h1>Hết</h1>
          <p className="quote">"Kết thúc cũng là một khởi đầu mới"</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default StoryBook;
