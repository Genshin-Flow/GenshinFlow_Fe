import { styled } from "@/../styled-system/jsx";

export const MailAuthForm = styled("form", {
	base: {
		width: "100%",
		"& > div > input": {
			backgroundColor: "primary.04",
		},
	},
});

export const InputStyle = styled("input", {
	base: {
		display: "block",
		// 넓이 제한이 필요하다 판단 되면
		// maxWidth: "350px",
		width: "100%",
		height: "41px",
		backgroundColor: "primary.04",
		borderRadius: "8px",
		padding: "12px",
		boxSizing: "border-box",
	},
	variants: {
		marginTop: {
			mt40: {
				marginTop: "40px",
			},
			mt20: {
				marginTop: "20px",
			},
		},
		authInput: {
			authInput: {
				paddingRight: "91px",
			},
		},
	},
});

export const ChangeButtonContainer = styled("div", {
	base: {
		width: "100%",
		// 넓이 제한이 필요하다 판단 되면
		// maxWidth: "390px",
		padding: "0 20px",
		left: "0",
		position: "absolute",
		bottom: "54px",
	},
});
