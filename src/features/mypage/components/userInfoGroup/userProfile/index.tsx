import {
	UserProfileContainer,
	UserProfileImageContainer,
	UserImage,
	UserName,
} from "./style";

export default function UserProfile() {
	return (
		<UserProfileContainer>
			<UserProfileImageContainer>
				<UserImage src="/images/images.png" alt="사용자 프로필 사진" />
			</UserProfileImageContainer>
			<UserName>유저 닉네임</UserName>
		</UserProfileContainer>
	);
}
