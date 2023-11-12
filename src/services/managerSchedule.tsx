import http from '../API/api';

interface ScheduleAPI {
	getDoctorSchedulesByDate: (
		appointment_id: string,
		user_id: string,
	) => Promise<any>;
}

const scheduleAPI: ScheduleAPI = {
	getDoctorSchedulesByDate: (doctor_id, date) => {
		return http.get(`schedule/all/doctor/${doctor_id}/${date}`);
	},
};

export default scheduleAPI;
