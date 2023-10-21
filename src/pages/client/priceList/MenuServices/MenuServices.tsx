import React from "react";

const MenuServices = ({ width = "w-64" }) => {
  return (
    <>
      <select
        className={`bg-white-100 text-gray-400 border rounded-md p-2 ${width} sm:w-80 w-full mb-5 sm:mb-0`}
      >
        <option className="text-gray-700" value="1">
          Lựa chọn 1
        </option>
        <option className="text-gray-700" value="2">
          Lựa chọn 2
        </option>
        <option className="text-gray-700" value="3">
          Lựa chọn 3
        </option>
      </select>
    </>
  );
};

export default MenuServices;
