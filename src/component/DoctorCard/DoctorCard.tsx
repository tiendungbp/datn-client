import { Link } from 'react-router-dom';
// import DoctorSchedule from "../../components/DoctorSchedule";
import { Row, Col } from 'antd';
import DoctorSchedule from '../DoctorSchedule/DoctorSchedule';
// import { Doctor } from "../types";

// interface DoctorCardProps {
//   doctor: Doctor;
// }

const DoctorCard: React.FC<any> = ({ doctor }) => {
	return (
		<div className="text-black mb-5 p-4 rounded">
			<Row gutter={16}>
				<Col xs={24} md={12}>
					<Row gutter={16}>
						<Col xs={24} md={8} className="mb-5">
							<img className="w-full rounded" src={doctor.avatar} alt="" />
						</Col>
						<Col xs={24} md={16} className="mb-5">
							<h5 className="text-blue-500 mb-3">
								{doctor.degree}, {doctor.fullname}
							</h5>
							<hr />
							<p className='mb-3'>
								<b>Số điện thoại:</b> {doctor.phone}
							</p>
							<p className='mb-3'>
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
