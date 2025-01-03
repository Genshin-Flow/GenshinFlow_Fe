import { styled } from "@/../styled-system/jsx";

export const InfoItem = styled("div", {
	base: {
		width: "100%",
		height: "33px",
		display: "flex",
		alignItems: "center",
		textStyle: "md",
		marginTop: "12px",

		"&:first-of-type": {
			marginTop: "0",
		},
	},
});

export const ItemBody = styled("p", {
	base: {
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
});

export const ItemName = styled("p", {
	base: {
		width: "80px",
		color: "gray.04",
	},
});
