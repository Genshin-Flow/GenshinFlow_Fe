import MypageText from "@/features/mypage/mobile/components/mypageText";
import {
	UserProfileContainer,
	UserProfileImageContainer,
	UserProfileImage,
} from "./style";

export default function UserProfile() {
	return (
		<UserProfileContainer>
			<UserProfileImageContainer>
				<UserProfileImage src="/images/images.png" alt="프로필 이미지" />
			</UserProfileImageContainer>
			<MypageText mt="mt20" align="center">
				유저닉네임
			</MypageText>
		</UserProfileContainer>
	);
}
