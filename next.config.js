const analyzing = process.env.ANALYZE === "true";

const withPWA = require("@ducanh2912/next-pwa").default({
	// pwa 설정
	dest: "public",
});

const nextConfig = {};

module.exports = withPWA(nextConfig);

if (analyzing) {
	const withBundleAnalyzer = require("@next/bundle-analyzer")({
		enabled: true,
	});
	module.exports = withBundleAnalyzer(nextConfig);
} else {
	module.exports = nextConfig;
}
