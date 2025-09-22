import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QuestionNavigation = ({
  totalQuestions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  handlePrev,
  handleNext,
  questionStates,
  activeChapter,
  darkMode,
}) => {
  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={handlePrev}
        disabled={currentQuestionIndex === 0}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          currentQuestionIndex === 0
            ? `bg-slate-200 text-slate-400 cursor-not-allowed ${darkMode ? "bg-slate-700 text-slate-500" : ""}`
            : `bg-slate-200 text-slate-700 hover:bg-slate-300 ${darkMode ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : ""}`
        }`}
      >
        <ChevronLeft className="w-5 h-5" /> Câu trước
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalQuestions }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuestionIndex(index)}
            className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-200 ${
              index === currentQuestionIndex
                ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 scale-110"
                : questionStates[`${activeChapter}-${index}`] === "completed"
                ? "bg-green-500 text-white hover:bg-green-600"
                : questionStates[`${activeChapter}-${index}`] === "learning"
                ? `bg-orange-400 text-white hover:bg-orange-500 ${darkMode ? "bg-orange-500" : ""}`
                : `bg-slate-200 text-slate-600 hover:bg-amber-200 ${
                    darkMode ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : ""
                  }`
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentQuestionIndex === totalQuestions - 1}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          currentQuestionIndex === totalQuestions - 1
            ? `bg-slate-200 text-slate-400 cursor-not-allowed ${darkMode ? "bg-slate-700 text-slate-500" : ""}`
            : "bg-amber-500 text-white hover:bg-amber-600 shadow-lg hover:shadow-amber-500/30"
        }`}
      >
        Câu sau <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default QuestionNavigation;
