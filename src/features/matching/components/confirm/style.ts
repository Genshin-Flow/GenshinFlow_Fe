import { styled } from "@/../styled-system/jsx";
export const ConfirmContainer = styled("div", {
	base: {
		width: "100%",
		minWidth: "280px",
		maxWidth: "480px",
	},
	variants: {
		isMobile: {
			true: {
				minWidth: "150px",
				maxWidth: "280px",
			},
		},
	},
});

export const ConfirmHeader = styled("div", {
	base: {
		width: "100%",
		minHeight: "45px",
		maxHeight: "45px",
		backgroundColor: "primary.01",
		color: "#fff",
		display: "flex",
		alignItems: "center",
		textStyle: "md",
		padding: "0 15px",
	},
});

export const ConfirmBody = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		background: "#fff",
		overflow: "hidden",
		padding: "45px 30px",
	},
});

export const ConfirmBodyText = styled("h2", {
	base: {
		width: "100%",
		textStyle: "md",
	},
});

export const ConfirmButtonContainer = styled("div", {
	base: {
		width: "100%",
		columnGap: "10px",
		display: "flex",
		justifyContent: "space-between",
		marginTop: "20px",
	},
});

export const ContentContainer = styled("div", {
	base: {
		width: "100%",
		margin: "0 auto",
		borderRadius: "6px",
		backgroundColor: "gray.05",
		padding: "8px 12px",
		marginTop: "25px",
	},
});

export const Content = styled("p", {
	base: {
		fontSize: "11px",
	},
});

export const ConfirmPasswordContainer = styled("div", {
	base: {
		width: "100%",
	},
});

export const ConfirmPasswordInput = styled("input", {
	base: {
		display: "block",
		width: "100%",
		padding: "9px 10px",
		marginTop: "30px",
		border: "1px solid black",
		fontSize: "10px",
		fontWeight: "700",

		"&::placeholder": {
			fontSize: "10px",
			letterSpacing: "1px",
		},
	},
});

export const WaringText = styled("p", {
	base: {
		fontSize: "11px",
		fontWeight: "bold",
		color: "secondary.01",
		marginTop: "15px",
	},
});

export const ConfirmButton = styled("button", {
	base: {
		flex: "1 1 auto",
		maxWidth: "130px",
		borderRadius: "15px",
		overflow: "hidden",
		padding: "6px 0",
		cursor: "pointer",
		color: "#fff",
	},
	variants: {
		buttonState: {
			agree: {
				backgroundColor: "secondary.01",
			},
			cancel: {
				backgroundColor: "gray.04",
			},
		},
	},
});
