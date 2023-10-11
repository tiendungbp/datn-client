

import { Button, Form, Input } from 'antd'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';



const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};



const ForgotPass = () => {
  return (
    <div>
      <div className='w-full  flex flex-col md:flex-row items-start'>
        <div className='relative  w-[40%] h-screen flex flex-col bg-pink-200 hidden md:block'>
          <img src="https://i.pinimg.com/564x/f2/b4/fa/f2b4fa6132ec15d5d7457045fe9678ef.jpg" alt="" className='w-full h-full object-cover brightness-50' />

          <div className='absolute top-[25%] left-[10%] flex flex-col'>
            <h1 className=' text-white text-2xl lg:text-3xl  font-bold'>Chào mừng bạn đến với Tooth<span className='text-[#1386ED]'>Hive</span></h1>
            <span className='text-white py-4 lg:text-[1rem]'>Nơi mang đến cho bạn trải nghiệm dịch vụ tuyệt hảo cho nụ cười hoàn hảo.</span>
            <div className='flex items-center gap-2 mt-4'>
              <div className='bg-blue-50 px-6  py-3 rounded-lg text-[#1386ED] border-blue-600 '>
              <FontAwesomeIcon  icon={faShare} className='pr-2'/>
              
              <NavLink to='/'>Quay về trang chủ</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className=' w-full md:w-[60%] h-full flex flex-col p-8 md:p-16 lg:p-20 xl:p-[6rem] bg-white'>
         <div className='py-8'>
         <h1 className=" text-2xl md:text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">
          Quên mật khẩu tới Tooth<span className='text-[#1386ED]'>Hive</span>
          </h1>
          <span className="font-light text-gray-500 mt-2">
          Hãy nhập Email của bạn và checkmail ngay sau đó!
          </span>
          
         </div>

          
          <div className='form_login'>
            <Form
              name="basic"
              layout="vertical"
            
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>


              <Form.Item 
              >
                <Button type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
              </Form.Item>
              <div className='text-center'>
                <span className='text-center'>Bạn đã nhớ mật khẩu? Đăng nhập
                  <NavLink to='/login' className='text-[#1386ED] font-bold'> tại đây!</NavLink>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPass