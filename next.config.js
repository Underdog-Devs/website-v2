/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	output: 'standalone',
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
};
