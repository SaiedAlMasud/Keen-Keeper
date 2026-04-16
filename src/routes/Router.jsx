import React from 'react';
import Homepage from '../homepage/Homepage';
import MainLayout from '../layout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';
import FriendDetails from '../friendDetails/FriendDetails';
import Timeline from '../timeline/Timeline';
import Stats from '../stats/Stats';
import Footer from '../footer/Footer';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails/>,
        loader: ({params}) => fetch("/data.json").then(res => res.json()).then(friend => friend.find(f => String(f.id) === params.id))
      },
      {
        path:"/timelines",
        element: <Timeline />,
      },
      {
        path:"/stats",
        element: <Stats />
        
      },
    ],
    //errorElement: <Errorpage/>
  }
]);