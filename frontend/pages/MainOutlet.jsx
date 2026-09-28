import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainOutlet = () => {
  return (
    <>
    <div className="page-layout">
    <Header />
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default MainOutlet