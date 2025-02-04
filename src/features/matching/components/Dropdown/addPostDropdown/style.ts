import { styled } from "@/../styled-system/jsx";

export const PostDropdownContainer = styled("div", {
	base: {
		width: "100%",
		position: "relative",
		display: "flex",
		alignItems: "center",
		backgroundColor: "gray.06",
		border: "1px solid {colors.gray.04}",
		borderRadius: "8px",
	},
});

export const SortingBox = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 8px",
		cursor: "pointer",
	},
});

export const PostDropDownItemContainer = styled("ul", {
	base: {
		width: "100%",
		minWidth: "120px",
		display: "none",
		position: "absolute",
		left: "0",
		top: "100%",
		borderRadius: "8px",
		backgroundColor: "gray.06",
		overflow: "hidden",
		padding: "8px 10px",
		boxShadow: "0px 4px 20px 0px rgba(22, 22, 22, 0.2)",
		textStyle: "xs",
		"&.active": {
			display: "block",
		},
		"& > li": {
			cursor: "pointer",
			marginTop: "10px",
			color: "gray.03",
		},
		"& > li:first-of-type": {
			marginTop: "0px",
		},
	},
});

export const TextBox = styled("p", {
	base: {
		color: "gray.03",
		textStyle: "xs",
	},
});
