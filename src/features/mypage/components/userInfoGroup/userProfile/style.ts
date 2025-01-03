import { styled } from "@/../styled-system/jsx";

export const UserProfileContainer = styled("div", {
	base: {
		width: "100%",
		height: "300px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		background: "url('/svgs/waterEmblem.svg') no-repeat",
		backgroundPosition: "80%",
		backgroundSize: "contain",
	},
});

export const UserProfileImageContainer = styled("figure", {
	base: {
		width: "160px",
		height: "160px",
		overflow: "hidden",
		borderRadius: "50%",
		border: "1px solid {colors.gray.04}",
		outline: "3px solid {colors.primary.01}",
		marginBottom: "15px",
	},
});

export const UserImage = styled("img", {
	base: {
		width: "100%",
		height: "100%",
	},
});

export const UserName = styled("p", {
	base: {
		textStyle: "xl",
	},
});
