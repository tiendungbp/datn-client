import { Link } from "react-router-dom";
// import DoctorSchedule from "../../components/DoctorSchedule";
import { Row, Col } from "antd";
import DoctorSchedule from "../DoctorSchedule/DoctorSchedule";
// import { Doctor } from "../types";

// interface DoctorCardProps {
//   doctor: Doctor;
// }

const DoctorCard: React.FC<any> = ({ doctor }) => {
  return (
    <div
      className="text-black mb-5 p-4 rounded"
      style={{ backgroundColor: "#eff5ff" }}
    >
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Row gutter={16}>
            <Col xs={24} md={8} className="mb-5">
              <img
                className="w-full rounded"
                src={doctor.avatar}
                alt=""
                style={{ height: 330 }}
              />
            </Col>
            <Col xs={24} md={16} className="mb-5 text-sm md:text-base">
              <h5 className="text-blue-500">
                {doctor.degree}, {doctor.fullname}
              </h5>
              <hr className="my-3" />
              <p className="mb-3">
                <b>Số điện thoại:</b> {doctor.phone}
              </p>
              <p className="mb-3">
                <b>Email:</b> {doctor.email}
              </p>
              <Link to={`/detailDoctor/${doctor.doctor_id}`}>Xem thêm</Link>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <DoctorSchedule doctor={doctor} />
        </Col>
      </Row>
    </div>
  );
};

export default DoctorCard;
