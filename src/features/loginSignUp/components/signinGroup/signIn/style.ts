import { styled } from "@/../styled-system/jsx";

export const LoginContainer = styled("article", {
	base: {
		width: "100%",
		position: "absolute",
		top: "226px",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		padding: "0px 75px",
	},

	variants: {
		defaultTransform: {
			default: {
				"&": {
					transform: "translateX(-200%)",
				},
			},
		},
	},
});
