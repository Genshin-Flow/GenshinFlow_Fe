import { styled } from "@/../styled-system/jsx";

export const ExitButton = styled("button", {
	base: {
		width: "60px",
		height: "60px",
		position: "absolute",
		top: "30px",
		right: "22px",
		cursor: "pointer",

		"& img": {
			width: "100%",
			height: "100%",
			pointerEvents: "none",
		},
	},
});
