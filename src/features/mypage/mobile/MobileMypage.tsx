import { styled } from "@/../styled-system/jsx";
import UserProfile from "@/features/mypage/components/userProfile/UserProfile";
import AccountInfo from "@/features/mypage/components/accountInfo/AccountInfo";
import UserInfo from "@/features/mypage/components/userInfo/UserInfo";
import History from "@/features/mypage/components/historyInfo/History";
import Link from "next/link";
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

const MyPageContainer = styled("article", {
	base: {
		width: "100%",
		height: "100%",
		position: "relative",
	},
});

const ExitButton = styled("figure", {
	base: {
		position: "absolute",
		top: "16px",
		right: "20px",
	},
});
