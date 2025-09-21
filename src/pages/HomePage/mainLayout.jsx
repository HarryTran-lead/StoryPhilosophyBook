import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";

function MainLayoutComponent() {
  return (
    <>
      {/* Header */}
      <Header variant="site" />
      {/* Main content */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
}

const MainLayout = memo(MainLayoutComponent);
export default MainLayout;
