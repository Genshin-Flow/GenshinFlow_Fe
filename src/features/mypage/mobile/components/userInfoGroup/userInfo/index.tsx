import MypageText from "@/features/mypage/mobile/components/mypageText";
import UserInfoBox from "@/features/mypage/mobile/components/userInfoGroup/userInfoBox";

export default function UserInfo() {
	return (
		<>
			<MypageText mt="mt40">유저 정보</MypageText>
			<UserInfoBox />
		</>
	);
}
