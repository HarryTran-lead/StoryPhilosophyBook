import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Brain,
  Edit3,
  CheckCircle,
  Clock,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Star,
} from "lucide-react";
import StudyTips from "./Study_Tips";
import QuizSidebar from "./Quiz_Sidebar";
import StudyHeader from "./Study_Header";
import { chapters } from "./data";

const MarxistPhilosophyQuiz = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [studyMode, setStudyMode] = useState("flashcard");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionStates, setQuestionStates] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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

  // Load dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  // Save dark mode to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Khởi tạo trạng thái câu hỏi
  useEffect(() => {
    const initialStates = {};
    chapters.forEach((chapter, chapterIndex) => {
      chapter.questions.forEach((question, questionIndex) => {
        const key = `${chapterIndex}-${questionIndex}`;
        if (!questionStates[key]) {
          initialStates[key] = "not-started";
        }
      });
    });
    setQuestionStates((prev) => ({ ...prev, ...initialStates }));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Hàm tráo thứ tự câu hỏi trong chương hiện tại
  const shuffleQuestions = () => {
    const shuffled = [...currentChapter.questions].sort(
      () => Math.random() - 0.5
    );

    // cập nhật lại dữ liệu chương hiện tại
    chapters[activeChapter].questions = shuffled;

    setCurrentQuestionIndex(0);
    resetQuestion();
  };

  // Hàm làm lại toàn bộ chương
  const restartChapter = () => {
    setCurrentQuestionIndex(0);
    resetQuestion();

    // reset trạng thái câu hỏi của chương hiện tại
    const updatedStates = { ...questionStates };
    chapters[activeChapter].questions.forEach((_, idx) => {
      updatedStates[`${activeChapter}-${idx}`] = "not-started";
    });
    setQuestionStates(updatedStates);
  };

  // Hàm bật/tắt toàn màn hình
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Lỗi bật fullscreen: ${err.message}`);
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
    setShowAnswer(!showAnswer);
    if (!showAnswer) {
      updateQuestionState("learning");
    }
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
    let completed = 0;

    chapters[chapterIndex].questions.forEach((_, questionIndex) => {
      const key = `${chapterIndex}-${questionIndex}`;
      if (questionStates[key] === "completed") {
        completed++;
      }
    });

    return Math.round((completed / chapterQuestions) * 100);
  };

  const getTotalProgress = () => {
    let totalCompleted = 0;
    let totalQuestions = 0;

    chapters.forEach((chapter, chapterIndex) => {
      totalQuestions += chapter.questions.length;
      chapter.questions.forEach((_, questionIndex) => {
        const key = `${chapterIndex}-${questionIndex}`;
        if (questionStates[key] === "completed") {
          totalCompleted++;
        }
      });
    });

    return { completed: totalCompleted, total: totalQuestions };
  };

  const themeClasses = darkMode ? "dark bg-slate-800" : "bg-slate-100";
  const cardClasses = darkMode
    ? "bg-slate-700 text-white"
    : "bg-white text-slate-800";
  const sidebarClasses = darkMode ? "bg-slate-900" : "bg-slate-700";

  return (
    <div
      className={` ${themeClasses} transition-all duration-300 overflow-hidden`}
    >
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="confetti">🎉</div>
          <div className="confetti">✨</div>
          <div className="confetti">🎊</div>
        </div>
      )}

      {/* Topbar */}
      <div className="flex">
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
            {studyMode === "flashcard" && (
              <div className="perspective-1000">
                <div
                  onClick={handleFlashcardFlip}
                  className={`relative w-full h-80 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                    showAnswer ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div
                    className={`absolute inset-0 backface-hidden ${cardClasses} rounded-xl shadow-xl border-2 border-amber-500 p-8 flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-amber-600 mb-4">
                        Thuật ngữ
                      </h3>
                      <p
                        className={`text-xl ${
                          darkMode ? "text-white" : "text-slate-700"
                        }`}
                      >
                        {currentQuestion.term}
                      </p>
                      <div className="mt-6 text-amber-500 text-sm animate-pulse">
                        Nhấn để xem đáp án ✨
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-xl p-8 flex items-center justify-center text-white">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Định nghĩa</h3>
                      <p className="text-lg leading-relaxed">
                        {currentQuestion.definition}
                      </p>
                      <div className="mt-6 flex gap-4 justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuestionState("completed");
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Đã nhớ
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuestionState("learning");
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
                        >
                          <Clock className="w-4 h-4" />
                          Cần ôn lại
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {studyMode === "quiz" && (
              <div className={`${cardClasses} rounded-xl shadow-lg p-8`}>
                <h3
                  className={`text-xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {currentQuestion.quiz.question}
                </h3>
                <div className="space-y-3">
                  {currentQuestion.quiz.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(index)}
                      disabled={showResult}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                        showResult
                          ? index === currentQuestion.quiz.correct
                            ? "border-green-500 bg-green-50 text-green-800 shadow-green-200 shadow-lg animate-pulse"
                            : selectedOption === index
                            ? "border-red-500 bg-red-50 text-red-800 shadow-red-200 shadow-lg animate-shake"
                            : `border-slate-200 ${
                                darkMode
                                  ? "bg-slate-600 text-slate-400"
                                  : "bg-slate-50 text-slate-500"
                              }`
                          : selectedOption === index
                          ? "border-amber-500 bg-amber-50 text-amber-800 shadow-amber-200 shadow-lg"
                          : `border-slate-200 hover:border-amber-300 ${
                              darkMode
                                ? "hover:bg-slate-600"
                                : "hover:bg-amber-50"
                            }`
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="font-bold mr-3 text-lg">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span className="flex-1">{option}</span>
                        {showResult &&
                          index === currentQuestion.quiz.correct && (
                            <CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
                          )}
                        {showResult &&
                          selectedOption === index &&
                          index !== currentQuestion.quiz.correct && (
                            <div className="w-6 h-6 text-red-500 text-xl">
                              ✗
                            </div>
                          )}
                      </div>
                    </button>
                  ))}
                </div>

                {showResult && (
                  <div
                    className={`mt-6 p-4 rounded-lg border-l-4 ${
                      selectedOption === currentQuestion.quiz.correct
                        ? `bg-green-50 text-green-800 border-green-500 ${
                            darkMode ? "bg-green-900/20 text-green-400" : ""
                          }`
                        : `bg-red-50 text-red-800 border-red-500 ${
                            darkMode ? "bg-red-900/20 text-red-400" : ""
                          }`
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {selectedOption === currentQuestion.quiz.correct ? (
                        <>
                          <div className="text-2xl">🎉</div>
                          <span className="font-bold">
                            Xuất sắc! Bạn đã trả lời chính xác.
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="text-2xl">💡</div>
                          <span className="font-bold">
                            Chưa chính xác, hãy xem giải thích!
                          </span>
                        </>
                      )}
                    </div>
                    {selectedOption !== currentQuestion.quiz.correct && (
                      <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <span className="font-semibold text-amber-800">
                          Đáp án đúng:
                        </span>
                        <span className="text-amber-700 ml-2">
                          {
                            currentQuestion.quiz.options[
                              currentQuestion.quiz.correct
                            ]
                          }
                        </span>
                      </div>
                    )}
                    <div className="mt-3 text-sm opacity-80">
                      <span className="font-medium">Giải thích:</span>{" "}
                      {currentQuestion.definition}
                    </div>
                  </div>
                )}
              </div>
            )}

            {studyMode === "fill" && (
              <div className={`${cardClasses} rounded-xl shadow-lg p-8`}>
                <h3
                  className={`text-xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  Điền định nghĩa cho thuật ngữ:
                  <span className="text-amber-500 ml-2 underline decoration-wavy decoration-amber-300">
                    {currentQuestion.term}
                  </span>
                </h3>

                <div className="mb-6">
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
                  <div
                    className={`text-right text-sm mt-1 ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {userAnswer.length}/500 ký tự
                  </div>
                </div>

                {!showResult && (
                  <div className="flex gap-3">
                    <button
                      onClick={handleFillAnswer}
                      disabled={!userAnswer.trim()}
                      className="flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg hover:shadow-amber-500/30"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Kiểm tra đáp án
                    </button>
                    <button
                      onClick={() => setUserAnswer("")}
                      className={`px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                        darkMode
                          ? "border-slate-600 text-slate-300 hover:bg-slate-600"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      Xóa
                    </button>
                  </div>
                )}

                {showResult && (
                  <div className="space-y-4">
                    <div
                      className={`p-4 rounded-lg border-l-4 ${
                        userAnswer
                          .toLowerCase()
                          .trim()
                          .includes(
                            currentQuestion.fillAnswer.toLowerCase().trim()
                          )
                          ? `bg-green-50 text-green-800 border-green-500 ${
                              darkMode ? "bg-green-900/20 text-green-400" : ""
                            }`
                          : `bg-orange-50 text-orange-800 border-orange-500 ${
                              darkMode ? "bg-orange-900/20 text-orange-400" : ""
                            }`
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {userAnswer
                          .toLowerCase()
                          .trim()
                          .includes(
                            currentQuestion.fillAnswer.toLowerCase().trim()
                          ) ? (
                          <>
                            <div className="text-2xl">🌟</div>
                            <span className="font-bold">
                              Tuyệt vời! Câu trả lời của bạn chính xác.
                            </span>
                          </>
                        ) : (
                          <>
                            <div className="text-2xl">📚</div>
                            <span className="font-bold">
                              Chưa hoàn toàn chính xác, hãy tham khảo đáp án
                              mẫu.
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-lg ${
                        darkMode ? "bg-slate-800" : "bg-amber-50"
                      } border ${
                        darkMode ? "border-slate-600" : "border-amber-200"
                      }`}
                    >
                      <h4 className="font-semibold text-amber-600 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Đáp án mẫu:
                      </h4>
                      <p
                        className={`${
                          darkMode ? "text-slate-300" : "text-amber-800"
                        } leading-relaxed`}
                      >
                        {currentQuestion.definition}
                      </p>

                      {!userAnswer
                        .toLowerCase()
                        .trim()
                        .includes(
                          currentQuestion.fillAnswer.toLowerCase().trim()
                        ) && (
                        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <span className="font-medium text-blue-800">
                            Từ khóa chính:
                          </span>
                          <span className="text-blue-700 ml-2 font-semibold">
                            {currentQuestion.fillAnswer}
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
                        <RotateCcw className="w-4 h-4" />
                        Thử lại
                      </button>
                      <button
                        onClick={() => updateQuestionState("completed")}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Đã hiểu
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentQuestionIndex === 0
                    ? `bg-slate-200 text-slate-400 cursor-not-allowed ${
                        darkMode ? "bg-slate-700 text-slate-500" : ""
                      }`
                    : `bg-slate-200 text-slate-700 hover:bg-slate-300 ${
                        darkMode
                          ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                          : ""
                      }`
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Câu trước
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalQuestions }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestionIndex(index);
                      resetQuestion();
                    }}
                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-200 ${
                      index === currentQuestionIndex
                        ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 scale-110"
                        : questionStates[`${activeChapter}-${index}`] ===
                          "completed"
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : questionStates[`${activeChapter}-${index}`] ===
                          "learning"
                        ? `bg-orange-400 text-white hover:bg-orange-500 ${
                            darkMode ? "bg-orange-500" : ""
                          }`
                        : `bg-slate-200 text-slate-600 hover:bg-amber-200 ${
                            darkMode
                              ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                              : ""
                          }`
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentQuestionIndex === totalQuestions - 1
                    ? `bg-slate-200 text-slate-400 cursor-not-allowed ${
                        darkMode ? "bg-slate-700 text-slate-500" : ""
                      }`
                    : "bg-amber-500 text-white hover:bg-amber-600 shadow-lg hover:shadow-amber-500/30"
                }`}
              >
                Câu sau
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <StudyTips />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarxistPhilosophyQuiz;
