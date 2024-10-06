import { styled } from "@/../styled-system/jsx";
import UserProfile from "@/features/mypage/mobile/components/userProfile/UserProfile";
import AccountInfo from "@/features/mypage/mobile/components/accountInfo/AccountInfo";
import UserInfo from "@/features/mypage/mobile/components/userInfo/UserInfo";
export default function MobileMypage() {
	// 헤더 제작되면 추가
	return (
		<MyPageContainer className="MyPage">
			<UserProfile />
			<AccountInfo />
			<UserInfo />
		</MyPageContainer>
	);
}

const MyPageContainer = styled("article", {
	base: {
		width: "100%",
		height: "100%",
	},
});
