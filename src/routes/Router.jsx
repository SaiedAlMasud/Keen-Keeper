import React from 'react';
import Homepage from '../homepage/Homepage';
import MainLayout from '../layout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
    ],
    //errorElement: <Errorpage/>
  }
]);