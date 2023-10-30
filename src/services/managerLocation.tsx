import axios from 'axios';
const baseURL = process.env.REACT_APP_LOCATION_API;

interface LocationAPI {
	getAllCities(): Promise<any>;
	getAllDistricts(): Promise<any>;
	getAllWards(): Promise<any>;
}

const locationAPI: LocationAPI = {
	getAllCities: () => {
		return axios.get(`${baseURL}/api/p/`);
	},
	getAllDistricts: () => {
		return axios.get(`${baseURL}/api/d/`);
	},
	getAllWards: () => {
		return axios.get(`${baseURL}/api/w/`);
	},
};

export default locationAPI;
