// quizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { chapters } from "./data"; // lấy data trực tiếp

const initialState = {
  chapters, // giữ toàn bộ câu hỏi
  activeChapter: 0,
  currentPage: 0, // index câu hỏi trong chương
  questionsPerPage: 1,
  questionStates: {}, // { "chapterIndex-questionIndex": "not-started" | "learning" | "completed" }
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
      if (state.currentPage < state.chapters[state.activeChapter].questions.length - 1) {
        state.currentPage++;
      }
    },
    prevPage: (state) => {
      if (state.currentPage > 0) {
        state.currentPage--;
      }
    },
    updateQuestionState: (state, action) => {
      const { chapterIndex, questionIndex, newState } = action.payload;
      state.questionStates[`${chapterIndex}-${questionIndex}`] = newState;
    },
    resetChapter: (state, action) => {
      const chapterIndex = action.payload;
      state.chapters[chapterIndex].questions.forEach((_, idx) => {
        delete state.questionStates[`${chapterIndex}-${idx}`];
      });
      state.currentPage = 0;
    },
  },
});

export const {
  setActiveChapter,
  setCurrentPage,
  nextPage,
  prevPage,
  updateQuestionState,
  resetChapter,
} = quizSlice.actions;

// ----------------------------
// Selectors
// ----------------------------
export const selectQuiz = (state) => state.quiz;

export const selectProgress = (state, chapterIndex) => {
  const chapter = state.quiz.chapters[chapterIndex];
  if (!chapter) return 0;

  const completed = chapter.questions.reduce((acc, _, idx) => {
    return state.quiz.questionStates[`${chapterIndex}-${idx}`] === "completed"
      ? acc + 1
      : acc;
  }, 0);

  return Math.round((completed / chapter.questions.length) * 100);
};

export const selectCompletedCount = (state, chapterIndex) => {
  const chapter = state.quiz.chapters[chapterIndex];
  if (!chapter) return 0;

  return chapter.questions.filter(
    (_, idx) => state.quiz.questionStates[`${chapterIndex}-${idx}`] === "completed"
  ).length;
};

export default quizSlice.reducer;
