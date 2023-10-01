import { faArrowRight, faTooth } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Image_map from "../../../asset/image/map.png"
const Services = () => {
  return (
    <div className="m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[4rem] ">


      {/*start category service*/}
      <div>
        <div className=' mt-4 py-8  text-center '>
          {/* //blur */}
          {/* <div className='w-[300px] h-[300px] bg-[#1386ED] rounded-[100%] absolute z-1 translate-x-[200%] translate-y-[20%] blur-[200px]'></div> */}

          <h1 className='text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]'>Các Danh Mục Dịch Vụ Tại ToothHive</h1>
          <p className='text-[0.9rem] text-gray-500'>Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8  ">
          <div className="bg-white box-shadow rounded-lg p-8 flex flex-col gap-4">
            <div className='flex items-center gap-4 '>
              <FontAwesomeIcon icon={faTooth} className='bg-[#DCEDFF] text-[#8AA7C5] p-3 text-[1.5rem] rounded-lg ' />
              <h3 className='font-bold text-[1.2rem]'>Chăm sóc răng</h3>
            </div>
            <p className='line-clamp-3 overflow-ellipsis leading-[1.8rem]'>Dịch vụ Trồng Răng tại ToothHive là giải pháp hiện đại và an toàn để khôi phục hoàn toàn chức năng...Dịch vụ Trồng Răng tại ToothHive là giải pháp hiện đại và an toàn để khôi phục hoàn toàn chức năng...</p>
            <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="bg-white box-shadow rounded-lg p-8 flex flex-col gap-4">
            <div className='flex items-center gap-4 '>
              <FontAwesomeIcon icon={faTooth} className='bg-[#FDEBFF] text-[#9B66DB] p-3 text-[1.5rem] rounded-lg ' />
              <h3 className='font-bold text-[1.2rem]'>Bọc răng sứ</h3>
            </div>
            <p className='line-clamp-3 overflow-ellipsis leading-[1.8rem]'>Khi bạn trải qua quá trình mất răng, chất lượng cuộc sống và tự tin của bạn có thể bị ảnh hưởng nghiêm...Khi bạn trải qua quá trình mất răng, chất lượng cuộc sống và tự tin của bạn có thể bị ảnh hưởng nghiêm...</p>
            <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="bg-white box-shadow rounded-lg p-8 flex flex-col gap-4">
            <div className='flex items-center gap-4 '>
              <FontAwesomeIcon icon={faTooth} className='bg-[#FDF5EC] text-[#ECA09D] p-3 text-[1.5rem] rounded-lg ' />
              <h3 className='font-bold text-[1.2rem]'>Niềng răng</h3>
            </div>
            <p className='line-clamp-3 overflow-ellipsis leading-[1.8rem]'>Niềng răng không chỉ là việc thẳng hàng răng mà còn là hành trình thú vị để hoàn thiện nụ cười ...Dịch vụ Trồng Răng tại ToothHive là giải pháp hiện đại và an toàn để khôi phục hoàn toàn chức năng...</p>
            <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="bg-white box-shadow rounded-lg p-8 flex flex-col gap-4">
            <div className='flex items-center gap-4 '>
              <FontAwesomeIcon icon={faTooth} className='bg-[#DCEDFF] text-[#8AA7C5] p-3 text-[1.5rem] rounded-lg ' />
              <h3 className='font-bold text-[1.2rem]'>Chăm sóc răng</h3>
            </div>
            <p className='line-clamp-3 overflow-ellipsis leading-[1.8rem]'>Dịch vụ Trồng Răng tại ToothHive là giải pháp hiện đại và an toàn để khôi phục hoàn toàn chức năng...Dịch vụ Trồng Răng tại ToothHive là giải pháp hiện đại và an toàn để khôi phục hoàn toàn chức năng...</p>
            <Link to="/services" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>



        </div>
      </div>
      {/* end category service */}

      {/*start doctor*/}
      <div>
        <div className="mt-4 py-8  text-center">

          <h1 className='text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]'>Đội ngũ Bác Sĩ Tại ToothHive</h1>
          <p className='text-[0.9rem] text-gray-500'>Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất</p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8  ">
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] ">
                <img src="https://ttgdtxphuquoc.edu.vn/hinh-anh-bac-si-nu-dep/imager_7_6391_700.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Bs. Hoàng Văn Minh</h1>
                <span>Với 7 năm kinh nghiệm về mảng nha khoa</span>
                <span>Trình độ: Thạc sĩ</span>
                <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>

              </div>
            </div>



          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] ">
                <img src="https://ttgdtxphuquoc.edu.vn/hinh-anh-bac-si-nu-dep/imager_7_6391_700.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Bs. Hoàng Văn Minh</h1>
                <span>Với 7 năm kinh nghiệm về mảng nha khoa</span>
                <span>Trình độ: Thạc sĩ</span>
                <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>

              </div>
            </div>



          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] ">
                <img src="https://ttgdtxphuquoc.edu.vn/hinh-anh-bac-si-nu-dep/imager_7_6391_700.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Bs. Hoàng Văn Minh</h1>
                <span>Với 7 năm kinh nghiệm về mảng nha khoa</span>
                <span>Trình độ: Thạc sĩ</span>
                <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>

              </div>
            </div>



          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] ">
                <img src="https://ttgdtxphuquoc.edu.vn/hinh-anh-bac-si-nu-dep/imager_7_6391_700.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Bs. Hoàng Văn Minh</h1>
                <span>Với 7 năm kinh nghiệm về mảng nha khoa</span>
                <span>Trình độ: Thạc sĩ</span>
                <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>

              </div>
            </div>



          </div>




        </div>
        {/* <div className=" w-full flex justify-center items-center mt-[3rem]">
          <button className='bg-[#1386ED] px-8 py-3 rounded-[30px] text-white'>Xem thêm</button>


        </div> */}
      </div>
      {/* end doctor */}



      {/*start map*/}
      <div>
        <div className="mt-4 py-8  text-center">

          <h1 className='text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]'>Hệ Thống Nha Khoa ToothHive</h1>
          <p className='text-[0.9rem] text-gray-500'>Tại ToothHive sẽ có các chi nhánh về các địa điểm khác nhau</p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8  ">
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] h-[12rem] ">
                <img src={Image_map} alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Cơ sở 1</h1>
                <span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
                <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Tới Link map </span><FontAwesomeIcon icon={faArrowRight} /></Link>

              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] h-[12rem] ">
                <img src={Image_map} alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Cơ sở 1</h1>
                <span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
                <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Tới Link map </span><FontAwesomeIcon icon={faArrowRight} /></Link>

              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] h-[12rem] ">
                <img src={Image_map} alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Cơ sở 1</h1>
                <span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
                <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Tới Link map </span><FontAwesomeIcon icon={faArrowRight} /></Link>

              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] h-[12rem] ">
                <img src={Image_map} alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Cơ sở 1</h1>
                <span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
                <Link to="/" className='flex items-center gap-2 text-[#1386ED]'> <span>Tới Link map </span><FontAwesomeIcon icon={faArrowRight} /></Link>

              </div>
            </div>
          </div>







        </div>
      </div>
      {/* end map */}
    </div>
  )
}

export default Services