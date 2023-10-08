import { faArrowPointer, faArrowRight, faBellConcierge, faCalendar, faCircleNotch, faEnvelope, faLocationDot, faPeopleGroup, faPhone, faQuoteLeft, faTooth, faTrophy, faUserTag, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Banner from '../../../assets/img/banner.png'
import { Rate } from 'antd'


const slides = [
  { id: 1, name: "Tran Thi Nga", img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg", content: "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng." },
  { id: 2, name: "Tran Thi Nga", img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg", content: "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng." },
  { id: 3, name: "Tran Thi Nga", img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg", content: "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng." },
  { id: 4, name: "Tran Thi Nga", img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg", content: "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng." },
  { id: 5, name: "Tran Thi Nga", img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg", content: "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng." },
  { id: 6, name: "Tran Thi Nga", img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg", content: "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng." },
  { id: 7, name: "Tran Thi Nga", img: "https://i.pinimg.com/564x/a6/74/c2/a674c29ddf986e8ad938ac942574f6c5.jpg", content: "Nụ cười của tôi đã thay đổi hoàn toàn sau khi tôi đến với ToothHive. Tôi đã trải qua nhiều năm điều trị tại các phòng khám khác nhau, nhưng không nơi nào làm tôi cảm thấy thoải mái như ở đây. Đội ngũ tại ToothHive chăm sóc tận tình, và tôi rất hạnh phúc với kết quả cuối cùng." },

];

type dataWatchDetailDoctorProp = {
  name: string,
  image: string,
  position: string,
  description: string,
  experience: string,
  schedule: string
}

const dataWatchDetailDoctor: dataWatchDetailDoctorProp[] = [
  {
    name: 'Hà Mai Thảo',
    image: 'https://w7.pngwing.com/pngs/488/261/png-transparent-female-doctor-3d-illustration-physician-nursing-health-care-hospital-the-doctor-miscellaneous-image-file-formats-service-thumbnail.png',
    position: 'Bác sĩ nha khoa',
    description: 'Bác sĩ Hà Mai Thảo, chuyên về nha khoa. Cô ấy có trình độ cao với bằng cử nhân và thạc sĩ Nha khoa từ Đại học Y Khoa Quốc gia. Là là một chuyên gia đáng tin cậy trong lĩnh vực nha khoa, luôn sẵn sàng hỗ trợ và giúp đỡ bạn có một nụ cười khỏe đẹp và tự tin.',
    experience: 'Đạt 3 năm thành tựu trong lĩnh vực trồng răng',
    schedule: 'Đạt 3 năm thành tựu trong lĩnh vực trồng răng'
  },
  {
    name: 'Hà Mai Thảo 2',
    image: 'https://i.pinimg.com/564x/1b/52/fd/1b52fd81c2282b432b85dc6a8a01f13d.jpg',
    position: 'Bác sĩ nha khoa',
    description: 'Bác sĩ Hà Mai Thảo, chuyên về nha khoa. Cô ấy có trình độ cao với bằng cử nhân và thạc sĩ Nha khoa từ Đại học Y Khoa Quốc gia. Là là một chuyên gia đáng tin cậy trong lĩnh vực nha khoa, luôn sẵn sàng hỗ trợ và giúp đỡ bạn có một nụ cười khỏe đẹp và tự tin.',
    experience: 'Đạt 34 năm thành tựu trong lĩnh vực trồng răng',
    schedule: 'Đạt 34 năm thành tựu trong lĩnh vực trồng răng'
  },
  {
    name: 'Hà Mai Thảo 3',
    image: 'https://i.pinimg.com/564x/1b/52/fd/1b52fd81c2282b432b85dc6a8a01f13d.jpg',
    position: 'Bác sĩ nha khoa',
    description: 'Bác sĩ Hà Mai Thảo, chuyên về nha khoa. Cô ấy có trình độ cao với bằng cử nhân và thạc sĩ Nha khoa từ Đại học Y Khoa Quốc gia. Là là một chuyên gia đáng tin cậy trong lĩnh vực nha khoa, luôn sẵn sàng hỗ trợ và giúp đỡ bạn có một nụ cười khỏe đẹp và tự tin.',
    experience: 'Đạt 36 năm thành tựu trong lĩnh vực trồng răng',
    schedule: 'Đạt 36 năm thành tựu trong lĩnh vực trồng răng'
  },
  {
    name: 'Hà Mai Thảo 4',
    image: 'https://i.pinimg.com/564x/1b/52/fd/1b52fd81c2282b432b85dc6a8a01f13d.jpg',
    position: 'Bác sĩ nha khoa',
    description: 'Bác sĩ Hà Mai Thảo, chuyên về nha khoa. Cô ấy có trình độ cao với bằng cử nhân và thạc sĩ Nha khoa từ Đại học Y Khoa Quốc gia. Là là một chuyên gia đáng tin cậy trong lĩnh vực nha khoa, luôn sẵn sàng hỗ trợ và giúp đỡ bạn có một nụ cười khỏe đẹp và tự tin.',
    experience: 'Đạt7 37 năm thành tựu trong lĩnh vực trồng răng',
    schedule: 'Đạt 38 năm thành tựu trong lĩnh vực trồng răng'
  },
]


const Home = () => {

  const [isChooseDoctor, setIsChooseDoctor] = useState(0)
  const [isShowChooseListDoctor, setIsShoChooseListDoctor] = useState(false)




  return (
    <>
      <div className='  mt-12 lg:mt-[4rem] '>
        {/* start banner  */}
        <div className='m-auto w-wd-primary md:w-wd-secondary'>
          <div className='w-[590px] h-[400px] bg-[#1386ED] rounded-[100%] absolute z-1 translate-x-[-50%] translate-y-[-50%] blur-[280px]'></div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="md:order-2 md:p-4 float-right">
              <div>
                <p className="text-right font-normal text-[#143566] text-[0.8rem] pb-4 md:text-[1rem] lg:text-[1.2rem]">
                  Khám phá hành trình chăm sóc răng miệng. Cùng ToothHive chắp cánh ước mơ về nụ cười tươi sáng và sức khỏe vững bền!
                </p>
              </div>
              <div className="md:w-full">
                <div className=" right-0 w-full  relative ">
                  <img src={Banner} alt="" className=" w-full h-full rounded-lg object-cover shadow-xl z-10" />
                  <div className="absolute rounded-bl-[8px] translate-y-1/2 md:translate-x-[2.5%] translate-x-[3%] rounded-br-[8px] pb-4 bottom-0 right-0 p-4 text-white bg-[#1386ED]">
                    <div className="flex justify-between gap-2 pb-3">
                      <div className="flex gap-2 justify-center items-center">
                        <FontAwesomeIcon icon={faPhone} />
                        <p className="text-[0.9rem] md:text-[1.2rem]">0975 383 291</p>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className="text-[0.9rem] md:text-[1.2rem]">toothhive@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p className=" text-[0.9rem] md:text-[1.2rem]">Trụ sở chính: 237 Nguyễn Tất Thành, Quận 5, Tp.HCM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:order-1 md:w-[70%]">

              <h1 className='pb-4 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold mt-[5rem] md:mt-[2rem]'>Đánh bay sâu, giữ vững <span className='text-[#157FEC]'>nụ cười</span></h1>
              <div className=' flex flex-col gap-4'>
                <h2 className='text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] font-medium text-[#1386ED]'>Đến với ToothHive</h2>
                <div className='flex gap-4  items-center'>
                  <FontAwesomeIcon icon={faUserTag} className='bg-[#BCDDFF] p-3 text-[1.2rem] md:text-[1.5rem]  rounded-[8px] text-[#1386ED]' />
                  <p className='font-normal text-[1.1rem] md:text-[1.4rem] lg:text-[1.4rem]'>Sự chăm sóc nhiệt tình</p>
                </div>
                <div className=' flex gap-4  items-center'>
                  <FontAwesomeIcon icon={faPeopleGroup} className='bg-[#BCDDFF] p-3 text-[1.2rem] md:text-[1.5rem]  rounded-[8px] text-[#1386ED]' />
                  <p className='font-normal text-[1.1rem] md:text-[1.4rem] lg:text-[1.4rem]'>Đội ngũ nhân viên chuyên nghiệp</p>
                </div>


                <div className='flex gap-4  items-center'>
                  <FontAwesomeIcon icon={faCircleNotch} className=' bg-[#BCDDFF] p-3 text-[1.2rem] md:text-[1.5rem] rounded-[8px] text-[#1386ED]' />
                  <p className='font-normal text-[1.1rem] md:text-[1.4rem] lg:text-[1.4rem]'>Công nghệ tiên tiến</p>
                </div>
                <div className='flex gap-4  items-center'>
                  <FontAwesomeIcon icon={faBellConcierge} className='bg-[#BCDDFF] p-3 text-[1.2rem] md:text-[1.5rem]  rounded-[8px] text-[#1386ED]' />
                  <p className='font-normal text-[1.1rem] md:text-[1.4rem] lg:text-[1.4rem]'>Dịch vụ đa dạng</p>
                </div>

              </div>
            </div>

          </div>
        </div>
        {/* end banner */}
        {/*start category service*/}
        <div className='m-auto w-wd-primary md:w-wd-secondary'>
          <div className=' mt-4 py-8  text-center '>
            {/* //blur */}
            {/* <div className='w-[390px] h-[400px] bg-[#1386ED] rounded-[100%] absolute z-1 translate-x-[90%] translate-y-[30%] blur-[300px]'></div> */}

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
              <Link to="/detailServices" className='flex items-center gap-2 text-[#1386ED]'> <span>Xem thêm </span><FontAwesomeIcon icon={faArrowRight} /></Link>
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

        {/*start top 5 service  */}
        <div className=' m-auto w-wd-primary md:w-wd-secondary'>
          <div className='text-center my-4 py-8'>
            <h1 className='text-[#1386ED] font-bold  text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]'>Top 5 Dịch Vụ Nổi Bật</h1>
            <p className='text-[0.9rem] text-gray-500'>Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất</p>

          </div>
          <div className="md:w-[80%] m-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            <div className=" flex flex-col gap-2">
              <div className='w-[8rem] h-[8rem] bg-pink-50 rounded-full m-auto'>
                <img className='w-full h-full rounded-full object-cover ' src="https://rangthudo.com.vn/images/image/nhung-truong-hop-nen-boc-rang-su.jpg" alt="" />
              </div>
              <p className='line-clamp-2 max-w-[10rem] m-auto overflow-ellipsis leading-[1.8rem]'>Niềng răng trong suốt</p>
            </div>
            <div className=" flex flex-col gap-2">
              <div className='w-[8rem] h-[8rem] bg-pink-50 rounded-full m-auto'>
                <img className='w-full h-full rounded-full object-cover ' src="https://rangthudo.com.vn/images/image/nhung-truong-hop-nen-boc-rang-su.jpg" alt="" />
              </div>
              <p className='line-clamp-2 max-w-[10rem] m-auto overflow-ellipsis leading-[1.8rem]'>Niềng răng trong suốt</p>
            </div>
            <div className=" flex flex-col gap-2">
              <div className='w-[8rem] h-[8rem] bg-pink-50 rounded-full m-auto'>
                <img className='w-full h-full rounded-full object-cover ' src="https://rangthudo.com.vn/images/image/nhung-truong-hop-nen-boc-rang-su.jpg" alt="" />
              </div>
              <p className='line-clamp-2 max-w-[10rem] m-auto overflow-ellipsis leading-[1.8rem]'>Niềng răng trong suốt</p>
            </div>
            <div className=" flex flex-col gap-2">
              <div className='w-[8rem] h-[8rem] bg-pink-50 rounded-full m-auto'>
                <img className='w-full h-full rounded-full object-cover ' src="https://rangthudo.com.vn/images/image/nhung-truong-hop-nen-boc-rang-su.jpg" alt="" />
              </div>
              <p className='line-clamp-2 max-w-[10rem] m-auto overflow-ellipsis leading-[1.8rem]'>Niềng răng trong suốt</p>
            </div>
            <div className=" flex flex-col gap-2">
              <div className='w-[8rem] h-[8rem] bg-pink-50 rounded-full m-auto'>
                <img className='w-full h-full rounded-full object-cover ' src="https://rangthudo.com.vn/images/image/nhung-truong-hop-nen-boc-rang-su.jpg" alt="" />
              </div>
              <p className='line-clamp-2 max-w-[10rem] m-auto overflow-ellipsis leading-[1.8rem]'>Niềng răng trong suốt</p>
            </div>


          </div>
        </div>
        {/* end top 5 service  */}

        {/* start about doctor */}

        <div className=' m-auto w-wd-primary md:w-wd-secondary my-[12rem]'>

          <div className=' w-full my-12 grid md:grid-cols-2 gap-4'>
            <div className='flex justify-center items-center relative'>
              {
                dataWatchDetailDoctor.map((item, i) =>
                  isChooseDoctor === i && (
                    <div key={i} className='p-4 h-[18rem] relative flex justify-center shadow-2xl bg-[#DCEDFF] w-full max-w-[32rem] rounded-xl' >
                      <div className='  absolute bottom-0 h-[120%] cursor-pointer '>
                        <motion.img src={item.image} alt={item.name} className='h-full object-cover'
                          onClick={() => setIsShoChooseListDoctor(!isShowChooseListDoctor)}
                          whileTap={{ scale: .9 }}
                        />
                      </div>
                    </div>
                  )
                )
              }
              {
                isShowChooseListDoctor ? (
                  <motion.div className='absolute bg-white box-shadow cursor-pointer rounded-xl py-4 px-8 w-[20rem] top-1/2 translate-y-[-50%] left-6 md:left-1/2 md:-translate-x-1/2'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsShoChooseListDoctor(false)}
                  >
                    <div className='bg-white box-shadow py-2 px-3 -translate-x-1/2 -translate-y-1/2 rounded-lg top-0 left-0 absolute'>
                      <FontAwesomeIcon icon={faXmark} className='text-3xl text-blue-500' />
                    </div>
                    {
                      dataWatchDetailDoctor.map((item, index) => isChooseDoctor === index && (
                        <div className=''>
                          <h1 className='font-bold text-[#143566] text-[1.2rem]'>{item.name}</h1>
                          <span className='text-[0.9rem] text-gray-500'>{item.position}</span>
                        </div>
                      ))
                    }
                    <div className='mt-4'>
                      {
                        dataWatchDetailDoctor.map((item, index) =>
                          isChooseDoctor !== index && (
                            (
                              <div className=' mb-4 p-2 rounded-lg flex flex-col gap-2 relative hover:bg-[#DCEDFF] w-full duration-150'>

                                <div className=''>
                                  <div className='flex gap-4' onClick={() => {
                                    setIsChooseDoctor(index)
                                    setIsShoChooseListDoctor(false)
                                  }}>
                                    <div className='w-[4rem] h-[4rem] rounded-full overflow-hidden items-center border border-blue-500'>
                                      <img src={item.image} alt={item.name} className='w-full h-full object-cover ' />
                                    </div>
                                    <div>
                                      <h1>{item.name}</h1>
                                      <span>{item.position}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )
                        )
                      }
                    </div>

                  </motion.div>
                ) : (
                  <motion.div className='absolute cursor-pointer w-[3rem] h-[3rem] rounded-full  border-2 border-white flex justify-center items-center top-1/2 translate-y-[-50%] left-6 md:left-1/2 md:-translate-x-1/2'


                    animate={{
                      scale: [1, 1.2, 1], // Mảng giá trị để tạo hiệu ứng scale
                    }}
                    transition={{
                      repeat: Infinity, // Lặp vô hạn
                      duration: 1, // Thời gian mỗi chu kỳ
                    }}>
                    <FontAwesomeIcon icon={faArrowPointer} className='text-2xl text-white' />
                  </motion.div>
                )
              }
            </div>
            <div className='p-4 md:p-8 flex flex-col gap-4 '>
              <div>
                <span className='text-[#1386ED] text-[0.8rem] md:text-[0.9rem]'>Thông tin</span>
                <h1 className='font-bold text-[1.2rem] md:text-[1.4rem] xl:text-[1.5rem]'>Đội ngũ nhân viên tại <span className='text-[#1386ED] '>ToothHive</span></h1>
              </div>

              {
                dataWatchDetailDoctor.map((item, index) =>
                  isChooseDoctor === index && (
                    <>
                      <p className='text-[#143566] leading-9 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]'>
                        {item.description}
                      </p>
                      <div className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCalendar} className='text-[#1386ED]' />
                        <p className='font-medium '>Hoạt động:  {item.schedule}</p>

                      </div>
                      <div className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faTrophy} className='text-[#1386ED]' />
                        <p className='font-medium'>{item.experience}</p>

                      </div>
                      <div>
                        <button className='bg-[#1386ED] px-8 py-3 rounded-[30px] text-white'><NavLink to={"/detailDoctor"}>Xem chi tiết</NavLink></button>


                      </div>
                    </>
                  )
                )
              }




            </div>
          </div>
        </div>
        {/* end about doctor */}
        {/*start gg map */}
        <div className='bg-[#DCEDFF] m-auto w-full my-4 py-12'>
          <div className=' m-auto w-[90%]'>
            <div className='text-center pb-8 '>
              <h1 className='text-[#1386ED] font-bold  text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]'>Vị Trí Của Chúng Tôi Trên Google Maps </h1>
              <p className='text-[0.9rem] md:text-[1rem] text-gray-500'>  Hãy cùng khám phá và tới thăm chúng tôi tại đây để trải nghiệm dịch vụ nha khoa chất lượng và tận hưởng nụ cười khỏe đẹp!</p>

            </div>
            <div className=' md:h-[80vh] h-[30vh] md:bg-gray-400 relative rounded-lg flex items-center justify-center'>
              <div className=' bg-white box-shadow absolute md:bottom-[-3rem]  md:left-1/2  transform md:translate-x-[-50%]  p-4 md:p-8 md:px-12 rounded-lg mt-4 mb-8'>
                <h1 className=' text-center text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem] font-bold text-[#1386ED] md:py-4 py-2'>Phòng khám nha khoa ToothHive</h1>
                <p className='text-[0.9rem] md:text-[1.1rem] text-center md:text-start md:leading-8'>Trụ sở chính: 237 Nguyễn Tất Thành, Quận 5, Tp.HCM <br />
                  Cơ sở 2: 172 Trường chinh, Tân Thới HIệp, Quận 12, Tp.HCM <br />
                  Cơ sở 3: 287 Trần Xuân Soạn, Tân Kiểng, Quận 7, Tp.HCM</p>
              </div>
            </div>
          </div>

        </div>
        {/* end gg map*/}

        {/*start customer comments */}
        <div className='w-[90%] md:w-[60%] m-auto mt-[4rem] mb-[2rem] md:mb-[3rem]'>
          <div className='text-center pb-8 '>
          {/* <div className='w-[300px] h-[300px] bg-[#1386ED] rounded-[100%] absolute z-1 translate-x-[150%] translate-y-[20%] blur-[250px]'></div> */}

            <h1 className='text-[#1386ED] font-bold  text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]'>Cảm Nhận Của Khách Hàng </h1>
            <p className='text-[0.9rem] md:text-[1rem] text-gray-500'>  Những đánh giá của khách hàng sau khi sử dụng dịch vụ tuyệt vời của ToothHive</p>

          </div>
          <div className=' space-x-4 rounded-box carousel carousel-center w-full'>
            {
              slides.map((item, index) => (
                <div key={index} className='p-4 w-[98%] md:w-[46%] carousel-item cursor-pointer '>

                  <div className='bg-white box-shadow p-4 rounded-lg flex flex-col gap-2'>
                    <div className='flex justify-between items-center'>
                      <FontAwesomeIcon icon={faQuoteLeft} className='text-[2.3rem] md:text-[2.5rem] text-gray-500' />
                      <div><Rate disabled defaultValue={4} /></div>

                    </div>
                    <div className='line-clamp-3 overflow-ellipsis leading-[1.8rem]'>
                      {item.content}
                    </div>
                    <div className='flex gap-4 items-center '>
                      <div className='w-[3rem] h-[3rem] rounded-full bg-gray-100'>
                        <img className='w-full h-full object-cover rounded-full' src={item.img} alt={item.name} />
                      </div>
                      <div>
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            }
          </div>

        </div>
        {/* end customer comments */}
      </div>


    </>

  )
}

export default Home