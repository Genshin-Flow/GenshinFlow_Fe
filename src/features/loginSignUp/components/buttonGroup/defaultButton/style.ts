import { styled } from "@/../styled-system/jsx";

export const ButtonCompo = styled("button", {
	base: {
		width: "100%",
		maxWidth: "400px",
		minWidth: "200px",
		borderRadius: "98px",
		fontWeight: "bold",
		cursor: "pointer",
		transition: "background 0.5s, color 0.5s",
	},
	variants: {
		variant: {
			login: {
				bg: "primary.01",
				color: "#ffffff",
				"&:hover": {
					bg: "gray.05",
					color: "black",
				},
			},
			signUp: {
				bg: "gray.05",
			},
			forgotPassword: {
				textStyle: "xs",
				height: "auto",
				color: "gray.03",
			},
			deActive: {
				bg: "gray.05",
				color: "#ffffff",
				pointerEvents: "none",
			},
			lock: {
				bg: "gray.05",
				color: "#ffffff",
				pointerEvents: "none",
			},
		},
		margin: {
			mb12: {
				marginBottom: "12px",
			},
			mb20: {
				marginBottom: "20px",
			},
		},
		platform: {
			pc: {
				height: "60px",
			},
			mobile: {
				maxWidth: "none",
				minWidth: "unset",
				height: "40px",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});
