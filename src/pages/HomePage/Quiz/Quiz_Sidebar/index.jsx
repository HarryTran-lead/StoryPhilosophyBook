import React from "react";
import {
  Sun,
  Moon,
  BookOpen,
  Clock,
  Settings,
  Lightbulb,
  Target,
  Trophy,
  Circle,
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
  getTotalProgress
}) {
  return (
    <aside
      className={`w-88 flex flex-col min-h-screen transition-colors duration-500 ease-in-out
        ${
          darkMode
            ? "bg-slate-900 text-slate-200"
            : "bg-slate-50 border-r border-gray-300 text-slate-800"
        }`}
      role="navigation"
      aria-label="Danh sách chương"
    >
      {/* Header */}
      <div
        className={`flex-shrink-0 pl-6 pr-3 pt-4 border-b ${
          darkMode ? "border-slate-800" : "border-slate-200"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center
              ${
                darkMode
                  ? "bg-gradient-to-br from-amber-300 to-amber-400 text-slate-900"
                  : "bg-amber-200 text-slate-800"
              }`}
            >
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Triết học Mác-Lênin
              </h1>
              <p
                className={`${
                  darkMode ? "text-slate-400" : "text-slate-600"
                } text-sm`}
              >
                Hệ thống học tập thông minh
              </p>
            </div>
          </div>

          <Tooltip
            title={darkMode ? "Chế độ sáng" : "Chế độ tối"}
            placement="top"
          >
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Bật chế độ sáng" : "Bật chế độ tối"}
              className={`p-2 rounded-lg transition-all duration-300 group
                ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700"
                    : "bg-white border border-slate-200 hover:bg-amber-50 hover:border-amber-200"
                }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Chapters List */}
      <div className="flex-1 overflow-y-auto py-4 pl-6 pr-4 custom-scrollbar transition-colors duration-500">
        <div className="space-y-3">
          {chapters.map((chapter, index) => {
            const progress = calculateProgress(index);
            const isActive = activeChapter === index;

            return (
              <div
                key={chapter.id ?? `chapter-${index}`}
                className="group transition-colors duration-500"
              >
                <button
                  type="button"
                  aria-current={isActive ? "page" : undefined}
                  className={`w-full text-left relative p-4 rounded-xl cursor-pointer transition-all duration-300 border shadow-sm transform
                    ${
                      darkMode
                        ? isActive
                          ? "bg-gradient-to-r from-amber-300/20 via-amber-300/15 to-amber-400/10 text-amber-100 shadow-inner border-amber-200/40"
                          : "bg-slate-800 border-slate-700 hover:border-amber-300/50"
                        : isActive
                        ? "bg-amber-50 border-amber-400"
                        : "bg-white border-slate-300 hover:border-amber-400/50 hover:shadow-md"
                    }
                    hover:scale-[1.02]`}
                  onClick={() => {
                    setActiveChapter(index);
                    setCurrentQuestionIndex(0);
                  }}
                >
                  {/* Badge */}
                  <div className="absolute -top-2 -left-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold tracking-tight
                        ${
                          darkMode
                            ? isActive
                              ? "bg-gradient-to-br from-amber-200 to-amber-400 text-slate-900 shadow-md shadow-amber-400/30"
                              : "bg-slate-700/80 text-slate-300 border border-slate-600 group-hover:border-amber-300/50"
                            : isActive
                            ? "bg-gradient-to-br from-amber-300 to-amber-500 text-slate-800 shadow-md shadow-amber-400/40"
                            : "bg-slate-200 text-slate-600 border border-slate-300 group-hover:border-amber-400/50"
                        }`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-4">
                    <div className="flex justify-between mb-2 items-start">
                      <h3
                        className={`font-semibold text-base leading-tight flex-1
                        ${
                          darkMode
                            ? isActive
                              ? "text-amber-100"
                              : "text-white"
                            : isActive
                            ? "text-amber-600"
                            : "text-slate-800"
                        }`}
                      >
                        Chương {index + 1}: {chapter.title}
                      </h3>

                      <span
                        className={`ml-2.5 px-2 py-1 rounded-full text-xs font-medium
                        ${
                          darkMode
                            ? isActive
                              ? "bg-amber-200/20 text-amber-300"
                              : "bg-slate-700 text-slate-300"
                            : isActive
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {progress}%
                      </span>
                    </div>

                    <p
                      className={`text-sm mb-3 leading-relaxed
                      ${
                        darkMode
                          ? isActive
                            ? "text-slate-200"
                            : "text-slate-400"
                          : isActive
                          ? "text-slate-700"
                          : "text-slate-500"
                      }`}
                    >
                      {chapter.description}
                    </p>

                    {/* Progress Bar */}
                    <div
                      className={`w-full rounded-full h-2 overflow-hidden
                      ${
                        darkMode
                          ? isActive
                            ? "bg-gradient-to-br from-slate-500 to-slate-600"
                            : "bg-gradient-to-br from-slate-600 to-slate-700"
                          : "bg-slate-200"
                      }`}
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-500
                          ${
                            isActive
                              ? darkMode
                                ? "bg-amber-400"
                                : "bg-amber-500"
                              : darkMode
                              ? "bg-slate-500"
                              : "bg-amber-300"
                          }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div
                      className={`mt-2 text-xs flex items-center gap-1 ${
                        darkMode
                          ? isActive
                            ? "text-slate-200"
                            : "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      <Circle className="w-3 h-3" />
                      {chapter.questions?.length || 0} câu hỏi
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div
        className={`flex-shrink-0 p-4 border-t ${
          darkMode ? "border-slate-800" : "border-slate-200"
        }`}
      >
        <div
          className={`${
            darkMode
              ? "bg-slate-800"
              : "bg-white border border-slate-200 shadow-sm"
          } p-4 rounded-xl transition-colors duration-500`}
        >
          <h3
            className={`font-semibold mb-3 flex items-center gap-2 ${
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
            {[
              { icon: Target, label: "Luyện tập", color: "text-amber-500" },
              { icon: Clock, label: "Kiểm tra", color: "text-blue-500" },
              { icon: Trophy, label: "Thành tích", color: "text-green-500" },
              { icon: Settings, label: "Cài đặt", color: "text-pink-500" },
            ].map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                className={`${
                  darkMode
                    ? "bg-slate-900 hover:bg-slate-700 text-slate-200"
                    : "bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 shadow-sm"
                }
                  flex items-center gap-2 p-2 rounded-lg transition-all duration-200 text-sm`}
              >
                <Icon
                  className={`w-4 h-4 ${darkMode ? "text-white" : color}`}
                />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
