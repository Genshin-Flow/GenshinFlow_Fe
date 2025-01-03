import { styled } from "@/../styled-system/jsx";

export const DefaultInfoContainer = styled("div", {
	base: {
		position: "absolute",
		top: "77.5px",
		left: "50%",
		transform: "translateX(-50%)",
	},

	variants: {
		logoTop: {
			top60: {
				top: "60px",
			},
			top49: {
				top: "49px",
			},
		},
		mobile: {
			top105: {
				top: "105px",
			},
		},
	},
});

export const LogoContainer = styled("div", {
	base: {
		width: "274px",
	},
	variants: {
		platform: {
			mobile: {
				width: "184.26px",
				height: "84px",
			},
		},
	},
});

export const LogoSvg = styled("img", {
	base: {
		display: "block",
		width: "100%",
		height: "100%",
	},
});

export const LoginText = styled("p", {
	base: {
		width: "100%",
		height: "29px",
		textAlign: "center",
		fontSize: "xl",
		fontWeight: "medium",
	},
	variants: {
		platform: {
			mobile: {
				fontSize: "md",
				fontWeight: "medium",
			},
		},
	},
});
