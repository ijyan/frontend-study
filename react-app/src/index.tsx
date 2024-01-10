import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Index1219 from './views/1219';
import Index1221 from './views/1221';
import Index1222 from './views/1222';
import Index1226 from './views/1226';
import Index1228 from './views/1228';
import Index1229 from './views/1229/react';
import Index0102 from './views/0102';
import Index0104 from './views/0104';
import Index0105 from './views/0105';
import Index0109 from './views/0109';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/1219', element: <Index1219 /> },
      { path: '/1221', element: <Index1221 /> },
      { path: '/1222', element: <Index1222 /> },
      { path: '/1226', element: <Index1226 /> },
      { path: '/1228', element: <Index1228 /> },
      { path: '/1229', element: <Index1229 /> },
      { path: '/0102', element: <Index0102 /> },
      { path: '/0104', element: <Index0104 /> },
      { path: '/0105', element: <Index0105 /> },
      { path: '/0109', element: <Index0109 /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
