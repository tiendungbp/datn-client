import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Breadcrumb,
  DatePicker,
  Input,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import { SearchProps } from "antd/es/input/Search";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";

interface DataBookingProfileProp {
  //appointment_id`, `type_id`, `doctor_schedule_id`, `patient_id`, `employee_id`, `fullname`, `dob`, `gender`, `phone`, `status`, `createdAt`, `updatedAt`
  // ('lh01a73aa4', 1, 70, 'bn8097f807', 'ltaca98c47', 'Trần Thị Bích', '2000-02-15', 0, '0908765432', 2, '2023-07-09 17:33:30', '2023-07-09 17:35:27'),
  //
  key: string;
  apointment_id: string; //ma lich hen
  category: string;

  fullname: string; //nguoi kham
  doctor_schedule: string; //bac si phu trach
  createdAt: string; //ngay gui
  appointment_date: string; // ngay hen
  checkout: string; // ca kham
  status: string;
}

const dataBookingProfile: DataBookingProfileProp[] = [
  {
    key: "1",
    apointment_id: "LH269S73EWDS",
    category: "Đặt mới",

    fullname: "Trần Thị Nga",
    doctor_schedule: "Nguyễn Văn Anh",
    createdAt: "03-08-2023",
    appointment_date: "04-08-2023",
    checkout: "13:00 - 15:00",
    status: "Chờ xác nhận",
  },
  {
    key: "2",
    apointment_id: "LH269S73EWDS",
    category: "Đặt mới",

    fullname: "Trần Thị Nga",
    doctor_schedule: "Nguyễn Văn Anh",
    createdAt: "03-08-2023",
    appointment_date: "04-08-2023",
    checkout: "13:00 - 15:00",
    status: "Chờ xác nhận",
  },
  {
    key: "3",
    apointment_id: "LH269S73EWDS",
    category: "Đặt mới",

    fullname: "Trần Thị Nga",
    doctor_schedule: "Nguyễn Văn Anh",
    createdAt: "03-08-2023",
    appointment_date: "04-08-2023",
    checkout: "13:00 - 15:00",
    status: "Chờ xác nhận",
  },
];

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

const Appointmentlist = () => {
  const [modalUpdateBookingProfile, setModalBookingProfile] = useState(false);

  const { Search } = Input;
  const handleViewClick = () => {
    setModalBookingProfile(true);
  };
  const columnsBookingProfile: ColumnsType<DataBookingProfileProp> = [
    {
      title: "Mã lịch hẹn",
      dataIndex: "apointment_id",
      key: "apointment_id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Loại",
      dataIndex: "category",
      key: "category",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Người khám",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Bác sĩ phụ trách",
      dataIndex: "doctor_schedule",
      key: "doctor_schedule",
      render: (text) => <p>{text}</p>,
    },

    {
      title: "Ngày gửi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ngày hẹn",
      dataIndex: "appointment_date",
      key: "appointment_date",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ca khám",
      dataIndex: "checkout",
      key: "checkout",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text) => <p>{text}</p>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space
          size="large"
          onClick={handleViewClick}
          className="bg-[#DCEDFF] border border-[#1386ED] hover:bg-[#1386ED] hover:text-white  p-2 px-3 rounded-lg transition-all duration-300"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Space>
      ),
    },
  ];

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <>
      <div className="m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[1rem] ">
        <Breadcrumb
          className={`text-lg mb-8`}
          items={[
            {
              title: <a href="/">Trang chủ</a>,
            },
            {
              title: <p className="textColor ">Thông tin đặt lịch khám</p>,
            },
          ]}
        />
        <div className="bg-white box-shadow rounded-lg  p-8 mb-12">
          <h1 className="text-[1.5rem] font-bold uppercase text-[#1386ED]">
            QUẢN LÝ LỊCH HẸN CÁ NHÂN
          </h1>
          <div className="grid  md:grid-cols-4 gap-6 my-8 search_booking_profile">
            <div className="flex flex-col gap-1 admin_input_search_status">
              <span>Tìm theo trạng thái</span>
              <Select
                showSearch
                style={{
                  width: "100%",
                  height: "50px",
                  background: "#DCEDFF",
                  borderRadius: "15px",
                }}
                placeholder="Chọn trạng thái"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Đang hoạt động",
                  },
                  {
                    value: "2",
                    label: "Ngưng hoạt động",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-1 admin_input_search_date">
              <span>Tìm theo ngày hẹn </span>

              <DatePicker
                format={dateFormatList}
                placeholder="Tìm theo ngày hẹn"
              />
            </div>
            <div className="flex flex-col gap-1 admin_input_search_phone">
              <span>Tìm theo tên/số điện thoại </span>
              <Search
                placeholder="Nhập thông tin"
                allowClear
                enterButton="Tìm"
                size="large"
                onSearch={onSearch}
              />
            </div>
          </div>
          <div className="table_booking_profile">
            <Table
              columns={columnsBookingProfile}
              dataSource={dataBookingProfile}
              pagination={{ pageSize: 5 }}
            />
          </div>
        </div>

        {/* //modal chi tiet */}
        <div>
          <Modal
            className="modal_booking_profile"
            centered
            open={modalUpdateBookingProfile}
            onCancel={() => setModalBookingProfile(false)}
            width={1200}
          >
            <div className=" mt-8 mb-4 title_model_booking_profile flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className=" flex gap-4 items-center ">
                <h3>Ngày gửi: 03 -08-2023</h3>
                <p className="text-red-500 font-bold lg:text-[1.1rem]">
                  Chờ xác nhận
                </p>
              </div>
              <div className="">
                <h1 className=" text-[#1386ED] text-[1.5rem] font-bold text-center mb-4">
                  YÊU CẦU ĐẶT LỊCH HẸN
                </h1>
              </div>
              <div className="">
                <button className="py-3 px-6 rounded-lg bg-[#1386ED] text-white font-bold">
                  Hủy lịch hẹn
                </button>
              </div>
            </div>
            <hr />
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4 md:px-8">
                <h1 className="font-bold md:text-[1.1rem]">
                  1. Thông tin lịch hẹn
                </h1>
                <div className="flex justify-between">
                  <span className="font-bold ">Mã lịch hẹn:</span>
                  <span>LH80C2D08D</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Loại:</span>
                  <span> Đặt mới</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Ngày hẹn:</span>
                  <span className="font-bold text-[#1386ED]"> 04-08-2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Ca khám: </span>
                  <span className="font-bold text-[#1386ED]">
                    {" "}
                    13:30 -15:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Người duyệt: </span>
                  <span className="text-gray-500">Chưa có người duyệt</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:px-8">
                <h1 className="font-bold md:text-[1.1rem]">
                  2. Thông tin bệnh nhân
                </h1>

                <div className="flex justify-between">
                  <span className="font-bold ">Mã bệnh nhân: </span>
                  <span>BN80C2D08D</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Họ và tên:</span>
                  <span> Trần Thị Nga</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Ngày sinh: </span>
                  <span className="font-bold text-[#1386ED]"> 14-09-2003</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Giới tính: </span>
                  <span className=""> Nữ</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Số điện thoại: </span>
                  <span> 0975383290</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:px-8">
                <h1 className="font-bold md:text-[1.1rem]">
                  3. Thông tin bác sĩ
                </h1>

                <div className="flex justify-between">
                  <span className="font-bold ">Mã bác sĩ: </span>
                  <span>BS80C2D08D</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Họ và tên:</span>
                  <span> Trần Mai Anh Minh</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Ngày sinh: </span>
                  <span className="font-bold text-[#1386ED]"> 11-02-1986</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Giới tính: </span>
                  <span className=""> Nam</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold ">Số điện thoại: </span>
                  <span> 0975246590</span>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Appointmentlist;
