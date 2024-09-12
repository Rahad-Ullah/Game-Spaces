import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "@/pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
          {
              index: true,
              element: <Home></Home>
          }
  ]
  }
])

export default router;
