import { useState } from "react";
import "../styles/StoryBook.css";

export default function StoryBook() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="book">
      <div
        className={`page ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="page-front">
          <h1>📖 Chương 1</h1>
          <p>Đây là phần mở đầu cuốn sách của bạn.</p>
        </div>
        <div className="page-back">
          <h1>🤔 Chương 2</h1>
          <p>Đây là nội dung tiếp theo sau khi lật trang.</p>
        </div>
      </div>
    </div>
  );
}
