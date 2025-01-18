import { styled } from "@/../styled-system/jsx";

export const AboutPaddingContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		padding: "40px",
	},
});

export const AboutContainer = styled("article", {
	base: {
		width: "100%",
		height: "100%",
		padding: "40px",
		backgroundColor: "#FFFFFF",
	},
});

export const Title = styled("h2", {
	base: {
		display: "inline-block",
		position: "relative",
		textStyle: "xl",
		marginBottom: "20px",
		"&::after": {
			content: "''",
			position: "absolute",
			bottom: "-4px",
			left: "0",
			width: "100%",
			height: "3px",
			backgroundColor: "primary.06",
		},
	},
});

export const ListUl = styled("ul", {
	base: {
		listStyle: "inside",
		"& > ul": {
			marginLeft: "30px",
		},

		"& li": {
			opacity: "0.6",
			marginBottom: "6px",
		},
	},
});
