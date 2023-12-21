import React from 'react';
import './Appointmentdetails.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Col, Row, Spin, Table } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { RootState, useAppDispatch } from '../../../store';
import { getDetailAppointmentService } from '../../../store/managerAppointment.services/thunkAction';
import { Vertical } from '../../../utils/AnimatedPage';
import type { ColumnsType } from 'antd/es/table';
import { clearMessageAppointment } from '../../../store/managerAppointment.services/slice';
const initAppointment = {
	appointment_id: '',
	type_id: '',
	doctor_schedule_id: '',
	patient_id: '',
	employee_id: '',
	fullname: '',
	dob: '',
	gender: '',
	phone: '',
	status: 1,
	createdAt: '',
	updatedAt: '',
	Type: {
		type_id: '',
		type_name: '',
	},
	Patient: {
		patient_id: '',
		fullname: '',
		avatar: '',
		dob: '',
		gender: '',
		phone: '',
		email: '',
	},
	Employee: {
		employee_id: '',
		fullname: '',
		dob: '',
		gender: '',
		phone: '',
	},
	DoctorSchedule: {
		doctor_schedule_id: '',
		doctor_id: '',
		schedule_id: '',
		status: 1,
		createdAt: '',
		updatedAt: '',
		Doctor: {
			doctor_id: '',
			fullname: '',
			avatar: '',
			dob: '',
			gender: '',
			phone: '',
			email: '',
		},
		Schedule: {
			schedule_id: '',
			session_id: '',
			date: '',
			createdAt: '',
			updatedAt: '',
			Session: {
				session_id: '',
				time: '',
				status: 1,
				createdAt: '',
				updatedAt: '',
			},
		},
	},
};
interface DataType {
	rowId: number;
	ordinalNum: number;
}
interface Category {
	rowId: number;
	category_id: number;
	category_name: string;
}

interface Service {
	rowId: number;
	service_id: number;
	service_name: string;
	price: number;
}

interface Quantity {
	rowId: number;
	quantity: number;
}

interface Appointment {
	appointment_id: string;
	type_id: string;
	doctor_schedule_id: string;
	patient_id: string;
	employee_id: string;
	fullname: string;
	dob: string;
	gender: string;
	phone: string;
	status: number;
	createdAt: string;
	updatedAt: string;
	Type: {
		type_id: string;
		type_name: string;
	};
	Patient: {
		patient_id: string;
		fullname: string;
		avatar: string;
		dob: string;
		gender: string;
		phone: string;
		email: string;
	};
	Employee: {
		employee_id: string;
		fullname: string;
		dob: string;
		gender: string;
		phone: string;
	};
	DoctorSchedule: {
		doctor_schedule_id: string;
		doctor_id: string;
		schedule_id: string;
		status: number;
		createdAt: string;
		updatedAt: string;
		Doctor: {
			doctor_id: string;
			fullname: string;
			avatar: string;
			dob: string;
			gender: string;
			phone: string;
			email: string;
		};
		Schedule: {
			schedule_id: string;
			session_id: string;
			date: string;
			createdAt: string;
			updatedAt: string;
			Session: {
				session_id: string;
				time: string;
				status: number;
				createdAt: string;
				updatedAt: string;
			};
		};
	};
}
const Appointmentdetails = () => {
	const Appdispatch = useAppDispatch();
	const navigate = useNavigate();
	//LẤY ID
	const { appointment_id } = useParams();
	const user_id = useSelector(
		(state: RootState) => state.user.user?.patient_id || '',
	);
	const { messageDetail, isLoading } = useSelector(
		(state: RootState) => state.appointment,
	);
	//DỮ LIỆU TỪ API
	const [appointment, setAppointment] = useState<Appointment | null>(
		initAppointment,
	);
	const [detailsList, setDetailsList] = useState<any | null>(null);
	//SỐ HÀNG CỦA TABLE
	const [rowList, setRowList] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState<
		Category[] | null
	>([]);
	const [selectedServices, setSelectedServices] = useState<Service[]>([]);
	const [selectedQuantities, setSelectedQuantities] = useState<Quantity[]>([]);
	const [descriptionList, setDescriptionList] = useState<any[]>([]);
	const columns: ColumnsType<DataType> = [
		{
			title: 'STT',
			dataIndex: 'ordinalNum',
			align: 'center',
			width: '50px',
		},
		{
			title: 'Danh mục',
			width: '250px',
			render: (obj: any) => (
				<p className="text-capitalize mb-0">
					{selectedCategories?.length
						? selectedCategories.find(
								(category) => category.rowId === obj.rowId,
						  )
							? selectedCategories.find(
									(category) => category.rowId === obj.rowId,
							  )?.category_name
							: ''
						: ''}
				</p>
			),
		},
		{
			title: 'Dịch vụ',
			width: '250px',
			render: (obj: any) => (
				<p className="text-capitalize mb-0">
					{selectedServices.length
						? selectedServices.find((service) => service.rowId === obj.rowId)
							? selectedServices.find((service) => service.rowId === obj.rowId)
									?.service_name
							: ''
						: ''}
				</p>
			),
		},
		{
			title: 'Số lượng',
			align: 'center',
			width: '100px',
			render: (obj: any) => (
				<p className="mb-0">
					{selectedQuantities.length
						? selectedQuantities.find(
								(quantity) => quantity.rowId === obj.rowId,
						  )
							? selectedQuantities.find(
									(quantity) => quantity.rowId === obj.rowId,
							  )?.quantity
							: ''
						: ''}
				</p>
			),
		},
		{
			title: 'Mô tả',
			render: (obj: any) => (
				<p className="mb-0">
					{descriptionList.length
						? descriptionList.find(
								(description) => description.rowId === obj.rowId,
						  )
							? descriptionList.find(
									(description) => description.rowId === obj.rowId,
							  ).description
							: ''
						: ''}
				</p>
			),
		},
	];
	//CALL API
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		getAppointmentByID();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (messageDetail) {
			const { errCode } = messageDetail;
			if (errCode === 0) {
				setAppointment(messageDetail.data);
				if (messageDetail.data.details)
					setDetailsList(messageDetail.data.details);
			} else {
				navigate('/quan-ly-lich-hen');
			}
			Appdispatch(clearMessageAppointment());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [messageDetail]);
	//NẾU LỊCH HẸN CÓ CHI TIẾT DỊCH VỤ -> HIỂN THỊ LÊN TABLE
	useEffect(() => {
		if (detailsList) {
			setRowList(
				detailsList.map((details: any, index: any) => {
					return {
						rowId: index + 1,
						ordinalNum: index + 1,
					};
				}),
			);
			setSelectedCategories(
				detailsList.map((details: any, index: any) => {
					return {
						rowId: index + 1,
						category_id: details.category_id,
						category_name: details.Category.category_name,
					};
				}),
			);
			setSelectedServices(
				detailsList.map((details: any, index: any) => {
					return {
						rowId: index + 1,
						service_id: details.service_id,
						service_name: details.service_name,
						price: details.price,
					};
				}),
			);
			setSelectedQuantities(
				detailsList.map((details: any, index: any) => {
					return {
						rowId: index + 1,
						quantity: details.Detail.quantity,
					};
				}),
			);
			setDescriptionList(
				detailsList.map((details: any, index: any) => {
					return {
						rowId: index + 1,
						description: details.Detail.description,
					};
				}),
			);
		}
	}, [detailsList]);
	//XỬ LÝ LẤY LỊCH HẸN THEO ID
	const getAppointmentByID = async () => {
		const data = { appointment_id, user_id };
		await Appdispatch(getDetailAppointmentService(data as any));
	};
	return (
		<Vertical>
			<div className="m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[1rem]">
				<Spin tip="Đang tải..." spinning={isLoading}>
					<div className="bg-light">
						<div className="container py-6">
							<Row gutter={16}>
								<Col md={24}>
									<div className="rounded p-6">
										<Row className="mb-4">
											<Col>
												<Link
													to="/quan-ly-lich-hen"
													className="no-underline text-blue-500"
												>
													<p>
														<FontAwesomeIcon icon={faChevronLeft} /> Quay lại
													</p>
												</Link>
											</Col>
										</Row>
										<Row className="mb-5">
											<Col
												md={8}
												className="mt-5 flex items-center justify-center"
											>
												<p className="mb-0">
													<span className="mr-4">
														Ngày gửi:{' '}
														{moment(appointment?.createdAt).format(
															'DD-MM-YYYY',
														)}
													</span>
													<span>
														<b
															className={`${
																appointment?.status === 1
																	? 'text-green-500'
																	: 'text-blue-500'
															}`}
														>
															{appointment?.status === 1
																? 'Đã xác nhận'
																: appointment?.status === 3
																? 'Đã hoàn thành'
																: ''}
														</b>
													</span>
												</p>
											</Col>
											<Col
												md={8}
												className="mt-4 flex items-center justify-center"
											>
												<h2 className="uppercase text-lg font-bold text-blue-500 mb-0">
													Chi tiết lịch hẹn
												</h2>
											</Col>
										</Row>
										<hr />
										<Row className="appointment-details mb-4">
											<Col md={8} className="mt-5">
												<h5 className="text-black font-bold text-md mb-5">
													1. Thông tin lịch hẹn
												</h5>
												<div className="flex">
													<div className="left-content mr-3">
														<p className="mb-3">
															<b className="text-black">Mã lịch hẹn:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Loại:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Ngày hẹn:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Ca khám:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Người duyệt:</b>
														</p>
													</div>
													<div className="right-content">
														<p className="mb-3">
															{appointment?.appointment_id.toUpperCase()}
														</p>
														<p className="mb-3">
															{appointment?.Type.type_name}
														</p>
														<p className="mb-3">
															<b className="text-blue-500">
																{moment(
																	appointment?.DoctorSchedule.Schedule.date,
																).format('DD-MM-YYYY')}
															</b>
														</p>
														<p className="mb-3">
															<b className="text-blue-500">
																{
																	appointment?.DoctorSchedule.Schedule.Session
																		.time
																}
															</b>
														</p>
														<p className="mb-3">
															{appointment?.Employee.fullname}
														</p>
													</div>
												</div>
											</Col>
											<Col md={8} className="mt-5">
												<h5 className="text-black font-bold text-md mb-5">
													2. Thông tin bệnh nhân
												</h5>
												<div className="flex">
													<div className="left-content mr-3">
														<p className="mb-3">
															<b className="text-black">Mã bệnh nhân:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Họ và tên:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Ngày sinh:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Giới tính:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Số điện thoại:</b>
														</p>
													</div>
													<div className="right-content">
														<p className="mb-3">
															{appointment?.Patient.patient_id.toUpperCase()}
														</p>
														<p className="mb-3">{appointment?.fullname}</p>
														<p className="mb-3">
															{moment(appointment?.dob).format('DD-MM-YYYY')}
														</p>
														<p className="mb-3">
															{appointment?.gender ? 'Nam' : 'Nữ'}
														</p>
														<p className="mb-3">{appointment?.phone}</p>
													</div>
												</div>
											</Col>
											<Col className="mt-5">
												<h5 className="text-black font-bold text-md mb-4">
													3. Thông tin bác sĩ
												</h5>
												<div className="flex">
													<div className="left-content mr-3">
														<p className="mb-3">
															<b className="text-black">Mã bác sĩ:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Họ và tên:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Ngày sinh:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Giới tính:</b>
														</p>
														<p className="mb-3">
															<b className="text-black">Số điện thoại:</b>
														</p>
													</div>
													<div className="right-content">
														<p className="mb-3">
															{appointment?.DoctorSchedule.Doctor.doctor_id.toUpperCase()}
														</p>
														<p className="mb-3">
															{appointment?.DoctorSchedule.Doctor.fullname}
														</p>
														<p className="mb-3">
															{moment(
																appointment?.DoctorSchedule.Doctor.dob,
															).format('DD-MM-YYYY')}
														</p>
														<p className="mb-3">
															{appointment?.DoctorSchedule.Doctor.gender
																? 'Nam'
																: 'Nữ'}
														</p>
														<p className="mb-3">
															{appointment?.DoctorSchedule.Doctor.phone}
														</p>
													</div>
												</div>
											</Col>
										</Row>
										<hr />
										<Row gutter={16} className="mb-4">
											<Col md={24} className="mt-5">
												<div className="mb-5 flex items-center">
													<div className="w-2/3">
														<h5 className="text-black text-md font-bold me-3">
															4. Dịch vụ thực hiện
														</h5>
													</div>
												</div>
												<div className="table-responsive">
													<Table
														columns={columns}
														dataSource={rowList}
														rowKey="ordinalNum"
														bordered
														pagination={false}
													/>
												</div>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</Spin>
			</div>
		</Vertical>
	);
};

export default Appointmentdetails;
