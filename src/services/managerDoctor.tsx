import http from '../API/api';

export type getAllDoctor = {
	doctor_id: string;
	fullname: string;
	avatar: string;
	dob: string;
	gender: boolean;
	phone: string;
	degree: string;
	start_date: null;
	street: null;
	ward: null;
	district: null;
	city: null;
	html: string;
	markdown: string;
	email: string;
	password: string;
	is_activated: boolean;
	is_blocked: boolean;
	refresh_token: string;
	createdAt: string;
	updatedAt: string;
};
export const managerDoctorServices = {
	getAllDoctor: () => http.get(`doctor/all`),
	getOneDoctor: (id: getAllDoctor['doctor_id']) => http.get(`doctor/${id}`),
	getAllByCategoryID: (id: any) => http.get(`doctor/all/category/${id}`),
};
