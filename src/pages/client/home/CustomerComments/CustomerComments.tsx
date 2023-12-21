import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';

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

const CustomerComments = ({
	mobileScreen,
	windowWidth,
}: {
	mobileScreen: boolean;
	windowWidth: number;
}) => {
	const slides = [
		{
			id: 1,
			name: 'Tran Thi Nga',
			img: 'https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg',
			content:
				'Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng.',
		},
		{
			id: 2,
			name: 'Luong Xuan Cuong',
			img: 'https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg',
			content:
				' Tôi đã có trải nghiệm tuyệt vời với phòng khám Toothhive. Bác sĩ và nhân viên rất tận tâm và chuyên nghiệp trong việc giải đáp mọi thắc mắc của tôi. Họ giúp tôi hiểu rõ về quy trình điều trị và đề xuất các giải pháp phù hợp nhất cho vấn đề nha khoa của tôi.',
		},
		{
			id: 3,
			name: 'Nguyen Cong Phuong',
			img: 'https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg',
			content:
				'Tôi đã có trải nghiệm rất tích cực tại Toothhive. Phòng chờ rộng rãi, thoải mái và luôn được giữ gìn sạch sẽ. Nhân viên rất thân thiện và chu đáo, khiến tôi cảm thấy thoải mái và tự tin khi đến khám.',
		},
		{
			id: 4,
			name: 'Mai Van Thanh',
			img: 'https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg',
			content:
				' Tôi rất ấn tượng với cách mà bác sĩ và nhân viên tại Toothhive đã xử lý vấn đề nha khoa của tôi. Họ rất chu đáo và thân thiện, luôn lắng nghe và tận tâm hướng dẫn tôi trong quá trình điều trị. Tôi cảm thấy tin tưởng và hài lòng với chất lượng dịch vụ mà họ cung cấp.',
		},
		{
			id: 5,
			name: 'Tran Quoc Dung',
			img: 'https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg',
			content:
				'Phòng khám Toothhive đã cung cấp cho tôi một trải nghiệm tuyệt vời. Bác sĩ và nhân viên rất chuyên nghiệp và thân thiện. Tôi rất hài lòng với chất lượng dịch vụ nha khoa mà họ cung cấp và cảm thấy yên tâm với việc điều trị của mình. Công nghệ và trang thiết bị tại phòng khám cũng rất hiện đại và tiện lợi.',
		},
		{
			id: 6,
			name: 'Tran Xuan Soan',
			img: 'https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg',
			content:
				'Tôi rất hài lòng với sự minh bạch về chi phí tại Toothhive. Nhân viên đã giải thích rõ ràng về chi phí điều trị và các tùy chọn thanh toán. Điều này giúp tôi cảm thấy yên tâm và không gặp bất kỳ bất ngờ nào liên quan đến tài chính sau khi hoàn thành điều trị.',
		},
		{
			id: 7,
			name: 'Nguyen Bich Tram',
			img: 'https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg',
			content:
				'Tôi muốn khen ngợi sự hỗ trợ tận tình của phòng khám Toothhive. Khi gặp vấn đề về sức khỏe nha khoa, họ đã hỗ trợ và giúp đỡ tôi một cách hiệu quả. Bác sĩ và nhân viên đã tận tâm hướng dẫn tôi thông qua quá trình điều trị và đề xuất các biện pháp phòng ngừa cần thiết.',
		},
	];

	const [groupedItems, setGroupedItems] = useState<any[][]>([]);

	useEffect(() => {
		let itemsPerDiv: number;
		if (windowWidth < 500) {
			itemsPerDiv = 1;
		} else {
			itemsPerDiv = 2;
		}

		const newGroupedItems: any[] = [];

		for (let i = 0; i < slides.length; i += itemsPerDiv) {
			const group = slides.slice(i, i + itemsPerDiv);
			newGroupedItems.push(group);
		}

		setGroupedItems(newGroupedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [windowWidth]);
	return (
		<>
			{groupedItems.length !== 0 && (
				<Row justify="center">
					<Col span={32}>
						<Carousel
							className="CategoryServiceCarousel"
							{...(mobileScreen ? { arrows: false } : { arrows: true })}
							{...settings}
							beforeChange={(_, next) => next === 0}
						>
							{groupedItems &&
								groupedItems.map((group, index) => (
									<div key={index}>
										<div className="lg:grid sm:grid-cols-2 md:grid-cols-2 justify-center items-center gap-8 py-2">
											{group.map((item, itemIndex) => (
												<div
													key={itemIndex}
													className="p-3 w-full cursor-pointer"
												>
													<div className="bg-white box-shadow p-4 rounded-lg flex flex-col gap-2">
														<div className="flex justify-between items-center">
															<FontAwesomeIcon
																icon={faQuoteLeft}
																className="text-[2.3rem] md:text-[2.5rem] text-gray-500"
															/>
															<div>
																<Rate disabled defaultValue={4} />
															</div>
														</div>
														<div className="line-clamp-3 overflow-ellipsis leading-[1.8rem] text-xs md:text-base">
															{item.content}
														</div>
														<div className="flex gap-4 items-center ">
															<div className="w-[3rem] h-[3rem] rounded-full bg-gray-100">
																<img
																	className="w-full h-full object-cover rounded-full"
																	src={item.img}
																	alt={item.name}
																/>
															</div>
															<div>
																<p>{item.name}</p>
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								))}
						</Carousel>
					</Col>
				</Row>
			)}
		</>
	);
};

export default CustomerComments;
