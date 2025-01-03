import { styled } from "@/../styled-system/jsx";

export const ButtonContainer = styled("div", {
	base: {
		display: "flex",
		columnGap: "16px",
		textStyle: "xs",
		alignItems: "center",
		"& a": {
			textWrap: "nowrap",
			cursor: "pointer",
		},
	},
});

export const DeleteButton = styled("button", {
	base: {
		textWrap: "nowrap",
		cursor: "pointer",
	},
});

export const BetweenButtonBox = styled("div", {
	base: {
		width: "1px",
		height: "100%",
		backgroundColor: "{colors.gray.04}",
		maxHeight: "16px",
	},
});
