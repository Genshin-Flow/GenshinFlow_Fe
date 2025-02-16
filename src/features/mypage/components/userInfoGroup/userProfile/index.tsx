import {
	UserProfileContainer,
	UserProfileImageContainer,
	UserImage,
	UserName,
} from "./style";
import userStore from "@/stores/userStore";

export default function UserProfile() {
	const { image } = userStore();
	return (
		<UserProfileContainer>
			<UserProfileImageContainer>
				<UserImage src={`${image}`} alt="사용자 프로필 사진" />
			</UserProfileImageContainer>
			<UserName>유저 닉네임</UserName>
		</UserProfileContainer>
	);
}
