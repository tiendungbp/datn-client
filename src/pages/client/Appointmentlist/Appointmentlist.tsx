import {
	Breadcrumb,
	Button,
	Col,
	DatePicker,
	Form,
	Input,
	Modal,
	Row,
	Select,
	Spin,
	Table,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { Vertical } from '../../../utils/AnimatedPage';
import { RootState, useAppDispatch } from '../../../store';
import { useSelector } from 'react-redux';
import CommonUtils from '../../../utils/commonUtils';
import { Link } from 'react-router-dom';
import {
	cancelAppointmentService,
	getAllAppointmentService,
} from '../../../store/managerAppointment.services/thunkAction';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import type { ColumnsType } from 'antd/es/table';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import socketIO from 'socket.io-client';
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
const Appointmentlist = () => {
	const socket = socketIO('https://www.toothhive.online/');
	socket.connect();
	const Appdispatch = useAppDispatch();
	const patient_id = useSelector(
		(state: RootState) => state.user.user?.patient_id || null,
	);
	const { message, messageCancel, isLoading } = useSelector(
		(state: RootState) => state.appointment,
	);
	const [appointmentList, setAppointmentList] = useState<Appointment[]>([]);
	const [appointment, setAppointment] = useState<Appointment>(initAppointment);
	const [isOpen, setIsOpen] = useState(false);
	const [searchList, setSearchList] = useState<Appointment[] | null>(null);
	const [keyword, setKeyword] = useState('');
	const detailsPage = '/quan-ly-lich-hen/chi-tiet';
	const columns: ColumnsType<Appointment> = [
		{
			title: 'Mã lịch hẹn',
			dataIndex: 'appointment_id',
			render: (appointment_id) => appointment_id.toUpperCase(),
		},
		{
			title: 'Loại',
			render: (obj) => obj.Type.type_name,
		},
		{
			title: 'Người khám',
			render: (obj) => obj.fullname,
		},
		{
			title: 'Bác sĩ phụ trách',
			render: (obj) => obj.DoctorSchedule.Doctor.fullname,
		},
		{
			title: 'Ngày gửi',
			render: (obj) => moment(obj.createdAt).format('DD-MM-YYYY'),
		},
		{
			title: 'Ngày hẹn',
			render: (obj) =>
				moment(obj.DoctorSchedule.Schedule.date).format('DD-MM-YYYY'),
		},
		{
			title: 'Ca khám',
			render: (obj) => obj.DoctorSchedule.Schedule.Session.time,
		},
		{
			title: 'Trạng thái',
			render: (obj) =>
				obj.status === 0 ? (
					<span className="text-red-500">Chờ xác nhận</span>
				) : obj.status === 1 ? (
					<span className="text-green-500">Đã xác nhận</span>
				) : obj.status === 2 ? (
					<span className="text-gray-500">Đã hủy</span>
				) : (
					<span className="text-blue-500">Đã hoàn thành</span>
				),
		},
		{
			title: 'Xem',
			dataIndex: '',
			align: 'center',
			render: (obj) =>
				obj.status === 0 || obj.status === 2 ? (
					<Button
						onClick={() => {
							setAppointment(obj);
							setIsOpen(true);
						}}
					>
						<FontAwesomeIcon icon={faEdit} className="text-black-600" />
					</Button>
				) : (
					<Link to={`${detailsPage}/${obj.appointment_id}`}>
						<Button className="bg-light">
							<FontAwesomeIcon icon={faEdit} className="text-black-600" />
						</Button>
					</Link>
				),
		},
	];
	useEffect(() => {
		getAllAppointments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (message) {
			setAppointmentList(message.data);
		}
	}, [message]);
	useEffect(() => {
		if (messageCancel) {
			const { errCode } = messageCancel;
			if (errCode === 0) {
				toast.success('Hủy thành công');
				setAppointment(initAppointment);
				setIsOpen(false);
				getAllAppointments();
			} else if (errCode === 2) {
				toast.error('Trạng thái lịch hẹn không phù hợp');
			} else {
				//errCode === 1 || errCode === 5
				toast.error('Gửi yêu cầu thất bại');
			}
			Appdispatch(clearMessageAppointment());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [messageCancel]);
	useEffect(() => {
		socket.on('new_accepted_appointment', (data: any) => {
			if (data.patient_id === patient_id) {
				setSearchList(null);
				getAllAppointments();
			}
		});
		socket.on('new_canceled_appointment', (data: any) => {
			if (data.patient_id === patient_id) {
				setSearchList(null);
				getAllAppointments();
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socket]);

	const getAllAppointments = async () => {
		await Appdispatch(getAllAppointmentService(patient_id));
	};

	const handleFilterByStatus = (status: number) => {
		if (status === -1) {
			setSearchList(null);
		} else {
			const list = appointmentList.filter(
				(appointment) => appointment.status === status,
			);
			setSearchList(list);
		}
	};

	const handleSearchByDate = (date: string) => {
		const list = appointmentList.filter((appointment) => {
			return appointment.DoctorSchedule.Schedule.date === date;
		});
		setSearchList(list);
	};

	const handleSearchByNameOrPhone = () => {
		if (keyword) {
			const isPhoneNumber = CommonUtils.checkPhoneNumber(keyword);
			if (isPhoneNumber) {
				const list = appointmentList.filter(
					(appointment) => appointment.DoctorSchedule.Doctor.phone === keyword,
				);
				setSearchList(list);
				setKeyword('');
			} else {
				const list = appointmentList.filter((appointment) => {
					return appointment.DoctorSchedule.Doctor.fullname
						.toLowerCase()
						.includes(keyword.toLowerCase());
				});
				setSearchList(list);
				setKeyword('');
			}
		} else {
			setSearchList(null);
		}
	};
	// Huỷ lịch hẹn

	const handleCancelAppointment = () => {
		Swal.fire({
			title: 'Xác nhận hủy yêu cầu đặt lịch hẹn?',
			confirmButtonText: 'Xác nhận',
			showCancelButton: true,
			cancelButtonText: 'Thoát',
			customClass: {
				title: 'text-base font-normal text-black-600',
				confirmButton: 'bg-blue-500 text-white shadow-none',
				cancelButton: 'bg-gray-500 text-white shadow-none',
			},
		}).then(async (result: any) => {
			if (result.isConfirmed) {
				Appdispatch(
					cancelAppointmentService({
						appointment_id: appointment.appointment_id,
						patient_id: patient_id,
					}),
				);
			}
		});
	};

	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearchByNameOrPhone();
		}
	};

	return (
		<Vertical>
			<div className="m-auto w-[92%] md:w-wd-secondary lg:mt-[1rem]">
				<Spin tip="Đang tải..." spinning={isLoading}>
					<Breadcrumb
						className={`text-xs md:text-sm`}
						items={[
							{
								title: <a href="/">Trang chủ</a>,
							},
							{
								title: <p className="textColor ">Thông tin đặt lịch khám</p>,
							},
						]}
					/>
					<div className="bg-white box-shadow rounded-lg  p-8 mb-12">
						<h1 className="text-[1.5rem] font-bold uppercase text-[#1386ED]">
							QUẢN LÝ LỊCH HẸN CÁ NHÂN
						</h1>
						<Form layout="vertical">
							<Row gutter={12} className="mb-5">
								<Col lg={4} span={24} className="mt-4">
									<Form.Item label="Tìm theo trạng thái">
										<Select
											className="w-full"
											placeholder="Chọn trạng thái"
											size="large"
											options={[
												{
													value: -1,
													label: 'Hiển thị tất cả',
													className: 'text-blue-500',
												},
												{ value: 0, label: 'Chờ xác nhận' },
												{ value: 1, label: 'Đã xác nhận' },
												{ value: 2, label: 'Đã hủy' },
												{ value: 3, label: 'Đã hoàn thành' },
											]}
											onChange={(value) => handleFilterByStatus(value)}
										/>
									</Form.Item>
								</Col>
								<Col lg={4} span={24} className="mt-4">
									<Form.Item label="Tìm theo ngày hẹn">
										<DatePicker
											size="large"
											className="w-full"
											placeholder="Chọn ngày"
											format="DD-MM-YYYY"
											onChange={(e: any) => {
												e && e.$d
													? handleSearchByDate(
															moment(e.$d).format('YYYY-MM-DD'),
													  )
													: setSearchList(null);
											}}
										/>
									</Form.Item>
								</Col>
								<Col lg={8} span={24} className="mt-4">
									<Form.Item label="Tìm theo tên/số điện thoại bác sĩ">
										<div className="block md:flex w-full">
											<Input
												className="w-full"
												size="large"
												placeholder="Nhập thông tin"
												value={keyword}
												onChange={(e: any) => setKeyword(e.target.value)}
												onKeyUp={handleEnter}
											/>
											<Button
												style={{ height: 40 }}
												className="ml-0 md:ml-3 my-3 md:my-0 w-full"
												onClick={handleSearchByNameOrPhone}
											>
												Tìm
											</Button>
										</div>
									</Form.Item>
								</Col>
							</Row>
						</Form>
						<Row>
							<Col xl={24} md={24} xs={24}>
								<div className="overflow-x-auto shadow-md sm:rounded-lg">
									<Table
										rowKey="appointment_id"
										loading={isLoading}
										columns={columns}
										dataSource={searchList ? searchList : appointmentList}
										pagination={{
											position: ['bottomCenter'],
											pageSize: 10,
										}}
									/>
								</div>
							</Col>
						</Row>
					</div>
				</Spin>
				{/* //modal chi tiet */}

				<Modal
					width={1000}
					open={isOpen}
					onCancel={() => {
						setIsOpen(false);
						setAppointment(initAppointment);
					}}
					okButtonProps={{ hidden: true }}
					cancelButtonProps={{ hidden: true }}
				>
					<Spin tip="Đang tải..." spinning={isLoading}>
						<Row className="mb-5" gutter={12}>
							<Col
								xl={8}
								md={8}
								className="mt-5 flex items-center justify-center"
							>
								<p className="mb-0">
									<span className="mr-4">
										Ngày gửi:{' '}
										{moment(appointment.createdAt).format('DD-MM-YYYY')}
									</span>
									<span>
										<b
											className={`${
												!appointment.status ? 'text-red-500' : 'text-gray-500'
											}`}
										>
											{!appointment.status ? 'Chờ xác nhận' : 'Đã hủy lịch hẹn'}
										</b>
									</span>
								</p>
							</Col>
							<Col
								xl={8}
								md={8}
								className="mt-5 flex items-center justify-center"
							>
								<h2 className="uppercase font-bold text-sky-500 mb-0">
									Yêu cầu đặt lịch hẹn
								</h2>
							</Col>
							{appointment.status !== 2 ? (
								<Col
									lg={8}
									md={8}
									className="mt-5 flex items-center justify-center"
								>
									<Button
										className="px-5 mr-3"
										type="primary"
										onClick={handleCancelAppointment}
										style={{ backgroundColor: '#1386ED' }}
									>
										Hủy lịch hẹn
									</Button>
								</Col>
							) : (
								<></>
							)}
						</Row>
						<hr />
						<Row className="appointment-details">
							<Col xl={8} md={8} className="mt-5">
								<h5 className="text-black-600 font-bold mb-5">
									1. Thông tin lịch hẹn
								</h5>
								<div className="flex">
									<div className="left-content">
										<p className="mb-3">
											<b className="text-black-600">Mã lịch hẹn:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Loại:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Ngày hẹn:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Ca khám:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">
												{appointment.status === 0
													? 'Người duyệt:'
													: appointment.status === 2
													? 'Người hủy:'
													: ''}
											</b>
										</p>
									</div>
									<div className="right-content ml-3">
										<p className="mb-3">
											{appointment.appointment_id.toUpperCase()}
										</p>
										<p className="mb-3">{appointment.Type.type_name}</p>
										<p className="mb-3">
											<b className="text-blue-500">
												{moment(
													appointment.DoctorSchedule.Schedule.date,
												).format('DD-MM-YYYY')}
											</b>
										</p>
										<p className="mb-3">
											<b className="text-blue-500">
												{appointment.DoctorSchedule.Schedule.Session.time}
											</b>
										</p>
										<p className="mb-3">
											{appointment.Employee.employee_id !== 'none' ? (
												appointment.Employee.fullname
											) : (
												<span className="text-muted">Chưa có người duyệt</span>
											)}
										</p>
									</div>
								</div>
							</Col>
							<Col xl={8} md={8} className="mt-5">
								<h5 className="text-black-600 font-bold mb-5">
									2. Thông tin bệnh nhân
								</h5>
								<div className="flex">
									<div className="left-content mr-3">
										<p className="mb-3">
											<b className="text-black-600">Mã bệnh nhân:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Họ và tên:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Ngày sinh:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Giới tính:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Số điện thoại:</b>
										</p>
									</div>
									<div className="right-content mr-3">
										<p className="mb-3">
											{appointment.Patient.patient_id.toUpperCase()}
										</p>
										<p className="mb-3">{appointment.fullname}</p>
										<p className="mb-3">
											{moment(appointment.dob).format('DD-MM-YYYY')}
										</p>
										<p className="mb-3">{appointment.gender ? 'Nam' : 'Nữ'}</p>
										<p className="mb-3">{appointment.phone}</p>
									</div>
								</div>
							</Col>
							<Col className="col-md-4 mt-5">
								<h5 className="text-black-600 font-bold mb-5">
									3. Thông tin bác sĩ
								</h5>
								<div className="flex">
									<div className="left-content mr-3">
										<p className="mb-3">
											<b className="text-black-600">Mã bác sĩ:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Họ và tên:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Ngày sinh:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Giới tính:</b>
										</p>
										<p className="mb-3">
											<b className="text-black-600">Số điện thoại:</b>
										</p>
									</div>
									<div className="right-content">
										<p className="mb-3">
											{appointment.DoctorSchedule.Doctor.doctor_id.toUpperCase()}
										</p>
										<p className="mb-3">
											{appointment.DoctorSchedule.Doctor.fullname}
										</p>
										<p className="mb-3">
											{moment(appointment.DoctorSchedule.Doctor.dob).format(
												'DD-MM-YYYY',
											)}
										</p>
										<p className="mb-3">
											{appointment.DoctorSchedule.Doctor.gender ? 'Nam' : 'Nữ'}
										</p>
										<p className="mb-3">
											{appointment.DoctorSchedule.Doctor.phone}
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Spin>
				</Modal>
			</div>
		</Vertical>
	);
};

export default Appointmentlist;
