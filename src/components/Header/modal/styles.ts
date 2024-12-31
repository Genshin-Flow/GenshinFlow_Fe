import { styled } from "@/../styled-system/jsx";

export const MobilePopUpContainer = styled("article", {
	base: {
		width: "201px",
		height: "254px",
		padding: "8px 10px",
		position: "absolute",
		left: "-180px",
		top: "20px",
		borderRadius: "10px",
		backgroundColor: "primary.02",
		zIndex: "20",
	},
});

export const MobileLinkContainer = styled("ul", {
	base: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "10px",
		backgroundColor: "primary.04",

		"& > li": {
			width: "100%",
			height: "34px",
			flexGrow: "1",
		},

		"& > li > a": {
			display: "flex",
			width: "100%",
			height: "100%",
			justifyContent: "center",
			alignItems: "center",
		},
	},
});

export const MobileAboutContainer = styled("article", {
	base: {
		width: "100%",
		maxWidth: "820px",
		minHeight: "521px",
		backgroundColor: "primary.04",
		padding: "30px",
		margin: "0 20px",
	},
});

export const MobileTextContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		minHeight: "521px",
		backgroundColor: "#fff",
		padding: "40px",
		opacity: "0.8",
	},
});

export const TextTitle = styled("h3", {
	base: {
		display: "inline-block",
		textStyle: "lg",
		fontWeight: "bold",
		marginBottom: "20px",
		borderBottom: "3px solid {colors.primary.06}",
	},
});
export const TextListUl = styled("ul", {
	base: {
		listStyle: "inside",

		"& ul": {
			marginLeft: "26px",
		},
	},
});

export const TextListLi = styled("li", {
	base: {
		width: "100%",
		fontSize: "16px",
		fontWeight: "400",

		"& > a": {
			display: "block",
			width: "100%",
			height: "100%",
		},
	},
});
