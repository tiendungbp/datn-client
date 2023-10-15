import React, { useEffect, useState } from "react";
import {
  getAllCategoryService,
  getAllServiceService,
} from "../../../../services/userService/userService";

const TablePriceList = () => {
  const [arrCategory, setArrCategory] = useState<any[]>([]);
  const [arrService, setArrService] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetchAllCategory();
  //     await fetchAllService();
  //   };

  //   fetchData();
  // }, []);

  // const fetchAllCategory = async () => {
  //   try {
  //     let { data } = await getAllCategoryService();
  //     if (data && data.errCode === 0) {
  //       setArrCategory([...data.data]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // };

  // const fetchAllService = async () => {
  //   try {
  //     let { data } = await getAllServiceService();
  //     if (data && data.errCode === 0) {
  //       setArrService([...data.data]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // };
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
        <tr>
          <td className=" p-5 font-medium">Tổng quát</td>
        </tr>
        <tr>
          <td className="border-collapse border border-slate-500 p-5 ">
            Khám tổng quát
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            Lần
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            Miễn phí
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablePriceList;
