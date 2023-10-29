import {
  Select,
  Button,
  Form,
  Input,
  DatePicker,
  Breadcrumb,
  theme,
  Steps,
} from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";
import {
  CarryOutOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { message } from "../../../module/ToastMessage";
type FieldType = {
  selectCoso?: string;
  selectDoctor?: string;
  SelectDate?: string;
  selectTime?: string;
};

const Booking = () => {
  const [selectedSpan, setSelectedSpan] = useState<string | null>(null);
  const [groundwork, setGroundwork] = useState<boolean>(false);
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
  const handleSubmit = () => {
    const error = handleErorr();
    if (error) {
      alert(error);
    } else {
    }
  };

  // format date
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  //Stept
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  console.log(groundwork);
  
  const next = () => {
    if(groundwork){
      setCurrent(current + 1);
    }else{
      alert("Chọn cơ sở khám để để qua bước 2")
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "Chọn cơ sở",
      content: (
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
            onChange={()=>{setGroundwork(true)}}
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
      ),
    },
    {
      title: "Ngày khám",
      content: (
        <Form.Item<FieldType>
          label=<div className="flex flex-row items-center text-lg">
            {" "}
            <CarryOutOutlined className="mr-2" />
            <p>Chọn ngày khám</p>
          </div>
          name="SelectDate"
          className="select__Date"
          rules={[{ required: true, message: "Bạn chưa chọn hẹn ngày khám !" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <DatePicker
            style={{ width: "100%", height: "46px" }}
            defaultValue={dayjs("01/01/2015", dateFormatList[0])}
            format={dateFormatList}
          />
        </Form.Item>
      ),
    },
    {
      title: "Bác sĩ",
      content: (
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
      ),
    },
    {
      title: "Giờ khám",
      content: (
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
      ),
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    height: "200px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div className="booking__tsx lg:mt-[1rem] lg:mb-[2rem]">
      <div className="title__booking">
        <Breadcrumb
          className={`text-base`}
          items={[
            {
              title: <NavLink to={"/"}>Trang chủ</NavLink>,
            },
            {
              title: <span className="textColor">Đặt lịch</span>,
            },
          ]}
        />
      </div>
      <Form
        name="basic"
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <div className="box__first__booking">
          <div className="box__booking__tsx">
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
              {current < steps.length - 1 && (
                <button onClick={() => next()}>Next</button>
              )}
              {current > 0 && (
                <button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </button>
              )}
            </div>
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
