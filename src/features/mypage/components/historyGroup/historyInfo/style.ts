import { styled } from "@/../styled-system/jsx";

export const HistoryContainer = styled("article", {
	base: {
		width: "100%",
		position: "relative",
	},
});

export const HistoryTitleContainer = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		marginTop: "40px",
	},
});

export const HistoryListContainer = styled("ul", {
	base: {
		width: "100%",
		textStyle: "md",
		padding: "0 12px",
		minHeight: "50px",
		maxHeight: "200px",
		overflow: "hidden",
	},
});

export const HistoryList = styled("li", {
	base: {
		width: "100%",
		minHeight: "51px",
		display: "flex",
		justifyContent: "space-between",
		columnGap: "20px",
		alignItems: "center",
		marginTop: "20px",
		"&:first-of-type": {
			marginTop: "0px",
		},
	},
});

export const ListDataContainer = styled("p", {
	base: {
		width: "85%",
		display: "flex",
		borderBottom: "1px solid {colors.gray.01}",
	},
});

export const Date = styled("span", {
	base: {
		flexGrow: "1",
	},
});

export const Quest = styled("span", {
	base: {
		flexGrow: "1",
	},
});

export const Desc = styled("span", {
	base: {
		maxWidth: "150px",
		overflow: "hidden",
		textWrap: "nowrap",
		flexGrow: "1",
	},
});
