import React from 'react'
import "./style.scss"
import { RollbackOutlined } from '@ant-design/icons'
import { Button, Checkbox, Input, Form } from 'antd'
import { NavLink } from 'react-router-dom'

const Login = () => {
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
          <div className='back_Hoem flex items-center gap-2 text-blue-500'><RollbackOutlined /><span>Quay về trang chủ</span></div>
        </div>
        <div className='form_right w-3/5 pt-10 flex justify-center'>
          <div className='text-left'>
            <h1 className='font-bold text-2xl mb-1'>Đăng nhập với Tooth<span className='font_blue'>Hive</span></h1>
            <p className='mb-5'>Đăng nhập vào tài khoản của bạn</p>
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
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input.Password placeholder='Nhập mật khẩu...' size="large" />
              </Form.Item>

              <Form.Item >
                <div className='flex items-center justify-between'>
                  <div>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      noStyle
                    >
                      <Checkbox className='font-semibold'>Ghi nhớ tài khoản</Checkbox>
                    </Form.Item>
                  </div>
                  <div>

                    <NavLink to="">Quên mật khẩu?</NavLink>
                  </div>
                </div>
              </Form.Item>

              <Form.Item >
                <Button className='w-full bg-blue-600 rounded-3xl py-3 pb-10 text-lg font-semibold text-white' type="primary" htmlType="submit">
                  Đăng Nhập
                </Button>
              </Form.Item>
            </Form>
            <div className='flex gap-3 mt-5'>
              <h3>Đăng nhập với</h3>
              <img className='border-2 border-gray-500 rounded-full p-1' width={30} src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" alt="" />
              <img className='border-2 border-gray-500 rounded-full p-1' width={30} src="https://vi.wizcase.com/wp-content/uploads/2022/05/Facebook-Logo.png" alt="" />
            </div>
            <h2 className='mt-10'>Bạn chưa có tài khoản? Đăng ký <NavLink className="font-semibold text-blue-500" to="">tại đây</NavLink></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login