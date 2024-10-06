import { styled } from "@/../styled-system/jsx";
import History from "@/features/mypage/components/history/History";
import UserInfo from "@/features/mypage/components/userInfo/UserInfo";
import UserProfile from "@/features/mypage/components/userProfile/UserProfile";
import Exit from "@/features/mypage/components/exitButton/Exit";

export default function page() {
	return (
		<>
			<MainBackgroundImage src="/img/mainImg.png" />
			<BluerBackground className="active">
				<MyPageContainer>
					<Exit />
					<UserProfile />
					<PaddingBox>
						<UserInfo />
						<History />
					</PaddingBox>
				</MyPageContainer>
			</BluerBackground>
		</>
	);
}

const MainBackgroundImage = styled("img", {
	base: {
		width: "100vw",
		height: "100vh",
		overflow: "hidden",
		position: "relative",
	},
});

const BluerBackground = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		position: "absolute",
		overflow: "hidden",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		backgroundColor: "	rgba(58, 58, 58,0.2)",
		opacity: "0",
		transition: "0.3s opacity",
		"&.active": {
			opacity: "1",
		},
		"&.active > section": {
			transform: "translateX(0)",
		},
	},
});

const MyPageContainer = styled("section", {
	base: {
		width: "100%",
		height: "100%",
		position: "relative",
		marginLeft: "auto",
		maxWidth: "550px",
		backgroundColor: "primary.04",
		borderRadius: "20px 0 0 20px",
		transition: "0.3s all",
		transform: "translateX(100%)",
	},
});

const PaddingBox = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		padding: "30px 32px",
	},
});
