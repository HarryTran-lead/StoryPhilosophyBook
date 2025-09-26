import React, { memo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@components/Header";

function MainLayoutComponent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Header */}
      <Header variant="site" />

      {/* Background Section chỉ hiện ở các trang khác ngoài home */}
      {!isHome && <div className="w-full h-13 bg-slate-900/90" />}

      {/* Main content */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

const MainLayout = memo(MainLayoutComponent);
export default MainLayout;
