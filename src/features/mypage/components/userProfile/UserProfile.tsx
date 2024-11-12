import { styled } from "@/../styled-system/jsx";

export default function UserProfile() {
	return (
		<UserProfileContainer>
			<UserProfileImageContainer>
				<UserImage src="/img/images.png" alt="사용자 프로필 사진" />
			</UserProfileImageContainer>
			<UserName>유저 닉네임</UserName>
		</UserProfileContainer>
	);
}

const UserProfileContainer = styled("div", {
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

const UserProfileImageContainer = styled("figure", {
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

const UserImage = styled("img", {
	base: {
		width: "100%",
		height: "100%",
	},
});

const UserName = styled("p", {
	base: {
		textStyle: "xl",
	},
});
