import { Link } from "react-router-dom";
import { Breadcrumb, Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import { getAllDoctorService } from "../../../store/managerDoctor.services/thunkAction";
import { getAllCategoryService } from "../../../store/managerCategory.services/thunkAction";
import CategoryCard from "../../../component/CategoryCard/CategoryCard";
const Bookingtest = () => {
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
        className={`title__services__client text-xs mb-8 md:text-sm`}
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: <p className="textColor ">Đặt lịch</p>,
          },
        ]}
      />
      {/*start category service*/}
      <div>
        <div className="py-2  text-center ">
          <h1 className="text-[#1386ED] font-bold text-lg md:text-[1.5rem] lg:text-[1.7rem]">
            Đặt lịch theo yêu cầu
          </h1>
          <p className="text-sm mb-4 text-gray-500">
            Tại ToothHive sẽ cung cấp cho các bạn những dịch vụ tốt nhất
          </p>
        </div>
        <Spin tip="Đang tải..." spinning={isLoadingCategory}>
          <Row gutter={16}>
            {categoryList.map((category, index) => {
              return <CategoryCard key={index} category={category} />;
            })}
          </Row>
        </Spin>
      </div>
      {/* end category service */}

      {/*start doctor*/}
      <div>
        <div className="mt-4 py-8  text-center">
          <h1 className="text-[#1386ED] mb-4 font-bold text-lg md:text-[1.5rem] lg:text-[1.7rem]">
            Đặt lịch theo bác sĩ
          </h1>
          <p className="text-sm text-gray-500">
            Tại ToothHive sẽ cung cấp cho các bạn những bác sĩ tốt nhất
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
                  <div
                    className="team-item relative rounded overflow-hidden my-3"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 7px" }}
                  >
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

export default Bookingtest;
