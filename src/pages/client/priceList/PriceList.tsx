import { Breadcrumb, Card } from "antd";
import React from "react";
import "./PriceList.scss";
import MenuServices from "./MenuServices/MenuServices";
import TablePriceList from "./TablePriceList/TablePriceList";

const PriceList = () => {
  return (
    <div className="m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[1rem]">
      {/* BreadCrumb */}
      <Breadcrumb
        className={`text-base mb-8`}
        items={[
          {
            title: <a href="#">Trang chủ</a>,
          },
          {
            title: <span className="textColor">Bảng giá</span>,
          },
        ]}
      />
      {/* Title */}
      <div className="sm:flex flex-wrap justify-between block">
        <h3 className="textColor text-3xl font-medium order-1">
          Bảng Giá Tại ToothHIve
        </h3>
        <p className="order-3 my-5">
          Nha Khoa ToothHIve cam kết đem đến cho khách hàng các gói dịch vụ Răng
          hàm mặt chất lượng hàng đầu với mức chi phí tốt nhất. Nha Khoa
          ToothHIve cam kết đem đến cho khách hàng các gói dịch vụ Răng hàm mặt
          chất lượng hàng đầu với mức chi phí tốt nhất.
        </p>
        <div className="order-2">
          <MenuServices width="w-80" />
        </div>
      </div>
      {/* Price List */}
      <TablePriceList />
      {/* facilities */}
      <div className="facilities my-16">
        <div className="title my-10">
          <h3 className="textColor text-3xl font-medium order-1 text-center">
            Bảng Giá Tại ToothHIve
          </h3>
          <p className="text-center">
            Tại ToothHive sẽ có các chi nhánh về các địa điểm khác nhau
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-center">
          <div className="item box-shadow mr-5 mb-5">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-auto lg:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')",
                }}
                title="Woman holding a mug"
              ></div>
              <div className=" p-4 flex flex-col justify-between leading-normal mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Cơ sở 1
                </div>
                <p className="text-gray-700 text-base">
                  237 Nguyễn Tất Thành, Quận 5, Tp.HCM
                </p>
                <a href="" className="textColor font-medium">
                  Link tới map
                </a>
              </div>
            </div>
          </div>
          <div className="item box-shadow mr-5 mb-5">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-auto lg:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')",
                }}
                title="Woman holding a mug"
              ></div>
              <div className=" p-4 flex flex-col justify-between leading-normal mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Cơ sở 1
                </div>
                <p className="text-gray-700 text-base">
                  237 Nguyễn Tất Thành, Quận 5, Tp.HCM
                </p>
                <a href="" className="textColor font-medium">
                  Link tới map
                </a>
              </div>
            </div>
          </div>
          <div className="item box-shadow mr-5 mb-5">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-auto lg:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')",
                }}
                title="Woman holding a mug"
              ></div>
              <div className=" p-4 flex flex-col justify-between leading-normal mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Cơ sở 1
                </div>
                <p className="text-gray-700 text-base">
                  237 Nguyễn Tất Thành, Quận 5, Tp.HCM
                </p>
                <a href="" className="textColor font-medium">
                  Link tới map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
