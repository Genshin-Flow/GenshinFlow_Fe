import { styled } from "@/../styled-system/jsx";

export const LoginContainer = styled("article", {
	base: {
		width: "620px",
		bg: "#ffffff",
	},
});

export const ChildrenContainer = styled("div", {
	base: {
		marginTop: "100px",
	},

	variants: {
		variant: {
			signUp: {
				marginTop: "40px",
			},
		},
	},
});
