import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import Links from './routes/Links';
import Timetable from './routes/Timetable';
import Prices from './routes/Prices';
import LegalAdvice from './routes/LegalAdvice';
import Cookies from './routes/Cookies';
import Privacity from './routes/Privacity';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "links",
    element: <Links />,
  },
  {
    path: "prices",
    element: <Prices />,
  },
  {
    path: "timetable",
    element: <Timetable />,
  },
  {
    path: "legal",
    element: <LegalAdvice />,
  },
  {
    path: "privacity",
    element: <Privacity />,
  },
  {
    path: "cookies",
    element: <Cookies />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
