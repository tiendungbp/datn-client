import { Breadcrumb, Input } from "antd";
import React from "react";
import { LeftArrowIcon, SearchIcon } from "../../../assets/icons/icons";
import NewsImage from "../../../assets/img/EmBeKhamRang.png";
import "./News.scss";

const News = () => {
  return (
    <div className="xl:container sm:mx-16 mx-6">
      {/* BreadCrumb */}
      <Breadcrumb
        className={`text-sm my-8`}
        items={[
          {
            title: <a href="#">Trang chủ</a>,
          },
          {
            title: <span className="textColor">Tin tức</span>,
          },
        ]}
      />
      {/* Content */}
      <div className="flex">
        <div className="left flex-col sm:w-4/5 w-full pr-0 sm:pr-10">
          <h3 className="text-3xl font-bold">
            Các <span className="textColor">Bài Viết</span> Tại ToothHive
          </h3>
          <div className="flex flex-wrap justify-between">
            <div className="news w-2/5 flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/3">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news w-2/5 flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/3">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news w-2/5 flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/3">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news w-2/5 flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/3">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news w-2/5 flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/3">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news w-2/5 flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/3">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right sm:w-1/3 w-full">
          <div className="search flex justify-center items-center">
            <Input className="px-4 mb-5" placeholder="Tìm kiếm tin tức..." />
            <SearchIcon />
          </div>
          <div>
            <h3 className="text-xl font-bold">Dịch vụ tại ToothHive</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
