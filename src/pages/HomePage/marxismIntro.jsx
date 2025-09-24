import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MarxismIntro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const title = "TRIẾT HỌC MÁC – LÊNIN".split("");

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Background ánh sáng động */}
      <motion.div
        className="absolute w-[300%] h-[300%] bg-gradient-radial from-amber-500/20 via-transparent to-black"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[200%] h-[200%] bg-gradient-conic from-amber-600/10 via-transparent to-transparent blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />

      {/* Tiêu đề chính */}
      <motion.h1
        className="flex flex-wrap justify-center text-5xl md:text-7xl font-extrabold 
          bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 
          text-transparent bg-clip-text tracking-wider text-center drop-shadow-[0_0_25px_rgba(255,200,0,0.7)]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {title.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-2xl text-gray-300 mt-8 font-light tracking-wide"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
      >
        Nền tảng tư tưởng của thời đại mới
      </motion.p>

      {/* Tagline */}
      <motion.p
        className="text-md md:text-lg text-amber-300 italic mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        “Khám phá tư tưởng – thay đổi thế giới”
      </motion.p>

      {/* Hint xuống */}
      <motion.div
        className="absolute bottom-12 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
      >
        <motion.div
          className="text-3xl"
          animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.div>
        <p className="text-sm opacity-80 mt-2 animate-pulse">Cuộn để bắt đầu</p>
      </motion.div>
    </motion.div>
  );
}
