import { styled } from "@/../styled-system/jsx";

export const UserInfoContainer = styled("div", {
	base: {
		height: "100%",
		display: "flex",
		alignItems: "center",
		fontSize: "14px",
		fontWeight: "400",
		padding: "16.5px 10px",
	},
});

export const SvgAndOptionGroup = styled("div", {
	base: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		cursor: "pointer",

		"& > p": {
			pointerEvents: "none",
			marginLeft: "8px",
		},
		"& > img": {
			pointerEvents: "none",
		},

		"&.active > div": {
			display: "block",
		},
	},
});
