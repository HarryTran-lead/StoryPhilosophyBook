import React, { useEffect } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { selectQuiz } from "@redux/features/quizSlice";

// Flip transition (trục X)
const flipTransition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };

const Flashcard = ({
  showAnswer,
  setShowAnswer,
  handleFlashcardFlip,
  darkMode,
}) => {
  const { currentPage, activeChapter, chapters } = useSelector(selectQuiz);
  const currentQuestion = chapters[activeChapter].questions[currentPage];

  // Reset về mặt trước khi đổi câu
  useEffect(() => {
    setShowAnswer(false);
  }, [currentPage, setShowAnswer]);

  return (
    <div className="perspective-1000 mx-auto w-full h-72 relative">
      {/* Flashcard với flip */}
      <motion.div
        key={`${activeChapter}-${currentPage}`} // reset khi đổi câu
        onClick={handleFlashcardFlip}
        animate={{ rotateX: showAnswer ? 180 : 0 }}
        transition={flipTransition}
        className="relative w-full h-full cursor-pointer transform-style-preserve-3d"
      >
        {/* FRONT SIDE */}
        <div
          className={`
            absolute inset-0 backface-hidden
            ${darkMode ? "bg-slate-700" : "bg-slate-50"}
            rounded-2xl shadow-sm border
            ${darkMode ? "border-none" : "shadow-sm border-slate-300/50"}
            p-8 flex items-center justify-center
          `}
        >
          <div className="text-center relative z-10 h-full flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <h3
                  className={`text-2xl font-medium ${
                    darkMode ? "text-amber-400" : "text-slate-700"
                  }`}
                >
                  Thuật ngữ
                </h3>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div
                className={`
                  p-4 rounded-xl w-full flex justify-center items-center
                  ${darkMode ? "bg-slate-800/50" : "bg-amber-200/60"}
                `}
              >
                <p
                  className={`text-2xl font-semibold leading-snug text-center truncate ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {currentQuestion?.term}
                </p>
              </div>
            </div>
            <div
              className={`flex items-center justify-center gap-2 text-sm animate-pulse ${
                darkMode ? "text-slate-300/80" : "text-slate-700"
              }`}
            >
              <span className="italic">Nhấn để xem đáp án</span>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className={`
            absolute inset-0 backface-hidden rotate-x-180
            ${darkMode ? "bg-slate-700 text-white" : "bg-white text-slate-800"}
            rounded-2xl shadow-sm flex items-center justify-center
          `}
        >
          <div className="text-center relative z-10 w-full flex flex-col justify-center h-full px-8 mb-2">
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <CheckCircle
                className={`${
                  darkMode ? "text-white" : "text-amber-400"
                } w-6 h-6`}
              />
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-amber-500"
                }`}
              >
                Định nghĩa
              </h3>
            </div>
            <div
              className={`
                backdrop-blur-sm rounded-xl p-6
                ${
                  darkMode
                    ? "bg-white/10 border-white/20"
                    : "bg-slate-100/50 border-slate-300"
                }
              `}
            >
              <p
                className={`text-xl leading-relaxed font-medium ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {currentQuestion?.definition}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcard;
