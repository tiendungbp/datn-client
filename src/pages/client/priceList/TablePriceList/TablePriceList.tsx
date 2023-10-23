import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllCategory } from "../../../../services/managerCategory";
import { RootState, useAppDispatch } from "../../../../store";
import { getAllCategoryStore } from "../../../../store/managerCategory.services/thunkAction";
import { getAllServiceStore } from "../../../../store/managerService.services/thunkAction";
const TablePriceList = () => {
  const [arrCategory, setArrCategory] = useState<getAllCategory[]>([]);
  const [arrService, setArrService] = useState<any[]>([]);

  const Appdispatch = useAppDispatch();
  const { listCategory } = useSelector(
    (state: RootState) => state.managerCategory
  );
  const { listService } = useSelector(
    (state: RootState) => state.managerService
  );

  useEffect(() => {
    const fetchData = async () => {
      // Gửi yêu cầu lấy danh sách danh mục
      await Appdispatch(getAllCategoryStore());
      await Appdispatch(getAllServiceStore());
    };

    fetchData(); // Gọi hàm fetchData khi component được render
  }, []);
  useEffect(() => {
    if (listCategory && listService) {
      setArrCategory(listCategory);
      setArrService(listService);
    }
  }, [listCategory, listService]);


  return (
    <table className="table-auto sm:container xl:container sm:m-10 border-collapse border border-slate-500 sm:mx-auto">
      <thead className="bg-slate-700 text-white">
        <tr>
          <th className="border-collapse border border-slate-500 p-5 w-2/3">
            Dịch vụ
          </th>
          <th className="border-collapse border border-slate-500 p-5 w-1/6">
            Đơn vị tính
          </th>
          <th className="border-collapse border border-slate-500 p-5 w-1/6">
            Giá (VNĐ)
          </th>
        </tr>
      </thead>
      <tbody>
        {arrCategory &&
          arrCategory.map((itemCategory, index) => (
            <>
              <tr key={index}>
                <td className="p-5 font-medium">
                  {itemCategory.category_name}
                </td>
              </tr>

              {arrService &&
                arrService.map((itemService, serviceIndex) => {
                  if (
                    itemService.Category.category_id ===
                    itemCategory.category_id
                  ) {
                    return (
                      <tr key={serviceIndex}>
                        <td className="border-collapse border border-slate-500 p-5 ">
                          {itemService.service_name}
                        </td>
                        <td className="border-collapse border border-slate-500 p-5 text-center">
                          Lần
                        </td>
                        <td className="border-collapse border border-slate-500 p-5 text-center">
                          {itemService.price}
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
            </>
          ))}
        {/* <tr>
          <td className=" p-5 font-medium">Tổng quát</td>
        </tr> */}
        {/* <tr>
          <td className="border-collapse border border-slate-500 p-5 ">
            Khám tổng quát
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            Lần
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            Miễn phí
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default TablePriceList;
