import { styled } from "@/../styled-system/jsx";

export const SelectOptionContainer = styled("div", {
	base: {
		width: "140px",
		padding: "3px 0",
		marginLeft: "8px",
		backgroundColor: "#fff",
		position: "absolute",
		top: "0",
		left: "-4%",
		display: "none",
		zIndex: "10",
		border: "1px solid black",
	},
});

export const SelectOptions = styled("div", {
	base: {
		marginBottom: "5px",
		paddingLeft: "30px",

		"&:hover": {
			backgroundColor: "#f5f5f5",
		},

		"&:first-of-type": {
			display: "flex",
		},
	},
});

export const OptionDownArrow = styled("img", {
	base: {
		position: "absolute",
		top: "-0.5%",
		left: "-2%",
	},
});
