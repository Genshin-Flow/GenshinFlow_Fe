import { styled } from "@/../styled-system/jsx";

export const LoginContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		maxWidth: "800px",
		position: "relative",
		left: "50%",
		transform: "translate(-50%)",
		overflow: "hidden",
	},
});

export const SelectContainer = styled("article", {
	base: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "248px",
		transition: "transform 0.5s",
		padding: "0 20px",
	},
	variants: {
		defaultTransform: {
			default: {
				"&": {
					transform: "translateX(-200%)",
				},
			},
		},
		transform: {
			login: {
				"& ~ .loginContainer": {
					transform: "translateX(0%)",
				},
			},
			signUp: {
				"& ~ .signUpContainer": {
					transform: "translateX(0%)",
				},
			},
			forgotPassword: {
				"& ~ .forgotPassContainer": {
					transform: "translateX(0%)",
				},
			},
			authMailPassword: {
				"& ~ .AuthForChangePassword": {
					transform: "translateX(0%)",
				},
			},
			signUpSelect: {},
		},
	},
});
