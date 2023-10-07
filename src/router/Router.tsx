import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Notfound from "../pages/notfound/Notfound";
import ForgotPass from "../pages/forgotPass/ForgotPass";
import Home from "../pages/client/home/Home";
import Contact from "../pages/client/contact/Contact";
import DetailNews from "../pages/client/detailNews/DetailNews";
import DetailDoctor from "../pages/client/detailDoctor/DetailDoctor";
import News from "../pages/client/news/News";
import Services from "../pages/client/services/Services";
import Introduce from "../pages/client/introduce/Introduce";
import Booking from "../pages/client/booking/Booking";
import PriceList from "../pages/client/priceList/PriceList";

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
          path: "/contac",
          element: <Contact />,
        },
        {
          path: "/detailNews",
          element: <DetailNews />,
        },
        {
          path: "/detailDoctor",
          element: <DetailDoctor />,
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
      ],
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
      path: "*",
      element: <Navigate to="/404" />,
    },
    {
      path: "/404",
      element: <Notfound />,
    },
  ]);
  return element;
};
export default Router;
