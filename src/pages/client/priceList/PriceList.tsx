import { Breadcrumb, Card, Select } from "antd";
import React, { useEffect, useState } from "react";
import "./PriceList.scss";
import TablePriceList from "./TablePriceList/TablePriceList";
import { NavLink } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import { getAllDoctor } from "../../../services/managerDoctor";
import { getAllServiceStore } from "../../../store/managerService.services/thunkAction";
import { getAllService } from "../../../services/managerService";
import { getAllCategoryStore } from "../../../store/managerCategory.services/thunkAction";
import { getAllCategory } from "../../../services/managerCategory";

const PriceList = () => {
  const Appdispatch = useAppDispatch();
  const { listService } = useSelector(
    (state: RootState) => state.managerService
  );
  const { listCategory } = useSelector(
    (state: RootState) => state.managerCategory
  );

  const [arrService, setArrService] = useState<getAllService[]>([]);
  const [arrCategory, setArrCategory] = useState<getAllCategory[]>([]);
  const [listData, setListData] = useState<getAllService[]>([]);
  const [oneCategory, setOneCategory] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Gửi yêu cầu lấy danh sách danh mục
      await Appdispatch(getAllServiceStore());
      await Appdispatch(getAllCategoryStore());
    };

    fetchData(); // Gọi hàm fetchData khi component được render
  }, []);
  useEffect(() => {
    if (listService && listCategory) {
      setArrService(listService);
      setArrCategory(listCategory);
    }
  }, [listService, listCategory]);

  const options = arrCategory.map((category) => ({
    value: category.category_id,
    label: category.category_name,
  }));

  options.push({
    value: "all",
    label: "Tất cả",
  });

  const handleOnchangeSelect = (e: any) => {
    // e === idCategory
    const resultService = arrService.filter((service) => {
      return service.Category.category_id === e;
    });
    const resultCategory = options.filter((category) => {
      return category.value === e;
    });
    setListData(resultService);
    setOneCategory(resultCategory);
  };

  return (
    <div className="price__list__client m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[1rem]">
      {/* BreadCrumb */}
      <Breadcrumb
        className={`title__price__list text-base mb-8`}
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: <span className="textColor">Bảng giá</span>,
          },
        ]}
      />
      {/* Title */}
      <div className="sm:flex flex-wrap justify-between block">
        <h3 className="title__price__list__client textColor text-lg sm:text-3xl font-medium order-1">
          Bảng giá tại ToothHive
        </h3>
        <p className="content__price__lisst order-3 my-5 text-sm sm:text-[1rem]">
          Nha Khoa ToothHIve cam kết đem đến cho khách hàng các gói dịch vụ Răng
          hàm mặt chất lượng hàng đầu với mức chi phí tốt nhất. Nha Khoa
          ToothHIve cam kết đem đến cho khách hàng các gói dịch vụ Răng hàm mặt
          chất lượng hàng đầu với mức chi phí tốt nhất.
        </p>
        <div className="order-2">
          <Select
            style={{ width: "100%" }}
            className="select__price__list__clietn"
            showSearch
            placeholder="Chọn theo dịch vụ"
            // optionFilterProp="children"
            // filterOption={(input, option) =>
            //   (option?.label ?? "").includes(input)
            // }
            // filterSort={(optionA, optionB) =>
            //   (optionA?.label ?? "")
            //     .toLowerCase()
            //     .localeCompare((optionB?.label ?? "").toLowerCase())
            // }
            options={options}
            onChange={handleOnchangeSelect}
          />
        </div>
      </div>
      {/* Price List */}
      <TablePriceList listData={listData} id_category={oneCategory} />
      {/* facilities */}
      <div className="facilities my-10">
        <div className="title my-10">
          <h3 className="textColor title__price__list__client text-3xl font-medium order-1 text-center">
            Chi nhánh ToothHive
          </h3>
          <p className="text-center">
            Tại ToothHive sẽ có các chi nhánh về các địa điểm khác nhau
          </p>
        </div>
        <div className="box__basis__client__pricelist flex gap-7 flex-wrap justify-center">
          <div className="item box-shadow ">
            <div className=" w-full lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-auto lg:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')",
                }}
                title="Woman holding a mug"
              ></div>
              <div className="box__price__list__client  p-4 flex flex-col justify-between leading-normal mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Cơ sở 1
                </div>
                <p className="text-gray-700 text-base">
                  237 Nguyễn Tất Thành, Quận 5, Tp.HCM
                </p>
                <a href="" className="textColor font-medium">
                  <NavLink to={"/sdsd"}>Link map tới</NavLink>
                </a>
              </div>
            </div>
          </div>
          <div className="item box-shadow ">
            <div className=" w-full lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-auto lg:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')",
                }}
                title="Woman holding a mug"
              ></div>
              <div className="box__price__list__client  p-4 flex flex-col justify-between leading-normal mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Cơ sở 1
                </div>
                <p className="text-gray-700 text-base">
                  237 Nguyễn Tất Thành, Quận 5, Tp.HCM
                </p>
                <a href="" className="textColor font-medium">
                  <NavLink to={"/sdsd"}>Link map tới</NavLink>
                </a>
              </div>
            </div>
          </div>
          <div className="item box-shadow ">
            <div className=" w-full lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-auto lg:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')",
                }}
                title="Woman holding a mug"
              ></div>
              <div className="box__price__list__client  p-4 flex flex-col justify-between leading-normal mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Cơ sở 1
                </div>
                <p className="text-gray-700 text-base">
                  237 Nguyễn Tất Thành, Quận 5, Tp.HCM
                </p>
                <a href="" className="textColor font-medium">
                  <NavLink to={"/sdsd"}>Link map tới</NavLink>
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
