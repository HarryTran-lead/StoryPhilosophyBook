// src/hooks/useThemeMode.js
import { useEffect, useState } from "react";

const getInitialMode = () => {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * applyToDocument: true => tự gắn class 'dark' lên <html> + update meta theme-color.
 * Gọi 1 lần ở App.jsx với true. Ở Header gọi với false để chỉ đọc/toggle.
 */
export default function useThemeMode(options = { applyToDocument: true }) {
  const [mode, setMode] = useState(getInitialMode);
  const isDark = mode === "dark";

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));
  const setDark = () => setMode("dark");
  const setLight = () => setMode("light");

  // Gắn class + lưu localStorage + chỉnh meta theme-color
  useEffect(() => {
    if (!options.applyToDocument) return;
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", mode);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isDark ? "#0f172a" : "#ffffff");
  }, [mode, isDark, options.applyToDocument]);

  // OS thay đổi theme (khi người dùng chưa chọn tay)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!localStorage.getItem("theme")) setMode(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Sync giữa các tab
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "theme" && (e.newValue === "dark" || e.newValue === "light")) {
        setMode(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return { mode, isDark, toggle, setDark, setLight, setMode };
}
