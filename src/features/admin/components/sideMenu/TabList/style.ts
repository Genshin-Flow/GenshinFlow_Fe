import { styled } from "@/../styled-system/jsx";

export const ListContainer = styled("div", {
	base: {
		marginTop: "47px",
		"&:nth-of-type(1)": {
			marginTop: "0",
		},
	},
});

export const ListTitleContainer = styled("div", {
	base: {
		base: {
			display: "flex",
			alignItems: "center",
			marginTop: "47px",
			"&:nth-of-type(1)": {
				marginTop: "0",
			},
		},
	},
});

export const BlackList = styled("ul", {
	base: {
		maxWidth: "235px",
		fontSize: "14px",
		fontWeight: "400",
		display: "flex",
		flexDirection: "column",
		marginTop: "8px",
	},
});

export const List = styled("li", {
	base: {
		width: "100%",
		cursor: "pointer",
		padding: "10px 20px",
		backgroundColor: "#FFFFFF",
		marginBottom: "4px",
		textStyle: "sm",

		"&.active": {
			border: "1px solid black",
		},
		"&:last-of-type": {
			marginBottom: "0",
		},
	},
});

export const Arrow = styled("div", {
	base: {
		width: "24px",
		height: "24px",
		display: "flex",
		alignItems: "center",
	},
});
