import { Outlet, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import { UploadPage } from './pages/upload/Upload';
import { ViewPage } from './pages/view/View';
import { Header } from './components/modules/header/Header';

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
      { index: true, element: <UploadPage /> },
      { path: 'upload', element: <UploadPage /> },
      { path: 'view', element: <ViewPage /> },
    ],
  },
]);
