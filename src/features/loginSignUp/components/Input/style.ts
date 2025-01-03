import { styled } from "@/../styled-system/jsx";

export const DefaultInput = styled("input", {
	base: {
		width: "100%",
		padding: "0 30px",
		textStyle: "lg",
		bg: "gray.06",
		"&::placeholder": {
			textStyle: "lg",
		},
	},

	variants: {
		margin: {
			mb0: {
				marginBottom: "0px",
			},
			mb12: {
				marginBottom: "12px",
			},
			mb16: {
				marginBottom: "16px",
			},
			mb20: {
				marginBottom: "20px",
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
				padding: "0 12px",
				textStyle: "md",

				"&::placeholder": {
					textStyle: "md",
				},
			},
		},
		authCodeInput: {
			authInput: {
				paddingRight: "145px",
			},
			mobileAuthInput: {
				paddingRight: "96px",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});
