import { styled } from "@/../styled-system/jsx";

export const ButtonStyle = styled("button", {
	base: {
		width: "100%",
		height: "40px",
		borderRadius: "98px",
		textStyle: "xl",
		cursor: "pointer",
		transition: "0.5s background-color",
	},
	variants: {
		buttonType: {
			changePage: {
				borderRadius: "0",
				backgroundColor: "gray.06",
				color: "black",
				textStyle: "md",
			},
		},
		marginBottom: {
			mb12: {
				marginBottom: "12px",
			},
			mb40: {
				marginBottom: "40px",
			},
			mb48: {
				marginBottom: "48px",
			},
		},
		buttonState: {
			deActive: {
				backgroundColor: "gray.05",
				color: "#fff",
				pointerEvents: "none",
			},
			lock: {
				backgroundColor: "gray.05",
				color: "#fff",
				pointerEvents: "none",
			},
			login: {
				color: "#fff",
				backgroundColor: "primary.01",

				"&:hover": {
					backgroundColor: "gray.05",
					color: "black",
				},
			},
		},
	},
});
