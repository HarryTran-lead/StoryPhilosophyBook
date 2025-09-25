import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuizSidebar from "./Quiz_Sidebar";
import StudyHeader from "./Study_Header";
import Flashcard from "./Card/Flash_Card";
import QuizCard from "./Card/Quiz_Card";
import FillCard from "./Card/Fill_Card";
import QuestionNavigation from "./Pagination";

import {
  selectQuiz,
  setActiveChapter,
  setCurrentPage,
  nextPage,
  prevPage,
  setStudyMode,
  resetChapter,
} from "@redux/features/quizSlice";

const MarxistPhilosophyQuiz = () => {
  const dispatch = useDispatch();
  const { chapters, activeChapter, currentPage, questionStates, studyMode } =
    useSelector(selectQuiz);

  const currentChapter = chapters[activeChapter];
  const currentQuestion = currentChapter.questions[currentPage];
  const totalQuestions = currentChapter.questions.length;

  // Dark mode
  const [darkMode, setDarkMode] = React.useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const [expandedChapters, setExpandedChapters] = React.useState({ 0: true });
  const toggleDarkMode = () => setDarkMode((v) => !v);
  const toggleChapterExpanded = (idx) =>
    setExpandedChapters((s) => ({ ...s, [idx]: !s[idx] }));

  const restart = () => dispatch(resetChapter(activeChapter));

  const themeClasses = darkMode ? "dark bg-slate-800" : "bg-slate-100";
  const cardClasses = darkMode
    ? "bg-slate-700 text-white"
    : "bg-white text-slate-800";
  const sidebarClasses = darkMode ? "bg-slate-900" : "bg-slate-700";

  // Sidebar helpers (progress tổng "completed")
  const getStateIcon = (chapterIndex, questionIndex) => {
    const k = `${chapterIndex}-${questionIndex}`;
    const s = questionStates[k] || "not-started";
    if (s === "completed")
      return <div className="w-4 h-4 rounded-full bg-emerald-500" />;
    if (s === "learning")
      return <div className="w-4 h-4 rounded-full bg-amber-400" />;
    return <div className="w-4 h-4 rounded-full border-2 border-slate-400" />;
  };
  const calculateProgress = (chapterIndex) => {
    const chapter = chapters[chapterIndex];
    if (!chapter) return 0;
    const completed = chapter.questions.reduce((acc, _, i) => {
      const k = `${chapterIndex}-${i}`;
      return questionStates[k] === "completed" ? acc + 1 : acc;
    }, 0);
    return Math.round((completed / chapter.questions.length) * 100);
  };
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

  return (
    <div
      className={`${themeClasses} transition-all duration-300 overflow-hidden`}
    >
      <div className="flex">
        <QuizSidebar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          chapters={chapters}
          activeChapter={activeChapter}
          setActiveChapter={(i) => dispatch(setActiveChapter(i))}
          currentQuestionIndex={currentPage}
          setCurrentQuestionIndex={(i) => dispatch(setCurrentPage(i))}
          expandedChapters={expandedChapters}
          toggleChapterExpanded={toggleChapterExpanded}
          getTotalProgress={getTotalProgress}
          calculateProgress={calculateProgress}
          getStateIcon={getStateIcon}
          sidebarClasses={sidebarClasses}
          themeClasses={themeClasses}
        />

        <main className="flex-1 px-8 pt-4 pb-8 min-h-screen overflow-y-auto">
          <StudyHeader
            darkMode={darkMode}
            currentChapter={currentChapter}
            studyMode={studyMode}
            setStudyMode={(m) => dispatch(setStudyMode(m))} // ⬅️ reducer reset về trang 1
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

            {/* Pagination đồng bộ Redux */}
            <QuestionNavigation darkMode={darkMode} />
            {/* Bạn có thể thêm prev/next nhanh:
              <div className="mt-4 flex gap-2">
                <button onClick={() => dispatch(prevPage())}>Prev</button>
                <button onClick={() => dispatch(nextPage())}>Next</button>
              </div>
            */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarxistPhilosophyQuiz;
