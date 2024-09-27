import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.tsx';
import NewPost from './routes/NewPost/newPost.tsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/newPost",
    element: <NewPost />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
