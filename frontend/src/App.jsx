import React from 'react'
import './index.css';
import { Route, createBrowserRouter,
  createRoutesFromElements, RouterProvider
  } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import MainOutlet from '../pages/MainOutlet';
import Home from '../pages/Home';
import Opportunities from '../pages/opportunities/Opportunities';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainOutlet/>}>
      <Route index element={<Home/>} />
      
      <Route path="/opportunities" element={<Opportunities />} />
      
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
    </>
    )
  )

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App