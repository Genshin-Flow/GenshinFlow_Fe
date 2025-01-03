import { styled } from "@/../styled-system/jsx";

export const InfoContainer = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		marginTop: "20px",
		position: "relative",
		"&:first-of-type": {
			marginTop: "0px",
		},
	},
});

export const InfoTitle = styled("div", {
	base: {
		minWidth: "60px",
		textStyle: "md",
		color: "gray.04",
	},
});

export const InfoBody = styled("div", {
	base: {
		marginLeft: "40px",
		textStyle: "md",
	},
});

export const PasswordChange = styled("button", {
	base: {
		width: "57px",
		height: "33px",
		position: "absolute",
		top: "0",
		right: "0",
		transform: "translateY(-25%)",
		border: "1px solid {colors.gray.05}",
		cursor: "pointer",
		backgroundColor: "{colors.gray.06}",

		"&:hover": {
			backgroundColor: "{colors.primary.02}",
		},
	},
});
