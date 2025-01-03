import { styled } from "@/../styled-system/jsx";

export const RequestCodeContainer = styled("div", {
	base: {
		position: "relative",
	},
});

export const RequestCodeButton = styled("button", {
	base: {
		position: "absolute",
		top: "50%",
		right: "12px",
		transform: "translateY(-50%)",
		textStyle: "xs",
		cursor: "pointer",
	},
	variants: {
		variant: {
			active: {
				color: "gray.03",
				pointerEvents: "none",
			},
		},
	},
});

export const Count = styled("span", {
	base: {
		position: "absolute",
		right: "88px",
		top: "50%",
		transform: "translateY(-50%)",
		color: "gray.03",
		pointerEvents: "none",
		textStyle: "xs",
	},
});
