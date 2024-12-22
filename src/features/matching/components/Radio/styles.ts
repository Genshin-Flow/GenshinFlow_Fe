import { styled } from "@/../styled-system/jsx";

export const RadioLabel = styled("label", {
	base: {
		display: "flex",
		alignItems: "center",
		fontSize: "sm",
		fontWeight: "medium",
		color: "#000000",
		cursor: "pointer",
	},
});

export const RadioInput = styled("input", {
	base: {
		position: "absolute",
		opacity: 0,
		width: 0,
		height: 0,
		"& + span": {
			display: "inline-block",
			width: "20px",
			height: "20px",
			background: "url('/svgs/unchecked.svg') no-repeat center center",
			backgroundSize: "contain",
		},
		"&:checked + span": {
			background: "url('/svgs/checked.svg') no-repeat center center",
			backgroundSize: "contain",
		},
	},
});

export const RadioSpan = styled("span", {
	base: {
		marginRight: "11px",
	},
});

export const AttachButtonContainer = styled("div", {
	base: {
		borderRadius: "4px",
		display: "flex",
		alignItems: "center",
	},
});

export const AttachInput = styled("input", {
	base: {
		display: "none",
	},
});

export const AttachButton = styled("label", {
	base: {
		width: "30px",
		height: "30px",
		display: "block",
		color: "#fff",
		cursor: "pointer",
		padding: "8px",
		backgroundColor: "gray.06",

		"&:hover": {
			backgroundColor: "gray.07",
		},

		"& img": {
			width: "100%",
			height: "100%",
		},
	},
});

export const AttachButtonText = styled("span", {
	base: {
		textStyle: "sm",
		marginLeft: "10px",
		color: "gray.03",
	},
});

export const PreviewImageContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		display: "flex",
		marginLeft: "20px",
		gap: "10px",
	},
});

export const MoreImagePreview = styled("div", {
	base: {
		width: "40px",
		height: "40px",
		backgroundColor: "gray.06",
		color: "black",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textStyle: "lg",
	},
});
