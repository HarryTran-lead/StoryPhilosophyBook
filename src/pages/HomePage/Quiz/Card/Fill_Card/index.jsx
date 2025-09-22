import React from "react";
import { CheckCircle, RotateCcw, BookOpen } from "lucide-react";

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
  const isCorrect = userAnswer.toLowerCase().trim().includes(currentQuestion.fillAnswer.toLowerCase().trim());

  return (
    <div className={`${cardClasses} rounded-xl shadow-lg p-8`}>
      <h3 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}>
        Điền định nghĩa cho thuật ngữ:
        <span className="text-amber-500 ml-2 underline decoration-wavy decoration-amber-300">
          {currentQuestion.term}
        </span>
      </h3>

      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Nhập định nghĩa hoặc giải thích về thuật ngữ này..."
        className={`w-full p-4 border-2 rounded-lg focus:outline-none resize-none h-32 transition-all duration-200 ${
          darkMode
            ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-amber-500"
            : "bg-white border-slate-200 text-slate-800 placeholder-slate-500 focus:border-amber-500"
        }`}
        disabled={showResult}
      />
      <div className={`text-right text-sm mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
        {userAnswer.length}/500 ký tự
      </div>

      {!showResult && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleFillAnswer}
            disabled={!userAnswer.trim()}
            className="flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg hover:shadow-amber-500/30"
          >
            <CheckCircle className="w-4 h-4" /> Kiểm tra đáp án
          </button>
          <button
            onClick={() => setUserAnswer("")}
            className={`px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
              darkMode ? "border-slate-600 text-slate-300 hover:bg-slate-600" : "border-slate-200 text-slate-600 hover:bg-slate-50"
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
                ? `bg-green-50 text-green-800 border-green-500 ${darkMode ? "bg-green-900/20 text-green-400" : ""}`
                : `bg-orange-50 text-orange-800 border-orange-500 ${darkMode ? "bg-orange-900/20 text-orange-400" : ""}`
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <>
                  <div className="text-2xl">🌟</div>
                  <span className="font-bold">Tuyệt vời! Câu trả lời của bạn chính xác.</span>
                </>
              ) : (
                <>
                  <div className="text-2xl">📚</div>
                  <span className="font-bold">Chưa hoàn toàn chính xác, hãy tham khảo đáp án mẫu.</span>
                </>
              )}
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? "bg-slate-800" : "bg-amber-50"} border ${darkMode ? "border-slate-600" : "border-amber-200"}`}>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Đáp án mẫu:
            </h4>
            <p className={`${darkMode ? "text-slate-300" : "text-amber-800"} leading-relaxed`}>
              {currentQuestion.definition}
            </p>
            {!isCorrect && (
              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="font-medium text-blue-800">Từ khóa chính:</span>
                <span className="text-blue-700 ml-2 font-semibold">{currentQuestion.fillAnswer}</span>
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
