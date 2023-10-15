import { faArrowRight, faTooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Image_map from "../../../assets/img/map.png";
import { Breadcrumb } from "antd";
import CategoryServiceCarousel from "../home/CategoryServiceCarousel/CategoryServiceCarousel";
import { useEffect, useState } from "react";
import { getAllDoctorService } from "../../../services/userService/userService";
import ServicePageCarousel from "./ServicePageCarousel/ServicePageCarousel";
const Services = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [arrDoctor, setArrDoctor] = useState<any[]>([]);

  const mobileScreen = windowWidth < 500;

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllDoctor();
    };

    fetchData();
  }, []);

  const fetchAllDoctor = async () => {
    try {
      let { data } = await getAllDoctorService();
      if (data && data.errCode === 0) {
        setArrDoctor([...data.data]);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    // Hàm xử lý thay đổi độ rộng màn hình
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Đăng ký sự kiện theo dõi thay đổi kích thước cửa sổ
    window.addEventListener("resize", handleResize);

    // Làm sạch sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[1rem] ">
      <Breadcrumb
        className={`text-base mb-8`}
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: <p className="textColor ">Dịch vụ</p>,
          },
        ]}
      />
      {/*start category service*/}
      <div className=" mt-4 py-8  text-center ">
        {/* //blur */}
        {/* <div className='w-[300px] h-[300px] bg-[#1386ED] rounded-[100%] absolute z-1 translate-x-[200%] translate-y-[20%] blur-[200px]'></div> */}

        <h1 className="text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]">
          Các Danh Mục Dịch Vụ Tại ToothHive
        </h1>
        <p className="text-[0.9rem] text-gray-500">
          Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất
        </p>
      </div>
      <CategoryServiceCarousel
        mobileScreen={mobileScreen}
        windowWidth={windowWidth}
      />
      {/* end category service */}

      {/*start doctor*/}
      <div>
        <div className="mt-4 py-8  text-center">
          <h1 className="text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]">
            Đội ngũ Bác Sĩ Tại ToothHive
          </h1>
          <p className="text-[0.9rem] text-gray-500">
            Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất
          </p>
        </div>
        <ServicePageCarousel
          arr={arrDoctor}
          mobileScreen={mobileScreen}
          windowWidth={windowWidth}
        />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8  ">
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] ">
                <img
                  src="https://ttgdtxphuquoc.edu.vn/hinh-anh-bac-si-nu-dep/imager_7_6391_700.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Bs. Hoàng Văn Minh</h1>
                <span>Với 7 năm kinh nghiệm về mảng nha khoa</span>
                <span>Trình độ: Thạc sĩ</span>
                <Link
                  to="/detailDoctor"
                  className="flex items-center gap-2 text-[#1386ED]"
                >
                  {" "}
                  <span>Xem thêm </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] ">
                <img
                  src="https://ttgdtxphuquoc.edu.vn/hinh-anh-bac-si-nu-dep/imager_7_6391_700.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Bs. Hoàng Văn Minh</h1>
                <span>Với 7 năm kinh nghiệm về mảng nha khoa</span>
                <span>Trình độ: Thạc sĩ</span>
                <Link
                  to="/detailDoctor"
                  className="flex items-center gap-2 text-[#1386ED]"
                >
                  {" "}
                  <span>Xem thêm </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] ">
                <img
                  src="https://ttgdtxphuquoc.edu.vn/hinh-anh-bac-si-nu-dep/imager_7_6391_700.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Bs. Hoàng Văn Minh</h1>
                <span>Với 7 năm kinh nghiệm về mảng nha khoa</span>
                <span>Trình độ: Thạc sĩ</span>
                <Link
                  to="/detailDoctor"
                  className="flex items-center gap-2 text-[#1386ED]"
                >
                  {" "}
                  <span>Xem thêm </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] ">
                <img
                  src="https://ttgdtxphuquoc.edu.vn/hinh-anh-bac-si-nu-dep/imager_7_6391_700.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Bs. Hoàng Văn Minh</h1>
                <span>Với 7 năm kinh nghiệm về mảng nha khoa</span>
                <span>Trình độ: Thạc sĩ</span>
                <Link
                  to="/detailDoctor"
                  className="flex items-center gap-2 text-[#1386ED]"
                >
                  {" "}
                  <span>Xem thêm </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className=" w-full flex justify-center items-center mt-[3rem]">
          <button className='bg-[#1386ED] px-8 py-3 rounded-[30px] text-white'>Xem thêm</button>


        </div> */}
      </div>
      {/* end doctor */}

      {/*start map*/}
      <div className="mb-[2rem] md:mb-[3rem] ">
        <div className="mt-4 py-8  text-center">
          <h1 className="text-[#1386ED] font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem]">
            Hệ Thống Nha Khoa ToothHive
          </h1>
          <p className="text-[0.9rem] text-gray-500">
            Tại ToothHive sẽ có các chi nhánh về các địa điểm khác nhau
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8  ">
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] h-[12rem] ">
                <img
                  src={Image_map}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Cơ sở 1</h1>
                <span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
                <Link to="/" className="flex items-center gap-2 text-[#1386ED]">
                  {" "}
                  <span>Tới Link map </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] h-[12rem] ">
                <img
                  src={Image_map}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Cơ sở 1</h1>
                <span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
                <Link to="/" className="flex items-center gap-2 text-[#1386ED]">
                  {" "}
                  <span>Tới Link map </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] h-[12rem] ">
                <img
                  src={Image_map}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Cơ sở 1</h1>
                <span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
                <Link to="/" className="flex items-center gap-2 text-[#1386ED]">
                  {" "}
                  <span>Tới Link map </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg  flex flex-col gap-4 l">
            <div className="w-ful flex gap-2">
              <div className="w-[35%] h-[12rem] ">
                <img
                  src={Image_map}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[65%]  flex flex-col gap-4 py-4 px-2">
                <h1 className="font-bold ">Cơ sở 1</h1>
                <span>237 Nguyễn Tất Thành, Quận 5, Tp.HCM</span>
                <Link to="/" className="flex items-center gap-2 text-[#1386ED]">
                  {" "}
                  <span>Tới Link map </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end map */}
    </div>
  );
};

export default Services;
