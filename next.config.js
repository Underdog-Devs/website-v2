/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	output: 'standalone',
	env: {
		NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
		DATABASE_URL: process.env.DATABASE_URL,
	},
	images: {
		unoptimized: true,
	},
};
