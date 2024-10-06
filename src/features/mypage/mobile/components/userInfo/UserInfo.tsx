import MypageText from "@/features/mypage/mobile/components/mypageText/MypageText";
import UserInfoBox from "@/features/mypage/mobile/components/userInfo/UserInfoBox";

export default function UserInfo() {
	return (
		<>
			<MypageText mt="mt40">유저 정보</MypageText>
			<UserInfoBox />
		</>
	);
}
