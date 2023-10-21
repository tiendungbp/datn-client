import http from '../API/api';

interface AuthAPI {
	register(obj: Record<string, any>): Promise<any>;
	login(obj: Record<string, any>): Promise<any>;
	changePassword(obj: Record<string, any>, user_id: string): Promise<any>;
	sendResetLink(obj: Record<string, any>): Promise<any>;
	resetPassword(user_id: string, token: string, password: string): Promise<any>;
	changeEmail(obj: Record<string, any>, user_id: string): Promise<any>;
	checkPassword(obj: Record<string, any>): Promise<any>;
}

const authAPI: AuthAPI = {
	register: (obj) => {
		return http.post(`auth/register`, obj);
	},
	login: (obj) => {
		return http.post(`auth/login/client`, obj);
	},
	changePassword: (obj, user_id) => {
		return http.put(`auth/password/change/${user_id}`, obj);
	},
	sendResetLink: (obj) => {
		return http.post(`auth/password/send-reset-link`, obj);
	},
	resetPassword: (user_id, token, password) => {
		return http.post(`auth/password/reset/${user_id}/${token}`, { password });
	},
	changeEmail: (obj, user_id) => {
		return http.put(`auth/email/change/${user_id}`, obj);
	},
	checkPassword: (obj) => {
		return http.post(`auth/password/check`, obj);
	},
};

export default authAPI;
