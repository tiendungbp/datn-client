import { Breadcrumb } from "antd";
import "./Contact.scss";
import blueSquareImage from "../../../assets/img/blueSquare.png";
import doctorImage from "../../../assets/img/doctorBackground.png";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact__client wrapper">
      <div className="m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[1rem]">
        {/* BreadCrumb */}
        <Breadcrumb
          className={`title__services__client text-base mb-8 `}
          items={[
            {
              title: <a href="/">Trang chủ</a>,
            },
            {
              title: <p className="textColor ">Liên hệ</p>,
            },
          ]}
        />
        {/* Banner */}
        <div className="flex gap-6 flex-wrap">
          <div className="left block sm:flex-1 myImage">
            <img src={blueSquareImage} alt="" />
            <img src={doctorImage} alt="" />
          </div>
          <div className="right flex-1 gap-4 flex flex-col justify-between">
            <h3 className=" text-3xl font-bold">
              Đến với <span className="textColor">ToothHive</span>
            </h3>
            <p className="leading-8">
              Chúng tôi biết rằng mỗi cá nhân đều có nhu cầu riêng về chăm sóc
              răng và mong muốn một nụ cười đẹp tự nhiên và cuốn hút. Với sự
              hiểu biết và kinh nghiệm, chúng tôi tạo ra những giải pháp cá nhân
              hoá, từ việc điều trị các vấn đề về răng và nướu, đến việc cải
              thiện màu sắc và hình dáng của răng.
            </p>
            <p className="leading-8">
              Ở ToothHive, chúng tôi không ngừng tìm kiếm sự hoàn thiện và tiến
              bộ trong việc kết hợp khoa học và nghệ thuật. Bằng cách sử dụng
              công nghệ tiên tiến nhất và áp dụng các phương pháp chăm sóc hàng
              đầu, chúng tôi cam kết đem đến cho bạn những kết quả tối ưu nhất,
              đồng thời tôn vinh nét đẹp tự nhiên và phong cách riêng của bạn.
            </p>
          </div>
        </div>
      </div>
      {/* Div contact form */}
      <div className="contact xl:mt-80 lg:mt-32">
        <div className=" m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[4rem]">
          <div className="block sm:flex py-16 md:gap-40 sm:gap-10">
            <div className="contactInfo flex flex-col gap-6 flex-1">
              <h3 className="text-3xl font-bold">
                <span className="textColor">Liên Hệ</span> Với Chúng Tôi
              </h3>
              <p className=" leading-8 ">
                Hãy để chúng tôi giúp bạn bắt đầu hành trình chăm sóc răng đẳng
                cấp tại ToothHive. Chúng tôi luôn sẵn sàng lắng nghe và đồng
                hành cùng bạn để mang đến một nụ cười tươi sáng và hoàn hảo.
              </p>
              <div className="info flex flex-col gap-2 ">
                <h4 className="text-xl font-bold">Địa chỉ</h4>
                <p>Trụ sở chính: 237 Nguyễn Tất Thành, Quận 4, Tp.HCM</p>
                <p>Cơ sở 2: 172 Trường chinh, Tân Thới HIệp, Quận 12, Tp.HCM</p>
                <p>Cơ sở 3: 287 Trần Xuân Soạn, Tân Kiểng, Quận 7, Tp.HCM</p>
              </div>
              <div className="info flex flex-col gap-2">
                <h4 className="text-xl font-bold">Email</h4>
                <p>Toothhive@gmail.com</p>
              </div>
              <div className="info flex flex-col gap-2">
                <h4 className="text-xl font-bold">Số điện thoại</h4>
                <p>(+84) 0975 383 290</p>
              </div>
              <div className="info flex flex-col gap-2 mb-8 md:mb-0">
                <h4 className="text-xl font-bold">Giờ làm việc</h4>
                <p>Thứ Hai - Chủ Nhật: 8:00 AM - 6:00 PM</p>
              </div>
             
            </div>
            <div className=" flex-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
