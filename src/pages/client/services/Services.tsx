import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image_map from '../../../assets/img/map.png';
import { Breadcrumb, Col, Row, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../../store';
import { useSelector } from 'react-redux';
import { getAllDoctorService } from '../../../store/managerDoctor.services/thunkAction';
import { getAllCategoryService } from '../../../store/managerCategory.services/thunkAction';
import CategoryCard from '../../../component/CategoryCard/CategoryCard';
const Services = () => {
	const Appdispatch = useAppDispatch();
	const { listDoctor, isLoadingDoctor } = useSelector(
		(state: RootState) => state.managerDoctor,
	);
	const { listCategoryActive, isLoadingCategory } = useSelector(
		(state: RootState) => state.managerCategory,
	);

	const [doctorList, setDoctorList] = useState<any[]>([]);
	const [categoryList, setCategoryList] = useState([]);
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		getAllDoctors();
		getActiveCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const getAllDoctors = async () => {
		// Gửi yêu cầu lấy danh sách danh mục
		await Appdispatch(getAllDoctorService());
	};
	//XỬ LÝ LẤY DANH MỤC ĐANG HOẠT ĐỘNG
	const getActiveCategories = async () => {
		await Appdispatch(getAllCategoryService());
	};
	useEffect(() => {
		if (listDoctor) {
			setDoctorList(listDoctor.data);
		}
	}, [listDoctor]);

	useEffect(() => {
		if (listCategoryActive) {
			setCategoryList(listCategoryActive.data);
		}
	}, [listCategoryActive]);

	return (
		<div className="services__client m-auto w-wd-primary md:w-wd-secondary lg:mt-[1rem] sm:mt-[0rem] md:mt-[0rem] xl:mt-[1rem]">
			<Breadcrumb
				className={`title__services__client text-base mb-8 `}
				items={[
					{
						title: <a href="/">Trang chủ</a>,
					},
					{
						title: <p className="textColor ">Dịch vụ</p>,
					},
				]}
			/>
			{/*start category service*/}
			<div>
				<div className="py-2  text-center ">
					<h1 className="text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]">
						Các danh mục dịch vụ tại ToothHive
					</h1>
					<p className="text-[0.9rem] text-gray-500">
						Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất
					</p>
				</div>
				<Spin tip="Đang tải..." spinning={isLoadingCategory}>
					<Row gutter={16}>
						{categoryList.map((category, index) => {
							return <CategoryCard key={index} category={category} />;
						})}
					</Row>
				</Spin>
			</div>
			{/* end category service */}

			{/*start doctor*/}
			<div>
				<div className="mt-4 py-8  text-center">
					<h1 className="text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]">
						Đội ngũ bác sĩ tại ToothHive
					</h1>
					<p className="text-[0.9rem] text-gray-500">
						Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất
					</p>
				</div>
				<Spin tip="Đang tải..." spinning={isLoadingDoctor}>
					<Row gutter={16}>
						{doctorList?.map((doctor, index) => {
							return (
								<Col
									lg={6}
									md={12}
									key={index}
									className="wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<div className="team-item relative rounded overflow-hidden">
										<div className="overflow-hidden">
											<img
												className="w-full"
												src={doctor.avatar}
												alt="hinh-doctor"
											/>
										</div>
										<div className="team-text text-center p-5">
											<h5 className="mb-5 font-semibold">{doctor.fullname}</h5>
											<p className="text-blue-500 mb-5">{doctor.degree}</p>
											<div className="text-center">
												<Link to={`/detailDoctor/${doctor.doctor_id}`}>
													Xem thêm
												</Link>
											</div>
										</div>
									</div>
								</Col>
							);
						})}
					</Row>
				</Spin>
			</div>
			{/* end doctor */}

			{/*start map*/}
			<div className="mb-[2rem] md:mb-[3rem] ">
				<div className="mt-4 py-8  text-center">
					<h1 className="text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]">
						Hệ Thống Nha Khoa ToothHive
					</h1>
					<p className="text-[0.9rem] text-gray-500">
						Tại ToothHive sẽ có các chi nhánh về các địa điểm khác nhau
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8  ">
					<div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
						<div className="w-ful flex gap-2">
							<div className="w-[35%] h-[12rem] ">
								<img
									src={Image_map}
									alt=""
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>
							<div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
								<h1 className="font-bold ">Cơ sở 1</h1>
								<span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
								<Link to="/" className="flex items-center gap-2 text-[#1386ED]">
									{' '}
									<span>Tới Link map </span>
									<FontAwesomeIcon icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
					<div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
						<div className="w-ful flex gap-2">
							<div className="w-[35%] h-[12rem] ">
								<img
									src={Image_map}
									alt=""
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>
							<div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
								<h1 className="font-bold ">Cơ sở 1</h1>
								<span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
								<Link to="/" className="flex items-center gap-2 text-[#1386ED]">
									{' '}
									<span>Tới Link map </span>
									<FontAwesomeIcon icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
					<div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
						<div className="w-ful flex gap-2">
							<div className="w-[35%] h-[12rem] ">
								<img
									src={Image_map}
									alt=""
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>
							<div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
								<h1 className="font-bold ">Cơ sở 1</h1>
								<span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
								<Link to="/" className="flex items-center gap-2 text-[#1386ED]">
									{' '}
									<span>Tới Link map </span>
									<FontAwesomeIcon icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
					<div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
						<div className="w-ful flex gap-2">
							<div className="w-[35%] h-[12rem] ">
								<img
									src={Image_map}
									alt=""
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>
							<div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
								<h1 className="font-bold ">Cơ sở 1</h1>
								<span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
								<Link to="/" className="flex items-center gap-2 text-[#1386ED]">
									{' '}
									<span>Tới Link map </span>
									<FontAwesomeIcon icon={faArrowRight} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end map */}
		</div>
	);
};

export default Services;
