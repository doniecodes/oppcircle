import React from 'react';
import { Outlet } from "react-router-dom";

import DashboardNav from "./DashboardNav";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <>
      <div className="dashboard-main-layout">
      <DashboardNav />
      <Outlet />
      </div>
    </>
  )
}

export default DashboardLayout