import { styled } from "@/../styled-system/jsx";

export const SignUpSelectContainer = styled("article", {
	base: {
		position: "absolute",
		padding: "60px 110px",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		top: "253px",
	},

	variants: {
		variant: {
			signUp: {
				transform: "translateX(-200%)",

				"& .SignUp": {
					transform: "translateX(0%)",
				},
			},
		},
	},
});
