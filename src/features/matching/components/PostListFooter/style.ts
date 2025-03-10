import { styled } from "@/../styled-system/jsx";

export const PostListFooterBox = styled("div", {
	base: {
		width: "100%",
		height: "28px",
		backgroundColor: "primary.01",
		position: "relative",

		"&::after": {
			content: "''",
			position: "absolute",
			left: "0.2%",
			top: "10%",
			width: "99.7%",
			height: "80%",
			backgroundColor: "primary.01",
			border: "2px solid {colors.gray.02}",
		},
	},
});
