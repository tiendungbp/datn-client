import React from "react";

const TablePriceList = () => {
  return (
    <table className="table-auto sm:container xl:container sm:m-10 border-collapse border border-slate-500 ">
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
        {/*  */}
        <tr>
          <td className=" p-5 font-medium">Điều trị nha chu</td>
        </tr>
        <tr>
          <td className="border-collapse border border-slate-500 p-5 ">
            Cạo vôi răng
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            2 Hàm
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            400.000
          </td>
        </tr>
        {/*  */}
        <tr>
          <td className=" p-5 font-medium">Điều trị nha chu</td>
        </tr>
        <tr>
          <td className="border-collapse border border-slate-500 p-5 ">
            Cạo vôi răng
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            2 Hàm
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            400.000
          </td>
        </tr>
        {/*  */}
        <tr>
          <td className=" p-5 font-medium">Điều trị nha chu</td>
        </tr>
        <tr>
          <td className="border-collapse border border-slate-500 p-5 ">
            Cạo vôi răng
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            2 Hàm
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            400.000
          </td>
        </tr>
        <tr>
          <td className="border-collapse border border-slate-500 p-5 ">
            Cạo vôi răng
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            2 Hàm
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            400.000
          </td>
        </tr>
        <tr>
          <td className="border-collapse border border-slate-500 p-5 ">
            Cạo vôi răng
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            2 Hàm
          </td>
          <td className="border-collapse border border-slate-500 p-5 text-center">
            400.000
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablePriceList;
