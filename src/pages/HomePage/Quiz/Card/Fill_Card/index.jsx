import React from "react";
import { CheckCircle, RotateCcw, BookOpen, XCircle } from "lucide-react";

const FillCard = ({
  currentQuestion,
  userAnswer,
  setUserAnswer,
  showResult,
  handleFillAnswer,
  resetQuestion,
  updateQuestionState,
  darkMode,
  cardClasses,
}) => {
  const isCorrect =
    userAnswer.toLowerCase().trim() ===
    currentQuestion.answer.toLowerCase().trim();

  return (
    <div className={`${cardClasses} rounded-xl shadow-lg p-8`}>
      <h3
        className={`text-md italic font-base mb-6 ${
          darkMode ? "text-white" : "text-slate-800"
        }`}
      >
        * Điền từ còn thiếu vào chỗ trống :
      </h3>
      <p
        className={`mb-6 ml-4 text-lg leading-relaxed ${
          darkMode ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {currentQuestion.fillAnswer.split("___").map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && (
              <span
                className={`underline font-semibold ${
                  darkMode ? "text-slate-300" : "text-slate-500"
                }`}
              >
                ____________
              </span>
            )}
          </React.Fragment>
        ))}
      </p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Nhập từ còn thiếu..."
        className={`w-full px-4 py-3.5 border-2 rounded-lg focus:outline-none focus:in resize-none  transition-all duration-200 ${
          darkMode
            ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-amber-400/40"
            : "bg-white border-slate-300 text-slate-800 placeholder-slate-500 focus:border-amber-500"
        }`}
        disabled={showResult}
      />

      <div
        className={`text-right text-sm mt-1 ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {userAnswer.length}/100 ký tự
      </div>

      {!showResult && (
        <div className="flex gap-3 mt-4">
          {/* Nút kiểm tra */}
          <button
            onClick={handleFillAnswer}
            disabled={!userAnswer.trim()}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm
      ${
        darkMode
          ? "bg-yellow-500/90  text-white hover:brightness-90  disabled:bg-slate-600 disabled:text-slate-400 disabled:hover:brightness-100"
          : "bg-yellow-400/60 text-slate-600 hover:brightness-90  disabled:bg-slate-200 disabled:hover:brightness-100 disabled:text-slate-400"
      } disabled:cursor-not-allowed`}
          >
            <CheckCircle className="w-4 h-4" /> Kiểm tra đáp án
          </button>

          {/* Nút xóa */}
          <button
            onClick={() => setUserAnswer("")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 text-sm font-medium transition-all duration-200
    ${
      darkMode
        ? "border-slate-600 text-slate-300 hover:bg-slate-600 hover:border-slate-600"
        : "border-slate-200 text-slate-600 hover:bg-red-100 hover:border-red-100"
    }`}
          >
            Xóa
          </button>
        </div>
      )}

      {showResult && (
        <div className="space-y-4 mt-4">
          <div
            className={`p-4 rounded-lg border-l-4 ${
              isCorrect
                ? `bg-green-50 text-green-800 border-green-500 ${
                    darkMode ? "bg-green-900/20 text-green-400" : ""
                  }`
                : `bg-orange-50 text-orange-800 border-orange-500 ${
                    darkMode ? "bg-orange-900/20 text-orange-400" : ""
                  }`
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <>
                  <div className="text-2xl">🌟</div>
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-green-50" : "text-green-800"
                    }`}
                  >
                    Tuyệt vời! Câu trả lời của bạn chính xác.
                  </span>
                </>
              ) : (
                <>
                  <div className="text-2xl">📚</div>
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-orange-50" : "text-orange-800"
                    }`}
                  >
                    Chưa hoàn toàn chính xác, hãy tham khảo đáp án mẫu.
                  </span>
                </>
              )}
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-slate-800" : "bg-amber-50"
            } border ${darkMode ? "border-slate-600" : "border-amber-200"}`}
          >
            <h4
              className={`font-semibold mb-2 flex items-center gap-2 ${
                darkMode ? "text-orange-200" : "text-slate-600"
              }`}
            >
              <BookOpen className="w-4 h-4" /> Đáp án mẫu:
            </h4>

            <p
              className={`${
                darkMode ? "text-slate-300" : "text-amber-800"
              } leading-relaxed`}
            >
              {currentQuestion.fullFillAnswer}
            </p>
            {!isCorrect && (
              <div className={`mt-3 p-3 border ${darkMode ? " bg-blue-50 " : "border-slate-200 bg-slate-50"} rounded-lg`}>
                <span className="font-medium text-slate-600">
                  Từ khóa chính:
                </span>
                <span className="text-amber-600 ml-2 font-semibold text-lg">
                  {currentQuestion.answer}
                </span>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                resetQuestion();
                setUserAnswer("");
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Thử lại
            </button>
            <button
              onClick={() => updateQuestionState("completed")}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <CheckCircle className="w-4 h-4" /> Đã hiểu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FillCard;
