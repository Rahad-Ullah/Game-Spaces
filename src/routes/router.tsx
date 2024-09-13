import MainLayout from "@/components/layout/MainLayout";
import ErrorPage from "@/pages/Error/ErrorPage";
import Facilities from "@/pages/Facilities/Facilities";
import FacilityDetails from "@/pages/FacilityDetails/FacilityDetails";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/SignUp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      {
        path: "/facilities/:id",
        element: <FacilityDetails />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
