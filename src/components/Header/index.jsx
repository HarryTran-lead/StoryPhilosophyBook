import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  Info,
  BookOpen,
  Layers,
  FileText,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Book,
} from "lucide-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import endPoint from "@routes/routes";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/* =========================
   Config / constants
========================= */
// Easing ngắn, mượt
const EASE = [0.2, 0, 0, 1];

// Cấu hình nav items với philosophy theme
const navItems = [
  { label: "Trang chủ", icon: Home, to: endPoint.HOMEPAGE },
  { label: "Giới thiệu", icon: Info, to: endPoint.ABOUT },
  {
    label: "Mục lục",
    icon: BookOpen,
    children: [
      {
        label: "Chương 1: Nhận thức khoa học",
        to: `${endPoint.CHAPTERS}/1`,
        description: "Cơ sở lý thuyết nhận thức",
      },
      {
        label: "Chương 2: Vật chất và ý thức",
        to: `${endPoint.CHAPTERS}/2`,
        description: "Quan hệ biện chứng cơ bản",
      },
      {
        label: "Chương 3: Quy luật biện chứng",
        to: `${endPoint.CHAPTERS}/3`,
        description: "Phương pháp tư duy khoa học",
      },
      {
        label: "Chương 4: Lịch sử xã hội",
        to: `${endPoint.CHAPTERS}/4`,
        description: "Động lực phát triển",
      },
      {
        label: "Chương 5: Cách mạng và tiến bộ",
        to: `${endPoint.CHAPTERS}/5`,
        description: "Con đường giải phóng",
      },
    ],
  },
  { label: "Ôn tập", icon: Layers, to: endPoint.QUIZ },
  // { label: "Tài liệu", icon: FileText, to: endPoint.RESOURCES },
];

/* =========================
   EnhancedDropdown (Desktop)
========================= */
const EnhancedDropdown = ({ items = [], isOpen, onClose, id }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        event.stopPropagation();
        onClose();
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop (desktop) */}
     <div
  className={`fixed inset-0 z-[55]  // ⬅️ z-index riêng
  bg-slate-900/70 md:bg-slate-900/60 md:backdrop-blur-md
  transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
  onClick={onClose}
/>


      {/* Container */}
      <div
        ref={dropdownRef}
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-80 z-50 origin-top
        transition-[opacity,transform] duration-250 ease-out
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
        style={{
          transform: isOpen
            ? "translate(-50%,0) translateZ(0)"
            : "translate(-50%,-0.5rem) translateZ(0)",
        }}
        id={id}
        role="menu"
        aria-hidden={!isOpen}
      >
        <div className="relative rounded-xl overflow-hidden border border-slate-600/40 shadow-xl bg-slate-900/95 md:backdrop-blur-xl">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-amber-300/5 via-transparent to-slate-800/20" />

          {/* Header */}
          <div className="relative px-4 py-2.5 border-b border-slate-600/40 bg-gradient-to-r from-slate-700/40 to-slate-800/40">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-amber-300/10 border border-amber-300/20">
                <BookOpen size={16} className="text-amber-300" />
              </div>
              <div>
                <h3 className="text-slate-100 font-semibold text-sm">Mục lục</h3>
                <p className="text-slate-400 text-[11px] mt-0.5">Chọn chương để học</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="relative">
            {items.map((item, i) => (
              <div
                key={item.to ?? item.label ?? i}
                className="group border-b border-slate-600/30 last:border-b-0 hover:bg-gradient-to-r hover:from-amber-300/8 hover:via-amber-300/4 hover:to-transparent transition-colors duration-200"
              >
                <RouterNavLink
                  to={item.to}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="w-full text-left px-5 py-2.5 flex items-center gap-3"
                  role="menuitem"
                >
                  <div className="w-7 h-7 flex-shrink-0 rounded-md bg-slate-700 border border-slate-500 flex items-center justify-center text-[11px] font-bold text-slate-200 group-hover:bg-amber-300/10 group-hover:border-amber-300/30 group-hover:text-amber-100 transition-colors">
                    {i + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-slate-100 group-hover:text-amber-200 transition-colors">
                      {item.label}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-slate-400 mt-0.5 group-hover:text-slate-300 transition-colors">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <ArrowRight size={13} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
                </RouterNavLink>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="relative px-4 py-2.5 bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-t border-slate-600/40">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400 flex items-center">
                <Book size={11} className="mr-1" />
                {items.length} chương
              </span>
              <span className="text-slate-400">Triết học Mác-Lênin</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-7 border-r-7 border-b-7 border-transparent border-b-slate-900/95" />
      </div>
    </>
  );
};

/* =========================
   MobileNav (Mobile)
========================= */
const MobileNav = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (!isOpen) setOpenDropdown(null);
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop: bỏ blur trên mobile để mượt hơn */}
      <div
        className={`absolute inset-0 bg-slate-900/70 md:bg-slate-900/60 md:backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
    <aside
  className={`fixed right-0 top-0 z-[60] // ⬅️ cao hơn overlay
  h-full w-72 bg-slate-900 border-l border-amber-200/10 shadow-xl
  will-change-transform transition-transform duration-300 ease-out
  ${isOpen ? "translate-x-0" : "translate-x-full"}`} // ⬅️ KHÔNG dùng inline style transform nữa
>

        {/* Header */}
        <div className="pl-5 pr-2 py-4.5 border-b border-amber-200/20 bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-amber-100 text-lg font-semibold tracking-wide">
                Triết học Mác – Lênin
              </h2>
              <p className="text-amber-200/80 text-xs italic mt-1">
                Dòng chảy của tri thức
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-2 rounded-lg hover:bg-amber-400/15 active:scale-95 transition"
              aria-label="Đóng menu"
            >
              <X className="w-5 h-5 text-amber-100" />
            </button>
          </div>
        </div>

        {/* Nav list */}
        <div
          className="h-[calc(100%-160px)] overflow-y-auto py-4 px-2 space-y-2"
          style={{
            WebkitOverflowScrolling: "touch",
            transform: "translateZ(0)",
          }}
        >
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item, index) => {
              const isDropdown = !!item.children?.length;
              const isOpenDrop = openDropdown === index;

              return (
                <div key={item.label ?? index}>
                  {/* Parent có con: dùng button để toggle, KHÔNG NavLink */}
                  {isDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(isOpenDrop ? null : index)
                        }
                        className="group flex w-full items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-colors text-slate-300 hover:text-amber-200 hover:bg-amber-400/8"
                        aria-expanded={isOpenDrop}
                        aria-controls={`m-dd-${index}`}
                      >
                        <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        <span className="font-serif tracking-wide">
                          {item.label}
                        </span>
                        <motion.span
                          initial={false}
                          animate={{ rotate: isOpenDrop ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: EASE }}
                          className="ml-auto"
                        >
                          <ChevronDown
                            className={`w-4 h-4 ${
                              isOpenDrop ? "text-amber-300" : "text-slate-400"
                            }`}
                          />
                        </motion.span>
                      </button>

                      {/* Dropdown children */}
                      <AnimatePresence initial={false}>
                        {isOpenDrop && (
                          <motion.div
                            id={`m-dd-${index}`}
                            key="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: EASE }}
                            className="overflow-hidden will-change-[height,opacity]"
                            style={{ transform: "translateZ(0)" }}
                          >
                            <ul className="pl-2 py-1 space-y-1.5">
                              {item.children.map((child, i) => (
                                <li key={child.to ?? child.label ?? i}>
                                  <RouterNavLink
                                    to={child.to}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onClose();
                                    }}
                                    className="group block w-full text-left text-slate-300 hover:text-amber-200 transition-colors text-sm p-2 rounded-lg hover:bg-amber-400/8"
                                  >
                                    <div className="flex items-start gap-2.5">
                                      <div className="w-6 h-6 flex-shrink-0 rounded-md border border-slate-600 flex items-center justify-center text-xs font-semibold text-slate-400 group-hover:border-amber-300/40 group-hover:text-amber-100">
                                        {i + 1}
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-medium">
                                          {child.label}
                                        </div>
                                        {child.description && (
                                          <div className="text-xs text-slate-500 mt-0.5">
                                            {child.description}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </RouterNavLink>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    // Mục thường (không có con) → NavLink
                    <RouterNavLink
                      to={item.to}
                      onClick={onClose}
                      className={({ isActive }) => {
                        const base =
                          "group flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-colors";
                        return isActive
                          ? `${base} bg-amber-400/10 text-amber-200`
                          : `${base} text-slate-300 hover:text-amber-200 hover:bg-amber-400/8`;
                      }}
                    >
                      <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span className="font-serif tracking-wide">
                        {item.label}
                      </span>
                    </RouterNavLink>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="h-px bg-amber-300/20" />
          <p className="text-center text-xs text-amber-300/80 mt-3 italic">
            "Thực tiễn là tiêu chuẩn của chân lý"
          </p>
        </div>
      </aside>

      {/* Respect reduced motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-transform, .transition-opacity, .transition-colors { transition: none !important; }
        }
      `}</style>
    </div>
  );
};

/* =========================
   Header (Desktop + Mobile)
========================= */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile nav
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 backdrop-blur-md transition-colors duration-500 ease-out ${
          isHome ? (scrolled ? "bg-black/30" : "bg-black/20") : ""
        }`}
      >
        <div className="mx-auto pr-6 pl-8 py-1.5 flex items-center justify-between">
          {/* Logo */}
          <div className="group cursor-pointer">
            <a href="/">
              <h2 className="text-amber-200/95 font-serif text-3xl font-bold tracking-wide group-hover:text-amber-100 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_2px_rgba(255,191,0,0.7)]">
                BookStory
              </h2>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-black/20 rounded-2xl px-1.5 py-1 backdrop-blur-sm">
            {navItems.map((item, index) => {
              const isDropdown = !!item.children?.length;
              const isOpenDrop = openDropdown === index;

              return (
                <div key={item.label ?? index} className="relative">
                  {/* Nếu có con: dùng button để toggle */}
                  {isDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(isOpenDrop ? null : index)
                        }
                        className="group relative flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 ease-out overflow-hidden font-serif text-slate-300 hover:text-amber-200"
                        aria-expanded={isOpenDrop}
                        aria-controls={`desktop-dd-${index}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-amber-300/8 group-hover:to-amber-400/5 transition-all duration-500 ease-out" />
                        <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out" />
                        <div className="relative z-10 flex items-center gap-2">
                          <item.icon
                            size={16}
                            className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                          />
                          <span className="tracking-wide">{item.label}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isOpenDrop
                                ? "rotate-180 text-amber-300"
                                : "text-slate-400"
                            }`}
                          />
                        </div>
                      </button>

                      {/* Dropdown */}
                      <EnhancedDropdown
                        items={item.children}
                        isOpen={isOpenDrop}
                        onClose={() => setOpenDropdown(null)}
                        id={`desktop-dd-${index}`}
                      />
                    </>
                  ) : (
                    // Không có con: NavLink bình thường
                    <RouterNavLink
                      to={item.to}
                      className={({ isActive }) => {
                        const base =
                          "group relative flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 ease-out overflow-hidden font-serif";
                        return isActive
                          ? `${base} bg-gradient-to-r from-amber-400/20 via-amber-300/15 to-amber-400/10 text-amber-100 shadow-inner`
                          : `${base} text-slate-300 hover:text-amber-200`;
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-amber-300/8 group-hover:to-amber-400/5 transition-all duration-500 ease-out" />
                      <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out" />
                      <div className="relative z-10 flex items-center gap-2">
                        <item.icon
                          size={16}
                          className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        />
                        <span className="tracking-wide">{item.label}</span>
                      </div>
                    </RouterNavLink>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden group p-2.5 rounded-xl bg-black/20 backdrop-blur-sm hover:bg-amber-400/10 transition-all duration-300 border border-gray-500/30 hover:border-amber-200/10"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            aria-label="Mở menu"
          >
            <Menu className="w-4.5 h-4.5 text-white transition-all duration-300 group-hover:scale-110" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
