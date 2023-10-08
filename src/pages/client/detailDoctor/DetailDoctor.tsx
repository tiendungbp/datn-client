import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const DetailDoctor = () => {

  return (
    <div className='container_detailDoctor m-auto'>
      <h1 className='font-medium'>Trang chủ <span className='text-blue-500'>/ Chi tiết bác sĩ</span></h1>
      <div className='flex'>
        <div className='content_left mt-10 relative w-1/3'>
          <img className='img_doctor ml-12 absolute z-10' src="/img/image 15.png" alt="" />
          <div className='background_shadow mt-11'></div>
        </div>
        <div className='content_right w-2/3 mt-12'>
          <h1 className=' font-bold text-2xl text-blue-500'>Bác sĩ NGUYỄN DIÊN THẢO</h1>
          <p className='mt-3 text-xl font-normal'>“ Mỗi khách hàng đối với tôi như người anh, chị, em trong gia đình. Luôn mang đến cho họ những dịch vụ với kết quả tốt nhất là điều tôi hằng tâm niệm”</p>
          <div className='text-xl mt-5'>
            <li>Bác sĩ Răng Hàm Mặt – Đại Học Y Dược TP Hồ Chí Minh 1996</li>
            <li>Chứng chỉ: Đào Tạo Implant Nha Khoa – Bệnh Viện Răng Hàm Mặt Trung Ương TP Hồ Chí Minh 2011</li>
            <li>Chứng chỉ: Chỉnh Nha Nâng Cao – Ortho Organizers, Inc – USA 2012</li>
            <li>Chứng chỉ: Cập Nhật Thực Hành Implant Nha Khoa – Bệnh Viện Răng Hàm Mặt Trung Ương TP Hồ Chí Minh 2015</li>
            <li>Chứng chỉ: Chỉnh Hình Răng Mặt – Bệnh Viện Răng Hàm Mặt Trung Ương TP Hồ Chí Minh 2018</li>
          </div>
        </div>
      </div>
      <div className='bottom_detailDoctor mt-24 mb-20 flex flex-wrap gap-24'>
        <div>
          <span className='flex  gap-2 items-center font-semibold text-lg'>
            <img src="./img/Group 232.png" alt="" />Danh mục điều trị của bác sĩ</span>
        </div>
        <div className='text-lg font-normal'>
          <span className='flex gap-2 items-center font-semibold text-lg'>
            <img src="./img/Group 236.png" alt="" />Địa chỉ và thời gian làm việc</span>
          <p className='mt-7'>Địa chỉ làm việc: Cơ sở 2 - 172 Trường chinh, <br /> Tân Thới HIệp, Quận 12, Tp.HCM</p>
          <p>Thời gian: Từ 8:00 - 18:00 vào các ngày trong tuần</p>
          <div className='mt-3 leading-10'>
            <li className='text-blue-400'><Link to="/">Nha khoa tổng quát</Link></li>
            <li className='text-blue-400'><Link to="/">Niềng răng</Link> </li>
            <li className='text-blue-400'><Link to="/">Trồng răng implant</Link></li>
            <li className='text-blue-400'><Link to="/">Nhổ răng</Link></li>
          </div>

        </div>
        <div>
          <span className='flex gap-2 items-center font-semibold text-lg'>
            <div className='bg-green-300 flex justify-center w-8 h-8 rounded-lg'><img src="./img/mingcute_time-line.png" alt="" /></div>Thời gian còn trống ca</span>
          <div className='mt-8 flex gap-4'>
            <Button className='w-2/3 h-14' danger><p className='font-semibold text-lg'>10:00 - 11:00</p></Button>
            <Button className='w-2/3 h-14' danger><p className='font-semibold text-lg'>11:00 - 12:00</p></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailDoctor