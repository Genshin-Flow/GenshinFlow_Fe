import { styled } from "@/../styled-system/jsx";

export const PrivacyPolicyModalContainer = styled("div", {
	base: {
		width: "100vw",
		height: "100vh",
		position: "absolute",
		bg: "gray",
		zIndex: 20,
		backgroundColor: "rgba(255,255,255,0.7)",
	},
});

export const PrivacyPolicyModal = styled("article", {
	base: {
		width: "100%",
		height: "100%",
		maxWidth: "880px",
		maxHeight: "672px",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		backgroundColor: "#fff",
		borderRadius: "20px",
		padding: "20px",
		zIndex: 20,
	},
});

export const ContinueText = styled("span", {
	base: {
		position: "absolute",
		bottom: "3%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		pointerEvents: "none",
	},
});

export const ModalTitle = styled("span", {
	base: {
		textStyle: "xl",
		borderBottom: "2px solid black",
	},
});

export const TextBody = styled("div", {
	base: {
		height: "90%",
		padding: "10px",
		border: "1px solid {colors.gray.05}",
		marginTop: "20px",
		boxSizing: "border-box",
		textStyle: "xs",
		lineHeight: 1.5,
	},
});

export const Pre = styled("pre", {
	base: {
		textWrap: "wrap",
	},
});
