import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './main.css'
import { EventsList } from './components/EventsList';
import { fetchMatches } from './api/backend'

// React router, see: https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EventsList />,
        loader: fetchMatches,
      },
      {
        path: "/matches/:matchId",
        element: <div>Match</div>,//<Match />,
      },
    ],

  },
]);

// TanStack Query client, for automatic caching and refetching of data
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);