import React from 'react'
import { Button, Input, Form } from 'antd'
import { NavLink } from 'react-router-dom'

const ForgotPass = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };
  return (
    <div className='background_login flex items-center justify-center'>
      <div className='container flex bg-white w-3/4 h-5/5 rounded-lg' >
        <div className='form_left w-2/5 pl-20 rounded-lg pt-10 pb-10'>
          <h1 className='font-bold text-2xl mb-4'>Chào mừng bạn đến <br /> với Tooth<span className='font_blue'>Hive</span></h1>
          <p>Nơi mang đến cho bạn trải nghiệm dịch vụ <br /> tuyệt hảo cho nụ cười hoàn hảo.</p>
          <img width={300} src="./img/Capture-removebg-preview (1) 1.png" alt="" />
        </div>
        <div className='form_rightForgot w-3/5 pt-10 flex justify-center'>
          <div className='text-left'>
            <h1 className='font-bold text-2xl mb-1'>Quên mật khẩu</h1>
            <p className='mb-5'>Hãy nhập mật khẩu mới và email của bạn</p>
            <Form
              name="basic"
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email ' }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder='Nhập Email...' size="large" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu mới"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input.Password placeholder='Nhập mật khẩu...' size="large" />
              </Form.Item>

              <Form.Item >
                <Button className='w-full bg-slate-600 rounded-3xl py-3 pb-10 mt-4 text-lg font-semibold text-white' type="primary" htmlType="submit">
                  Quên mật khẩu
                </Button>
              </Form.Item>
            </Form>
            <h3>Quay về trang <NavLink className="text-blue-500 font-semibold" to="">Login</NavLink></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPass