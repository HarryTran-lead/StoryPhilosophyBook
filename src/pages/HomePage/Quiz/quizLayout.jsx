import React, { useState, useEffect } from "react";
import {
  Clock,
  CheckCircle,
} from "lucide-react";
import StudyTips from "./Study_Tips";
import QuizSidebar from "./Quiz_Sidebar";
import StudyHeader from "./Study_Header";
import Flashcard from "./Card/Flash_Card";
import QuizCard from "./Card/Quiz_Card";
import FillCard from "./Card/Fill_Card";
import QuestionNavigation from "./Pagination";
import { chapters } from "./data";

// ==============================================
// Main Component
// ==============================================
const MarxistPhilosophyQuiz = () => {
  // ------------------------------------------
  // State
  // ------------------------------------------
  const [activeChapter, setActiveChapter] = useState(0);
  const [studyMode, setStudyMode] = useState("flashcard"); // flashcard | quiz | fill
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionStates, setQuestionStates] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState({ 0: true });
  const [showConfetti, setShowConfetti] = useState(false);

  const [studySettings, setStudySettings] = useState({
    randomMode: false,
    timerMode: false,
    timeLimit: 300,
  });

  const currentChapter = chapters[activeChapter];
  const currentQuestion = currentChapter.questions[currentQuestionIndex];
  const totalQuestions = currentChapter.questions.length;

  // ------------------------------------------
  // Effects: Dark Mode
  // ------------------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // ------------------------------------------
  // Initialize question states
  // ------------------------------------------
  useEffect(() => {
    const initialStates = {};
    chapters.forEach((chapter, ci) => {
      chapter.questions.forEach((_, qi) => {
        const key = `${ci}-${qi}`;
        if (!questionStates[key]) initialStates[key] = "not-started";
      });
    });
    setQuestionStates((prev) => ({ ...prev, ...initialStates }));
  }, []);

  // ==============================================
  // Handlers
  // ==============================================
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error enabling fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const toggleChapterExpanded = (chapterIndex) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterIndex]: !prev[chapterIndex],
    }));
  };

  const updateQuestionState = (state) => {
    const key = `${activeChapter}-${currentQuestionIndex}`;
    setQuestionStates((prev) => ({ ...prev, [key]: state }));

    if (state === "completed") {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetQuestion();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      resetQuestion();
    }
  };

  const resetQuestion = () => {
    setShowAnswer(false);
    setUserAnswer("");
    setSelectedOption(null);
    setShowResult(false);
  };

  const handleFlashcardFlip = () => {
    setShowAnswer((prev) => !prev);
    if (!showAnswer) updateQuestionState("learning");
  };

  const handleQuizAnswer = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowResult(true);
    updateQuestionState(
      optionIndex === currentQuestion.quiz.correct ? "completed" : "learning"
    );
  };

  const handleFillAnswer = () => {
    const userLower = userAnswer.toLowerCase().trim();
    const correctLower = currentQuestion.fillAnswer.toLowerCase().trim();
    const isCorrect =
      userLower === correctLower || userLower.includes(correctLower);
    setShowResult(true);
    updateQuestionState(isCorrect ? "completed" : "learning");
  };

  const shuffleQuestions = () => {
    const shuffled = [...currentChapter.questions].sort(
      () => Math.random() - 0.5
    );
    chapters[activeChapter].questions = shuffled;
    setCurrentQuestionIndex(0);
    resetQuestion();
  };

  const restartChapter = () => {
    setCurrentQuestionIndex(0);
    resetQuestion();
    const updatedStates = { ...questionStates };
    chapters[activeChapter].questions.forEach((_, idx) => {
      updatedStates[`${activeChapter}-${idx}`] = "not-started";
    });
    setQuestionStates(updatedStates);
  };

  // ==============================================
  // Helpers
  // ==============================================
  const getStateIcon = (chapterIndex, questionIndex) => {
    const key = `${chapterIndex}-${questionIndex}`;
    const state = questionStates[key] || "not-started";

    switch (state) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "learning":
        return <Clock className="w-4 h-4 text-amber-500" />;
      default:
        return (
          <div className="w-4 h-4 rounded-full border-2 border-slate-400" />
        );
    }
  };

  const calculateProgress = (chapterIndex) => {
    const chapterQuestions = chapters[chapterIndex].questions.length;
    const completed = chapters[chapterIndex].questions.reduce((acc, _, idx) => {
      return questionStates[`${chapterIndex}-${idx}`] === "completed"
        ? acc + 1
        : acc;
    }, 0);

    return Math.round((completed / chapterQuestions) * 100);
  };

  const getTotalProgress = () => {
    let totalCompleted = 0;
    let totalQuestions = 0;
    chapters.forEach((chapter, ci) => {
      totalQuestions += chapter.questions.length;
      chapter.questions.forEach((_, qi) => {
        const key = `${ci}-${qi}`;
        if (questionStates[key] === "completed") totalCompleted++;
      });
    });
    return { completed: totalCompleted, total: totalQuestions };
  };

  // ==============================================
  // Styling classes
  // ==============================================
  const themeClasses = darkMode ? "dark bg-slate-800" : "bg-slate-100";
  const cardClasses = darkMode
    ? "bg-slate-700 text-white"
    : "bg-white text-slate-800";
  const sidebarClasses = darkMode ? "bg-slate-900" : "bg-slate-700";

  // ==============================================
  // Render
  // ==============================================
  return (
    <div className={` ${themeClasses} transition-all duration-300 overflow-hidden`}>
      {/* ==============================================
          Confetti Effect
      ============================================== */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="confetti">🎉</div>
          <div className="confetti">✨</div>
          <div className="confetti">🎊</div>
        </div>
      )}

      {/* ==============================================
          Layout: Sidebar + Main
      ============================================== */}
      <div className="flex">
        {/* Sidebar */}
        <QuizSidebar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          chapters={chapters}
          activeChapter={activeChapter}
          setActiveChapter={setActiveChapter}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          expandedChapters={expandedChapters}
          toggleChapterExpanded={toggleChapterExpanded}
          getTotalProgress={getTotalProgress}
          calculateProgress={calculateProgress}
          getStateIcon={getStateIcon}
          resetQuestion={resetQuestion}
          sidebarClasses={sidebarClasses}
          themeClasses={themeClasses}
        />

        {/* Main Content */}
        <main className="flex-1 px-8 pt-4 pb-8 min-h-screen overflow-y-auto">
          {/* Header */}
          <StudyHeader
            darkMode={darkMode}
            currentChapter={currentChapter}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            studyMode={studyMode}
            setStudyMode={setStudyMode}
            resetQuestion={resetQuestion}
            shuffleQuestions={shuffleQuestions}
            restartChapter={restartChapter}
            toggleFullscreen={toggleFullscreen}
            chapters={chapters}
            activeChapter={activeChapter}
            questionStates={questionStates}
            calculateProgress={calculateProgress}
            cardClasses={cardClasses}
          />

          {/* Study Content */}
          <div className="max-w-4xl mx-auto">
            {/* Flashcard | Quiz | Fill */}
            {studyMode === "flashcard" && (
              <Flashcard
                currentQuestion={currentQuestion}
                showAnswer={showAnswer}
                handleFlashcardFlip={handleFlashcardFlip}
                updateQuestionState={updateQuestionState}
                cardClasses={cardClasses}
                darkMode={darkMode}
              />
            )}

            {studyMode === "quiz" && (
              <QuizCard
                currentQuestion={currentQuestion}
                showResult={showResult}
                selectedOption={selectedOption}
                handleQuizAnswer={handleQuizAnswer}
                darkMode={darkMode}
                cardClasses={cardClasses}
              />
            )}

            {studyMode === "fill" && (
              <FillCard
                currentQuestion={currentQuestion}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                showResult={showResult}
                handleFillAnswer={handleFillAnswer}
                resetQuestion={resetQuestion}
                updateQuestionState={updateQuestionState}
                darkMode={darkMode}
                cardClasses={cardClasses}
              />
            )}

            {/* Navigation */}
            <QuestionNavigation
              totalQuestions={totalQuestions}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              handlePrev={handlePrev}
              handleNext={handleNext}
              questionStates={questionStates}
              activeChapter={activeChapter}
              darkMode={darkMode}
            />

            {/* Tips */}
            <StudyTips />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarxistPhilosophyQuiz;
