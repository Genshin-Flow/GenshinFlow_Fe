import { styled } from "@/../styled-system/jsx";

export const AuthButton = styled("button", {
	base: {
		width: "100%",
		height: "60px",
		position: "relative",
		padding: "0 20px",
		boxSizing: "border-box",
		borderRadius: "68px",
		border: "1px solid {colors.gray.03}",
		cursor: "pointer",
		textStyle: "lg",
	},

	variants: {
		margin: {
			mb12: {
				marginBottom: "12px",
			},
			mb40: {
				marginBottom: "40px",
			},
			mb60: {
				marginBottom: "60px",
			},
		},
		platform: {
			pc: {
				height: "60px",
			},
			mobile: {
				height: "40px",
				textStyle: "md",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});

export const IconBox = styled("div", {
	base: {
		width: "24px",
		height: "24px",
		position: "absolute",
		left: "30px",
		top: "50%",
		transform: "translateY(-50%)",
	},
});
