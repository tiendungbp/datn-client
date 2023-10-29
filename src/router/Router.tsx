import React, { useState } from "react";
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
import Booking_profile from "../pages/client/booking_profile/Booking_profile";
import path from "path";
import Guarantee_profile from "../pages/client/guarantee_profile/Guarantee_profile";
import Profile from "../pages/client/profile/Profile";

const Router = (): JSX.Element | null => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
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
          path: "/guarantee_profile",
          element: <Guarantee_profile />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/404",
          element: <Notfound />,
        },
        ...(isLoggedIn
          ? [
              {
                path: "/booking",
                element: <Booking />,
              },
              {
                path: "/booking_profile",
                element: <Booking_profile />,
              },
            ]
          : [
              {
                path: "/booking",
                element: (
                  <Navigate
                    to="/login"
                    state={{ from: "/booking", error: "Bạn cần đăng nhập" }}
                  />
                ),
              },
              {
                path: "/booking_profile",
                element: (
                  <Navigate
                    to="/login"
                    state={{
                      from: "/booking_profile",
                      error: "Bạn cần đăng nhập",
                    }}
                  />
                ),
              },
            ]),
      ],
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "forgot",
      element: <ForgotPass />,
    },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);
  return element;
};
export default Router;
