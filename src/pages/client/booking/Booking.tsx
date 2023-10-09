import { Select, Button, Form, Input, DatePicker } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import {
  CarryOutOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
const Booking = () => {
  const [selectedSpan, setSelectedSpan] = useState<string | null>(null);
  const handleSpanClick1 = (event: React.MouseEvent<HTMLSpanElement>) => {
    const span = event.target as HTMLSpanElement;
    setSelectedSpan(span.innerText);
  };

  const handleErorr = () => {
    if (!selectedSpan) {
      return "Vui lòng chọn giờ";
    }
    return "";
  };
  var errorTIME: string = "";
  const handleSubmit = () => {
    const error = handleErorr();
    if (error) {
      // Hiển thị thông báo lỗi nếu người dùng chưa chọn giờ
      alert(error);
    } else {
      // Thực hiện xử lý khi người dùng đã chọn giờ
      // Ví dụ: Gửi lịch hẹn lên máy chủ
    }
  };
  console.log(errorTIME);

  type FieldType = {
    selectCoso?: string;
    selectDoctor?: string;
    SelectDate?: string;
    selectTime?: string;
  };
  // format date
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  return (
    <div className="booking__tsx">
      <div className="title__booking">
        <p>Trang chủ</p>
        <p>/</p>
        <p>Đặt lịch</p>
      </div>
      <Form
        name="basic"
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <div className="box__first__booking">
          <div className="box__booking__tsx">
            <Form.Item<FieldType>
              label=<div className="flex flex-row items-center text-lg">
                {" "}
                <EnvironmentOutlined className="mr-2" />
                <p>Chọn cơ sở</p>
              </div>
              name="selectCoso"
              rules={[{ required: true, message: "Bạn chưa chọn cơ sở khám" }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="selectCoso"
            >
              <Select
                showSearch
                className="select__inp"
                style={{ width: "100%" }}
                placeholder="Tìm kiếm cở sở khám"
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
                    label: "Cơ sở 1",
                  },
                  {
                    value: "2",
                    label: "Cơ sở 2",
                  },
                  {
                    value: "3",
                    label: "Cơ sở 3",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label=<div className="flex flex-row items-center text-lg">
                {" "}
                <CarryOutOutlined className="mr-2" />
                <p>Chọn ngày khám</p>
              </div>
              name="SelectDate"
              className="select__Date"
              rules={[
                { required: true, message: "Bạn chưa chọn hẹn ngày khám !" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <DatePicker
                style={{ width: "100%", height: "46px" }}
                defaultValue={dayjs("01/01/2015", dateFormatList[0])}
                format={dateFormatList}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label=<div className="flex flex-row items-center text-lg">
                {" "}
                <SolutionOutlined className="mr-2" />
                <p>Chọn bác sĩ</p>
              </div>
              name="selectDoctor"
              className="select__doctor"
              rules={[{ required: true, message: "Bạn chưa chọn bác sĩ khám" }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Select
                className="select__inp"
                showSearch
                style={{ width: "100%" }}
                placeholder="Tìm kiếm bác sĩ"
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
                    label: "Bác sĩ 1",
                  },
                  {
                    value: "2",
                    label: "Bác sĩ 2",
                  },
                  {
                    value: "3",
                    label: "Bác sĩ 3",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label=<div className="flex flex-row items-center text-lg">
                {" "}
                <FieldTimeOutlined className="mr-2" />
                <p>Chọn giờ</p>
              </div>
              name="selectTime"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="selectTime"
            >
              <div className="btn__selectTime">
                <span
                  className={`time-span ${
                    selectedSpan === "08:00 - 09:00" ? "selected" : ""
                  }`}
                  onClick={handleSpanClick1}
                >
                  08:00 - 09:00
                </span>
                <span
                  className={`time-span ${
                    selectedSpan === "10:00 - 11:00" ? "selected" : ""
                  }`}
                  onClick={handleSpanClick1}
                >
                  10:00 - 11:00
                </span>
                <span
                  className={`time-span ${
                    selectedSpan === "11:00 - 12:00" ? "selected" : ""
                  }`}
                  onClick={handleSpanClick1}
                >
                  11:00 - 12:00
                </span>
                <span
                  className={`time-span ${
                    selectedSpan === "12:00 - 13:00" ? "selected" : ""
                  }`}
                  onClick={handleSpanClick1}
                >
                  12:00 - 13:00
                </span>
                <span
                  className={`time-span ${
                    selectedSpan === "13:00 - 14:00" ? "selected" : ""
                  }`}
                  onClick={handleSpanClick1}
                >
                  13:00 - 14:00
                </span>
                <span
                  className={`time-span ${
                    selectedSpan === "14:00 - 15:00" ? "selected" : ""
                  }`}
                  onClick={handleSpanClick1}
                >
                  14:00 - 15:00
                </span>
              </div>
            </Form.Item>
          </div>
          <div className="box__booking__tsx">
            <div className="box__booking__tsx__0">
              <div className="box__booking__tsx__1">
                <p>Thông tin khách hàng</p>
                <p className="place__br"></p>
                <div className="profile__user__booking">
                  <div className="profile__user__booking__inp">
                    <p>Khách hàng:</p>
                    <span>Trần Thị Nga</span>
                  </div>
                  <div className="profile__user__booking__inp">
                    <p>Số điện thoại:</p>
                    <span>0366764838</span>
                  </div>
                  <div className="profile__user__booking__inp">
                    <p>Địa chỉ:</p>
                    <span>92a, Phường Tân Thới Nhất 6, TP HCM</span>
                  </div>
                  <div className="profile__user__booking__inp">
                    <p>Email:</p>
                    <span>abcxyz@gmail.com</span>
                  </div>
                </div>
                <p>Thông tin phòng khám</p>
                <p className="place__br"></p>
                <div className="profile__user__booking">
                  <div className="profile__user__booking__inp">
                    <p>Phòng:</p>
                    <span>Phòng khám đa khoa ToothHive</span>
                  </div>
                  <div className="profile__user__booking__inp">
                    <p>Địa chỉ:</p>
                    <span>
                      172 Trường chinh, Tân Thới Hiệp, Quận 12, Tp.HCM
                    </span>
                  </div>
                  <div className="profile__user__booking__inp">
                    <p>Ngày & Thời gian::</p>
                    <span>28-11-2023 - 9:00-10:00</span>
                  </div>
                </div>
                <button onClick={handleSubmit}>Đăt lịch hẹn</button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Booking;
