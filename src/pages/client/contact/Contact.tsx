import { Breadcrumb } from "antd";
import "./Contact.scss";
import blueSquareImage from "../../../assets/img/blueSquare.png";
import doctorImage from "../../../assets/img/doctorBackground.png";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="m-auto w-wd-primary md:w-wd-secondary my-6 lg:mt-[1rem]">
        <div className="contact__client wrapper">
          <div className="m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[1rem]">
            <div className="contact__client wrapper">
              <div className="m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[1rem]">
                {/* BreadCrumb */}
                <Breadcrumb
                  className={`text-base mb-12`}
                  items={[
                    {
                      title: <a href="/">Trang chủ</a>,
                    },
                    {
                      title: <span className="textColor">Liên hệ</span>,
                    },
                  ]}
                />
                {/* Banner */}
                <div className="block sm:flex">
                  <div className="left block sm:flex-1 myImage">
                    <img src={blueSquareImage} alt="" />
                    <img src={doctorImage} alt="" />
                  </div>
                  <div className="right mt-10 flex-1 flex flex-col justify-between">
                    <h3 className=" text-3xl font-bold my-7">
                      Đến với <span className="textColor">ToothHive</span>
                    </h3>
                    <p className="my-3">
                      Chúng tôi biết rằng mỗi cá nhân đều có nhu cầu riêng về
                      chăm sóc răng và mong muốn một nụ cười đẹp tự nhiên và
                      cuốn hút. Với sự hiểu biết và kinh nghiệm, chúng tôi tạo
                      ra những giải pháp cá nhân hoá, từ việc điều trị các vấn
                      đề về răng và nướu, đến việc cải thiện màu sắc và hình
                      dáng của răng.
                    </p>
                    <p className="my-3">
                      Ở ToothHive, chúng tôi không ngừng tìm kiếm sự hoàn thiện
                      và tiến bộ trong việc kết hợp khoa học và nghệ thuật. Bằng
                      cách sử dụng công nghệ tiên tiến nhất và áp dụng các
                      phương pháp chăm sóc hàng đầu, chúng tôi cam kết đem đến
                      cho bạn những kết quả tối ưu nhất, đồng thời tôn vinh nét
                      đẹp tự nhiên và phong cách riêng của bạn.
                    </p>
                  </div>
                </div>
              </div>
              {/* Div contact form */}
              <div className="contact xl:mt-80 lg:mt-32">
                <div className=" m-auto w-wd-primary md:w-wd-secondary my-12 lg:mt-[4rem]">
                  <div className="block sm:flex py-16">
                    <div className="contactInfo flex-1">
                      <h3 className="text-3xl font-bold">
                        <span className="textColor">Liên Hệ</span> Với Chúng Tôi
                      </h3>
                      <p className="font-light mt-4 mb-6">
                        Hãy để chúng tôi giúp bạn bắt đầu hành trình chăm sóc
                        răng đẳng cấp tại ToothHive. Chúng tôi luôn sẵn sàng
                        lắng nghe và đồng hành cùng bạn để mang đến một nụ cười
                        tươi sáng và hoàn hảo.
                      </p>
                      <div className="info mb-4">
                        <h4 className="text-xl font-medium">Địa chỉ</h4>
                        <p>
                          Trụ sở chính: 237 Nguyễn Tất Thành, Quận 5, Tp.HCM
                        </p>
                        <p>
                          Cơ sở 2: 172 Trường chinh, Tân Thới HIệp, Quận 12,
                          Tp.HCM
                        </p>
                        <p>
                          Cơ sở 3: 287 Trần Xuân Soạn, Tân Kiểng, Quận 7, Tp.HCM
                        </p>
                      </div>
                      <div className="info mb-4">
                        <h4 className="text-xl font-medium">Email</h4>
                        <p>ToothHive@gmail.com</p>
                      </div>
                      <div className="info mb-4">
                        <h4 className="text-xl font-medium">Số điện thoại</h4>
                        <p>(+84) 0975 383 290</p>
                      </div>
                      <div className="info mb-10">
                        <h4 className="text-xl font-medium">Giờ làm việc</h4>
                        <p>Thứ Hai - Chủ Nhật: 8:00 AM - 6:00 PM</p>
                      </div>
                      <div className="info mb-4">
                        <p>
                          Chúng tôi luôn sẵn sàng phục vụ bạn trong giờ làm việc
                          và có thể sắp xếp lịch hẹn ngoài giờ nếu cần thiết.
                        </p>
                      </div>
                    </div>
                    <div className="contactForm flex-1">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
