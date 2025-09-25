import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Other section
import QuizSidebar from "./Quiz_Sidebar";
import StudyHeader from "./Study_Header";
import Flashcard from "./Card/Flash_Card";
import QuizCard from "./Card/Quiz_Card";
import FillCard from "./Card/Fill_Card";
import QuestionNavigation from "./Pagination";

import {
  selectQuiz,
  selectQuestionUI,
  setActiveChapter,
  setCurrentPage,
  setStudyMode,
  resetChapter,
  selectModeAttemptPercent,
} from "@redux/features/quizSlice";

const MarxistPhilosophyQuiz = () => {
  const dispatch = useDispatch();
  const { chapters, activeChapter, currentPage, questionStates, studyMode } =
    useSelector(selectQuiz);

  const currentChapter = chapters[activeChapter];
  const currentQuestion = currentChapter.questions[currentPage];

  // (Giữ lại: nếu component con cần UI tổng quát)
  const ui = useSelector((state) =>
    selectQuestionUI(state, activeChapter, currentPage)
  );

  // Dark mode cục bộ (persist localStorage)
  const [darkMode, setDarkMode] = React.useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // TÍNH PROGRESS CHO SIDEBAR = trung bình (quiz, fill, flashcard) mỗi chương
  const chapterAvgProgress = useSelector((state) =>
    state.quiz.chapters.map((_, ci) => {
      const quizP = selectModeAttemptPercent(state, ci, "quiz");
      const fillP = selectModeAttemptPercent(state, ci, "fill");
      const cardP = selectModeAttemptPercent(state, ci, "flashcard");
      return Math.round((quizP + fillP + cardP) / 3);
    })
  );

  // Hàm cung cấp cho Sidebar
  const calculateProgress = (chapterIndex) =>
    chapterAvgProgress?.[chapterIndex] ?? 0;

  // Sidebar vẫn cần setter page/chapter
  const [expandedChapters, setExpandedChapters] = React.useState({ 0: true });
  const toggleDarkMode = () => setDarkMode((v) => !v);
  const toggleChapterExpanded = (idx) =>
    setExpandedChapters((s) => ({ ...s, [idx]: !s[idx] }));

  // Prev/Next (nếu còn dùng ở nơi khác)
  const restart = () => dispatch(resetChapter(activeChapter));

  const themeClasses = darkMode ? "dark bg-slate-800" : "bg-slate-100";
  const cardClasses = darkMode
    ? "bg-slate-700 text-white"
    : "bg-white text-slate-800";
  const sidebarClasses = darkMode ? "bg-slate-900" : "bg-slate-700";

  // Icon trạng thái tổng thể (không theo mode)
  const getStateIcon = (chapterIndex, questionIndex) => {
    const k = `${chapterIndex}-${questionIndex}`;
    const s = questionStates[k] || "not-started";
    if (s === "completed")
      return (
        <svg
          className="w-4 h-4 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.95a1 1 0 011.414-1.414l3.101 3.1 6.364-6.343a1 1 0 011.535 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    if (s === "learning")
      return <div className="w-4 h-4 rounded-full bg-amber-400" />;
    return <div className="w-4 h-4 rounded-full border-2 border-slate-400" />;
  };

  // (Tuỳ ý) tổng completed toàn app
  const getTotalProgress = () => {
    let totalCompleted = 0;
    let totalQ = 0;
    chapters.forEach((ch, ci) => {
      totalQ += ch.questions.length;
      ch.questions.forEach((_, qi) => {
        const k = `${ci}-${qi}`;
        if (questionStates[k] === "completed") totalCompleted++;
      });
    });
    return { completed: totalCompleted, total: totalQ };
  };

  // MOBILE drawer state
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);

  return (
    <div
      className={`${themeClasses} transition-all duration-300 min-h-[100svh]`}
    >
      {/* Drawer Sidebar — mở bằng nút trong StudyHeader (chỉ mobile) */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileSidebarOpen(false)}
            aria-hidden
          />
          <div
            className={`absolute left-0 top-0 h-full w-[86vw] max-w-[360px] shadow-xl overflow-y-auto ${
              darkMode ? "bg-slate-900" : "bg-slate-50"
            }`}
          >
            <QuizSidebar
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              chapters={chapters}
              activeChapter={activeChapter}
              setActiveChapter={(i) => {
                setMobileSidebarOpen(false);
                dispatch(setActiveChapter(i));
                dispatch(setCurrentPage(0));
              }}
              setCurrentQuestionIndex={(i) => {
                setMobileSidebarOpen(false);
                dispatch(setCurrentPage(i));
              }}
              expandedChapters={expandedChapters}
              toggleChapterExpanded={toggleChapterExpanded}
              getTotalProgress={getTotalProgress}
              calculateProgress={calculateProgress}
              getStateIcon={getStateIcon}
              sidebarClasses={sidebarClasses}
              themeClasses={themeClasses}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar desktop GIỮ NGUYÊN */}
        <div className="hidden lg:block lg:sticky lg:top-0 lg:h-full lg:min-w-[300px]">
          <QuizSidebar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            chapters={chapters}
            activeChapter={activeChapter}
            setActiveChapter={(i) => dispatch(setActiveChapter(i))}
            setCurrentQuestionIndex={(i) => dispatch(setCurrentPage(i))}
            expandedChapters={expandedChapters}
            toggleChapterExpanded={toggleChapterExpanded}
            getTotalProgress={getTotalProgress}
            calculateProgress={calculateProgress}
            getStateIcon={getStateIcon}
            sidebarClasses={sidebarClasses}
            themeClasses={themeClasses}
          />
        </div>

        {/* Main */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-3 lg:pt-4 pb-2 min-h-screen">
          <StudyHeader
            darkMode={darkMode}
            currentChapter={currentChapter}
            studyMode={studyMode}
            setStudyMode={(m) => dispatch(setStudyMode(m))}
            shuffleQuestions={() => dispatch(setCurrentPage(0))}
            restartChapter={restart}
            toggleFullscreen={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
              } else {
                document.exitFullscreen();
              }
            }}
            activeChapter={activeChapter}
            cardClasses={cardClasses}
            onOpenSidebar={() => setMobileSidebarOpen(true)} // nút menu trong header
          />

          <div className="max-w-4xl mx-auto">
            {studyMode === "flashcard" && <Flashcard darkMode={darkMode} />}
            {studyMode === "quiz" && (
              <QuizCard
                currentQuestion={currentQuestion}
                darkMode={darkMode}
                cardClasses={cardClasses}
              />
            )}
            {studyMode === "fill" && (
              <FillCard
                currentQuestion={currentQuestion}
                darkMode={darkMode}
                cardClasses={cardClasses}
              />
            )}

            <div className="mt-6">
              <QuestionNavigation darkMode={darkMode} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarxistPhilosophyQuiz;
