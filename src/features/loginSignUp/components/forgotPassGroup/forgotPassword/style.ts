import { styled } from "@/../styled-system/jsx";

export const AuthMailContainer = styled("article", {
	base: {
		width: "100%",
		position: "absolute",
		top: "253px",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		padding: "0px 110px",
	},

	variants: {
		variant: {
			forgotPassword: {
				transform: "translateX(-200%)",

				"& ~ .forgotPassword": {
					transform: "translateX(0%)",
				},
			},
		},
	},
});
