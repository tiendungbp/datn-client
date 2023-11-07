import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	Spin,
	Modal,
	Form,
	Radio,
	Input,
	DatePicker,
	Button,
	Select,
	Alert,
	Col,
	Row,
} from 'antd';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';
import moment from 'moment';
import Swal from 'sweetalert2';
import CommonUtils from '../../utils/commonUtils';
import { RootState, useAppDispatch } from '../../store';
import { bookingAppointmentService } from '../../store/managerAppointment.services/thunkAction';
// import { getScheduleByDoctorService } from '../../store/managerSchedule.services/thunkAction';
import { getDetailPatientService } from '../../store/managerPatient.services/thunkAction';
import './DoctorSchedule.scss';
import scheduleAPI from '../../services/managerSchedule';
export default function DoctorSchedule(props: any) {
	const Appdispatch = useAppDispatch();
	// KHAI BÁO BIẾN
	const newDate = new Date();
	const [form] = Form.useForm();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [option, setOption] = useState<number>(1);

	const [isLoading, setIsLoading] = useState(false);
	// THÔNG TIN BÁC SĨ, BỆNH NHÂN
	const doctor: any = props.doctor;
	const [patient, setPatient] = useState<any>(null);
	const patient_id = useSelector((state: RootState) =>
		state.user.user ? state.user.user.patient_id : null,
	);
	const { messagePatient } = useSelector((state: RootState) => state.patient);
	const { messageBooking } = useSelector(
		(state: RootState) => state.appointment,
	);
	// const { messageSchedule } = useSelector((state: RootState) => state.schedule);
	// SO SÁNH THỜI GIAN TRUY CẬP TRONG NGÀY
	const currentDate = moment(newDate).format('dddd');
	const currentTime = newDate.getHours();
	let startLoop = 0;
	let endLoop = 7;
	if (
		//truy cập sau 18h vào T2 - T7
		(currentDate !== 'chủ nhật' && currentTime >= 18) ||
		//truy cập sau 15h vào chủ nhật
		(currentDate === 'chủ nhật' && currentTime >= 15)
	) {
		//hiển thị ngày tiếp theo
		startLoop++;
		endLoop++;
	}
	// KHỞI TẠO CÁC GIÁ TRỊ NGÀY CHO SELECT INPUT CHỌN NGÀY
	let dateList: any[] = [];
	for (let i = startLoop; i < endLoop; i++) {
		let obj: any = {};
		obj.label = CommonUtils.capitalizeFirstLetter(
			moment(newDate).add(i, 'days').format('dddd - DD/MM'),
		);
		obj.value = moment(newDate).add(i, 'days').format('YYYY-MM-DD').valueOf();
		dateList.push(obj);
	}
	// THÔNG TIN LỊCH LÀM VIỆC THEO DOCTOR_ID VÀ DATE
	const [scheduleList, setScheduleList] = useState<any[]>([]);
	const [selectedDate, setSelectedDate] = useState<string>(dateList[0].value);
	const [selectedSchedule, setSelectedSchedule] = useState<any>(null);
	// KHỞI TẠO THÔNG TIN BỆNH NHÂN CHO FORM
	const initPatientInfo = {
		fullname: patient ? patient.fullname : null,
		dob: patient ? dayjs(patient.dob) : null,
		gender: patient ? patient.gender : 1,
		phone: patient ? patient.phone : null,
	};
	// GỌI API ĐỂ HIỂN THỊ LỊCH CỦA NGÀY HIỆN TẠI (khi chưa onChange select date)
	useEffect(() => {
		handleChangeDate(selectedDate);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// CALL API
	useEffect(() => {
		if (patient_id && isOpen) getPatientByID();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	// GÁN THÔNG TIN BỆNH NHÂN LÊN FORM
	useEffect(() => {
		if (patient) form.setFieldsValue(initPatientInfo);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [patient]);
	useEffect(() => {
		if (messageBooking) {
			const { errCode, type } = messageBooking;
			if (errCode === 0) {
				toast.success('Gửi yêu cầu thành công');
				handleResetState();
			} else if (errCode === 2 && type === 'status') {
				toast.error('Lịch làm việc chưa được duyệt');
				handleResetState();
			} else if (errCode === 2 && type === 'date') {
				toast.error('Không thể đặt lịch cho quá khứ');
				handleResetState();
			} else if (errCode === 2 && type === 'time') {
				toast.error('Đã qua thời gian của ca khám');
				handleResetState();
			} else if (errCode === 9) {
				toast.error('Lịch làm việc này không còn khả dụng');
				handleResetState();
			} else if (errCode === 10) {
				toast.error('Đã đạt giới hạn đặt 3 lịch hẹn/ngày');
				handleResetState();
			} else {
				// errCode === 1 || errCode === 5
				toast.error('Gửi yêu cầu thất bại');
				handleResetState();
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [messageBooking]);
	useEffect(() => {
		if (messagePatient) {
			setPatient(messagePatient.data);
		}
	}, [messagePatient]);
	// XỬ LÝ LẤY BỆNH NHÂN THEO ID
	const getPatientByID = async () => {
		setIsLoading(true);
		Appdispatch(getDetailPatientService(patient_id));
		setIsLoading(false);
	};

	// XỬ LÝ CHỌN SELECT INPUT NGÀY
	const handleChangeDate = async (date: string) => {
		setIsLoading(true);
		const res = await scheduleAPI.getDoctorSchedulesByDate(
			doctor.doctor_id,
			date,
		);
		setScheduleList(res.data.data);
		setSelectedDate(date);
		setIsLoading(false);
	};

	// XỬ LÝ CHỌN LỊCH LÀM VIỆC
	const handleChooseSchedule = (schedule: any) => {
		if (patient_id) {
			setSelectedSchedule(schedule);
			setIsOpen(true);
		} else {
			toast.error('Bạn cần đăng nhập để đặt lịch hẹn');
		}
	};

	// XỬ LÝ CHỌN LỊCH HẸN ĐƯỢC ĐẶT CHO AI
	const handleChangeOption = (e: any) => {
		const option = e.target.value;
		if (option === 1) {
			form.setFieldsValue(initPatientInfo);
		} else {
			form.setFieldsValue({
				fullname: null,
				dob: null,
				gender: 1,
				phone: null,
			});
		}
		setOption(option);
	};

	// XỬ LÝ SUBMIT FORM
	const handleSubmit = async (values: any) => {
		let resultCheckPhone = CommonUtils.checkPhoneNumber(values.phone);
		if (resultCheckPhone) {
			Swal.fire({
				title: 'Xác nhận đặt lịch hẹn?',
				confirmButtonText: 'Xác nhận',
				showCancelButton: true,
				cancelButtonText: 'Hủy',
				customClass: {
					title: 'fs-5 fw-normal text-dark',
					confirmButton: 'btn-primary shadow-none',
					cancelButton: 'btn-secondary-cancel shadow-none',
				},
			}).then(async (result) => {
				if (result.isConfirmed) {
					const { DoctorSchedule } = selectedSchedule;
					const appointment = {
						creator_id: patient_id,
						type_id: 1,
						doctor_schedule_id: DoctorSchedule.doctor_schedule_id,
						patient_id: patient_id,
						fullname: values.fullname,
						dob: values.dob,
						gender: values.gender,
						phone: values.phone,
					};
					setIsLoading(true);
					await Appdispatch(bookingAppointmentService(appointment));
					setIsLoading(false);
				}
			});
		} else {
			toast.error('Số điện thoại không hợp lệ');
		}
	};

	// XỬ LÝ RESET STATE
	const handleResetState = () => {
		form.resetFields();
		form.setFieldsValue({ option: 1 });
		setSelectedSchedule(null);
		setOption(1);
		setIsOpen(false);
		handleChangeDate(selectedDate);
	};
	return (
		<Col md={12}>
			<Row className="mb-4">
				<Col md={24}>
					<h5 className="mb-4">Lịch làm việc</h5>
					<hr />
					<Select
						className="select-date"
						size="large"
						defaultValue={dateList[0].value}
						options={dateList}
						onChange={(value) => handleChangeDate(value)}
					/>
				</Col>
			</Row>
			<Row className="mb-4">
				<Col md={24}>
					<Spin tip="Đang tải..." spinning={isLoading}>
						<div className="flex flex-wrap">
							{scheduleList?.length ? (
								scheduleList.map((schedule, index) => {
									return (
										<div
											key={index}
											className="schedule-item bg-white py-3 px-4 mr-3 mt-3"
											onClick={() => handleChooseSchedule(schedule)}
										>
											{schedule.Session.time}
										</div>
									);
								})
							) : (
								<p className="text-red-500">Hiện chưa có lịch làm việc</p>
							)}
						</div>
					</Spin>
					<Modal
						open={isOpen}
						onCancel={() => {
							setIsOpen(false);
							setOption(1);
							form.setFieldsValue({ option: 1 });
						}}
						okButtonProps={{ hidden: true }}
						cancelButtonProps={{ hidden: true }}
					>
						<Spin tip="Đang tải..." spinning={isLoading}>
							<div className="text-center">
								<h2 className="text-blue-500">THÔNG TIN LỊCH HẸN</h2>
								<hr />
							</div>
							<div>
								<p>
									<b>Bác sĩ phụ trách:</b> {doctor ? doctor.fullname : ''}
								</p>
								<p>
									<b>Ngày hẹn:</b> {dayjs(selectedDate).format('DD-MM-YYYY')}
								</p>
								<p>
									<b>Ca khám:</b>{' '}
									{selectedSchedule ? selectedSchedule.Session.time : ''}
								</p>
								<hr />
							</div>
							<Form
								form={form}
								layout="vertical"
								initialValues={{ option: option }}
								onFinish={handleSubmit}
							>
								<Row>
									<Col md={24} className="mt-3">
										<Form.Item label="Lịch hẹn được đặt cho" name="option">
											<Radio.Group onChange={handleChangeOption}>
												<Radio value={1}>Bản thân</Radio>
												<Radio value={0}>Người khác</Radio>
											</Radio.Group>
										</Form.Item>
									</Col>
								</Row>
								<Row>
									<Col md={24} className="mt-3">
										<Form.Item
											label="Họ và tên"
											name="fullname"
											rules={[
												{
													required: true,
													message: 'Họ và tên không được rỗng',
												},
											]}
										>
											<Input
												size="large"
												placeholder="Họ và tên người cần khám"
												readOnly={option ? true : false}
											/>
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col md={12} className="mt-3">
										<Form.Item
											label="Ngày sinh"
											name="dob"
											rules={[
												{
													required: true,
													message: 'Ngày sinh không được rỗng',
												},
											]}
										>
											<DatePicker
												size="large"
												placeholder="Ngày sinh"
												format="DD-MM-YYYY"
												disabled={option ? true : false}
											/>
										</Form.Item>
									</Col>
									<Col md={12} className="mt-3">
										<Form.Item label="Giới tính" name="gender">
											<Radio.Group disabled={option ? true : false}>
												<Radio value={true}>Nam</Radio>
												<Radio value={false}>Nữ</Radio>
											</Radio.Group>
										</Form.Item>
									</Col>
								</Row>
								<Row>
									<Col md={24} className="mt-3">
										<Form.Item
											label="Số điện thoại"
											name="phone"
											rules={[
												{
													required: true,
													message: 'Số điện thoại không được rỗng',
												},
											]}
										>
											<Input
												size="large"
												placeholder="Số điện thoại"
												readOnly={option ? true : false}
											/>
										</Form.Item>
									</Col>
								</Row>
								<div className="mt-3">
									<Button
										htmlType="submit"
										type="primary"
										style={{ backgroundColor: '#1386ED' }}
										className="px-5 mr-3"
									>
										Đặt lịch hẹn
									</Button>
									<Button htmlType="reset" className="px-5">
										Reset
									</Button>
								</div>
							</Form>
						</Spin>
					</Modal>
				</Col>
			</Row>
			<Row>
				<Col md={24}>
					<div className="mt-4">
						<Alert
							type="warning"
							showIcon
							message="Chọn ngày và ca khám để đặt lịch hẹn"
						/>
					</div>
				</Col>
			</Row>
		</Col>
	);
}
