const analyzing = process.env.ANALYZE === "true";

const withPWA = require("@ducanh2912/next-pwa").default({
	// pwa 설정
	dest: "public",
});

const nextConfig = {
	reactStrictMode: false,
	async rewrites() {
		return [
			{
				source: "/post/:path*",
				destination: "http://localhost:3000/:path*",
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/get/:path*",
				destination: "http://localhost:3000/:path*",
			},
		];
	},
};

module.exports = withPWA(nextConfig);

if (analyzing) {
	const withBundleAnalyzer = require("@next/bundle-analyzer")({
		enabled: true,
	});
	module.exports = withBundleAnalyzer(nextConfig);
} else {
	module.exports = nextConfig;
}
