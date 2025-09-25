// src/pages/MarxistPhilosophyQuiz/Study_Header.jsx
import React, { memo, useCallback, useMemo } from "react";
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
import { useSelector } from "react-redux";
import {
  selectModeAttemptPercent,
  selectModeCorrectCount,
  selectQuiz, // ⬅️ lấy currentPage
} from "@redux/features/quizSlice";

function StudyHeader({
  darkMode,
  currentChapter,
  studyMode,
  setStudyMode,
  shuffleQuestions,
  restartChapter,
  toggleFullscreen,
  activeChapter,
  cardClasses,
}) {
  // Lấy currentPage từ Redux để hiển thị "Câu hỏi X / Y"
  const { currentPage } = useSelector(selectQuiz);
  const totalQuestions = currentChapter?.questions?.length ?? 0;
  const currentIndexSafe =
    totalQuestions > 0 ? Math.min(currentPage + 1, totalQuestions) : 0;

  // Progress (attempt-based) theo mode hiện tại
  const progressByMode = useSelector((state) =>
    selectModeAttemptPercent(state, activeChapter, studyMode)
  );
  // Số câu đúng theo mode (flashcard không có đúng/sai)
  const correctCountByMode = useSelector((state) =>
    selectModeCorrectCount(state, activeChapter, studyMode)
  );

  const textColor = darkMode ? "text-white" : "text-slate-800";
  const subTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const buttonBase =
    "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200";
  const actionButtonClasses = darkMode
    ? "bg-slate-700 text-slate-200 hover:bg-slate-600 shadow-md rounded-lg"
    : "bg-white text-slate-800 hover:bg-amber-50 hover:text-slate-900 shadow-lg rounded-lg";

  const studyModes = useMemo(
    () => [
      { mode: "flashcard", icon: RotateCcw, label: "Flashcard" },
      { mode: "quiz", icon: Brain, label: "Trắc nghiệm" },
      { mode: "fill", icon: Edit3, label: "Điền đáp án" },
    ],
    []
  );

  const actions = useMemo(
    () => [
      { onClick: shuffleQuestions, icon: Shuffle, label: "Tráo thẻ" },
      { onClick: restartChapter, icon: RefreshCw, label: "Làm lại" },
      { onClick: toggleFullscreen, icon: Maximize2, label: "Toàn màn hình" },
    ],
    [shuffleQuestions, restartChapter, toggleFullscreen]
  );

  // đổi mode: reducer đã reset về trang 1
  const handleChangeMode = useCallback(
    (mode) => {
      if (mode !== studyMode) setStudyMode(mode);
    },
    [studyMode, setStudyMode]
  );

  const modeLabel =
    studyMode === "quiz"
      ? "Trắc nghiệm"
      : studyMode === "fill"
      ? "Điền đáp án"
      : "Flashcard";

  return (
    <div className="mb-8" role="region" aria-label="Thanh điều khiển học tập">
      {/* Title + MAIN progress (attempt-based, theo mode) */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className={`text-3xl font-bold mb-2 ${textColor}`}>
            Chương {activeChapter + 1}: {currentChapter.title}
          </h2>
          <p className={subTextColor}>{currentChapter.description}</p>
        </div>

        <div className="text-right">
          {/* ⬅️ ĐÃ SỬA: hiển thị số câu hỏi thay vì “Chế độ: …” */}
          <div
            className={`text-sm mb-1 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Câu hỏi {currentIndexSafe} / {totalQuestions}
          </div>

          <div className="relative w-64 bg-slate-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 to-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressByMode}%` }}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressByMode}
              role="progressbar"
              aria-label={`Tiến độ đã làm (${modeLabel})`}
            />
            <span
              className={`absolute inset-0 flex items-center justify-center text-[10px] font-semibold transition-colors duration-200 ${
                progressByMode > 50 ? "text-white" : "text-gray-800"
              }`}
            >
              {progressByMode}%
            </span>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {studyModes.map(({ mode, icon: Icon, label }) => {
            const isActive = studyMode === mode;
            return (
              <button
                key={mode}
                onClick={() => handleChangeMode(mode)}
                aria-pressed={isActive}
                aria-label={`Chuyển sang chế độ ${label}`}
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-200 transform hover:scale-[1.03] 
                  ${
                    isActive
                      ? darkMode
                        ? "bg-gradient-to-r from-amber-300/20 via-amber-300/15 to-amber-400/10 text-amber-100 shadow-inner border-amber-200/20"
                        : "bg-gradient-to-r from-amber-200/40 via-amber-200/30 to-amber-300/40 text-amber-800 shadow-md border-amber-300/70"
                      : `${cardClasses} ${
                          darkMode
                            ? "hover:bg-slate-600 border-slate-600/20"
                            : "hover:bg-amber-50 border-slate-200/40"
                        } shadow-md`
                  }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            );
          })}
        </div>

        <div className="flex gap-3">
          {actions.map(({ onClick, icon: Icon, label }) => (
            <button
              key={label}
              onClick={onClick}
              aria-label={label}
              className={`${buttonBase} ${actionButtonClasses} transform hover:scale-[1.03]`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats (theo mode) */}
      <div className="flex gap-6 text-sm">
        <div className={`flex items-center gap-2 ${subTextColor}`}>
          <Trophy className="w-4 h-4 text-blue-500" />
          <span>
            {progressByMode}% đã làm ({modeLabel})
          </span>
        </div>

        <div className={`flex items-center gap-2 ${subTextColor}`}>
          <Star className="w-4 h-4 text-amber-400" />
          {studyMode === "flashcard" ? (
            // ⬅️ Với flashcard: hiển thị tổng số câu hỏi
            <span>
              {totalQuestions} câu hỏi ({modeLabel})
            </span>
          ) : (
            // Với quiz/fill: hiển thị số câu đúng
            <span>
              {correctCountByMode} câu đúng ({modeLabel})
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(StudyHeader);
