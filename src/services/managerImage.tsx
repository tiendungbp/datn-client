import axios from 'axios';

interface CloudinaryResponse {
	secure_url: string;
	status: number;
	data: any;
}

const imageAPI = {
	uploadImageToCloud: async (
		formData: FormData,
	): Promise<CloudinaryResponse> => {
		return await axios
			.post<CloudinaryResponse>(
				'https://api.cloudinary.com/v1_1/deldfzq9e/image/upload',
				formData,
			)
			.then((response) => response.data);
	},
};

export default imageAPI;
