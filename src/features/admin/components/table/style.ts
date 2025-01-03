import { styled } from "@/../styled-system/jsx";

export const TableContainer = styled("article", {
	base: {
		width: "100%",
		height: "700px",
		maxHeight: "700px",
	},
});

export const TableHeader = styled("div", {
	base: {
		height: "32px",
		backgroundColor: "gray.06",
	},
});

export const HeaderUl = styled("ul", {
	base: {
		width: "100%",
		height: "100%",
		display: "flex",
	},
});

export const HeaderList = styled("li", {
	base: {
		height: "100%",
		fontSize: "14px",
		fontWeight: "bold",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		"&:nth-of-type(1)": {
			width: "15%",
		},
		"&:nth-of-type(2)": {
			width: "15%",
		},
		"&:nth-of-type(3)": {
			width: "20%",
		},
		"&:nth-of-type(4)": {
			width: "15%",
		},
		"&:nth-of-type(5)": {
			width: "15%",
		},
		"&:nth-of-type(6)": {
			width: "20%",
		},
	},
});

export const TableBody = styled("div", {
	base: {
		width: "100%",
		height: "660px",
		overflow: "auto",
	},
});
