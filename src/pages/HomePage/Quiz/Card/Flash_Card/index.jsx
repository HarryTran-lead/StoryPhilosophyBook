import React, { useEffect } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  selectQuiz,
  selectQuestionUI,
  flipFlashcard,
  setShowAnswer,
} from "@redux/features/quizSlice";

const flipTransition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };

const Flashcard = ({ darkMode }) => {
  const dispatch = useDispatch();
  const { currentPage, activeChapter, chapters } = useSelector(selectQuiz);
  const currentQuestion = chapters[activeChapter].questions[currentPage];

  const ui = useSelector((state) =>
    selectQuestionUI(state, activeChapter, currentPage, "flashcard")
  );
  const showAnswer = ui.showAnswer;

  // đổi câu => luôn đóng thẻ
  useEffect(() => {
    dispatch(
      setShowAnswer({
        chapterIndex: activeChapter,
        questionIndex: currentPage,
        value: false,
        mode: "flashcard",
      })
    );
  }, [activeChapter, currentPage, dispatch]);

  const handleFlip = () => {
    dispatch(
      flipFlashcard({ chapterIndex: activeChapter, questionIndex: currentPage })
    );
  };

  return (
    <div className="mx-auto w-full h-72 relative perspective-1000">
      <motion.div
        key={`${activeChapter}-${currentPage}`}
        onClick={handleFlip}
        animate={{ rotateX: showAnswer ? 180 : 0 }}
        transition={flipTransition}
        className="relative w-full h-full cursor-pointer transform-style-preserve-3d"
      >
        {/* FRONT */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl shadow-sm border p-8 flex items-center justify-center
            ${
              darkMode
                ? "bg-slate-700 border-none"
                : "bg-slate-50 border-slate-300/50"
            }`}
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
                className={`${
                  darkMode ? "bg-slate-800/50" : "bg-amber-200/60"
                } p-4 rounded-xl w-full flex justify-center items-center`}
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
              className={`${
                darkMode ? "text-slate-300/80" : "text-slate-700"
              } flex items-center justify-center gap-2 text-sm animate-pulse`}
            >
              <span className="italic">Nhấn để xem đáp án</span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className={`absolute inset-0 backface-hidden rotate-x-180 rounded-2xl shadow-sm flex items-center justify-center
            ${
              darkMode ? "bg-slate-700 text-white" : "bg-white text-slate-800"
            }`}
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
              className={`${
                darkMode
                  ? "bg-white/10 border-white/20"
                  : "bg-slate-100/50 border-slate-300"
              } backdrop-blur-sm rounded-xl p-6`}
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

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-x-180 { transform: rotateX(180deg); }
      `}</style>
    </div>
  );
};

export default Flashcard;
