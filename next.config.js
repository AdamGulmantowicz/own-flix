/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['themoviedb.org'],
	},
}

module.exports = nextConfig
