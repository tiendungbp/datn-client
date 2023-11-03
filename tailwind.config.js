module.exports = {
	content: ['./src/**/*.{html,js,tsx,jsx}'],
	theme: {
		extend: {
			width: {
				'wd-primary': '95%',
				'wd-secondary': '90%',
				'wd-tertiary': '80%',
				'wd-small': '70%',
				'wd-medium': '50%',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
	},
	plugins: [require('daisyui')],
};
