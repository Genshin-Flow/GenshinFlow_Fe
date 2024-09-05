import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					// 사용 예시 -> background: 'primary.01'
					primary: {
						"01": { value: "#50596B" },
						"02": { value: "#EBE7DE" },
						"03": { value: "#FAD56B" }, // Yellow 01
					},
					secondary: {
						"01": { value: "#CE7866" },
						"02": { value: "#AD8E74" },
						"03": { value: "#F3EEE6" },
						"04": { value: "#DED7CE" }, // 호버 전
						"05": { value: "#C8B59C" }, // 호버 후
					},
					gray: {
						"01": { value: "#161616" },
						"02": { value: "#707070" },
						"03": { value: "#9A9A9A" },
						"04": { value: "#C4C4C4" },
						"05": { value: "#E7E7E7" },
						"06": { value: "#F4F4F4" },
					},
				},
				borders: {
					OauthBtn: { value: "1px solid {colors.gray.03}" },
					CheckBox: { value: "1px solid {colors.gray.05}" },
				},
				// 사용 예시 -> fontSize: 'md'
				fontSizes: {
					xs: { value: "12px" },
					sm: { value: "14px" },
					md: { value: "16px" },
					lg: { value: "20px" },
					xl: { value: "24px" },
					"2xl": { value: "28px" },
				},
				// 사용 예시 -> fontWeight: 'bold'
				fontWeights: {
					regular: { value: "400" },
					medium: { value: "500" },
					bold: { value: "700" },
				},
			},
			// 사용 예시 -> textStyle: 'xs'
			textStyles: {
				xs: {
					value: {
						fontSize: "12px",
						fontWeight: "400",
					},
				},
				sm: {
					value: {
						fontSize: "14px",
						fontWeight: "500",
					},
				},
				md: {
					value: {
						fontSize: "16px",
						fontWeight: "500",
					},
				},
				lg: {
					value: {
						fontSize: "20px",
						fontWeight: "500",
					},
				},
				xl: {
					value: {
						fontSize: "20px",
						fontWeight: "700",
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",

	// JSX Style Props 사용 활성화
	jsxFramework: "react",
});
