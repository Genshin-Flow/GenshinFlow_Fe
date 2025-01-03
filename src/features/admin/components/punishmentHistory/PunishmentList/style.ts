import { styled } from "@/../styled-system/jsx";

export const TableItemContainer = styled("ul", {
	base: {
		width: "100%",
		height: "100%",
		overflow: "auto",
	},
});

export const TableItem = styled("li", {
	base: {
		width: "100%",
		height: "58px",
		display: "flex",
		alignItems: "center",
		borderCollapse: "collapse",

		"& > div": {
			height: "100%",
			padding: "16.5px 10px",
			border: "1px solid black",
		},

		"& > div:nth-of-type(1)": {
			width: "15%",
		},
		"& > div:nth-of-type(2)": {
			width: "15%",
		},
		"& > div:nth-of-type(3)": {
			width: "20%",
		},
		"& > div:nth-of-type(4)": {
			width: "15%",
		},
		"& > div:nth-of-type(5)": {
			width: "15%",
			padding: "0",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			cursor: "pointer",
		},
		"& > div:nth-of-type(6)": {
			width: "20%",
			padding: "0",
		},
	},
});

export const LastItemBlock = styled("div", {
	base: {
		width: "100%",
		height: "1px",
		opacity: "0",
	},
});
