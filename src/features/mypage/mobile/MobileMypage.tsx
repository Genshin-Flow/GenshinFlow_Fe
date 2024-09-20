import { styled } from "@/../styled-system/jsx";
import UserProfile from "@/features/mypage/components/userProfile/UserProfile";
import AccountInfo from "@/features/mypage/components/accountInfo/AccountInfo";
import UserInfo from "@/features/mypage/components/userInfo/UserInfo";

export default function MobileMypage() {
	// 헤더 제작되면 추가
	return (
		<MyPageContainer>
			<UserProfile />
			<AccountInfo />
			<UserInfo />
		</MyPageContainer>
	);
}

const MyPageContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		backgroundColor: "primary.02",
		padding: "95px 20px",
	},
});
