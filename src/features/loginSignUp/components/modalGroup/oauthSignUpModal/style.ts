import { styled } from "@/../styled-system/jsx";

export const OauthSignUpModalContainer = styled("div", {
	base: {
		width: "420px",
		padding: "20px",
		backgroundColor: "#fff",
		borderRadius: "10px",
	},
});

export const OauthSignUpTitle = styled("h2", {
	base: {
		fontWeight: "700",
		marginBottom: "2px",
		textStyle: "lg",
	},
});

export const OauthSubTitle = styled("p", {
	base: {
		fontWeight: "700",
		marginBottom: "15px",
		textStyle: "xs",
		color: "gray.04",
	},
});

export const OauthSignUpUidInput = styled("input", {
	base: {
		width: "100%",
		borderRadius: "10px",
		height: "40px",
		border: "1px solid {colors.gray.01}",
		padding: "0 10px",
	},
});

export const StatusText = styled("p", {
	base: {
		textStyle: "xs",
		marginTop: "5px",
		fontWeight: "700",
		transition: "color 0.4s ease",
	},
	variants: {
		status: {
			sameAccount: {
				color: "secondary.01",
			},
			sameUid: {
				color: "secondary.01",
			},
			create: {
				color: "green",
			},
			wait: {
				color: "gray.01",
			},
			error: {
				color: "red",
			},
		},
	},
});

export const OauthSubmitButton = styled("button", {
	base: {
		minWidth: "60px",
		textStyle: "xs",
		backgroundColor: "primary.01",
		padding: "5px 15px",
		marginTop: "10px",
		cursor: "pointer",
		color: "#fff",
		transition: "all 0.3s ease",
		"&:hover": {
			backgroundColor: "primary.04",
			color: "black",
		},
	},
});
