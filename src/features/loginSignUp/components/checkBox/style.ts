import { styled } from "@/../styled-system/jsx";

export const AgreeCheckBoxContainer = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "18px",
	},
	variants: {
		marginBottom: {
			mb40: {
				marginBottom: "40px",
			},
		},
	},
});

export const CheckBox = styled("input", {
	base: {
		display: "none",
	},
});

export const CheckBoxLabel = styled("label", {
	base: {
		width: "24px",
		height: "24px",
		position: "relative",
		display: "block",
		borderRadius: "50%",
		marginRight: "16px",
		cursor: "pointer",
		border: "1px solid {colors.gray.05}",
		transition: "background-color 0.3s",
		backgroundColor: "gray.06",
		overflow: "hidden",
	},
	variants: {
		variant: {
			active: {
				backgroundColor: "gray.01",

				"& > img": {
					transform: "translate(-50%,-50%)",
				},
			},
		},
	},
});

export const CheckSVG = styled("img", {
	base: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,200%)",
		transition: "0.3s transform",
	},
});

export const TextLabel = styled("label", {
	base: {
		cursor: "pointer",
	},
});

export const CheckBoxText = styled("span", {
	base: {
		textStyle: "sm",
	},
});

export const Policy = styled("span", {
	base: {
		textStyle: "sm",
		textDecoration: "underline",
		cursor: "pointer",
	},
});
