import React from "react";
import { CheckCircle, CheckCircle2, XCircle, Info } from "lucide-react";

const QuizCard = ({
  currentQuestion,
  showResult,
  selectedOption,
  handleQuizAnswer,
  darkMode,
  cardClasses,
}) => {
  return (
    <div className={`${cardClasses} rounded-xl shadow-lg p-8`}>
      {/* Câu hỏi */}
      <h3
        className={`text-xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-slate-800"
        }`}
      >
        {currentQuestion.quiz.question}
      </h3>

      {/* Các đáp án */}
      <div className="space-y-3">
        {currentQuestion.quiz.options.map((option, index) => {
          let baseClasses = `w-full px-4 py-3.5 text-left rounded-lg border-2 transition-all duration-300 transform`;
          let hoverClasses = !showResult
            ? `hover:scale-[1.01] ${
                darkMode
                  ? "hover:border-amber-200 hover:text-amber-100 hover:bg-slate-600"
                  : "hover:bg-amber-50"
              }`
            : "";

          let stateClasses = "border-slate-200 hover:border-amber-200";

          if (showResult) {
            if (index === currentQuestion.quiz.correct) {
              // Nếu người dùng chọn sai → đáp án đúng pulse
              stateClasses =
                selectedOption !== currentQuestion.quiz.correct
                  ? "border-green-500 bg-green-50 text-green-800 shadow-green-200 shadow-md animate-pulse"
                  : "border-green-500 bg-green-50 text-green-800 shadow-green-200 shadow-md"; // chọn đúng → ko pulse
            } else if (selectedOption === index) {
              // Sai
              stateClasses =
                "border-red-500 bg-red-50 text-red-800 shadow-red-200 shadow-md animate-shake";
            } else {
              stateClasses = darkMode
                ? "border-slate-400 bg-slate-600 text-slate-400"
                : "border-slate-200 bg-slate-50 text-slate-500";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleQuizAnswer(index)}
              disabled={showResult}
              className={`${baseClasses} ${hoverClasses} ${stateClasses}`}
            >
              <div className="flex items-center">
                <span className="font-bold mr-3 text-lg">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="flex-1">{option}</span>

                {/* Icon kết quả */}
                {showResult && index === currentQuestion.quiz.correct && (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                )}
                {showResult &&
                  selectedOption === index &&
                  index !== currentQuestion.quiz.correct && (
                    <div className="w-6 h-6 text-red-500 text-xl">✗</div>
                  )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Phần hiển thị kết quả */}
      {showResult && (
        <div
          className={`mt-6 p-4 rounded-lg border-l-4 ${
            selectedOption === currentQuestion.quiz.correct
              ? `bg-green-50 text-green-800 border-green-500 ${
                  darkMode ? "bg-green-900/20 text-slate-50" : ""
                }`
              : `bg-red-50 text-red-800 border-red-500 ${
                  darkMode ? "bg-red-900/20 text-slate-50" : ""
                }`
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {selectedOption === currentQuestion.quiz.correct ? (
              <>
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="font-bold">
                  Xuất sắc! Bạn đã trả lời chính xác.
                </span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-500" />
                <span className="font-bold">
                  Chưa chính xác, hãy xem giải thích!
                </span>
              </>
            )}
          </div>

          {/* Đáp án đúng nếu chọn sai */}
          {selectedOption !== currentQuestion.quiz.correct && (
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <span className="font-semibold text-amber-800">Đáp án đúng:</span>
              <span className="text-amber-700 ml-2">
                {currentQuestion.quiz.options[currentQuestion.quiz.correct]}
              </span>
            </div>
          )}

          <div className="mt-3 text-sm opacity-90">
            <span className="font-medium">Giải thích:</span>{" "}
            {currentQuestion.definition}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
