import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import "./ContactForm.scss";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} bắt buộc!",
  types: {
    email: "${label} không phải là một email hợp lệ!",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

const ContactForm: React.FC = () => (
  <Form
    name="nest-messages"
    onFinish={onFinish}
    layout="vertical"
    style={{}}
    className="shadow-lg rounded-lg p-8 md:px-[30px] lg:px-[40px] xl:px-[60px] form-contact-ui"
    validateMessages={validateMessages}
  >
    <div className="py-4">
      <h1 className=" font-bold text-[1.2rem] md:text-[1.6rem] text-[#1386ed] text-center ">
        Chúng tôi có thể giúp bạn?
      </h1>
    </div>
    <Form.Item
      name={["user", "name"]}
      label="Họ tên"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[{ type: "email" }, { required: true }]}
    >
      <Input className="w-full" />
    </Form.Item>

    <Form.Item name={["user", "introduction"]} label="Nhập lời nhắn">
      <Input.TextArea />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        type="primary"
        style={{ backgroundColor: "#1386ed" }}
        className="booking btnForm"
      >
        Gửi lời nhắn
      </Button>
    </Form.Item>
  </Form>
);

export default ContactForm;
