import React from 'react'
import "./style.scss"
import error from "../../../assets/img/404.jpg"
import { NavLink } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='bg-[#DCEDFF] py-8'>

      <div className='m-auto w-wd-primary md:w-wd-secondary lg:mt-[4rem] '>
        <div className=' grid grid-cols-1 sm:grid-cols-2  w-full  gap-8'>
          <div className=' w-[25rem] h-[25rem] rounded-lg m-auto p-4'>
            <img src={error} alt="anh loi" className='w-full h-full rounded-lg object-cover' />
          </div>
          <div className='py-8'>
            <h1 className='font-bold text-[1.5rem] md:text-[1.7rem] lg:text-[2rem]'>Lấy làm tiếc! <br />
              Không tìm thấy trang này!
              Hãy truy cập toothhive.website để tiếp tục sử dụng dịch vụ</h1>
            <button className=' mt-8 px-8 py-3 bg-[#1386ED] rounded-[30px] justify-start '>
              <NavLink to='/' className=''>Đi đến trang chủ</NavLink>

            </button>

          </div>

        </div>


      </div>
    </div>

  )
}

export default Notfound