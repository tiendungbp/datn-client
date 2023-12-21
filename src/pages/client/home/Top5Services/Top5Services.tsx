import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Top5Services.scss';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { getAllService } from '../../../../services/managerService';
import { getAllServiceStore } from '../../../../store/managerService.services/thunkAction';

const SampleNextArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				color: 'black',
				fontSize: '15px',
				lineHeight: '1.5715',
			}}
			onClick={onClick}
		>
			<RightOutlined />
		</div>
	);
};

const SamplePrevArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				color: 'black',
				fontSize: '15px',
				lineHeight: '1.5715',
			}}
			onClick={onClick}
		>
			<LeftOutlined />
		</div>
	);
};

const settings = {
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
};

const Top5Services = ({ mobileScreen }: { mobileScreen: boolean }) => {
	const Appdispatch = useAppDispatch();
	const { listService } = useSelector(
		(state: RootState) => state.managerService,
	);
	const [arrService, setArrService] = useState<getAllService[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			// Gửi yêu cầu lấy danh sách danh mục
			await Appdispatch(getAllServiceStore());
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (listService) {
			setArrService(listService.slice(0, 5));
		}
	}, [listService]);

	return (
		<div className="mb-32">
			{mobileScreen && arrService.length !== 0 ? (
				<Row justify="center" className="mb-16 mt-5">
					<Col span={32}>
						<Carousel
							className="top5ServiceCarousel"
							arrows
							{...settings}
							beforeChange={(_, next) => next === 0}
						>
							{arrService &&
								arrService.map((item, index) => (
									<div key={index}>
										<div className="md:w-[80%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 my-5">
											<div className=" flex flex-col gap-2 mb-4 m-auto">
												<div className="w-[8rem] h-[8rem] bg-pink-50 rounded-full m-auto">
													<img
														className="w-full h-full rounded-full object-cover "
														src="https://rangthudo.com.vn/images/image/nhung-truong-hop-nen-boc-rang-su.jpg"
														alt=""
													/>
												</div>
												<p className="line-clamp-2 max-w-[13rem] m-auto overflow-ellipsis leading-[1.8rem]">
													{item.service_name}
												</p>
											</div>
										</div>
									</div>
								))}
						</Carousel>
					</Col>
				</Row>
			) : (
				<>
					<div className="md:w-[80%] m-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
						{arrService &&
							arrService.map((item, index) => (
								<div className=" flex flex-col gap-2" key={index}>
									<div className="w-[8rem] h-[8rem] bg-pink-50 rounded-full m-auto">
										<img
											className="w-full h-full rounded-full object-cover "
											src="https://rangthudo.com.vn/images/image/nhung-truong-hop-nen-boc-rang-su.jpg"
											alt=""
										/>
									</div>
									<p className="line-clamp-2 max-w-[13rem] m-auto overflow-ellipsis leading-[1.8rem]">
										{item.service_name}
									</p>
								</div>
							))}
					</div>
				</>
			)}
		</div>
	);
};

export default Top5Services;
