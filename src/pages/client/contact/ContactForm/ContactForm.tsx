import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import "./ContactForm.scss";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

const ContactForm: React.FC = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
      backgroundColor: "white",
    }}
    className="shadow-lg rounded-md py-10 px-10 sm:px-0"
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["user", "name"]}
      label="Name"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[{ type: "email" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "age"]}
      label="Age"
      rules={[{ type: "number", min: 0, max: 99 }]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={["user", "website"]} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={["user", "introduction"]} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item>
      <Button
        className="btnForm"
        type="primary"
        style={{ backgroundColor: "#1386ed" }}
      >
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default ContactForm;
