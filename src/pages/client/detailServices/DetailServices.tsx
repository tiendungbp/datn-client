import { Breadcrumb, Spin } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { getOneCategoryStore } from '../../../store/managerCategory.services/thunkAction';
import { getAllServiceStore } from '../../../store/managerService.services/thunkAction';
import { Vertical } from '../../../utils/AnimatedPage';
import DoctorCard from '../../../component/DoctorCard/DoctorCard';
import { getAllDoctorByCategoryService } from '../../../store/managerDoctor.services/thunkAction';

interface DataServiceProp {
	key: React.Key;
	name: string;
	price: number;
	guarantee: string;
	description: string;
}

const columnService: ColumnsType<DataServiceProp> = [
	{
		title: 'Dịch vụ',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Giá (VNĐ)',
		dataIndex: 'price',
		key: 'price',
	},
];

const DetailServices = () => {
	const { id } = useParams();
	const Appdispatch = useAppDispatch();
	const { category } = useSelector((state: RootState) => state.managerCategory);
	const navigate = useNavigate();
	const { listService } = useSelector(
		(state: RootState) => state.managerService,
	);
	const { listDoctor, isLoadingDoctor } = useSelector(
		(state: RootState) => state.managerDoctor,
	);
	const [doctorList, setDoctorList] = useState<any>([]);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//XỬ LÝ LẤY CÁC BÁC SĨ ĐIỀU TRỊ DANH MỤC

	const fetchData = async () => {
		// Gửi yêu cầu lấy danh sách danh mục
		await Appdispatch(getOneCategoryStore(id ? id : ''));
		// await Appdispatch(getDoctorsByCategoryID());
		await Appdispatch(getAllDoctorByCategoryService(id ? id : ''));
		await Appdispatch(getAllServiceStore());
	};
	useEffect(() => {
		if (listDoctor) {
			const { errCode } = listDoctor;
			if (errCode === 0) {
				setDoctorList(listDoctor.data);
			} else {
				navigate('/');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [listDoctor]);

	const dataService: DataServiceProp[] = listService
		? listService
				.filter((service: any) => {
					return service.Category.category_id === category?.category_id;
				})
				.map((service: any, index: any) => ({
					key: index,
					name: service.service_name,
					price: service.price,
					guarantee: 'string',
					description: 'string',
				}))
		: [];
	return (
		<div className="m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[1rem]">
			<Breadcrumb
				className={`text-base`}
				items={[
					{
						title: <NavLink to={'/'}>Trang chủ</NavLink>,
					},
					{
						title: <NavLink to={'/services'}>Dịch vụ</NavLink>,
					},
					{
						title: <span className="textColor capitalize">{category?.category_name}</span>,
					},
				]}
			/>
			{/* nd title va mo ta cua dich vu */}
			<div className="py-8">
				<h1 className=" capitalize font-bold text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] py-2  text-[#1386ED] ">
					{category?.category_name}
				</h1>
				<span className='text-1rem md <Table columns={columns} dataSource={data} size="middle" />:text-[1.1rem] lg:text-[1.2rem] leading-9'>
					Bọc răng sứ thẩm mỹ là kỹ thuật phục hình cố định bằng vật liệu sứ có
					vai trò phục hồi chức năng ăn nhai, cải thiện thẩm mỹ giúp bạn tự tin
					với nụ cười rạng rỡ tự nhiên. Những thắc mắc về Bọc răng sứ có đau
					không? Có những loại răng sứ nào? Chi phí bọc răng sứ bao nhiêu?… sẽ
					được giải đáp trong bài viết bên dưới. Bọc răng sứ thẩm mỹ là kỹ thuật
					phục hình cố định bằng vật liệu sứ có vai trò phục hồi chức năng ăn
					nhai, cải thiện thẩm mỹ giúp bạn tự tin với nụ cười rạng rỡ tự nhiên.
					Những thắc mắc về Bọc răng sứ có đau không? Có những loại răng sứ nào?
					Chi phí bọc răng sứ bao nhiêu?… sẽ được giải đáp trong bài viết bên
					dưới. Bọc răng sứ thẩm mỹ là kỹ thuật phục hình cố định bằng vật liệu
					sứ có vai trò phục hồi chức năng ăn nhai, cải thiện thẩm mỹ giúp bạn
					tự tin với nụ cười rạng rỡ tự nhiên. Những thắc mắc về Bọc răng sứ có
					đau không? Có những loại răng sứ nào? Chi phí bọc răng sứ bao nhiêu?…
					sẽ được giải đáp trong bài viết bên dưới.
				</span>
			</div>
			

			{/* bang gia */}
			<div className="w-70% md:w-[50%] m-auto py-8">
				<Table
					columns={columnService}
					expandable={{
						expandedRowRender: (record) => (
							<p style={{ margin: 0 }}>{record.description}</p>
						),
						rowExpandable: (record) => record.name !== 'Not Expandable',
					}}
					dataSource={dataService}
				/>
			</div>
			<Vertical>
				<Spin tip="Đang tải..." spinning={isLoadingDoctor}>
					<div className="container text-center p-5 title-category-detail">
						<p style={{ fontSize: '16px' }}>
							Danh sách các bác sĩ hiện đang điều trị danh mục
						</p>
						<h2 className="mb-3 capitalize text-blue-500">
							{category?.category_name}
						</h2>
					</div>
					<div className="container" style={{ backgroundColor: '#eff5ff' }}>
						<div className="container pt-5">
							<div className="row">
								<div className="col-md">
									{doctorList?.map((doctor: any, index: any) => {
										return <DoctorCard key={index} doctor={doctor} />;
									})}
								</div>
							</div>
						</div>
					</div>
				</Spin>
			</Vertical>
		</div>
	);
};

export default DetailServices;
