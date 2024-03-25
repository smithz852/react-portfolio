// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.jsx';
import './index.css';

import { Home } from './Pages/Home.jsx'
import { AboutMe } from './Pages/AboutMe.jsx'
import { Work } from './Pages/Work.jsx'
import { Contact } from './Pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />
      },
      {
        path: '/Work',
        element: <Work />
      },
      {
        path: '/Contact',
        element: <Contact />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
