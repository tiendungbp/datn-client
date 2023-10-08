import { Select, Button, Form, Input, DatePicker } from "antd";
import React from "react";
import dayjs from "dayjs";
const Booking = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
        <p>Đặt lịch</p>
      </div>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="box__first__booking">
          <div className="box__booking__tsx">
            <Form.Item<FieldType>
              label="Chọn cơ sở"
              name="selectCoso"
              rules={[{ required: true, message: "Bạn chưa chọn cơ sở khám" }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Select
                showSearch
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
              label="Chọn ngày"
              name="SelectDate"
              rules={[
                { required: true, message: "Bạn chưa chọn hẹn ngày khám !" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <DatePicker
                style={{ width: "100%" }}
                defaultValue={dayjs("01/01/2015", dateFormatList[0])}
                format={dateFormatList}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Chọn bác sĩ"
              name="selectDoctor"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
               <Select
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
              label="Chọn giờ"
              name="selectTime"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
             
            </Form.Item>
            <button type="submit">Dong ý</button>
          </div>
          <div className="box__booking__tsx"></div>
        </div>
      </Form>
    </div>
  );
};

export default Booking;
