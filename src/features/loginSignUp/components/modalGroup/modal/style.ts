import { styled } from "@/../styled-system/jsx";

export const ModalContainer = styled("div", {
	base: {
		width: "100%",
		maxWidth: "325px",
		position: "absolute",
		top: "46%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		textStyle: "md",
		boxShadow: "0 1px 15.2px rgb(0, 0, 0,0.25)",
		padding: "15px 40px",
		textAlign: "center",
		bg: "#ffffff",
		zIndex: "20",
	},
	variants: {
		platform: {
			pc: {
				borderRadius: "100px",
			},
			mobile: {
				maxWidth: "285px",
				borderRadius: "8px",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});

export const ModalText = styled("span", {
	base: {
		display: "block",
		wordBreak: "keep-all",
	},
});
