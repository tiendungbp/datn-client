import { Row, Col, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTooth } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./ServicePageCarousel.scss";

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

const ServicePageCarousel = ({
  arr,
  mobileScreen,
  windowWidth,
}: {
  arr: any;
  mobileScreen: boolean;
  windowWidth: number;
}) => {
  const groupedItems: any[][] = [];
  let itemsPerDiv: number;
  if (windowWidth > 500 && windowWidth < 1200) {
    itemsPerDiv = 3;
  } else if (windowWidth < 500) {
    itemsPerDiv = 1;
  } else {
    itemsPerDiv = 4;
  }

  for (let i = 0; i < arr.length; i += itemsPerDiv) {
    const group = arr.slice(i, i + itemsPerDiv);
    groupedItems.push(group);
  }
  console.log("groupedItems: ", groupedItems);

  return (
    <>
      {groupedItems.length !== 0 && (
        <Row justify="center">
          <Col span={32}>
            <Carousel
              className="ServicePageCarousel"
              {...(mobileScreen ? { arrows: false } : { arrows: true })}
              {...settings}
              beforeChange={(_, next) => next === 0}
            >
              {groupedItems &&
                groupedItems.map((group, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8 py-2">
                      {group.map((item, itemIndex) => (
                        <div
                          className="bg-white box-shadow rounded-lg  flex flex-col gap-4"
                          key={itemIndex}
                        >
                          <div className="w-ful flex gap-2">
                            <div className="w-[35%] ">
                              <img
                                src={item.avatar}
                                alt=""
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                              <h1 className="font-bold ">{item.fullname}</h1>
                              <span>
                                Với 7 năm kinh nghiệm về mảng nha khoa
                              </span>
                              <span>Trình độ: {item.degree}</span>
                              <Link
                                to="/detailDoctor"
                                className="flex items-center gap-2 text-[#1386ED]"
                              >
                                {" "}
                                <span>Xem thêm </span>
                                <FontAwesomeIcon icon={faArrowRight} />
                              </Link>
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

export default ServicePageCarousel;
