import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Row } from 'antd';
import { Link, NavLink, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { useSelector } from 'react-redux';
import { getAllDoctor } from '../../../services/managerDoctor';
import DoctorSchedule from '../../../component/DoctorSchedule/DoctorSchedule';
import { getOneDoctorStore } from '../../../store/managerDoctor.services/thunkAction';
import { managerCategoryServices } from '../../../services/managerCategory';
import CommonUtils from '../../../utils/commonUtils';

const DetailDoctor = () => {
	const { id } = useParams();
	const Appdispatch = useAppDispatch();
	const { doctor } = useSelector((state: RootState) => state.managerDoctor);
	const [doctorCategories, setDoctorCategories] = useState([]);

	const [aDoctor, setADoctor] = useState<getAllDoctor>({
		doctor_id: '',
		fullname: '',
		avatar: '',
		dob: '',
		gender: true,
		phone: '',
		degree: '',
		start_date: null,
		street: null,
		ward: null,
		district: null,
		city: null,
		html: '',
		markdown: '',
		email: '',
		password: '',
		is_activated: true,
		is_blocked: true,
		refresh_token: '',
		createdAt: '',
		updatedAt: '',
	});

	useEffect(() => {
		fetchData(); // Gọi hàm fetchData khi component được render
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const fetchData = async () => {
		// Gửi yêu cầu lấy danh sách danh mục
		window.scrollTo({ top: 0, behavior: 'smooth' });
		await Appdispatch(getOneDoctorStore(id ? id : ''));
		const res = await managerCategoryServices.getAllByDoctorID(id);
		if (res.data.errCode === 0) {
			setDoctorCategories(res.data.data);
		}
	};
	useEffect(() => {
		if (doctor) {
			setADoctor(doctor?.data);
		}
	}, [doctor]);
	return (
		<div className="container_detailDoctor m-auto">
			<Breadcrumb
				className={`text-base mt-4`}
				items={[
					{
						title: <NavLink to={'/'}>Trang chủ</NavLink>,
					},
					{
						title: <NavLink to={'/services'}>Dịch vụ</NavLink>,
					},
					{
						title: (
							<span className="textColor">Bác sĩ {aDoctor?.fullname}</span>
						),
					},
				]}
			/>
			<div className="flex flex-wrap justify-between">
				<div className="content_left relative mt-10">
					<img
						className="img_doctor w-full relative"
						src={aDoctor?.avatar}
						alt={aDoctor?.fullname}
					/>
				</div>
				<div className="content_right mt-24">
					<h1 className=" font-bold text-2xl text-blue-500">
						Bác sĩ {aDoctor?.fullname}
					</h1>
					<p className="mt-3 text-xl font-normal">
						“ Mỗi khách hàng đối với tôi như người anh, chị, em trong gia đình.
						Luôn mang đến cho họ những dịch vụ với kết quả tốt nhất là điều tôi
						hằng tâm niệm”
					</p>
					<div className="text-xl mt-5">
						<li>Bác sĩ Răng Hàm Mặt – Đại Học Y Dược TP Hồ Chí Minh 1996</li>
						<li>
							Chứng chỉ: Đào Tạo Implant Nha Khoa – Bệnh Viện Răng Hàm Mặt Trung
							Ương TP Hồ Chí Minh 2011
						</li>
						<li>
							Chứng chỉ: Chỉnh Nha Nâng Cao – Ortho Organizers, Inc – USA 2012
						</li>
						<li>
							Chứng chỉ: Cập Nhật Thực Hành Implant Nha Khoa – Bệnh Viện Răng
							Hàm Mặt Trung Ương TP Hồ Chí Minh 2015
						</li>
						<li>
							Chứng chỉ: Chỉnh Hình Răng Mặt – Bệnh Viện Răng Hàm Mặt Trung Ương
							TP Hồ Chí Minh 2018
						</li>
					</div>
				</div>
			</div>
			<div className="bottom_detailDoctor mt-24 mb-20 flex-wrap">
				<Row>
					<Col md={6} xs={24}>
						<span className="flex items-center mb-4 font-semibold text-lg">
							<img src="./img/Group 232.png" alt="" />
							Danh mục điều trị của bác sĩ
						</span>
						<table className="doctor-category-table">
							<tbody>
								{doctorCategories.map((item: any, index: any) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td className="capitalize text-blue-600">
												<Link to={`/detailServices/${item.category_id}`}>
													{CommonUtils.capitalizeEachWord(item.category_name)}
												</Link>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</Col>
					<Col md={6} xs={24} className="text-lg font-normal">
						<span className="flex items-center font-semibold text-lg">
							<img src="./img/Group 236.png" alt="" />
							Địa chỉ và thời gian làm việc
						</span>
						<p className="mt-7">
							Địa chỉ làm việc: Cơ sở 2 - 172 Trường chinh, <br /> Tân Thới
							HIệp, Quận 12, Tp.HCM
						</p>
						<p>Thời gian: Từ 8:00 - 18:00 vào các ngày trong tuần</p>
					</Col>

					{aDoctor.doctor_id && <DoctorSchedule doctor={aDoctor} />}
				</Row>
			</div>
		</div>
	);
};

export default DetailDoctor;
