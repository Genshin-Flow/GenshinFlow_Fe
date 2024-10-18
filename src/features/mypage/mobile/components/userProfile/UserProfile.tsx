import { styled } from "@/../styled-system/jsx";
import MypageText from "@/features/mypage/mobile/components/mypageText/MypageText";

export default function UserProfile() {
	return (
		<UserProfileContainer>
			<UserProfileImageContainer>
				<UserProfileImage src="/img/images.png" alt="프로필 이미지" />
			</UserProfileImageContainer>
			<MypageText mt="mt20" align="center">
				유저닉네임
			</MypageText>
		</UserProfileContainer>
	);
}

const UserProfileContainer = styled("div", {
	base: {
		paddingTop: "1px",
	},
});

const UserProfileImageContainer = styled("div", {
	base: {
		width: "160px",
		height: "160px",
		borderRadius: "50%",
		overflow: "hidden",
		margin: "0 auto",
		marginTop: "39px",
	},
});

const UserProfileImage = styled("img", {
	base: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
});
