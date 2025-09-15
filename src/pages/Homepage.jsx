import { useEffect, useRef, useState } from "react";
import "../pages/Homepage.css";
import { Link } from "react-router-dom"; // Thêm Link

export default function HomePage() {
  const scrollRef = useRef(null);
  const [step, setStep] = useState(1);

  // Danh sách ảnh nền cho từng bước (4 ảnh)
  const bgImages = [
    "https://images.unsplash.com/photo-1598387846790-04e9b6e82e4e?auto=format&fit=crop&w=1600&q=80", // Socrates
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80", // Plato
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80", // Aristotle
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80", // Modern
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollTop = el.scrollTop;
      const mid = scrollTop + el.clientHeight / 2;
      const items = el.querySelectorAll(".scroll-wrap li");
      let active = 1;

      items.forEach((li, i) => {
        const top = li.offsetTop;
        const bottom = top + li.offsetHeight;
        if (top <= mid && bottom > mid) {
          active = i + 1;
        }
      });

      setStep(active);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`movie step-${step}`}>
        <div className="bg">
          {bgImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={
                step === i + 1
                  ? "active"
                  : step === i || step === i + 2
                  ? "fade-out"
                  : ""
              }
            />
          ))}
        </div>

        {/* Story blocks */}
        <div className="story story-1">
          <div className="story-content">
            <h2>Socrates</h2>
            <h4>“The unexamined life is not worth living.”</h4>
          </div>
        </div>

        <div className="story story-2">
          <div className="story-content">
            <h2>Plato</h2>
            <h4>The world of ideas is more real than the material world.</h4>
          </div>
        </div>

        <div className="story story-3">
          <div className="story-content">
            <h2>Aristotle</h2>
            <h4>Logic and observation as the foundation of science.</h4>
          </div>
        </div>

    {/* Story cuối có nút */}
        <div className="story story-4">
          <div className="story-content">
            <h2>Modern Philosophy</h2>
            <h4>Knowledge as the light guiding humanity forward.</h4>
            <Link to="/storybook" className="read-btn">
              Đọc sách
            </Link>
          </div>
        </div>
      </div>
      {/* Khu vực scroll điều khiển */}
      <div className="scroll-area" ref={scrollRef}>
        <ul className="scroll-wrap">
          <li></li>
          <li></li>
          <li></li>
          <li></li> {/* thêm bước 4 */}
        </ul>
      </div>
    </>
  );
}
