import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Booking from "@/pages/Booking/Booking";
import AdminBookings from "@/pages/Dashboard/Admin/Bookings/AdminBookings";
import AdminFacilities from "@/pages/Dashboard/Admin/Facilities/Facilities";
import Dashboard from "@/pages/Dashboard/Shared/Dashboard";
import UserBookings from "@/pages/Dashboard/User/Bookings/UserBookings";
import ErrorPage from "@/pages/Error/ErrorPage";
import Facilities from "@/pages/Facilities/Facilities";
import FacilityDetails from "@/pages/FacilityDetails/FacilityDetails";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import PaymentFail from "@/pages/Payment/PaymentFail";
import PaymentSuccess from "@/pages/Payment/PaymentSuccess";
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
        path: "/booking/:id",
        element: <Booking />,
      },
      {
        path: "/payment/success/:id",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment/fail/:id",
        element: <PaymentFail />,
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "index",
        element: <Dashboard />,
      },
      {
        path: "my-bookings",
        element: <UserBookings />,
      },
      {
        path: "bookings",
        element: <AdminBookings />,
      },
      {
        path: "facilities",
        element: <AdminFacilities />,
      },
      {
        path: "admins",
        element: <AdminBookings />,
      },
    ],
  },
]);

export default router;
