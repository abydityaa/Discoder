import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/css/global.css'
import './assets/css/utilities.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './path/Home'
import Err404 from './path/extra/err404';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    errorElement: <Err404 />,
  },
  {
    path: '/',
    element: <Home />,
  }
])

root.render(
  <React.StrictMode>
    {/* Middleware */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
