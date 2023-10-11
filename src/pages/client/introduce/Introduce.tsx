import { Breadcrumb, Button, Collapse } from "antd";
import React, { useEffect, useState } from "react";
import "./Introduce.scss";
import IntroduceBannerImage from "../../../assets/img/BacSiVaEmBe.png";
import IntroduceReasonImage from "../../../assets/img/BacSiNhoRang.png";
import CertificateImage from "../../../assets/img/certificate.png";
import JourneyImage from "../../../assets/img/journey.png";
import BackgroundIntroduce from "../../../assets/img/backgroundIntroduce.jpg";

import {
  DotsIcon,
  FaceIcon,
  LikeIcon,
  ThreeUsersIcon,
  TwoUsersIcon,
} from "../../../assets/icons/icons";

import MyCollapse from "./MyCollapse/MyCollapse";

const Introduce = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    // Hàm xử lý sự kiện thay đổi kích thước màn hình
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Đăng ký sự kiện thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);

    // Hủy đăng ký sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(isMobile);

  return (
    <div className="wrapper">
      <div className="m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[4rem] ">
        {/* BreadCrumb */}
        <Breadcrumb
          className={`text-sm my-8`}
          items={[
            {
              title: <a href="#">Trang chủ</a>,
            },
            {
              title: <span className="textColor">Giới thiệu</span>,
            },
          ]}
        />
        {/* Banner  */}
        <div className="flex">
          <div className="left flex-col sm:w-2/3 w-full pr-0 sm:pr-10">
            <div>
              <h3 className="text-3xl font-bold">Khám phá ToothHive</h3>
              <p className="text-3xl font-bold mb-7">
                Nơi Hội tụ
                <span className="textColor"> Nụ cười Tươi sáng</span> và Sự Chăm
                sóc Nha khoa Tận tâm!
              </p>
            </div>
            {isMobile ? (
              <div className="right">
                <img src={IntroduceBannerImage} alt="" />
              </div>
            ) : null}
            <div>
              <p className="mb-7 mt-5 font-light">
                Chúng tôi tự hào mang đến một môi trường nha khoa chuyên nghiệp
                và đẳng cấp, cam kết đem lại cho bạn trải nghiệm tốt nhất cho
                sức khỏe nha khoa.
              </p>
              <p className="mb-7 font-light">
                Với đội ngũ nha sĩ giàu kinh nghiệm và tận tâm, chúng tôi cam
                kết mang đến những dịch vụ nha khoa chất lượng nhất, bắt đầu từ
                kiểm tra định kỳ, làm sạch răng, đến các quy trình phức tạp như
                cấy ghép implant và phục hình nha khoa. Chúng tôi luôn sử dụng
                những công nghệ và phương pháp mới nhất để đảm bảo bạn được chăm
                sóc một cách tốt nhất.
              </p>
              <Button
                shape="round"
                style={{
                  backgroundColor: "#1386ed",
                  color: "white",
                  height: 40,
                  padding: "0 20px",
                }}
              >
                Xem Thêm
              </Button>
            </div>
          </div>
          {!isMobile ? (
            <div className="right">
              <img src={IntroduceBannerImage} alt="" />
            </div>
          ) : null}
        </div>
      </div>
      {/* Reasons */}
      <div className="m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[4rem]  reason">
        <div className="flex sm:flex-row flex-col">
          <div className="left flex-col sm:w-2/5 w-full pr-0 sm:pr-10 ">
            <img src={IntroduceReasonImage} alt="" className="w-full" />
          </div>
          <div className="right sm:w-3/5 w-full">
            <div>
              <h3 className="text-3xl font-bold mb-7 sm:text-left text-center">
                Tại sao
                <span className="textColor"> Nên Lựa Chọn </span>
                sử dụng dịch vụ tại ToothHive?
              </h3>
            </div>
            <div className="myCollapse">
              <MyCollapse />
            </div>
          </div>
        </div>
      </div>
      {/* Certificate */}
      <div className="m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[4rem]  ">
        <div className="w-2/3 mx-auto">
          <h3 className="text-center text-3xl font-bold mb-3">
            Các <span className="textColor">Chứng Chỉ</span> Tại ToothHive
          </h3>
          <p className="mb-7 font-light text-center">
            Tại ToothHive, chúng tôi tự hào sở hữu một loạt chứng chỉ phản ánh
            cam kết duy trì các tiêu chuẩn chất lượng cao nhất trong chăm sóc
            nha khoa
          </p>
        </div>
        <div className="flex justify-between flex-wrap certificate">
          <img src={CertificateImage} alt="" />
          <img src={CertificateImage} alt="" />
          <img src={CertificateImage} alt="" />
          <img src={CertificateImage} alt="" />
        </div>
      </div>
      {/* Data */}
      <div className="data ">
        <div className="background">
          <img src={BackgroundIntroduce} alt="" />
        </div>
        <div className="overlay"></div>
        <div className="showData m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[4rem]">
          <h3 className="text-center text-3xl font-bold mb-3 pb-5">
            Nha Khoa ToothHive Qua
            <span className="textColor"> Những Con Số</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center container mx-auto pb-10 mb-20 px-4 sm:px-6 lg:px-8 ">
            <div className="item rounded textColor flex flex-col justify-center items-center ml-5 my-3">
              <LikeIcon />
              <p className="text-3xl font-bold">100%</p>
              <p>Hài lòng</p>
            </div>
            <div className="item rounded textColor flex flex-col justify-center items-center ml-5 my-3">
              <TwoUsersIcon />
              <p className="text-3xl font-bold">2222</p>
              <p>Khách hàng</p>
            </div>
            <div className="item rounded textColor flex flex-col justify-center items-center ml-5 my-3">
              <ThreeUsersIcon />
              <p className="text-3xl font-bold">19</p>
              <p>Nhân viên</p>
            </div>
            <div className="item rounded textColor flex flex-col justify-center items-center ml-5 my-3">
              <DotsIcon />
              <p className="text-3xl font-bold">2222</p>
              <p>Khách hàng</p>
            </div>
            <div className="item rounded textColor flex flex-col justify-center items-center ml-5 my-3">
              <FaceIcon />
              <p className="text-3xl font-bold">2222</p>
              <p>Khách hàng</p>
            </div>
          </div>
        </div>
      </div>
      {/* Dental care journey  */}
      <div className="m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[4rem]  ">
        <div className="flex sm:flex-row flex-col">
          <div className="left flex-col sm:w-2/3 w-full pr-0 sm:pr-10">
            <div>
              <h3 className="text-3xl font-bold mb-7 sm:text-left text-center">
                Hành Trình
                <span className="textColor"> Chăm Sóc Răng Đẳng Cấp </span>
                Cho Một Cuộc Sống Tự Tin
              </h3>
              <p className="mb-7 font-light">
                Tại ToothHive, chúng tôi tin rằng nụ cười không chỉ là một biểu
                tượng vui vẻ, mà còn là một dấu ấn cá nhân thể hiện sự tự tin,
                sức khỏe và tình yêu với cuộc sống. Chính vì vậy, chúng tôi đã
                tạo ra một không gian độc đáo, nơi bạn sẽ không chỉ cảm nhận
                được sự chuyên nghiệp và hiện đại, mà còn trải nghiệm cảm giác
                thoải mái và an lành như khi bạn đang ở nhà.
              </p>
              <Button
                shape="round"
                style={{
                  backgroundColor: "#1386ed",
                  color: "white",
                  height: 40,
                  padding: "0 20px",
                }}
              >
                Xem Thêm
              </Button>
            </div>
          </div>
          <div className="right">
            <img src={JourneyImage} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
