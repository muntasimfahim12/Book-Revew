import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import Page from './Components/Page/Page';
import Details from './Components/Details/Details';
import SortBy from './Components/Short/SortBy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root ></Root>,
    children: [
      {
        path: '/',
        element: <Home ></Home>,
      },
      {
        path: '/sort',
        element: <SortBy></SortBy>,
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('json.json')
      },
      {
        path: '/pages',
        element: <Page ></Page>,
        loader:() => fetch('/json.json')
      },
      {
        path: '/book/:id',
        element: <Details ></Details>,
        loader: () => fetch('json.json'),
      },
    ],
  },
  {
    path: '*',
    element: <div className="text-center text-red-500 text-2xl p-10">404 - Page Not Found</div>,
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
