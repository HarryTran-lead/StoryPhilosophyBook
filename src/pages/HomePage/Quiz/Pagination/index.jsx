import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuiz,
  setCurrentPage,
  nextPage,
  prevPage,
} from "@redux/features/quizSlice";

const QuestionNavigation = ({ darkMode = false }) => {
  const dispatch = useDispatch();
  const { chapters, activeChapter, currentPage } = useSelector(selectQuiz);
  const totalQuestions = chapters?.[activeChapter]?.questions?.length || 0;

  const [jumpPage, setJumpPage] = useState("");

  const pages = useMemo(() => {
    const maxVisible = 7;
    if (totalQuestions <= maxVisible) {
      return Array.from({ length: totalQuestions }, (_, i) => i);
    }
    if (currentPage < 4) {
      return [0, 1, 2, 3, 4, "...", totalQuestions - 1];
    }
    if (currentPage > totalQuestions - 5) {
      return [
        0,
        "...",
        totalQuestions - 5,
        totalQuestions - 4,
        totalQuestions - 3,
        totalQuestions - 2,
        totalQuestions - 1,
      ];
    }
    return [
      0,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalQuestions - 1,
    ];
  }, [totalQuestions, currentPage]);

  const handleJump = () => {
    const pageNum = parseInt(jumpPage, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalQuestions) {
      dispatch(setCurrentPage(pageNum - 1));
      setJumpPage("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex justify-between items-center w-full">
        {/* Prev */}
        <button
          onClick={() => dispatch(prevPage())}
          disabled={currentPage === 0}
          className={`flex items-center gap-0.5 px-3 py-2.5 rounded-md font-medium transition-colors
            ${
              currentPage === 0
                ? darkMode
                  ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
                : darkMode
                ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                : "bg-white shadow-md text-gray-600 hover:bg-amber-50"
            }`}
        >
          <ChevronLeft className="w-5 h-5 mt-0.5" />
          Câu trước
        </button>

        {/* Pagination */}
        <div className="flex gap-1">
          {pages.map((page, index) =>
            page === "..." ? (
              <span
                key={`ellipsis-${index}`}
                className={`w-10 h-10 flex items-center justify-center ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                …
              </span>
            ) : (
              <button
                key={page}
                onClick={() => dispatch(setCurrentPage(page))}
                className={`w-9 h-9 rounded-md text-sm font-medium transition-colors border
                  ${
                    page === currentPage
                      ? darkMode
                        ? "bg-gradient-to-r from-amber-300/30 via-amber-300/20 to-amber-400/20 text-amber-100 shadow-inner border-amber-200/40"
                        : "bg-gradient-to-r from-amber-100/40 via-amber-100/60 to-amber-100/50 text-amber-800 shadow-sm border-amber-200/60"
                      : darkMode
                      ? "bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-slate-300 border-slate-600"
                      : "bg-white text-slate-600 hover:brightness-90 hover:border-none border-slate-300"
                  }`}
              >
                {page + 1}
              </button>
            )
          )}
        </div>

        {/* Next */}
        <button
          onClick={() => dispatch(nextPage())}
          disabled={currentPage === totalQuestions - 1}
          className={`flex items-center gap-0.5 px-3 py-2.5 rounded-md font-medium transition-colors
            ${
              currentPage === totalQuestions - 1
                ? darkMode
                  ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
                : darkMode
                ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                : "bg-white shadow-md text-gray-600 hover:bg-amber-50"
            }`}
        >
          Câu sau <ChevronRight className="w-5 h-5 mt-0.5" />
        </button>
      </div>

      {/* Jump To Page */}
      {totalQuestions > 8 && (
        <div className="flex items-center gap-2">
          <Tooltip title="Nhập số trang muốn tới" arrow>
            <input
              type="number"
              min={1}
              max={totalQuestions}
              value={jumpPage}
              onChange={(e) => setJumpPage(e.target.value)}
              placeholder="Number"
              className={`w-24 px-3 py-2 rounded-md border text-sm focus:outline-none ${
                darkMode
                  ? "bg-slate-800 border-slate-600 text-slate-200"
                  : "bg-white border-slate-300 text-slate-700"
              }`}
            />
          </Tooltip>
          <Tooltip title="Nhấn GO để chuyển tới trang" arrow>
            <button
              onClick={handleJump}
              className="px-3 py-2 rounded-md bg-amber-400/80 text-white text-sm font-medium hover:brightness-90 transition"
            >
              GO
            </button>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default QuestionNavigation;
