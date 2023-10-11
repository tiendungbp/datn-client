import { Breadcrumb, Input, Pagination } from "antd";
import React from "react";
import { LeftArrowIcon, SearchIcon } from "../../../assets/icons/icons";
import NewsImage from "../../../assets/img/EmBeKhamRang.png";
import "./News.scss";

const News = () => {
  return (
    <div className="m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[0rem]">
      {/* BreadCrumb */}
      <Breadcrumb
        className={`text-base mb-8`}
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
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="left flex-col sm:w-4/5 w-full pr-0 sm:pr-10">
          <h3 className="text-3xl font-bold">
            Các <span className="textColor">Bài Viết</span> Tại ToothHive
          </h3>
          <div className="flex flex-wrap justify-between">
            <div className="news flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/5">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/5">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/5">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/5">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/5">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news flex shadow rounded my-5">
              <img src={NewsImage} alt="" />
              <div className="content p-3">
                <h3 className="font-bold leading-tight">
                  Bí quyết chăm sóc răng miệng tại phòng khám nha khoa ToothHive
                </h3>
                <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                  October 12, 2023
                </p>
                <a href="#">
                  <div className="textColor flex justify-between w-2/5">
                    <p>Xem thêm</p>
                    <div className=" flex justify-center items-center">
                      <LeftArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
        <div className="right sm:w-1/3 w-full">
          <div className="search flex justify-center items-center">
            <Input className="px-4 mb-5" placeholder="Tìm kiếm tin tức..." />
            <SearchIcon />
          </div>
          <div className="services">
            <h3 className="titleService   text-xl font-bold">
              Dịch vụ tại ToothHive
            </h3>
            <div className="categories">
              <div className="cat flex justify-between items-center ">
                <div className="">
                  <input
                    type="radio"
                    id="niengRang"
                    name="fav_language"
                    value="1"
                    className="my-2"
                  />
                  <label className="ml-2" htmlFor="niengRang">
                    Niềng năng
                  </label>
                </div>
                <div className="quantity">(18)</div>
              </div>
              <div className="cat flex justify-between items-center ">
                <div className="">
                  <input
                    type="radio"
                    id="nhoRang"
                    name="fav_language"
                    value="2"
                    className="my-2"
                  />
                  <label className="ml-2" htmlFor="nhoRang">
                    Nhổ năng
                  </label>
                </div>
                <div className="quantity">(18)</div>
              </div>
              <div className="cat flex justify-between items-center ">
                <div className="">
                  <input
                    type="radio"
                    id="tramRang"
                    name="fav_language"
                    value="3"
                    className="my-2"
                  />
                  <label className="ml-2" htmlFor="tramRang">
                    Trám năng
                  </label>
                </div>
                <div className="quantity">(18)</div>
              </div>
              <div className="cat flex justify-between items-center ">
                <div className="">
                  <input
                    type="radio"
                    id="trongRang"
                    name="fav_language"
                    value="4"
                    className="my-2"
                  />
                  <label className="ml-2" htmlFor="trongRang">
                    Trồng năng
                  </label>
                </div>
                <div className="quantity">(18)</div>
              </div>
              <div className="cat flex justify-between items-center ">
                <div className="">
                  <input
                    type="radio"
                    id="tayTrangRang"
                    name="fav_language"
                    value="5"
                    className="my-2"
                  />
                  <label className="ml-2" htmlFor="tayTrangRang">
                    Tẩy trắng răng
                  </label>
                </div>
                <div className="quantity">(18)</div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="blogs">
            <h3 className="titleBlog text-xl font-bold">
              Các bài viết liên quan
            </h3>
            <div className="showBlog">
              <div className="blog flex shadow rounded my-5">
                <img src={NewsImage} alt="" />
                <div className="content p-3">
                  <a href="#">
                    <h3 className="font-bold leading-tight text-lg">
                      5 dịch vụ nổi bật tại phòng khám nha khoa để có...
                    </h3>
                  </a>
                  <p className="text-sm my-2" style={{ color: "#143566" }}>
                    Để có được một hàm răng đẹp rạng ngời tại Tooth...
                  </p>
                  <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                    October 12, 2023
                  </p>
                </div>
              </div>
              <div className="blog flex shadow rounded my-5">
                <img src={NewsImage} alt="" />
                <div className="content p-3">
                  <a href="#">
                    <h3 className="font-bold leading-tight text-lg">
                      5 dịch vụ nổi bật tại phòng khám nha khoa để có...
                    </h3>
                  </a>
                  <p className="text-sm my-2" style={{ color: "#143566" }}>
                    Để có được một hàm răng đẹp rạng ngời tại Tooth...
                  </p>
                  <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                    October 12, 2023
                  </p>
                </div>
              </div>
              <div className="blog flex shadow rounded my-5">
                <img src={NewsImage} alt="" />
                <div className="content p-3">
                  <a href="#">
                    <h3 className="font-bold leading-tight text-lg">
                      5 dịch vụ nổi bật tại phòng khám nha khoa để có...
                    </h3>
                  </a>
                  <p className="text-sm my-2" style={{ color: "#143566" }}>
                    Để có được một hàm răng đẹp rạng ngời tại Tooth...
                  </p>
                  <p className="text-sm my-2" style={{ color: "#8E8E8E" }}>
                    October 12, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
