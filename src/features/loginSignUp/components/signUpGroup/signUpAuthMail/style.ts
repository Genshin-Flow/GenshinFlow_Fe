import { styled } from "@/../styled-system/jsx";

export const AuthMailContainer = styled("div", {
	base: {
		width: "100%",
		position: "relative",
	},

	variants: {
		variant: {
			postCode: {
				"& .mailAuthCount": {
					pointerEvents: "none",
					display: "block",
				},
				"& .postMailAuth": {
					pointerEvents: "none",
					color: "gray.03",
				},
			},
		},
		marginBottom: {
			mb12: {
				marginBottom: "12px",
			},
			mb20: {
				marginBottom: "20px",
			},
		},
	},
});

export const SendMailCount = styled("span", {
	base: {
		textStyle: "sm",
		position: "absolute",
		top: "50%",
		right: "30px",
		transform: "translateY(-50%)",
		display: "none",
		color: "gray.04",
	},

	variants: {
		platform: {
			mobile: {
				right: "88px",
			},
		},
	},
});

export const SendMailButton = styled("button", {
	base: {
		textStyle: "md",
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		right: "30px",
		cursor: "pointer",
		color: "black",
	},

	variants: {
		variant: {
			active: {
				color: "gray.04",
			},
		},
		platform: {
			mobile: {
				right: "12px",
				fontSize: "12px",
			},
		},
	},
});
