import React, { useState, useEffect } from "react";
import { CheckCircle, Clock, Sparkles, Star } from "lucide-react";

const Flashcard = ({
  currentQuestion,
  showAnswer,
  handleFlashcardFlip,
  updateQuestionState,
  cardClasses,
  darkMode,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="perspective-1000 mx-auto"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        onClick={handleFlashcardFlip}
        className={`
            relative w-full h-70 cursor-pointer 
            transition-all duration-700 ease-in-out
            transform-style-preserve-3d
            ${showAnswer ? "rotate-y-180" : ""}
            hover:shadow-md rounded-xl
          `}
      >
        {/* Front */}
        <div
          className={`
    absolute inset-0 backface-hidden
    ${darkMode ? "bg-slate-700" : "bg-slate-50"}
    rounded-2xl shadow-sm border
    ${
      darkMode
        ? "shadow-black/50 border-amber-300/50"
        : "shadow-sm border-slate-300/50"
    }
    p-8 
    flex items-center justify-center
    transition-all duration-500
    
  `}
        >
          {/* Content */}
          <div className="text-center relative z-10 h-full flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <h3
                  className={`text-2xl font-medium ${
                    darkMode ? "text-amber-400" : "text-slate-700"
                  } `}
                >
                  Thuật ngữ
                </h3>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>

              <div
                className={`
          p-4 rounded-xl
          ${darkMode ? "bg-slate-800/50" : "bg-amber-200/60"}
          flex justify-center items-center w-full
        `}
              >
                <p
                  className={`
          text-2xl md:text-2xl font-semibold leading-snug
          ${darkMode ? "text-slate-200" : "text-slate-700"}
          text-center truncate
        `}
                >
                  {currentQuestion.term}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-300/80 text-sm animate-pulse">
             <span className="italic">Nhấn để xem đáp án</span>

            </div>
          </div>
        </div>

        {/* BACK SIDE - Definition */}
        <div
          className={`
    absolute inset-0 backface-hidden rotate-y-180
    ${darkMode ? "bg-slate-700" : "bg-white"}
    rounded-2xl shadow-sm
    flex items-center justify-center
    ${darkMode ? "text-white" : "text-slate-800"}
  `}
        >
          {/* Content */}
          <div className="text-center relative z-10 w-full flex flex-col justify-center h-full px-8 mb-2">
            {/* Header */}
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

            {/* Definition Display */}
            <div
              className={`
      ${
        darkMode
          ? "bg-white/10 border-white/20"
          : "bg-slate-100/50 border-slate-300"
      }
      backdrop-blur-sm rounded-xl p-6
    `}
            >
              <p
                className={`text-xl leading-relaxed font-medium ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                {currentQuestion.definition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
