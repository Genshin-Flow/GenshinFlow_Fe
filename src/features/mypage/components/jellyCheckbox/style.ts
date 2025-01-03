import { styled } from "@/../styled-system/jsx";

export const CheckboxInput = styled("input", {
	base: {
		display: "none",
		"&:checked ~ span": {
			backgroundColor: "gray.01",
			// animation: "jelly 0.6s ease",
		},
		"&:checked ~ span::after": {
			opacity: "1",
			transform: "rotate(45deg) scale(1)",
		},
	},
});

export const CheckBoxLabel = styled("label", {
	base: {
		width: "18px",
		height: "18px",
		display: "block",
		boxSizing: "border-box",
	},
});

export const Icon = styled("span", {
	base: {
		width: "100%",
		height: "100%",
		position: "relative",
		display: "block",
		backgroundColor: "transparent",
		border: "1px solid {colors.gray.01}",

		"&::after": {
			content: "''",
			position: "absolute",
			display: "block",
			top: "1px",
			left: "5px",
			width: "5px",
			height: "11px",
			borderRight: "2px solid #fff",
			borderBottom: "2px solid #fff",
			transform: "rotate(45deg) scale(0)",
			transition: "all 0.3s ease",
			transitionDelay: "0.15s",
			opacity: "0",
		},
	},
});
