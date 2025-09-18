import { useEffect, useRef, useState } from "react";

export default function MarxismPhilosophyPage() {
  const steps = 5;
  const [step, setStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollTargetRef = useRef(0);
  const scrollPosRef = useRef(0);
  const lastScrollTime = useRef(0);

  const sections = [
    {
      title: "Triết học Mác-Lênin",
      subtitle: "Nền tảng tư tưởng của thời đại mới",
      description:
        "Khám phá hệ thống triết học khoa học về quy luật phát triển của tự nhiên, xã hội và tư duy",
      backgroundImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    },
    {
      title: "Chủ nghĩa duy vật biện chứng",
      subtitle: "Phương pháp luận khoa học",
      description:
        "Thế giới là vật chất, vận động theo những quy luật khách quan, có thể nhận thức được",
      backgroundImage:
        "https://images.unsplash.com/photo-1581855339095-0c282d58527b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBoaWxvc29waHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Chủ nghĩa duy vật lịch sử",
      subtitle: "Khoa học về xã hội",
      description:
        "Tồn tại xã hội quyết định ý thức xã hội - Động lực phát triển xã hội là đấu tranh giai cấp",
      backgroundImage:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBoaWxvc29waHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Kinh tế chính trị Mác-xít",
      subtitle: "Bản chất của chế độ tư bản",
      description:
        "Thặng dư giá trị - nguồn gốc của sự bóc lột và bất bình đẳng trong xã hội tư bản chủ nghĩa",
      backgroundImage:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Chủ nghĩa xã hội khoa học",
      subtitle: "Tương lai tươi sáng của nhân loại",
      description:
        "Xã hội cộng sản - xã hội không có giai cấp, không có áp bức bóc lột",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1682125784386-d6571f1ac86a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const animate = () => {
    const diff = scrollTargetRef.current - scrollPosRef.current;
    scrollPosRef.current += diff * 0.08;

    const newStep = Math.round(scrollPosRef.current);
    if (newStep !== step) {
      setStep(newStep);
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrame(animate);

    const handleWheel = (e) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 50) return;
      lastScrollTime.current = now;

      if (isTransitioning) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newTarget = Math.max(
        0,
        Math.min(steps - 1, scrollTargetRef.current + direction)
      );

      if (newTarget !== scrollTargetRef.current) {
        setIsTransitioning(true);
        scrollTargetRef.current = newTarget;

        setTimeout(() => setIsTransitioning(false), 800);
      }
    };

    const handleKey = (e) => {
      if (isTransitioning) return;

      let direction = 0;
      if (["ArrowDown", "PageDown", "Space"].includes(e.key)) direction = 1;
      if (["ArrowUp", "PageUp"].includes(e.key)) direction = -1;

      if (direction !== 0) {
        e.preventDefault();
        const newTarget = Math.max(
          0,
          Math.min(steps - 1, scrollTargetRef.current + direction)
        );

        if (newTarget !== scrollTargetRef.current) {
          setIsTransitioning(true);
          scrollTargetRef.current = newTarget;
          setTimeout(() => setIsTransitioning(false), 800);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [step, isTransitioning]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {sections.map((section, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1200 ease-in-out ${
              i === step ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ zIndex: i === step ? 1 : 0 }}
          >
            {/* Background Image with Ken Burns effect */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[15000ms] ease-linear ${
                i === step ? "scale-110" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${section.backgroundImage})`,
                filter: "brightness(0.6) contrast(1.1) saturate(1.1)",
              }}
            ></div>

            {/* Lighter gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Dynamic light rays effect */}
            <div
              className={`absolute inset-0 opacity-30 transition-opacity duration-1000 ${
                i === step ? "opacity-30" : "opacity-0"
              }`}
            >
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-yellow-400/50 to-transparent transform -skew-x-12 animate-pulse"></div>
              <div
                className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-red-400/30 to-transparent transform skew-x-12 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="relative z-10 h-full">
        {sections.map((section, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
              i === step
                ? "opacity-100 translate-y-0 scale-100"
                : i < step
                ? "opacity-0 -translate-y-12 scale-95"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ zIndex: i === step ? 20 : 10 }}
          >
            <div className="text-center max-w-4xl mx-auto px-8">
              {/* Title */}
              <h1
                className={`text-6xl md:text-7xl font-bold text-white mb-4 transition-all duration-1000 delay-200 ${
                  i === step
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                {section.title}
              </h1>

              {/* Subtitle */}
              <h2
                className={`text-2xl md:text-3xl text-yellow-300 mb-8 font-medium transition-all duration-1000 delay-400 ${
                  i === step
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
                }}
              >
                {section.subtitle}
              </h2>

              {/* Description */}
              <p
                className={`text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
                  i === step
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
                }}
              >
                {section.description}
              </p>

              {/* Call to action for last slide */}
              {i === steps - 1 && (
                <div
                  className={`mt-12 transition-all duration-1000 delay-800 ${
                    i === step
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <button
                    className="
  bg-yellow-400 
  border-2 border-yellow-500 
  text-gray-900 
  px-8 py-4 
  rounded-full
  text-xl font-semibold 
  shadow-lg 
  hover:bg-yellow-500 hover:scale-105 
  transition-all duration-300
"
                  >
                    Khám phá sâu hơn
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col space-y-3">
          {sections.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 cursor-pointer ${
                i === step
                  ? "bg-white scale-125"
                  : i < step
                  ? "bg-white bg-opacity-50"
                  : "bg-transparent"
              }`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  scrollTargetRef.current = i;
                  setTimeout(() => setIsTransitioning(false), 800);
                }
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation hint */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 ${
          step === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-white text-center">
          <div className="animate-bounce text-2xl mb-2">↓</div>
          <p className="text-sm opacity-80">Cuộn để khám phá</p>
        </div>
      </div>

      {/* Modern glassmorphism overlay for depth */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-20"></div>
      </div>
    </div>
  );
}
