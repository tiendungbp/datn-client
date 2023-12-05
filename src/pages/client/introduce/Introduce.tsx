import { Breadcrumb, Button } from "antd";
import React, { useEffect, useState } from "react";
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

import "./Introduce.scss";
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
    <div className="wrapper introduce__client">
      <div className="m-auto w-wd-primary md:w-wd-secondary mt-6 lg:mt-[1rem] ">
        {/* BreadCrumb */}
        <Breadcrumb
          className={`text-base mb-8 text-xs md:text-sm text-xs`}
          items={[
            {
              title: <a href="/">Trang chủ</a>,
            },
            {
              title: <span className="textColor">Giới thiệu</span>,
            },
          ]}
        />
        {/* Banner  */}
        <div className="flex banner">
          <div className="left flex-col md:w-2/3 w-full pr-0 sm:pr-10">
            <div className="left__text__intro__client text-lg  sm:text-3xl">
              <h3 className=" font-bold">Khám phá ToothHive</h3>
              <p className="font-bold mb-7">
                Nơi hội tụ
                <span className="textColor"> Nụ cười tươi sáng</span> và sự chăm
                sóc nha khoa tận tâm!
              </p>
            </div>
            {isMobile ? (
              <div className="right">
                <img src={IntroduceBannerImage} alt="" />
              </div>
            ) : null}
            <div>
              <p className="mb-7 mt-5 leading-8 text-sm sm:text-[1rem]">
                Chúng tôi tự hào mang đến một môi trường nha khoa chuyên nghiệp
                và đẳng cấp, cam kết đem lại cho bạn trải nghiệm tốt nhất cho
                sức khỏe nha khoa.
              </p>
              <p className="mb-7 leading-8 text-sm sm:text-[1rem]">
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
                  fontWeight: "500",
                }}
                className={"booking"}
              >
                Xem Thêm
              </Button>
            </div>
          </div>
          {!isMobile ? (
            <div className="right md:w-2/3">
              <img
                src={IntroduceBannerImage}
                alt=""
                className="md:w-full md:h-full object-cover rounded-lg"
              />
            </div>
          ) : null}
        </div>
      </div>
      {/* Reasons */}
      <div className="reasons__introduce m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[4rem]  reason">
        <div className="flex sm:flex-row flex-col">
          <div className="left flex-col sm:w-2/5 w-full pr-0 sm:pr-10 xl:h-[536px] md:h-[636px]">
            <img
              src={IntroduceReasonImage}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="right sm:w-3/5 w-full">
            <div>
              <h3 className="sm:text-3xl text-lg font-bold mb-7 sm:text-left text-center">
                Tại sao
                <span className="textColor"> Nên lựa chọn </span>
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
      <div className="certificate__client m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[4rem]  ">
        <div className=" text-center mb-3 md:mb-8">
          <h3 className="text-center sm:text-3xl text-lg font-bold mt-5">
            Các <span className="textColor">Chứng Chỉ</span> Tại ToothHive
          </h3>
          <p className="mb-7 font-light text-center text-sm sm:text-[1rem]">
            Tại ToothHive, chúng tôi tự hào sở hữu một loạt chứng chỉ phản ánh
            cam kết duy trì các tiêu chuẩn chất lượng cao nhất trong chăm sóc
            nha khoa
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-6 certificate mb-8 md:mb-12 ">
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
          <h3 className="text-center sm:text-3xl text-lg font-bold mb-3 pb-5">
            Nha Khoa ToothHive Qua
            <span className="textColor"> Những Con Số</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center container mx-auto pb-10 mb-20 px-4 sm:px-6 lg:px-8 ">
            <div className="item rounded textColor flex flex-col gap-3 justify-center items-center ml-5 my-3">
              <LikeIcon />
              <p className="sm:text-3xl text-lg font-bold">100%</p>
              <p>Hài lòng</p>
            </div>
            <div className="item rounded textColor flex flex-col gap-3 justify-center items-center ml-5 my-3">
              <TwoUsersIcon />
              <p className="sm:text-3xl text-lg font-bold">2222</p>
              <p>Khách hàng</p>
            </div>
            <div className="item rounded textColor flex flex-col gap-3 justify-center items-center ml-5 my-3">
              <ThreeUsersIcon />
              <p className="sm:text-3xl text-lg font-bold">19</p>
              <p>Nhân viên</p>
            </div>
            <div className="item rounded textColor flex flex-col gap-3 justify-center items-center ml-5 my-3">
              <DotsIcon />
              <p className="sm:text-3xl text-lg font-bold">42</p>
              <p>Dịch vụ</p>
            </div>
            <div className="item rounded textColor flex flex-col gap-3 justify-center items-center ml-5 my-3">
              <FaceIcon />
              <p className="sm:text-3xl text-lg font-bold">3</p>
              <p>Cở sở</p>
            </div>
          </div>
        </div>
      </div>
      {/* Dental care journey  */}
      <div className="dental_care_journey  m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[4rem]  ">
        <div className="flex sm:flex-row flex-col">
          <div className="left flex-col sm:w-2/3 w-full pr-0 sm:pr-10">
            <div>
              <h3 className="sm:text-3xl text-lg font-bold mb-7 sm:text-left text-center">
                Hành trình
                <span className="textColor"> Chăm sóc răng đẳng cấp </span>
                cho một cuộc sống tự tin
              </h3>
              <p className="mb-7 leading-8 sm:text-[1rem] text-sm">
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
                className={"booking"}
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
