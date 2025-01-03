import { styled } from "@/../styled-system/jsx";

export const TableHeaderContainer = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "30px",
	},
});

export const Title = styled("h2", {
	base: {
		textStyle: "xl",
	},
});
export const SearchContainer = styled("div", {
	base: {
		// 기본 스크롤 width 값 만큼 제거 추후 스타일 변경시 width와 marginRight를 변경 필요
		position: "relative",
		height: "40px",
		padding: "0px 14px",
		display: "flex",
		alignItems: "center",
		border: "1px solid black",
		borderRadius: "4px",
	},
});

export const SearchIconBox = styled("button", {
	base: {
		width: "32px",
		height: "32px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	},
});

export const SearchInputBox = styled("input", {
	// p
	base: {
		width: "100%",
		display: "block",
		marginLeft: "8px",
		padding: "3px 6px",
		boxSizing: "border-box",
		fontSize: "14px",
		fontWeight: "400",
	},
});

export const SearchResultBox = styled("ul", {
	base: {
		width: "100%",
		minHeight: "300px",
		overflow: "auto",
		padding: "10px 0",
		position: "absolute",
		top: "120%",
		left: "0",
		backgroundColor: "#fff",
		zIndex: "10",
	},
});

export const SearchResultList = styled("li", {
	base: {
		width: "100%",
		padding: "12px 10px",
		cursor: "pointer",

		"&:hover": {
			backgroundColor: "#f1f1f1",
		},
	},
});
