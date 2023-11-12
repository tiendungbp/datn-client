import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/client/register/Register";
import Login from "../pages/client/login/Login";
import Notfound from "../pages/client/notfound/Notfound";
import ForgotPass from "../pages/client/forgotPass/ForgotPass";
import Home from "../pages/client/home/Home";
import Contact from "../pages/client/contact/Contact";
import DetailNews from "../pages/client/detailNews/DetailNews";
import DetailDoctor from "../pages/client/detailDoctor/DetailDoctor";
import News from "../pages/client/news/News";
import Services from "../pages/client/services/Services";
import Introduce from "../pages/client/introduce/Introduce";
import Booking from "../pages/client/booking/Booking";
import DetailServices from "../pages/client/detailServices/DetailServices";
import PriceList from "../pages/client/priceList/PriceList";
import Profile from "../pages/client/profile/Profile";
import Account from "../pages/client/Account/Account";
import Appointmentdetails from "../pages/client/Appointmentdetails/Appointmentdetails";
import ResetPassword from "../pages/client/ResetPassword/ResetPassword";
import Appointmentlist from "../pages/client/Appointmentlist/Appointmentlist";
import ProfileNFC from "../pages/client/ProfileNFC";

const Router = (): JSX.Element | null => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/detailNews",
          element: <DetailNews />,
        },
        {
          path: "/detailDoctor/:id",
          element: <DetailDoctor />,
        },
        {
          path: "/detailServices/:id",
          element: <DetailServices />,
        },
        {
          path: "/priceList",
          element: <PriceList />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/introduce",
          element: <Introduce />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "quan-ly-tai-khoan",
          element: <Account />,
        },
        {
          path: "/quan-ly-lich-hen",
          element: <Appointmentlist />,
        },
        {
          path: "/quan-ly-lich-hen/chi-tiet/:appointment_id",
          element: <Appointmentdetails />,
        },
        {
          path: "/404",
          element: <Notfound />,
        },
      ],
    },

    {
      path: "/thong-tin-khach-hang/idNFC",
      element: <ProfileNFC />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "forgot",
      element: <ForgotPass />,
    },
    {
      path: "dat-lai-mat-khau/:user_id/:token",
      element: <ResetPassword />,
    },

    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);
  return element;
};
export default Router;
