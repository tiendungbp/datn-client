import http from '../API/api';

interface PatientAPI {
	getByID(patient_id: Record<string, any>): Promise<any>;
	getMedicalRecord(patient_id: string): Promise<any>;
	updateProfile(obj: Record<string, any>, patient_id: string): Promise<any>;
}

const patientAPI: PatientAPI = {
	getByID: (patient_id) => {
		return http.get(`patient/${patient_id}`);
	},
	getMedicalRecord: (patient_id) => {
		return http.get(`/patient/record/${patient_id}`);
	},
	updateProfile: (obj, patient_id) => {
		return http.put(`patient/profile/update/${patient_id}`, obj);
	},
};

export default patientAPI;
