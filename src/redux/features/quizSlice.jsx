import { createSlice } from "@reduxjs/toolkit";
import { chapters } from "./data";

const initialState = {
  chapters,
  activeChapter: 0,
  currentPage: 0,
  // tổng thể (không theo mode)
  questionStates: {}, // "c-q" => "not-started" | "learning" | "completed"
  // UI per-mode
  uiState: {
    quiz: {}, // "c-q" => { selectedOption, showResult, userAnswer, showAnswer, revealCount, isCorrect }
    fill: {},
    flashcard: {},
  },
  studyMode: "quiz",
};

const keyOf = (c, q) => `${c}-${q}`;
const DEFAULT_UI = {
  selectedOption: null,
  showResult: false,
  userAnswer: "",
  showAnswer: false,
  revealCount: 0,
  isCorrect: null,
};

const ensureUI = (state, mode, c, q) => {
  const k = keyOf(c, q);
  if (!state.uiState[mode][k]) state.uiState[mode][k] = { ...DEFAULT_UI };
  return { k, ui: state.uiState[mode][k] };
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setActiveChapter: (state, action) => {
      state.activeChapter = action.payload;
      state.currentPage = 0;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    nextPage: (state) => {
      const total = state.chapters[state.activeChapter].questions.length;
      if (state.currentPage < total - 1) state.currentPage++;
    },
    prevPage: (state) => {
      if (state.currentPage > 0) state.currentPage--;
    },

    // ⬅️ đổi mode thì reset về câu 1
    setStudyMode: (state, action) => {
      const next = action.payload;
      if (next !== state.studyMode) {
        state.studyMode = next;
        state.currentPage = 0;
      }
    },

    setShowAnswer: (state, action) => {
      const {
        chapterIndex,
        questionIndex,
        value,
        mode = "flashcard",
      } = action.payload;
      const { ui } = ensureUI(state, mode, chapterIndex, questionIndex);
      ui.showAnswer = !!value;
    },
    setUserAnswer: (state, action) => {
      const {
        chapterIndex,
        questionIndex,
        value,
        mode = "fill",
      } = action.payload;
      const { ui } = ensureUI(state, mode, chapterIndex, questionIndex);
      ui.userAnswer = value;
    },

    // TRẮC NGHIỆM
    answerQuiz: (state, action) => {
      const {
        chapterIndex,
        questionIndex,
        optionIndex,
        mode = "quiz",
      } = action.payload;
      const { k, ui } = ensureUI(state, mode, chapterIndex, questionIndex);
      const q = state.chapters[chapterIndex].questions[questionIndex];
      const isCorrect = optionIndex === q.quiz.correct;

      const wasShown = ui.showResult;
      ui.selectedOption = optionIndex;
      if (!wasShown) ui.revealCount += 1;
      ui.showResult = true;
      ui.isCorrect = isCorrect;

      // tổng thể
      state.questionStates[k] = isCorrect ? "completed" : "learning";
    },

    // ĐIỀN KHUYẾT
    submitFill: (state, action) => {
      const {
        chapterIndex,
        questionIndex,
        userAnswer,
        mode = "fill",
      } = action.payload;
      const { k, ui } = ensureUI(state, mode, chapterIndex, questionIndex);
      const q = state.chapters[chapterIndex].questions[questionIndex];
      const userLower = (userAnswer || "").toLowerCase().trim();
      const correctLower = q.answer.toLowerCase().trim();
      const isCorrect =
        userLower === correctLower || userLower.includes(correctLower);

      const wasShown = ui.showResult;
      ui.userAnswer = userAnswer || "";
      if (!wasShown) ui.revealCount += 1;
      ui.showResult = true;
      ui.isCorrect = isCorrect;

      // tổng thể
      state.questionStates[k] = isCorrect ? "completed" : "learning";
    },

    // FLASHCARD: chỉ lật (không ghi progress tổng), nhưng có revealCount để tính “đã xem” theo mode
    flipFlashcard: (state, action) => {
      const { chapterIndex, questionIndex } = action.payload;
      const { ui } = ensureUI(state, "flashcard", chapterIndex, questionIndex);
      const next = !ui.showAnswer;
      if (!ui.showAnswer && next) ui.revealCount += 1; // lần đầu lật mặt sau
      ui.showAnswer = next;
    },

    // reset UI 1 câu
    resetQuestionUI: (state, action) => {
      const { chapterIndex, questionIndex, mode = "all" } = action.payload;
      const k = keyOf(chapterIndex, questionIndex);
      if (mode === "all") {
        delete state.uiState.quiz[k];
        delete state.uiState.fill[k];
        delete state.uiState.flashcard[k];
      } else {
        delete state.uiState[mode][k];
      }
    },

    // reset cả chương
    resetChapter: (state, action) => {
      const chapterIndex = action.payload;
      const total = state.chapters[chapterIndex].questions.length;
      for (let i = 0; i < total; i++) {
        const k = keyOf(chapterIndex, i);
        delete state.uiState.quiz[k];
        delete state.uiState.fill[k];
        delete state.uiState.flashcard[k];
        delete state.questionStates[k];
      }
      state.currentPage = 0;
    },
  },
});

export const {
  setActiveChapter,
  setCurrentPage,
  nextPage,
  prevPage,
  setStudyMode,
  setShowAnswer,
  setUserAnswer,
  answerQuiz,
  submitFill,
  flipFlashcard,
  resetQuestionUI,
  resetChapter,
} = quizSlice.actions;

// -------- Selectors --------
export const selectQuiz = (state) => state.quiz;

export const selectQuestionUI = (
  state,
  chapterIndex,
  questionIndex,
  mode = "quiz"
) => {
  const k = `${chapterIndex}-${questionIndex}`;
  return state.quiz.uiState?.[mode]?.[k] || { ...DEFAULT_UI };
};

// % đã làm THEO MODE (attempt-based, không theo vị trí)
export const selectModeAttemptPercent = (state, chapterIndex, mode) => {
  const ch = state.quiz.chapters[chapterIndex];
  if (!ch) return 0;
  const attempted = ch.questions.reduce((acc, _, i) => {
    const k = `${chapterIndex}-${i}`;
    const ui = state.quiz.uiState?.[mode]?.[k];
    const done =
      mode === "flashcard" ? (ui?.revealCount ?? 0) > 0 : !!ui?.showResult;
    return done ? acc + 1 : acc;
  }, 0);
  return Math.round((attempted / ch.questions.length) * 100);
};

// số câu đúng theo mode (flashcard không có đúng/sai)
export const selectModeCorrectCount = (state, chapterIndex, mode) => {
  const ch = state.quiz.chapters[chapterIndex];
  if (!ch) return 0;
  return ch.questions.reduce((acc, _, i) => {
    const k = `${chapterIndex}-${i}`;
    const ui = state.quiz.uiState?.[mode]?.[k];
    return ui?.isCorrect ? acc + 1 : acc;
  }, 0);
};

export default quizSlice.reducer;
