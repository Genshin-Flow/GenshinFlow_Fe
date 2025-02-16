import { styled } from "@/../styled-system/jsx";

export const HistoryContainer = styled("article", {
	base: {
		width: "100%",
		marginTop: "25px",
		borderRadius: "8px",
		padding: "0 20px",
		overflow: "hidden",
	},
});

export const HistoryTitle = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		textStyle: "lg",
		marginTop: "40px",
	},
});

export const StarBox = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
	},
});

export const Star = styled("img", {
	base: {
		width: "40px",
		height: "40px",
		marginRight: "20px",
	},
});

export const ListItemContainer = styled("ul", {
	base: {
		width: "100%",
		height: "40%",
		maxHeight: "290px",
		overflow: "auto",
		backgroundColor: "#FCFCFC",
		borderRadius: "8px",
		border: "1px solid #E0E0E0",
	},
});

export const Item = styled("li", {
	base: {
		width: "100%",
		height: "57px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		overflow: "hidden",
		padding: "0 20px",
		borderBottom: "1px solid {colors.gray.04}",
		"&:last-of-type": {
			borderBottom: "0",
		},
	},
});

export const ItemLeftBox = styled("div", {
	base: {
		display: "flex",
		columnGap: "20px",
		marginRight: "auto",
	},
});

export const ItemRightBox = styled("p", {
	base: {
		width: "200px",
		textAlign: "right",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
});

export const NextScrollBar = styled("div", {
	base: {
		width: "100%",
		height: "1px",
	},
});
