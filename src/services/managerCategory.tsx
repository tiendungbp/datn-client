import http from '../API/api';

export type getAllCategory = {
	category_id: string;
	category_name: string;
	status: number;
	description: string;
	createdAt: string;
	updatedAt: string;
};
export const managerCategoryServices = {
	getAllCategory: () => http.get(`category/all`),
	getOneCategory: (id: getAllCategory['category_id']) =>
		http.get(`category/${id}`),
	getActive: () => http.get(`category/active`),
	getAllByDoctorID:(id:any)=>http.get(`category/all/doctor/${id}`)
};
