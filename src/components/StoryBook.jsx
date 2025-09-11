import HTMLFlipBook from "react-pageflip";
import "../styles/StoryBook.css";
const StoryBook = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
      <HTMLFlipBook
        width={500}
        height={700}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        drawShadow={true}
        flippingTime={1000}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-2xl rounded-lg"
      >
        <div className="bg-white flex items-center justify-center text-2xl font-bold">
          Bìa Trước
        </div>
        <div className="bg-white p-6">Trang 1 - Giới thiệu</div>
        <div className="bg-white p-6">Trang 2 - Nội dung</div>
        <div className="bg-white p-6">Trang 3 - Hình ảnh</div>
        <div className="bg-white p-6">Trang 4 - Kết thúc</div>
        <div className="bg-white flex items-center justify-center text-2xl font-bold">
          Bìa Sau
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default StoryBook;
