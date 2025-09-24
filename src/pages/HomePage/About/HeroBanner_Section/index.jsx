import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Clock,
  Users,
  Brain,
  Star,
  ArrowDown,
  Lightbulb,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ===== ODOMETER: trượt xuống theo cặp from->to ===== */
const OdometerDigit = ({ from, to }) => (
  <div className="relative h-[1.2em] overflow-hidden inline-flex">
    <motion.div
      key={`${from}-${to}`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: "-100%", opacity: 1 }} // trượt xuống
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col leading-none tabular-nums"
    >
      <span>{from}</span>
      <span>{to}</span>
    </motion.div>
  </div>
);

const OdometerNumber = ({ prev, current, className = "" }) => {
  const cur = current.toString();
  const prevStr = prev.toString().padStart(cur.length, "0");
  const curStr = cur.padStart(cur.length, "0");

  return (
    <div className={`font-bold tracking-wider ${className}`}>
      {curStr.split("").map((_, i) => (
        <OdometerDigit
          key={`${i}-${prevStr[i]}-${curStr[i]}`}
          from={prevStr[i]}
          to={curStr[i]}
        />
      ))}
    </div>
  );
};

/* ===== ROTATING PHRASE: chữ hiển thị + đổi 5s ===== */
const RotatingPhrase = ({ phrases, intervalMs = 5000, className = "" }) => {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % phrases.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, phrases.length]);

  return (
    <div className={`relative h-[1.6em] overflow-hidden ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={idx}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="whitespace-nowrap leading-6"
        >
          {phrases[idx]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [year, setYear] = React.useState(1818);
  const [prevYear, setPrevYear] = React.useState(1817);

  // Năm tăng 2s/lần
  React.useEffect(() => {
    const maxYear = new Date().getFullYear();
    const timer = setInterval(() => {
      setYear((y) => {
        const next = y >= maxYear ? 1818 : y + 1;
        setPrevYear(y);
        return next;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Scroll parallax nhẹ (không ảnh hưởng nền reset)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tạo particle field 1 lần để nền KHÔNG đổi khi re-render
  const DEFAULT_PARTICLE_COUNT = 150; // ⬅️ tăng/giảm tùy máy
  const particlesRef = React.useRef(null);
  if (!particlesRef.current) {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    particlesRef.current = Array.from(
      { length: DEFAULT_PARTICLE_COUNT },
      () => {
        // vị trí ban đầu (% viewport)
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        // kích thước (px): 1–3, thi thoảng to hơn
        const size = Math.random() < 0.15 ? 3 : Math.random() < 0.35 ? 2 : 1;

        // thời lượng/độ trễ (s): trải đều để không đồng bộ
        const dur = 10 + Math.random() * 24; // 10–34s
        const delay = Math.random() * 10; // 0–10s

        // độ mờ khác nhau cho tự nhiên
        const opacity = 0.18 + Math.random() * 0.22; // 0.18–0.40

        // đường đi & lắc
        const path = pick(["drift", "drift2", "drift3"]);
        const sway = pick(["none", "swayX", "swayY"]);

        return { left, top, size, dur, delay, opacity, path, sway };
      }
    );
  }
  const particles = particlesRef.current;

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* KEYFRAMES cho nền bay chậm & nhấp nháy */}
      <style>{`
      @keyframes drift {
        0% { transform: translate(0,0); }
        25% { transform: translate(22px,-16px); }
        50% { transform: translate(-12px,12px); }
        75% { transform: translate(16px,6px); }
        100% { transform: translate(0,0); }
      }
      @keyframes drift2 {
        0% { transform: translate(0,0) rotate(0deg); }
        33% { transform: translate(-18px,20px) rotate(3deg); }
        66% { transform: translate(15px,-14px) rotate(-2deg); }
        100% { transform: translate(0,0) rotate(0deg); }
      }
      @keyframes drift3 {
        0% { transform: translate(0,0) scale(1); }
        50% { transform: translate(10px,8px) scale(1.08); }
        100% { transform: translate(0,0) scale(1); }
      }
      @keyframes twinkle {
        0%,100% { opacity: .22; transform: scale(1); }
        50% { opacity: .7; transform: scale(1.35); }
      }
      @keyframes swayX {
        0%,100% { transform: translateX(0); }
        50% { transform: translateX(6px); }
      }
      @keyframes swayY {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
         @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes spin-reverse {
    from { transform: rotate(360deg); }
    to   { transform: rotate(0deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 18s linear infinite;
  }
    .animate-spin-slow-star {
    animation: spin-slow 14s linear infinite;
  }
  .animate-spin-reverse {
    animation: spin-reverse 24s linear infinite;
  }
  .animate-spin-reverse {
    animation: spin-reverse 24s linear infinite;
  }
    @keyframes star-twirl {
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(180deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
}
.animate-star-twirl {
  animation: star-twirl 6s linear infinite;
}
    `}</style>

      {/* Animated Background (giữ nguyên, không reset khi số đổi) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
        {/* Floating particles — dùng dữ liệu đã “đóng băng” */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => {
            const anims = [
              `${p.path} ${p.dur}s ease-in-out ${p.delay}s infinite`,
              `twinkle ${p.dur * 0.9}s ease-in-out ${p.delay / 2}s infinite`,
            ];
            if (p.sway === "swayX")
              anims.push(
                `swayX ${p.dur * 0.6}s ease-in-out ${p.delay / 3}s infinite`
              );
            if (p.sway === "swayY")
              anims.push(
                `swayY ${p.dur * 0.6}s ease-in-out ${p.delay / 3}s infinite`
              );

            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  background: "rgba(251,191,36,1)", // amber-400
                  opacity: p.opacity,
                  animation: anims.join(", "),
                  willChange: "transform, opacity",
                }}
              />
            );
          })}
        </div>

        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-10 hidden md:block"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.07}px)`,
          }}
        />

        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"
          style={{
            transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[77rem] mx-auto px-6 lg:px-0">
        <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-12 items-center py-12 sm:py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 order-1 lg:order-1"
          >
            <div className="space-y-6">
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-400 text-sm font-medium"
              >
                <Clock className="w-4 h-4 mr-2" />
                Hành trình 200+ năm lịch sử
              </motion.div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block text-slate-200">TRIẾT HỌC</span>
                <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                  MÁC - LÊNIN
                </span>
              </h1>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full origin-left"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed font-light"
              >
                Khám phá hệ thống tư tưởng cách mạng đã
                <span className="text-amber-400 font-medium">
                  {" "}
                  thay đổi thế giới
                </span>
                , không chỉ trong triết học mà còn ảnh hưởng sâu rộng đến
                <span className="text-amber-400 font-medium"> khoa học</span>,
                <span className="text-amber-400 font-medium"> chính trị</span>{" "}
                và
                <span className="text-amber-400 font-medium"> xã hội</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                className="text-lg text-slate-400 leading-relaxed"
              >
                Một chuyến du hành xuyên suốt lịch sử tư tưởng nhân loại, nơi{" "}
                <span className="text-amber-400">
                  khoa học gặp gỡ cách mạng
                </span>
                , lý thuyết gắn liền thực tiễn và tinh thần nhân văn trở thành
                kim chỉ nam cho hành động.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center space-x-3 text-slate-300">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Tri thức khoa học</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <span>Tư duy biện chứng</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Heart className="w-5 h-5 text-amber-400" />
                <span>Lý tưởng nhân văn</span>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-2"
            >
              <div className="inline-flex items-center text-amber-400 font-medium cursor-pointer group animate-pulse">
                Khám phá hành trình lịch sử
                <ArrowDown className="w-5 h-5 ml-1.5 mt-0.5" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-full">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 via-transparent to-slate-800/20 backdrop-blur-sm border border-amber-400/30">
                {/* Rotating rings */}
                <div className="absolute inset-8 rounded-full border-2 border-amber-400/40 animate-spin-slow">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
                </div>
                <div className="absolute inset-16 rounded-full border border-amber-400/20 animate-spin-reverse">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-300 rounded-full shadow-md" />
                </div>

                {/* Center content */}
                <div className="absolute inset-24 rounded-full bg-slate-800/80 backdrop-blur-sm border border-amber-400/40 flex flex-col items-center justify-center p-8 text-center">
                  <OdometerNumber
                    prev={prevYear}
                    current={year}
                    className="text-4xl md:text-5xl text-amber-400 mb-1"
                  />
                  <RotatingPhrase
                    phrases={[
                      "Bắt đầu hành trình",
                      "Những bước ngoặt tư tưởng",
                      "Di sản cách mạng",
                    ]}
                    intervalMs={5000} // 5s/lần
                    className="text-sm text-slate-300 mb-4"
                  />
                  <div className="w-12 h-px bg-amber-400/60 mb-4" />
                  <div className="text-4xl font-bold text-amber-400 mb-2">
                    ∞
                  </div>
                  <div className="text-sm text-slate-300">
                    Ảnh hưởng vĩnh cửu
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-12 text-amber-400">
                  <BookOpen className="w-6 h-6 animate-pulse" />
                </div>
                <div className="absolute bottom-8 left-8 text-amber-400">
                  <Users
                    className="w-5 h-5 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
                <div className="absolute top-12 left-4 text-amber-400">
                  <Brain
                    className="w-5 h-5 animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                </div>
              </div>

              {/* Orbiting element */}
              <div className="absolute inset-0 animate-spin-slow-star">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-400/20 rounded-full border border-amber-400/50 flex items-center justify-center">
                  <Star className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
