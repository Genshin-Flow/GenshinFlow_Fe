import UserProfile from "@/features/mypage/components/userInfoGroup/userProfile";
import AccountInfo from "@/features/mypage/mobile/components/accoundGroup/accountInfo";
import UserInfo from "@/features/mypage/components/userInfoGroup/userInfo";
import History from "@/features/mypage/components/historyGroup/historyInfo";
import Link from "next/link";
import { MyPageContainer, ExitButton } from "./style";
export default function MobileMypage() {
	// 헤더 제작되면 추가

	return (
		<MyPageContainer className="MyPage">
			<ExitButton>
				<Link href={"/"}>
					<img src="/svgs/exit.svg" alt="메인페이지로 이동" />
				</Link>
			</ExitButton>
			<UserProfile />
			<AccountInfo />
			<UserInfo />
			<History />
		</MyPageContainer>
	);
}
