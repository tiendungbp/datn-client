import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Register from '../pages/client/register/Register';
import Login from '../pages/client/login/Login';
import Notfound from '../pages/client/notfound/Notfound';
import ForgotPass from '../pages/client/forgotPass/ForgotPass';
import Home from '../pages/client/home/Home';
import Contact from '../pages/client/contact/Contact';
import DetailNews from '../pages/client/detailNews/DetailNews';
import DetailDoctor from '../pages/client/detailDoctor/DetailDoctor';
import News from '../pages/client/news/News';
import Services from '../pages/client/services/Services';
import Introduce from '../pages/client/introduce/Introduce';
import Booking from '../pages/client/booking/Booking';
import DetailServices from '../pages/client/detailServices/DetailServices';
import PriceList from '../pages/client/priceList/PriceList';
import Booking_profile from '../pages/client/booking_profile/Booking_profile';
import Guarantee_profile from '../pages/client/guarantee_profile/Guarantee_profile';
import Profile from '../pages/client/profile/Profile';
import Account from '../pages/client/Account/Account';
import Appointmentlist from '../pages/client/Appointmentlist/Appointmentlist';
import Appointmentdetails from '../pages/client/Appointmentdetails/Appointmentdetails';

const Router = (): JSX.Element | null => {
	const element = useRoutes([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/contact',
					element: <Contact />,
				},
				{
					path: '/detailNews',
					element: <DetailNews />,
				},
				{
					path: '/detailDoctor/:id',
					element: <DetailDoctor />,
				},
				{
					path: '/detailServices/:id',
					element: <DetailServices />,
				},
				{
					path: '/priceList',
					element: <PriceList />,
				},
				{
					path: '/news',
					element: <News />,
				},
				{
					path: '/services',
					element: <Services />,
				},
				{
					path: '/introduce',
					element: <Introduce />,
				},
				{
					path: '/booking',
					element: <Booking />,
				},
				{
					path: '/booking_profile',
					element: <Booking_profile />,
				},
				{
					path: '/guarantee_profile',
					element: <Guarantee_profile />,
				},
				{
					path: '/profile',
					element: <Profile />,
				},
				{
					path: 'quan-ly-tai-khoan',
					element: <Account />,
				},
				{
					path: '/quan-ly-lich-hen',
					element: <Appointmentlist />,
				},
				{
					path: '/quan-ly-lich-hen/chi-tiet/:appointment_id',
					element: <Appointmentdetails />,
				},
				{
					path: '/404',
					element: <Notfound />,
				},
			],
		},
		{
			path: 'register',
			element: <Register />,
		},
		{
			path: 'login',
			element: <Login />,
		},
		{
			path: 'forgot',
			element: <ForgotPass />,
		},

		{
			path: '*',
			element: <Navigate to="/404" />,
		},
	]);
	return element;
};
export default Router;
