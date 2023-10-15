import React, { useEffect, useState } from "react";
import { Row, Col, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./CategoryServiceCarousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTooth } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getAllCategoryService } from "../../../../services/userService/userService";

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

const CategoryServiceCarousel = ({
  mobileScreen,
  windowWidth,
}: {
  mobileScreen: boolean;
  windowWidth: number;
}) => {
  const [arrCategory, setArrCategory] = useState<any[]>([]);

  // Mảng các items

  const arrDescriptions = [
    {
      description:
        "Dịch vụ Trồng Răng tại ToothHive là giải pháp hiện đại và an toàn để khôi phục hoàn toàn chức năng...",
    },
    {
      description:
        "Khi bạn trải qua quá trình mất răng, chất lượng cuộc sống và tự tin của bạn có thể bị ảnh hưởng nghiêm...",
    },
    {
      description:
        "Niềng răng không chỉ là việc thẳng hàng răng mà còn là hành trình thú vị để hoàn thiện nụ cười ...",
    },
    {
      description:
        "Dịch vụ abc Trồng Răng tại ToothHive là giải pháp hiện đại ",
    },
    {
      description:
        "Niềng răng xyz không chỉ là việc thẳng hàng răng mà còn là hành trìn",
    },
    {
      description:
        "Khi bạn mothaiba trải qua quá trình mất răng, chất lượng cuộc sống và tự tin của bạn ",
    },
  ];
  const arrColor = [
    {
      backgroundColor: "#DCEDFF",
      color: "#8AA7C5",
    },
    {
      backgroundColor: "#FDEBFF",
      color: "#9B66DB",
    },
    {
      backgroundColor: "#FDF5EC",
      color: "#ECA09D",
    },
  ];

  const groupedItems: any[][] = [];
  let itemsPerDiv: number;
  if (windowWidth > 500 && windowWidth < 1200) {
    itemsPerDiv = 3;
  } else if (windowWidth < 500) {
    itemsPerDiv = 1;
  } else {
    itemsPerDiv = 4;
  }

  let colorIndex = 0;
  for (let i = 0; i < arrCategory.length; i += itemsPerDiv) {
    const group = arrCategory.slice(i, i + itemsPerDiv);
    if (itemsPerDiv >= 3) {
      for (const item of group) {
        const colorIndex = group.indexOf(item) % arrColor.length;
        item.color = arrColor[colorIndex].color;
        item.backgroundColor = arrColor[colorIndex].backgroundColor;
      }
    } else {
      for (const item of group) {
        console.log(colorIndex);
        item.color = arrColor[colorIndex].color;
        item.backgroundColor = arrColor[colorIndex].backgroundColor;
        colorIndex += 1;
        if (colorIndex === 3) {
          colorIndex = 0;
        }
      }
    }

    groupedItems.push(group);
  }
  for (const key in arrCategory) {
    arrCategory[key].description = arrDescriptions[key].description;
  }
  console.log("groupedItems: ", groupedItems);

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
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8 px-2">
                      {group.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-white box-shadow rounded-lg p-8 flex flex-col gap-4"
                        >
                          <div className="flex items-center gap-4">
                            <FontAwesomeIcon
                              icon={faTooth}
                              className={`bg-[${item.backgroundColor}] text-[${item.color}] p-3 text-[1.5rem] rounded-lg`}
                            />
                            <h3 className="font-bold text-[1.2rem]">
                              {item.category_name}
                            </h3>
                          </div>
                          <p className="line-clamp-3 overflow-ellipsis leading-[1.8rem]">
                            {item.description}
                          </p>
                          <Link
                            to={item.link}
                            className="flex items-center gap-2 text-[#1386ED]"
                          >
                            <span>Xem thêm </span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </Link>
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

export default CategoryServiceCarousel;
