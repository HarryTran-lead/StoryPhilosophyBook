import React, { memo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@components/Header";


function MainLayoutComponent() {
  const location = useLocation();

  // Nếu path là "/" (home), thì không margin-top
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Header */}
      <Header variant="site" />

      {/* Main content */}
      <div className={isHome ? "" : "mt-13"}>
        <Outlet />
      </div>
    </>
  );
}

const MainLayout = memo(MainLayoutComponent);
export default MainLayout;
