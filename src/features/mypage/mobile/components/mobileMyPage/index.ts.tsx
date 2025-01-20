import UserProfile from "@/features/mypage/components/userInfoGroup/userProfile";
import AccountInfo from "@/features/mypage/mobile/components/accoundGroup/accountInfo";
import UserInfo from "@/features/mypage/components/userInfoGroup/userInfo";
import History from "@/features/mypage/components/historyGroup/historyInfo";
import { MyPageContainer } from "./style";
import ExitButton from "@/features/mypage/mobile/components/mobileExitButton";
export default function MobileMypage() {
	// 헤더 제작되면 추가

	return (
		<MyPageContainer className="MyPage">
			<ExitButton />
			<UserProfile />
			<AccountInfo />
			<UserInfo />
			<History />
		</MyPageContainer>
	);
}
