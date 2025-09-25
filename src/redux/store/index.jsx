// src/store/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import quizReducer from "../features/quizSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localforage from "localforage";

// Gộp reducer (để bọc persist cho cả root hoặc chỉ 1 slice tuỳ whitelist)
const rootReducer = combineReducers({
  quiz: quizReducer,
});

// Chỉ lưu quiz slice, lưu trong IndexedDB qua localforage
const persistConfig = {
  key: "root",
  version: 1,
  storage: localforage,
  whitelist: ["quiz"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Bỏ qua các action của redux-persist để không cảnh báo non-serializable
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Tạo persistor để hydrate/rehydrate state từ storage
export const persistor = persistStore(store);

// Giữ default export để code cũ vẫn import được
export default store;
