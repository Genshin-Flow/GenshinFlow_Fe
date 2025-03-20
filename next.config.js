const analyzing = process.env.ANALYZE === "true";

const withPWA = require("@ducanh2912/next-pwa").default({
	// pwa 설정
	dest: "public",
});

const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload-os-bbs.hoyolab.com",
			},
			{
				protocol: "https",
				hostname: "www.hoyolab.com",
			},
		],
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
