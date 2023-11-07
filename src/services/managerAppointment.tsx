import http from '../API/api';


interface AppointmentAPI {
  getAll: (patient_id: string) => Promise<any>;
  getByID: (appointment_id: string, user_id: string) => Promise<any>;
  booking: (obj: any) => Promise<any>;
  cancel: (obj: any) => Promise<any>;
}

const appointmentAPI: AppointmentAPI = {
  getAll: (patient_id) => {
    return http.get(`appointment/all/patient/${patient_id}`);
  },
  getByID: (appointment_id, user_id) => {
    return http.get(`appointment/${appointment_id}/${user_id}`);
  },
  booking: (obj) => {
    return http.post(`appointment/booking`, obj);
  },
  cancel: (obj) => {
    return http.post(`appointment/patient/cancel`, obj);
  },
};

export default appointmentAPI;