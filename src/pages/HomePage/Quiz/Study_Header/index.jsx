import {
  RotateCcw,
  Brain,
  Edit3,
  Shuffle,
  Maximize2,
  RefreshCw,
  Trophy,
  Star,
} from "lucide-react";

export default function StudyHeader({
  darkMode,
  currentChapter,
  currentQuestionIndex,
  totalQuestions,
  studyMode,
  setStudyMode,
  resetQuestion,
  shuffleQuestions,
  restartChapter,
  toggleFullscreen,
  chapters,
  activeChapter,
  questionStates,
  calculateProgress,
  cardClasses,
}) {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // --- Common Classes ---
  const textColor = darkMode ? "text-white" : "text-slate-800";
  const subTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const buttonBase =
    "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200";

  const actionButtonClasses = darkMode
    ? "bg-slate-700 text-slate-200 hover:bg-slate-600 shadow-md rounded-lg"
    : "bg-white text-slate-800 hover:bg-amber-50 hover:text-slate-900 shadow-lg rounded-lg";

  // --- Configs ---
  const studyModes = [
    { mode: "flashcard", icon: RotateCcw, label: "Flashcard" },
    { mode: "quiz", icon: Brain, label: "Trắc nghiệm" },
    { mode: "fill", icon: Edit3, label: "Điền đáp án" },
  ];

  const actions = [
    { onClick: shuffleQuestions, icon: Shuffle, label: "Tráo thẻ" },
    { onClick: restartChapter, icon: RefreshCw, label: "Làm lại" },
    { onClick: toggleFullscreen, icon: Maximize2, label: "Toàn màn hình" },
  ];

  return (
    <div className="mb-8">
      {/* Chapter Info + Progress */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className={`text-3xl font-bold mb-2 ${textColor}`}>
            {/* Thêm số chương */}
            Chương {activeChapter + 1}: {currentChapter.title}
          </h2>
          <p className={subTextColor}>{currentChapter.description}</p>
        </div>
        <div className="text-right">
          <div
            className={`text-sm mb-1 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Câu hỏi {currentQuestionIndex + 1} / {totalQuestions}
          </div>
          <div className="relative w-65 bg-slate-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 to-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
            {/* % hiển thị */}
            <span
              className={`absolute inset-0 flex items-center justify-center text-[10px] font-semibold transition-colors duration-200 ${
                progress > 50 ? "text-white" : "text-gray-800"
              }`}
            >
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        {/* Study Mode Selector */}
        <div className="flex gap-2">
          {studyModes.map(({ mode, icon: Icon, label }) => (
            <button
              key={mode}
              onClick={() => {
                setStudyMode(mode);
                resetQuestion();
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-[1.03] ${
                studyMode === mode
                  ? "bg-gradient-to-br from-amber-400 via-amber-300/95 to-amber-400 text-slate-800 shadow-lg shadow-amber-500/30"
                  : `${cardClasses} hover:bg-amber-50 ${
                      darkMode ? "hover:bg-slate-600" : ""
                    } shadow-md`
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {actions.map(({ onClick, icon: Icon, label }) => (
            <button
              key={label}
              onClick={onClick}
              className={`${buttonBase} ${actionButtonClasses} transform hover:scale-[1.03]`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex gap-6 text-sm">
        <div className={`flex items-center gap-2 ${subTextColor}`}>
          {/* Cúp đổi gradient vàng */}
          <Trophy className="w-4 h-4 text-blue-500 " />
          <span>{calculateProgress(activeChapter)}% hoàn thành</span>
        </div>
        <div className={`flex items-center gap-2 ${subTextColor}`}>
          <Star className="w-4 h-4 text-amber-400" />
          <span>
            {
              chapters[activeChapter].questions.filter(
                (_, index) =>
                  questionStates[`${activeChapter}-${index}`] === "completed"
              ).length
            }{" "}
            câu đúng
          </span>
        </div>
      </div>
    </div>
  );
}
