import { styled } from "@/../styled-system/jsx";

export const UserInfoContainer = styled("div", {
	base: {
		minWidth: "350px",
		position: "absolute",
		left: "30%",
		top: "50%",
		transform: "translate(-50%,-50%)",
		padding: "20px",
		border: "1px solid #D3D3D3",
		borderRadius: "16px",
		display: "inline-flex",
		flexDirection: "column",
		backgroundColor: "#fff",
		textStyle: "md",
		cursor: "move",

		"& > div": {
			marginBottom: "19px",
		},
	},

	variants: {
		boxOption: {
			imgBox: {},
			reporterBox: {
				left: "52%",
			},
			reportTargetBox: {
				left: "30%",
			},
		},
	},
});

export const InfoTitle = styled("p", {
	base: {
		textStyle: "sm",
		marginBottom: "12px",
	},
});

export const ResetPositionButton = styled("button", {
	base: {
		position: "absolute",
		top: "7%",
		right: "15.7%",
		cursor: "pointer",
		textStyle: "sm",
	},
});

export const CancelButton = styled("button", {
	base: {
		position: "absolute",
		top: "5%",
		right: "5.7%",
		cursor: "pointer",
		fontSize: "20px",
	},
});

export const UserInfoTitle = styled("p", {
	base: {
		color: "gray.04",
	},
});

export const UserReportContainer = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		columnGap: "20px",
		marginBottom: "19px",
	},
});

export const UserInfoItem = styled("div", {
	base: {
		display: "inline-flex",
		alignItems: "center",
		borderBottom: "1px solid {colors.gray.04}",

		"&:last-of-type": {
			marginBottom: "0px",
		},
	},
});

export const UserInfoBody = styled("span", {
	base: {
		marginLeft: "25px",
	},
});
