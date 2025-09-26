import React from "react";
import {
  Sun,
  Moon,
  BookOpen,
  Clock,
  Trophy,
  Lightbulb,
  Circle,
  X, // ⬅️ thêm icon Close
} from "lucide-react";
import Tooltip from "@mui/material/Tooltip";

export default function QuizSidebar({
  darkMode,
  toggleDarkMode,
  chapters,
  activeChapter,
  setActiveChapter,
  setCurrentQuestionIndex,
  calculateProgress,
  onClose,
  onOpenTestModal,
}) {
  const handleClose = () => {
    if (typeof onClose === "function") onClose();
  };

  return (
    <aside
      // GRID: header (auto) / list (1fr) / footer (auto)
      className={`grid grid-rows-[auto,1fr,auto] h-[100svh] w-80 sm:w-88 transition-colors duration-500
        ${
          darkMode
            ? "bg-slate-900 text-slate-200"
            : "bg-slate-50 border-r border-gray-300 text-slate-800"
        }`}
      role="navigation"
      aria-label="Danh sách chương"
    >
      {/* ===== Header (row 1) ===== */}
      <div
        className={`pl-4 pr-2 pt-3 lg:pl-6 lg:pr-3 lg:pt-4 border-b ${
          darkMode ? "border-slate-800" : "border-slate-200"
        }`}
      >
        <div className="flex items-center justify-between mb-3 lg:mb-4">
          <div className="flex items-center gap-2.5 lg:gap-3">
            <div
              className={`${
                darkMode
                  ? "bg-gradient-to-br from-amber-300 to-amber-400 text-slate-900"
                  : "bg-amber-200 text-slate-800"
              } w-9 h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center`}
            >
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1
                className={`text-base lg:text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Triết học Mác-Lênin
              </h1>
              <p
                className={`${
                  darkMode ? "text-slate-400" : "text-slate-600"
                } text-xs lg:text-sm`}
              >
                Hệ thống học tập thông minh
              </p>
            </div>
          </div>

          {/* Nút theme + Close (Close chỉ hiện ở mobile) */}
          <div className="flex items-center gap-2">
            <Tooltip
              title={darkMode ? "Chế độ sáng" : "Chế độ tối"}
              placement="top"
            >
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 group
                  ${
                    darkMode
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-white border border-slate-200 hover:bg-amber-50 hover:border-amber-200"
                  }`}
                aria-label="Đổi giao diện"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>
            </Tooltip>

            {/* Close chỉ hiện trên mobile (ẩn ở lg) */}
            <button
              type="button"
              onClick={handleClose}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200
                ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700 border border-slate-900"
                    : "bg-white hover:bg-slate-100 border border-slate-200"
                }`}
              aria-label="Đóng menu"
            >
              <X
                className={`w-5 h-5 ${
                  darkMode ? "text-slate-200" : "text-slate-700"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Chapters List (row 2 — SCROLL ONLY HERE) ===== */}
      <div className="overflow-y-auto py-3 lg:py-4 pl-4 pr-3 lg:pl-6 lg:pr-4 custom-scrollbar">
        <div className="space-y-2.5 lg:space-y-3">
          {chapters.map((ch, i) => {
            const progress = calculateProgress(i);
            const active = i === activeChapter;
            return (
              <div key={ch.id ?? `chapter-${i}`} className="group">
                <button
                  type="button"
                  onClick={() => {
                    setActiveChapter(i);
                    setCurrentQuestionIndex(0);
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`w-full text-left relative p-3 lg:p-4 rounded-xl border shadow-sm transition-all hover:scale-[1.02]
                    ${
                      darkMode
                        ? active
                          ? "bg-gradient-to-r from-amber-300/20 via-amber-300/15 to-amber-400/10 text-amber-100 shadow-inner border-amber-200/40"
                          : "bg-slate-800 border-slate-700 hover:border-amber-300/50"
                        : active
                        ? "bg-amber-50 border-amber-400"
                        : "bg-white border-slate-300 hover:border-amber-400/50 hover:shadow-md"
                    }`}
                >
                  {/* badge số thứ tự */}
                  <div className="absolute -top-2 -left-2">
                    <div
                      className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold
                      ${
                        darkMode
                          ? active
                            ? "bg-gradient-to-br from-amber-200 to-amber-400 text-slate-900 shadow-md shadow-amber-400/30"
                            : "bg-slate-700/80 text-slate-300 border border-slate-600 group-hover:border-amber-300/50"
                          : active
                          ? "bg-gradient-to-br from-amber-300 to-amber-500 text-slate-800 shadow-md shadow-amber-400/40"
                          : "bg-slate-200 text-slate-600 border border-slate-300 group-hover:border-amber-400/50"
                      }`}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <div className="ml-3.5 lg:ml-4">
                    <div className="flex justify-between mb-2 items-start">
                      <h3
                        className={`font-semibold text-sm lg:text-base leading-tight flex-1
                        ${
                          darkMode
                            ? active
                              ? "text-amber-100"
                              : "text-white"
                            : active
                            ? "text-amber-600"
                            : "text-slate-800"
                        }`}
                      >
                        Chương {i + 1}: {ch.title}
                      </h3>
                      <span
                        className={`ml-2.5 px-2 py-0.5 rounded-full text-[10px] lg:text-xs font-medium
                        ${
                          darkMode
                            ? active
                              ? "bg-amber-200/20 text-amber-300"
                              : "bg-slate-700 text-slate-300"
                            : active
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {progress}%
                      </span>
                    </div>

                    <p
                      className={`text-xs lg:text-sm mb-2.5 lg:mb-3 leading-relaxed
                      ${
                        darkMode
                          ? active
                            ? "text-slate-200"
                            : "text-slate-400"
                          : active
                          ? "text-slate-700"
                          : "text-slate-500"
                      }`}
                    >
                      {ch.description}
                    </p>

                    <div
                      className={`${
                        darkMode
                          ? active
                            ? "bg-gradient-to-br from-slate-500 to-slate-600"
                            : "bg-gradient-to-br from-slate-600 to-slate-700"
                          : "bg-slate-200"
                      } w-full rounded-full h-1.5 lg:h-2 overflow-hidden`}
                    >
                      <div
                        style={{ width: `${progress}%` }}
                        className={`h-full rounded-full transition-all duration-500 ${
                          active
                            ? darkMode
                              ? "bg-amber-400"
                              : "bg-amber-500"
                            : darkMode
                            ? "bg-slate-500"
                            : "bg-amber-300"
                        }`}
                      />
                    </div>

                    <div
                      className={`mt-2 text-[11px] lg:text-xs flex items-center gap-1 ${
                        darkMode
                          ? active
                            ? "text-slate-200"
                            : "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      <Circle className="w-3 h-3" />
                      {ch.questions?.length || 0} câu hỏi
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Footer (row 3) ===== */}
      <div
        className={`px-3 lg:px-4 pt-2.5 pb-3 lg:pt-3 lg:pb-4 border-t ${
          darkMode
            ? "border-slate-800 bg-slate-900"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <div
          className={`${
            darkMode
              ? "bg-slate-800"
              : "bg-white border border-slate-200 shadow-sm"
          } p-3 lg:p-4 rounded-xl`}
        >
          <h3
            className={`font-semibold mb-2.5 lg:mb-3 flex items-center gap-2 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            <Lightbulb
              className={`${
                darkMode ? "text-amber-400" : "text-slate-800"
              } w-4 h-4`}
            />
            Công cụ học tập
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onOpenTestModal} //  mở modal
              className={`${
                darkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                  : "bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 shadow-sm"
              } flex items-center justify-center gap-2 py-2 rounded-lg text-xs lg:text-sm transition-all`}
            >
              <Clock
                className={`w-4 h-4 ${
                  darkMode ? "text-white" : "text-blue-500"
                }`}
              />
              <span>Kiểm tra</span>
            </button>

            <button
              className={`${
                darkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                  : "bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 shadow-sm"
              } flex items-center justify-center gap-2 py-2 rounded-lg text-xs lg:text-sm transition-all`}
            >
              <Trophy
                className={`w-4 h-4 ${
                  darkMode ? "text-white" : "text-green-500"
                }`}
              />
              <span>Thành tích</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
