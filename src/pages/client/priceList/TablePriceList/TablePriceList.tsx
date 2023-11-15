import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllCategory } from "../../../../services/managerCategory";
import { getAllService } from "../../../../services/managerService";
import { RootState, useAppDispatch } from "../../../../store";
import { getAllCategoryStore } from "../../../../store/managerCategory.services/thunkAction";
import { getAllServiceStore } from "../../../../store/managerService.services/thunkAction";

interface PriceListProps {
  listData: getAllService[];
  id_category: any;
}

const TablePriceList: React.FC<PriceListProps> = ({
  listData,
  id_category,
}) => {
  function formatPrice(price: number) {
    // Sử dụng Intl.NumberFormat để định dạng tiền tệ thành đơn vị Việt Nam đồng
    const formattedPrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);

    return formattedPrice;
  }
  // const TablePriceList = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <>
          {id_category.length !== 0 && id_category[0].value === "all" ? (
            // Nội dung khi id_category không rỗng và giá trị đầu tiên là 'all'
            <>
              {arrCategory.map((itemCategory, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td colSpan={3} className="p-5 text-lg font-bold">
                      {itemCategory.category_name.toUpperCase()}
                    </td>
                  </tr>

                  {arrService &&
                    arrService.map((itemService, serviceIndex) => {
                      if (
                        itemService.Category.category_id ===
                        itemCategory.category_id
                      ) {
                        return (
                          <tr
                            key={serviceIndex}
                            className="text-sm sm:text-[1rem]"
                          >
                            <td className="border-collapse border border-slate-500 p-5">
                              {itemService.service_name}
                            </td>
                            <td className="border-collapse border border-slate-500 p-5 text-center">
                              Lần
                            </td>
                            <td className="border-collapse border border-slate-500 p-5 text-center">
                              {formatPrice(itemService.price)}
                            </td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                </React.Fragment>
              ))}
            </>
          ) : (
            // Nội dung khi không thoả mãn điều kiện
            <>
              {id_category.length !== 0 ? (
                <tr>
                  <td colSpan={3} className="p-5 text-lg font-bold">
                    {id_category[0].label.toUpperCase()}
                  </td>
                </tr>
              ) : (
                <>
                  {arrCategory.map((itemCategory, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td colSpan={3} className="p-5 text-lg font-bold">
                          {itemCategory.category_name.toUpperCase()}
                        </td>
                      </tr>

                      {arrService &&
                        arrService.map((itemService, serviceIndex) => {
                          if (
                            itemService.Category.category_id ===
                            itemCategory.category_id
                          ) {
                            return (
                              <tr
                                key={serviceIndex}
                                className="text-sm sm:text-[1rem]"
                              >
                                <td className="border-collapse border border-slate-500 p-5">
                                  {itemService.service_name}
                                </td>
                                <td className="border-collapse border border-slate-500 p-5 text-center">
                                  Lần
                                </td>
                                <td className="border-collapse border border-slate-500 p-5 text-center">
                                  {formatPrice(itemService.price)}
                                </td>
                              </tr>
                            );
                          }
                          return null;
                        })}
                    </React.Fragment>
                  ))}
                </>
              )}

              {id_category.length !== 0 &&
                listData &&
                listData.map((itemService, serviceIndex) => (
                  <tr key={serviceIndex}>
                    <td className="border-collapse border border-slate-500 p-5">
                      {itemService.service_name}
                    </td>
                    <td className="border-collapse border border-slate-500 p-5 text-center">
                      Lần
                    </td>
                    <td className="border-collapse border border-slate-500 p-5 text-center">
                      {formatPrice(itemService.price)}
                    </td>
                  </tr>
                ))}
            </>
          )}
        </>
      </tbody>
    </table>
  );
};

export default TablePriceList;
