import React, { useEffect, useState } from "react";
import { Row, Col, Carousel, Rate } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faQuoteLeft,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { getAllCategory } from "../../../../services/managerCategory";
import { getAllCategoryStore } from "../../../../store/managerCategory.services/thunkAction";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
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
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
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
      name: "Tran Thi Nga",
      img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg",
      content:
        "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng.",
    },
    {
      id: 2,
      name: "Tran Thi Nga",
      img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg",
      content:
        "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng.",
    },
    {
      id: 3,
      name: "Tran Thi Nga",
      img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg",
      content:
        "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng.",
    },
    {
      id: 4,
      name: "Tran Thi Nga",
      img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg",
      content:
        "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng.",
    },
    {
      id: 5,
      name: "Tran Thi Nga",
      img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg",
      content:
        "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng.",
    },
    {
      id: 6,
      name: "Tran Thi Nga",
      img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg",
      content:
        "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng.",
    },
    {
      id: 7,
      name: "Tran Thi Nga",
      img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg",
      content:
        "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng.",
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
