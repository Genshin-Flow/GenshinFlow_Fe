import { styled } from "@/../styled-system/jsx";

export const UserProfileContainer = styled("div", {
	base: {
		paddingTop: "1px",
	},
});

export const UserProfileImageContainer = styled("div", {
	base: {
		width: "160px",
		height: "160px",
		borderRadius: "50%",
		overflow: "hidden",
		margin: "0 auto",
		marginTop: "39px",
	},
});

export const UserProfileImage = styled("img", {
	base: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
});
