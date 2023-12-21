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
				className={`md:text-sm text-xs`}
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
			<div className="flex flex-wrap justify-between pl-1">
				<div className="content_left relative mt-10">
					<img
						className="img_doctor w-full relative"
						src={aDoctor?.avatar}
						alt={aDoctor?.fullname}
					/>
				</div>
				<div className="content_right mt-24">
					<h1 className=" font-bold text-base md:text-2xl text-blue-500 mb-4">
						Bác sĩ {aDoctor?.fullname}
					</h1>
					<div dangerouslySetInnerHTML={{ __html: aDoctor?.html }} />
				</div>
			</div>
			<div className="bottom_detailDoctor my-10 flex-wrap">
				<Row>
					<Col md={6} xs={24} className="mb-8">
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
											<td className="capitalize text-blue-600 text-sm md:text-base">
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
					<Col md={6} xs={24} className="md:text-base text-sm font-normal">
						<span className="flex items-center font-semibold text-lg">
							<img src="./img/Group 236.png" alt="" />
							Địa chỉ và thời gian làm việc
						</span>
						<p className="mt-7">
							Địa chỉ làm việc: 237 Nguyễn Tất Thành, Quận 4, Tp.HCM
						</p>
						<p>Thời gian: Từ 7:30 - 21:00 vào các ngày trong tuần</p>
					</Col>

					{aDoctor.doctor_id && <DoctorSchedule doctor={aDoctor} />}
				</Row>
			</div>
		</div>
	);
};

export default DetailDoctor;
