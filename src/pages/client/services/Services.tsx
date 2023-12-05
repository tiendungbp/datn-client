import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Image_map from "../../../assets/img/map.png";
import { Breadcrumb, Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import { getAllDoctorService } from "../../../store/managerDoctor.services/thunkAction";
import { getAllCategoryService } from "../../../store/managerCategory.services/thunkAction";
import CategoryCard from "../../../component/CategoryCard/CategoryCard";
const Services = () => {
  const Appdispatch = useAppDispatch();
  const { listDoctor, isLoadingDoctor } = useSelector(
    (state: RootState) => state.managerDoctor
  );
  const { listCategoryActive, isLoadingCategory } = useSelector(
    (state: RootState) => state.managerCategory
  );

  const [doctorList, setDoctorList] = useState<any[]>([]);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getAllDoctors();
    getActiveCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getAllDoctors = async () => {
    // Gửi yêu cầu lấy danh sách danh mục
    await Appdispatch(getAllDoctorService());
  };
  //XỬ LÝ LẤY DANH MỤC ĐANG HOẠT ĐỘNG
  const getActiveCategories = async () => {
    await Appdispatch(getAllCategoryService());
  };
  useEffect(() => {
    if (listDoctor) {
      setDoctorList(listDoctor.data);
    }
  }, [listDoctor]);

  useEffect(() => {
    if (listCategoryActive) {
      setCategoryList(listCategoryActive.data);
    }
  }, [listCategoryActive]);

  return (
    <div className="services__client m-auto w-wd-primary md:w-wd-secondary lg:mt-[1rem] sm:mt-[0rem] md:mt-[0rem] xl:mt-[1rem]">
      <Breadcrumb
        className={`title__services__client text-base md:text-sm text-xs`}
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
      <div>
        <div className="py-8 text-center">
          <h1 className="text-[#1386ED] font-bold sm:text-lg md:text-[1.5rem] lg:text-[1.7rem]">
            Các danh mục dịch vụ tại ToothHive
          </h1>
          <p className="text-sm text-gray-500">
            Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất
          </p>
        </div>
        <Spin
          tip="Đang tải..."
          spinning={isLoadingCategory}
          className="justify-between"
        >
          <Row gutter={16}>
            {categoryList.map((category, index) => {
              return <CategoryCard key={index} category={category} />;
            })}
          </Row>
        </Spin>
      </div>
      {/* end category service */}

      {/*start doctor*/}
      <div className="mb-10">
        <div className="mt-4 py-8  text-center">
          <h1 className="text-[#1386ED] font-bold sm:text-lg md:text-[1.5rem] lg:text-[1.7rem]">
            Đội ngũ bác sĩ tại ToothHive
          </h1>
          <p className="text-sm text-gray-500">
            Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất
          </p>
        </div>
        <Spin tip="Đang tải..." spinning={isLoadingDoctor}>
          <Row gutter={16}>
            {doctorList?.map((doctor, index) => {
              return (
                <Col
                  lg={6}
                  md={12}
                  key={index}
                  className="wow fadeInUp w-full"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        className="w-full mt-5"
                        src={doctor.avatar}
                        alt="hinh-doctor"
                      />
                    </div>
                    <div className="team-text text-center p-5">
                      <h5 className="mb-5 font-semibold">{doctor.fullname}</h5>
                      <p className="text-blue-500 mb-5">{doctor.degree}</p>
                      <div className="text-center">
                        <Link to={`/detailDoctor/${doctor.doctor_id}`}>
                          Xem thêm
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Spin>
      </div>
      {/* end doctor */}
    </div>
  );
};

export default Services;
