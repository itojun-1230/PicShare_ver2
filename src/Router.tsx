import { Outlet, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import { ViewPage } from './pages/view/View';
import { Header } from './components/modules/header/Header';
import { Dropzone } from './components/modules/dropzone/Dropzone';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        <Outlet />
        <ScrollRestoration />
      </div>
    ),
    children: [
      { index: true, element: <Dropzone /> },
      { path: 'upload', element: <Dropzone /> },
      { path: 'view', element: <ViewPage /> },
    ],
  },
]);
