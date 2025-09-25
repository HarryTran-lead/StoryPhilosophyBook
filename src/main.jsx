import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@redux/store"; // alias tới src/store/store.js
import { DATASET_VERSION } from "@redux/features/data";
import { clearAllQuizStorage } from "./utils/quizStorage";

// (Tùy chọn) Purge lần đầu khi version dataset thay đổi
const BOOT_KEY = "dataset_version_boot";
try {
  const saved = localStorage.getItem(BOOT_KEY);
  if (saved !== String(DATASET_VERSION)) {
    // Xóa persisted state + UI cache cũ
    persistor.purge();
    clearAllQuizStorage();
    localStorage.setItem(BOOT_KEY, String(DATASET_VERSION));
  }
} catch {}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
